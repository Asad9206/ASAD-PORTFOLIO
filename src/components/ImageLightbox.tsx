import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface LightboxImage {
  path: string;
  title: string;
  subtitle?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Reset zoom when image changes or modal opens
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && onNavigate && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.3, 3.5));
  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.3, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-white/95 backdrop-blur-xl border border-purple-200/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="w-full flex items-center justify-between px-5 py-3.5 border-b border-purple-100 bg-purple-50/50">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-800 line-clamp-1">
              {currentImage.title}
            </span>
            {currentImage.subtitle && (
              <span className="text-xs text-purple-700/80">
                {currentImage.subtitle}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 1}
              className="p-1.5 rounded-lg text-slate-600 hover:text-purple-700 hover:bg-purple-100 disabled:opacity-40 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-500 font-mono w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={scale >= 3.5}
              className="p-1.5 rounded-lg text-slate-600 hover:text-purple-700 hover:bg-purple-100 disabled:opacity-40 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 rounded-lg text-slate-600 hover:text-purple-700 hover:bg-purple-100 transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 ml-2 rounded-lg text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Display */}
        <div
          className="relative w-full h-[65vh] sm:h-[72vh] flex items-center justify-center p-4 overflow-hidden bg-slate-50/50 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img
            src={currentImage.path}
            alt={currentImage.title}
            className="max-h-full max-w-full object-contain transition-transform duration-100 ease-out drop-shadow-md rounded"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
            draggable={false}
          />

          {/* Navigation Arrows */}
          {images.length > 1 && onNavigate && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((currentIndex - 1 + images.length) % images.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200 text-slate-700 hover:text-purple-700 hover:bg-white shadow-lg transition-all"
                title="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((currentIndex + 1) % images.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200 text-slate-700 hover:text-purple-700 hover:bg-white shadow-lg transition-all"
                title="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Footer Bar */}
        <div className="w-full flex items-center justify-between px-5 py-2.5 border-t border-purple-100 bg-white text-xs text-slate-500">
          <span>
            {images.length > 1
              ? `Image ${currentIndex + 1} of ${images.length}`
              : 'Official Credential Asset'}
          </span>
          <span className="hidden sm:inline">
            Scroll or use +/- to zoom • Drag to pan • Press Esc to close
          </span>
        </div>
      </div>
    </div>
  );
};
