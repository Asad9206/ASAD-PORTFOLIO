import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileStats } from './components/ProfileStats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ImageLightbox, LightboxImage } from './components/ImageLightbox';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: LightboxImage[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'achievements',
        'research',
        'certifications',
        'about',
        'skills',
        'experience',
        'projects',
        'education',
        'contact'
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (imagePath: string, title: string, subtitle?: string) => {
    setLightboxState({
      isOpen: true,
      images: [{ path: imagePath, title, subtitle }],
      currentIndex: 0
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative min-h-screen bg-[#faf9fd] text-slate-800 bg-subtle-mesh selection:bg-purple-200 selection:text-purple-900">
      {/* Background Subtle Grid */}
      <div className="fixed inset-0 subtle-grid pointer-events-none opacity-40 -z-20"></div>

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col space-y-10 sm:space-y-16">
        <Hero onOpenLightbox={openLightbox} />
        <ProfileStats />
        <Achievements onOpenLightbox={openLightbox} />
        <Research onOpenLightbox={openLightbox} />
        <Certifications onOpenLightbox={openLightbox} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Image Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={closeLightbox}
        onNavigate={(newIndex) =>
          setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }))
        }
      />
    </div>
  );
}

export default App;
