import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface HeroAnimationPlayerProps {
  onOpenLightbox?: (image: string, title: string) => void;
}

const TOTAL_FRAMES = 41;

export const HeroAnimationPlayer: React.FC<HeroAnimationPlayerProps> = ({ onOpenLightbox }) => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Preload all 41 workstation frames
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/assets/hero-frames/ezgif-frame-${paddedIndex}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= 5 && !isLoaded) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // Continuous seamless background playback loop (no buttons, no scrubbers)
  useEffect(() => {
    let forward = true;
    let frame = 1;

    const animate = (time: number) => {
      if (time - lastTimeRef.current > 65) {
        // ~15 fps for smooth continuous cinematic loop
        lastTimeRef.current = time;
        if (forward) {
          frame++;
          if (frame >= TOTAL_FRAMES) {
            frame = TOTAL_FRAMES;
            forward = false;
          }
        } else {
          frame--;
          if (frame <= 1) {
            frame = 1;
            forward = true;
          }
        }
        setCurrentFrame(frame);
      }
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Render current frame to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[currentFrame - 1];
    if (img && img.complete) {
      if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }
  }, [currentFrame, isLoaded]);

  const handleCanvasClick = () => {
    if (onOpenLightbox) {
      const paddedIndex = String(currentFrame).padStart(3, '0');
      onOpenLightbox(
        `/assets/hero-frames/ezgif-frame-${paddedIndex}.png`,
        `Md Asad Anwer — Engineering Studio Setup (Frame ${currentFrame}/${TOTAL_FRAMES})`
      );
    }
  };

  return (
    <div className="relative group w-full max-w-xl mx-auto">
      {/* Outer ambient frosted glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-200 via-indigo-200 to-purple-300 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition duration-700 pointer-events-none"></div>

      {/* Glass card frame without any buttons/scrubbers */}
      <div className="relative bg-white/85 backdrop-blur-xl border border-purple-200/90 rounded-2xl shadow-xl overflow-hidden p-2 sm:p-2.5">
        {/* Top window chrome header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-purple-100/80 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
            <span className="text-[11px] font-mono text-slate-500 ml-2 font-medium">
              workspace-live.stream
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
              <Sparkles className="w-3 h-3 text-purple-600 animate-pulse" />
              <span>Live Studio Motion</span>
            </span>
          </div>
        </div>

        {/* Video / Canvas viewport - automatically playing in background */}
        <div
          className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-inner cursor-pointer"
          onClick={handleCanvasClick}
          title="Click to view full resolution"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Fallback image while initial frames cache */}
          {!isLoaded && (
            <img
              src="/assets/hero-frames/ezgif-frame-001.png"
              alt="Md Asad Anwer at development workspace"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Floating glass status tag */}
          <div className="absolute bottom-3 left-3 bg-white/85 backdrop-blur-md border border-purple-200/90 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
            <div className="text-[11px] font-semibold text-slate-800">
              Md Asad Anwer <span className="text-purple-600 font-normal">• Backend Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
