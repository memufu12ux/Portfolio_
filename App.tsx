/**
 * Francis Basence — Quality Assurance Portfolio
 * Cyber-Noir Minimalist Futuristic Aesthetic (Black & Neon Purple #A020F0)
 * With Background Smooth Scroll Animation (Muted Audio Video Engine)
 */

import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Smooth Scroll-Driven Video Controller
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    let targetTime = 0;
    let currentTime = 0;
    let isUserScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;
    let rafId: number;

    const handleScrollTarget = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = Math.max(docHeight - winHeight, 1);
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      if (video.duration && !isNaN(video.duration)) {
        targetTime = progress * video.duration;
      }

      isUserScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 700);
    };

    window.addEventListener('scroll', handleScrollTarget, { passive: true });
    // Initial calculation
    handleScrollTarget();

    // Smooth linear interpolation animation loop
    const animate = () => {
      if (video.duration && !isNaN(video.duration)) {
        if (isUserScrolling) {
          // Pause native playback during scroll to let scroll scrubbing take full smooth control
          if (!video.paused) {
            video.pause();
          }
          // Damped smoothing (lerp factor 0.12 gives luxurious smooth lag and ease)
          const diff = targetTime - currentTime;
          currentTime += diff * 0.12;

          if (Math.abs(video.currentTime - currentTime) > 0.015) {
            video.currentTime = Math.min(Math.max(currentTime, 0), video.duration);
          }
        } else {
          // When idle at the very top (hero), allow gentle ambient play so it's live
          if (window.scrollY === 0) {
            if (video.paused) {
              video.play().catch(() => {});
            }
            currentTime = video.currentTime;
          } else {
            // Settled at scroll position
            const diff = targetTime - currentTime;
            if (Math.abs(diff) > 0.005) {
              currentTime += diff * 0.12;
              video.currentTime = Math.min(Math.max(currentTime, 0), video.duration);
            }
          }
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScrollTarget);
      cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Section Observer for Active Navigation
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'experience', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-[#C5C5D0] flex flex-col font-sans selection:bg-[#A020F0]/40 selection:text-white">
      {/* Background Smooth Scroll Animation Video (Muted Audio) */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          src="/background-video.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          className="w-full h-full object-cover object-[70%_center] lg:object-center"
        />
        {/* Subtle Dark Vignette: keeps hero text crisp & high-contrast on left while keeping video character clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* Fixed Cyber-Noir Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Areas (Transparent Hero lets background video show through) */}
      <main className="relative z-10 flex-1">
        {/* Hero Section (Black background removed to make video completely visible) */}
        <Hero
          onViewWork={() => handleNavigate('projects')}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Section 02: About */}
        <AboutSection />

        {/* Section 03: Services */}
        <ServicesSection />

        {/* Section 04: Experience & Competencies */}
        <ExperienceSection />

        {/* Section 05: QA Projects & Case Studies */}
        <ProjectsSection />

        {/* Section 06: Contact */}
        <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Futuristic Minimal Footer */}
      <Footer />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
