import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { soundscape } from '../utils/soundscape';
import { Maximize2, X } from 'lucide-react';

interface RipplePoint {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface SlideImageRippleProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectRatio?: string;
  objectPosition?: string;
}

export const SlideImageRipple: React.FC<SlideImageRippleProps> = ({
  src,
  alt,
  caption = 'Bhairavgarh Doctoral Archive · Rupal Joshi',
  className = '',
  aspectRatio = 'aspect-4/3',
  objectPosition = 'center',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const ripplesOverlayRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<RipplePoint[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // GSAP quickTo setters for 3D tilt
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);
  const scaleTo = useRef<gsap.QuickToFunc | null>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  // SVG turbulence frequency ref
  const turbFreqRef = useRef<{ val: number }>({ val: 0.01 });
  const turbDispRef = useRef<{ scale: number }>({ scale: 0 });
  const filterId = useRef(`kshipra-filter-${Math.random().toString(36).substring(2, 9)}`);
  const isReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleRippleComplete = useCallback((rippleId: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== rippleId));
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    // Initialize GSAP quickTo for ultra-smooth 60fps tilt
    gsap.set(cardRef.current, { transformPerspective: 900, transformStyle: 'preserve-3d' });
    xTo.current = gsap.quickTo(cardRef.current, 'rotateY', { duration: 0.5, ease: 'power2.out' });
    yTo.current = gsap.quickTo(cardRef.current, 'rotateX', { duration: 0.5, ease: 'power2.out' });
    scaleTo.current = gsap.quickTo(cardRef.current, 'scale', { duration: 0.4, ease: 'power2.out' });

    return () => {
      // cleanup GSAP animations on this element
      if (cardRef.current) {
        gsap.killTweensOf(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setHasError(false);
    setImageLoaded(false);
  }, [src]);

  // Spawn an interactive water ripple
  const createRipple = useCallback(
    (clientX: number, clientY: number, intensity: 'gentle' | 'strong' = 'strong') => {
      if (!cardRef.current || isReducedMotion()) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const newRipple: RipplePoint = {
        id: Date.now() + Math.random(),
        x,
        y,
        size: Math.max(rect.width, rect.height) * (intensity === 'strong' ? 1.15 : 0.65),
        color: 'rgba(56, 189, 248, 0.75)',
      };

      setRipples((prev) => [...prev.slice(-3), newRipple]);

      // Play soft droplet water sound
      if (intensity === 'strong') {
        soundscape.playDropletSound();
      }

      // Animate SVG liquid displacement filter with GSAP for authentic water wave refraction
      const feDisplacement = document.getElementById(`${filterId.current}-disp`);
      const feTurbulence = document.getElementById(`${filterId.current}-turb`);

      if (feDisplacement && feTurbulence) {
        gsap.killTweensOf(turbDispRef.current);
        turbDispRef.current.scale = intensity === 'strong' ? 18 : 7;
        
        gsap.to(turbDispRef.current, {
          scale: 0,
          duration: intensity === 'strong' ? 0.85 : 0.55,
          ease: 'power2.out',
          onUpdate: () => {
            feDisplacement.setAttribute('scale', turbDispRef.current.scale.toString());
          },
        });

        turbFreqRef.current.val = 0.025;
        gsap.to(turbFreqRef.current, {
          val: 0.008,
          duration: 0.8,
          ease: 'sine.out',
          onUpdate: () => {
            feTurbulence.setAttribute('baseFrequency', turbFreqRef.current.val.toString());
          },
        });
      }
    },
    []
  );

  // Pointer movement tilts the image; ripples appear on impact or while dragging.
  const lastTrailRef = useRef<number>(0);
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.pointerType === 'touch' || isReducedMotion()) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    if (centerX === 0 || centerY === 0) return;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = -((y - centerY) / centerY) * 5;

    xTo.current?.(rotateY);
    yTo.current?.(rotateX);
    scaleTo.current?.(1.02);

    // Update dynamic glare reflection
    if (glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 65%)`;
      glareRef.current.style.opacity = '1';
    }

    const now = performance.now();
    if (e.buttons > 0 && now - lastTrailRef.current > 220) {
      lastTrailRef.current = now;
      createRipple(e.clientX, e.clientY, 'gentle');
    }
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isReducedMotion()) return;
    scaleTo.current?.(1.02);
    if (e.pointerType !== 'touch') createRipple(e.clientX, e.clientY, 'gentle');
  };

  const handlePointerLeave = () => {
    if (isReducedMotion()) return;
    xTo.current?.(0);
    yTo.current?.(0);
    scaleTo.current?.(1.0);
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.target instanceof Element && e.target.closest('button')) return;
    createRipple(e.clientX, e.clientY, 'strong');
  };

  return (
    <>
      {/* SVG Liquid Filter Definition */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <filter id={filterId.current} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            id={`${filterId.current}-turb`}
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            id={`${filterId.current}-disp`}
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div ref={containerRef} className={`relative flex flex-col min-h-0 ${className}`}>
        {/* Main 3D Interactive Card */}
        <div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerDown={handlePointerDown}
          style={{
            cursor: 'crosshair',
            willChange: 'transform',
          }}
          className={`relative ${aspectRatio} lg:flex-1 lg:min-h-0 rounded-2xl overflow-hidden border border-stone-300 shadow-xl bg-stone-900 group select-none transition-shadow duration-300 hover:shadow-2xl hover:border-[#A44226]/40`}
        >
          {/* Base Photographic Image with Liquid Distortion Filter */}
          <img
            ref={imgRef}
            src={hasError ? '/assets/gdrive/IMG_20250728_131148.jpg' : src}
            alt={alt}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setHasError(true)}
            style={{
              filter: `url(#${filterId.current})`,
              objectPosition,
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035] pointer-events-none"
          />

          {/* Dynamic Glare Reflection Overlay */}
          <div
            ref={glareRef}
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 mix-blend-overlay"
          />

          {/* Animated Water Ripple Layer (Concentric GSAP Waves) */}
          <div
            ref={ripplesOverlayRef}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            {ripples.map((rip) => (
              <RippleEffectKeyframe key={rip.id} ripple={rip} onComplete={handleRippleComplete} />
            ))}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(true);
            }}
            title="Expand High-Res Photo"
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-sm pointer-events-auto"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-stone-800/80 hover:bg-stone-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="w-full h-full max-h-[80vh] rounded-2xl overflow-hidden border border-stone-700 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={hasError ? '/assets/gdrive/IMG_20250728_131148.jpg' : src}
                alt={alt}
                className="w-full h-full object-contain bg-stone-950"
              />
            </div>
            <div className="text-stone-300 text-xs font-mono mt-3 text-center">
              {alt} · {caption}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/**
 * Animated concentric water ripple element driven by GSAP
 */
const RippleEffectKeyframe: React.FC<{
  ripple: RipplePoint;
  onComplete: (rippleId: number) => void;
}> = ({ ripple, onComplete }) => {
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rippleRef.current) return;

    const el = rippleRef.current;
    const rings = el.querySelectorAll('.ripple-ring');
    const droplet = el.querySelector('.ripple-droplet');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      onComplete(ripple.id);
      return;
    }

    const tl = gsap.timeline({ onComplete: () => onComplete(ripple.id) });

    // Animate central droplet pulse
    if (droplet) {
      tl.fromTo(
        droplet,
        { scale: 0, opacity: 1 },
        { scale: 2.2, opacity: 0, duration: 0.45, ease: 'power3.out' },
        0
      );
    }

    // Animate concentric rings expanding outwards
    rings.forEach((ring, idx) => {
      const delay = idx * 0.1;
      const ringDuration = 0.95 + idx * 0.12;

      tl.fromTo(
        ring,
        {
          scale: 0.04,
          opacity: 0.75 - idx * 0.16,
        },
        {
          scale: 1,
          opacity: 0,
          duration: ringDuration,
          ease: 'power3.out',
        },
        delay
      );
    });

    return () => {
      tl.kill();
    };
  }, [ripple, onComplete]);

  return (
    <div
      ref={rippleRef}
      style={{
        position: 'absolute',
        left: ripple.x,
        top: ripple.y,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Central water drop impact flash */}
      <div
        className="ripple-droplet absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 14,
          height: 14,
          backgroundColor: ripple.color,
          boxShadow: `0 0 12px ${ripple.color}`,
        }}
      />

      {/* Ring 1 - Primary water ripple */}
      <div
        className="ripple-ring absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: ripple.size,
          height: ripple.size,
          borderWidth: 2,
          borderColor: ripple.color,
          borderStyle: 'solid',
          boxShadow: `inset 0 0 8px ${ripple.color}, 0 0 10px ${ripple.color}`,
        }}
      />

      {/* Ring 2 - Secondary fluid swell */}
      <div
        className="ripple-ring absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: ripple.size,
          height: ripple.size,
          borderWidth: 1.5,
          borderColor: ripple.color,
          borderStyle: 'solid',
          boxShadow: `0 0 12px ${ripple.color}`,
        }}
      />

      {/* Ring 3 - Outer ambient shockwave */}
      <div
        className="ripple-ring absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: ripple.size,
          height: ripple.size,
          borderWidth: 1,
          borderColor: ripple.color,
          borderStyle: 'solid',
        }}
      />
    </div>
  );
};
