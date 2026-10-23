import React, { useState, useEffect, useRef } from 'react';
import { SLIDES_DATA, SlideData, IMAGES } from '../data/portfolioData';
import { soundscape } from '../utils/soundscape';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  FileText,
  Grid,
  X,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Share2,
  Download,
  BookOpen,
  Layers,
  Award
} from 'lucide-react';
import { DyeMatrixSimulator } from './DyeMatrixSimulator';
import { LayerVisualizer } from './LayerVisualizer';
import { MotifTranslationFlow } from './MotifTranslationFlow';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { PrototypeGallery } from './PrototypeGallery';
import { HeritageMap } from './HeritageMap';
import { LabEcoMetrics } from './LabEcoMetrics';
import {
  BatikTimeline,
  CommunityClothsMatrix,
  SurvivingBlocksCensus,
  ThreeResistFamilies,
  BatikSixStepWorkflow,
  FiveWaxMethods,
  NeelaLugdaDocumentation,
  TenProductsShowcase,
  SSMTexLabCertificate
} from './ThesisCustomViews';

interface PresentationDeckProps {
  onExit: () => void;
  initialSlide?: number;
}

export const PresentationDeck: React.FC<PresentationDeckProps> = ({
  onExit,
  initialSlide = 1,
}) => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(initialSlide);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [showGridDrawer, setShowGridDrawer] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentSlide = SLIDES_DATA.find((s) => s.id === currentSlideId) || SLIDES_DATA[0];

  const handleNext = () => {
    if (currentSlideId < SLIDES_DATA.length) {
      soundscape.playPaperSlide();
      setCurrentSlideId(currentSlideId + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideId > 1) {
      soundscape.playPaperSlide();
      setCurrentSlideId(currentSlideId - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'g' || e.key === 'G') {
        setShowGridDrawer((prev) => !prev);
      } else if (e.key === 'Escape' && !document.fullscreenElement) {
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideId]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#FAF8F5] text-stone-900 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Deck Control Header */}
      <header className="px-6 py-3.5 border-b border-stone-200 bg-[#FAF8F5]/90 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={onExit}
            className="text-xs font-mono text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 transition-colors"
          >
            ← Exit Presentation
          </button>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-stone-500">
            <span className="font-serif font-bold text-stone-800">बाटिक</span>
            <span>·</span>
            <span>Part {currentSlide.part}: {currentSlide.partTitle}</span>
            <span>·</span>
            <span className="text-[#A44226] font-semibold">{currentSlide.category}</span>
          </div>
        </div>

        {/* Center: Slide indicator */}
        <div className="text-xs font-mono font-bold text-stone-900 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
          Slide {currentSlideId.toString().padStart(2, '0')} / {SLIDES_DATA.length.toString().padStart(2, '0')}
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          {/* Direct Thesis PDF download affordance */}
          <a
            href={IMAGES.pdf}
            download="Rupal_Joshi_Bhairavgarh_Batik_Presentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Full Presentation Deck (PDF)"
            className="p-2 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-700 text-xs transition-colors hidden md:flex items-center gap-1.5 font-mono"
          >
            <Download className="w-3.5 h-3.5 text-[#A44226]" />
            <span>Original PDF</span>
          </a>

          <button
            onClick={() => setShowGridDrawer(!showGridDrawer)}
            title="Slide Grid Overview (G)"
            className={`p-2 rounded-lg border text-xs transition-colors ${
              showGridDrawer ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-200 hover:bg-stone-100 text-stone-700'
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>

          <button
            onClick={() => setShowNotes(!showNotes)}
            title="Speaker Notes (N)"
            className={`p-2 rounded-lg border text-xs transition-colors ${
              showNotes ? 'bg-[#A44226] text-white border-[#A44226]' : 'border-stone-200 hover:bg-stone-100 text-stone-700'
            }`}
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            title="Fullscreen Toggle (F)"
            className="p-2 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Slide Body Viewport */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 max-w-7xl mx-auto w-full flex flex-col justify-center">
        {/* Render Specialized Interactive View if Slide has a dedicated tool */}
        {currentSlideId === 5 ? (
          <div className="space-y-6">
            <HeritageMap />
          </div>
        ) : currentSlideId === 8 ? (
          <div className="space-y-6">
            <BatikTimeline />
          </div>
        ) : currentSlideId === 11 ? (
          <div className="space-y-6">
            <CommunityClothsMatrix />
          </div>
        ) : currentSlideId === 12 ? (
          <div className="space-y-6">
            <SurvivingBlocksCensus />
          </div>
        ) : currentSlideId === 13 ? (
          <div className="space-y-6">
            <ThreeResistFamilies />
          </div>
        ) : currentSlideId === 18 ? (
          <div className="space-y-6">
            <BatikSixStepWorkflow />
          </div>
        ) : currentSlideId === 19 ? (
          <div className="space-y-6">
            <FiveWaxMethods />
          </div>
        ) : currentSlideId === 21 ? (
          <div className="space-y-6">
            <NeelaLugdaDocumentation />
          </div>
        ) : currentSlideId === 26 ? (
          <div className="space-y-6">
            <MotifTranslationFlow />
          </div>
        ) : currentSlideId === 27 ? (
          <div className="space-y-6">
            <DyeMatrixSimulator />
          </div>
        ) : currentSlideId === 29 ? (
          <div className="space-y-6">
            <TenProductsShowcase />
          </div>
        ) : currentSlideId === 30 ? (
          <div className="space-y-6">
            <SSMTexLabCertificate />
          </div>
        ) : (
          /* Standard Editorial Slide Format */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Text Column */}
            <div className={`space-y-6 ${currentSlide.image ? 'lg:col-span-7' : 'lg:col-span-12 max-w-3xl'}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest font-mono text-[#A44226]">
                    Part {currentSlide.part}: {currentSlide.partTitle}
                  </span>
                  <span className="text-stone-300">·</span>
                  <span className="text-xs font-mono text-stone-500">
                    {currentSlide.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
                  {currentSlide.title}
                </h1>

                {currentSlide.subtitle && (
                  <p className="text-base sm:text-lg text-stone-600 font-serif italic mt-2">
                    {currentSlide.subtitle}
                  </p>
                )}
              </div>

              <div className="text-sm sm:text-base text-stone-700 leading-relaxed whitespace-pre-line space-y-4 font-sans">
                {currentSlide.content}
              </div>

              {/* Bullet Points if provided */}
              {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
                <ul className="space-y-2 pt-2">
                  {currentSlide.bulletPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A44226] mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Metrics if provided */}
              {currentSlide.metrics && currentSlide.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {currentSlide.metrics.map((m) => (
                    <div key={m.label} className="p-3 bg-stone-100 rounded-xl border border-stone-200">
                      <div className="text-xl font-serif font-bold text-stone-900">{m.value}</div>
                      <div className="text-[11px] font-mono text-stone-500 uppercase">{m.label}</div>
                      {m.detail && <div className="text-[10px] text-stone-400 mt-0.5">{m.detail}</div>}
                    </div>
                  ))}
                </div>
              )}

              {currentSlide.keyInsight && (
                <div className="p-4 rounded-xl bg-stone-100/90 border border-stone-200/80 text-xs sm:text-sm text-stone-800 leading-relaxed shadow-2xs">
                  <span className="font-semibold text-stone-900">Key Insight: </span>
                  {currentSlide.keyInsight}
                </div>
              )}

              {currentSlide.sourceCitation && (
                <div className="text-[11px] font-mono text-stone-400">
                  {currentSlide.sourceCitation}
                </div>
              )}

              {/* On Slide 32, provide the direct PDF view button */}
              {currentSlideId === 32 && (
                <div className="pt-4 flex items-center gap-3">
                  <a
                    href={IMAGES.pdf}
                    download="Rupal_Joshi_Bhairavgarh_Batik_Presentation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#A44226] text-white text-xs font-semibold hover:bg-[#8B351E] transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Complete 45-Page Doctoral Thesis Deck (PDF)</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right Media Column */}
            {currentSlide.image && (
              <div className="lg:col-span-5 relative">
                <div className="aspect-4/3 rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/images/hero_bhairavgarh_batik_1792131005667.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs font-mono text-stone-500 mt-2 text-right">
                  Bhairavgarh Doctoral Archive · Rupal Joshi
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Speaker Notes Overlay */}
      {showNotes && (
        <div className="bg-stone-900 text-stone-100 border-t border-stone-800 p-4 px-8 shrink-0 flex items-start justify-between gap-4 animate-in slide-in-from-bottom-2 duration-200">
          <div className="max-w-4xl space-y-1">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
              Presenter Notes · Slide {currentSlideId} of {SLIDES_DATA.length}
            </span>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              {currentSlide.speakerNotes}
            </p>
          </div>
          <button
            onClick={() => setShowNotes(false)}
            className="p-1 text-stone-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Bottom Deck Navigation Bar */}
      <footer className="px-6 py-4 border-t border-stone-200 bg-[#FAF8F5]/95 backdrop-blur-md flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentSlideId === 1}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-stone-300 hover:bg-stone-100 disabled:opacity-35 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlideId === SLIDES_DATA.length}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-medium bg-[#A44226] text-white hover:bg-[#8B351E] disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-xs"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 items-center gap-3">
          <div className="h-1.5 w-full bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#A44226] transition-all duration-300"
              style={{ width: `${(currentSlideId / SLIDES_DATA.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono text-stone-500 whitespace-nowrap">
            {Math.round((currentSlideId / SLIDES_DATA.length) * 100)}%
          </span>
        </div>

        {/* Keyboard Hint */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-stone-500">
          <span className="px-1.5 py-0.5 bg-stone-200 rounded">←</span>
          <span className="px-1.5 py-0.5 bg-stone-200 rounded">→</span>
          <span>to navigate</span>
        </div>
      </footer>

      {/* Slide Grid Drawer Modal */}
      {showGridDrawer && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setShowGridDrawer(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                  Thesis Deck Navigator
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Jump to Slide (1 – {SLIDES_DATA.length}) · 6-Part Journey
                </h3>
              </div>
              <button
                onClick={() => setShowGridDrawer(false)}
                className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {SLIDES_DATA.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrentSlideId(slide.id);
                    setShowGridDrawer(false);
                  }}
                  className={`p-3 text-left rounded-xl border transition-all flex flex-col justify-between aspect-4/3 ${
                    currentSlideId === slide.id
                      ? 'border-[#A44226] bg-[#A44226]/5 ring-2 ring-[#A44226]'
                      : 'border-stone-200 bg-stone-50 hover:bg-stone-100 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-stone-500">
                      #{slide.id.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-mono text-[#A44226]">
                      Part {slide.part}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-stone-900 line-clamp-2 mt-1">
                    {slide.title}
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 truncate mt-1">
                    {slide.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
