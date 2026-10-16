/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { PresentationDeck } from './components/PresentationDeck';
import { DyeMatrixSimulator } from './components/DyeMatrixSimulator';
import { LayerVisualizer } from './components/LayerVisualizer';
import { MotifTranslationFlow } from './components/MotifTranslationFlow';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PrototypeGallery } from './components/PrototypeGallery';
import { HeritageMap } from './components/HeritageMap';
import { LabEcoMetrics } from './components/LabEcoMetrics';
import { soundscape } from './utils/soundscape';
import {
  Presentation,
  BookOpen,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Compass,
  FileDown,
  Layers,
  Award
} from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'case-study' | 'presentation'>('case-study');
  const [activeDeckSlide, setActiveDeckSlide] = useState<number>(1);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [showDossierModal, setShowDossierModal] = useState<boolean>(false);

  const handleToggleAudio = () => {
    const nextState = soundscape.toggle();
    setIsAudioActive(nextState);
  };

  const handleLaunchPresentation = (slideNum = 1) => {
    setActiveDeckSlide(slideNum);
    setViewMode('presentation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#A44226] selection:text-white flex flex-col font-sans">
      {/* Top Bar with 3-Zone Contract */}
      <TopBar
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === 'case-study' ? 'presentation' : 'case-study')}
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
      />

      {/* Render Fullscreen Presentation Deck if selected */}
      {viewMode === 'presentation' ? (
        <PresentationDeck
          initialSlide={activeDeckSlide}
          onExit={() => setViewMode('case-study')}
        />
      ) : (
        /* Curatorial Editorial Monograph / Case Study View */
        <main className="flex-1 space-y-20 lg:space-y-28 pb-24">
          {/* Hero Section: Split Column + Full-width KPI Strip */}
          <section id="top" className="pt-10 md:pt-16 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Typographic Hierarchy */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                    <span className="text-[#A44226] font-semibold">Master Creative Research</span>
                    <span aria-hidden="true">·</span>
                    <span>Textile Design & Ecological Chemistry</span>
                    <span aria-hidden="true">·</span>
                    <span>Ujjain, India</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.08] tracking-tight text-balance">
                    The Revival of Bhairavgarh Batik
                  </h1>

                  <p className="text-lg sm:text-xl font-serif italic text-stone-600 max-w-2xl leading-relaxed">
                    Integrating 400 years of Chhipa mastery, natural plant chemistry, and India's oldest prehistoric design vocabulary into a sustainable future.
                  </p>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl">
                    An in-depth design intervention revitalizing Central India's endangered wax-resist batik cluster. By replacing hazardous synthetic azo chemicals with 10 indigenous botanicals and re-centering the 30,000-year-old rock art of Bhimbetka, this research transitions a low-wage commodity piecework economy into an ethical, high-margin cultural powerhouse.
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleLaunchPresentation(1)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#A44226] text-white text-sm font-medium hover:bg-[#8B351E] transition-all shadow-sm"
                  >
                    <Presentation className="w-4 h-4" />
                    <span>Launch 15-Slide Presentation Deck</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                  <a
                    href="#chemistry"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-sm font-medium transition-all"
                  >
                    <Layers className="w-4 h-4 text-[#A44226]" />
                    <span>Explore Dye-Mordant Matrix</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Container */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative aspect-4/3 lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 min-h-[360px]">
                  <img
                    src="/src/assets/images/hero_bhairavgarh_batik_1792131005667.jpg"
                    alt="Authentic Bhairavgarh Batik textile with madder red dye and prehistoric dancing motifs"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <div className="text-xs font-serif font-bold">Terracotta Madder Strike-Off</div>
                      <div className="text-[11px] font-mono text-stone-300">Pure Beeswax Resist · 58.5°C</div>
                    </div>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded text-white">
                      Fieldwork Specimen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-width 4-Column KPI Strip below the hero split */}
            <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 tabular-nums">
                  400 Years
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Chhipa Heritage along Kshipra
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-[#A44226] tabular-nums">
                  10 Extractions
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Organic Botanical Dye Palette
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 tabular-nums">
                  30,000 BCE
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Bhimbetka Cave Art Vocabulary
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-emerald-800 tabular-nums">
                  2023 GI Tag
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Legal Artisan IP Protection
                </div>
              </div>
            </div>
          </section>

          {/* Section: Historical Provenance & Cartography (#context) */}
          <section id="context" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Chapter 01 · Historical Provenance
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                400 Years of Chhipa Mastery on the Kshipra River
              </h2>
              <p className="text-base text-stone-700 leading-relaxed">
                The Chhipa printing community arrived in Bhairavgarh during the Mughal era, drawn specifically by the Kshipra River's unique alkaline mineral profile. They established an enduring legacy of mordant and iron-acetate printing, producing culturally vital textiles like the Lugda (traditional veil) and Chadar (bedsheet) using a rich palette of madder red, indigo blue, and syahi (iron) black.
              </p>
            </div>

            {/* Artisan Fieldwork Imagery & Quote */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-stone-200 rounded-2xl p-6 lg:p-8">
              <div className="lg:col-span-5 relative aspect-4/3 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src="/src/assets/images/chhipa_artisan_woodblock_1792131007154.jpg"
                  alt="Chhipa master artisan stamping molten wax onto handloom fabric"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A44226]">
                  Living Heritage Fieldwork
                </div>
                <blockquote className="text-xl sm:text-2xl font-serif italic text-stone-800 leading-snug">
                  "Revival cannot be dictated from a lab. It must be built directly upon the Chhipa community’s muscle memory, tool mastery, and river intimacy."
                </blockquote>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Through deep participatory workshops with over 40 artisan families, we identified that traditional wax-resist flourished because artisans understood the thermal fluidity of wax and the mineral hardness of their river.
                </p>
              </div>
            </div>

            {/* Embedded Interactive Heritage Map */}
            <HeritageMap />
          </section>

          {/* Section: The Dual Crisis & Before/After Comparison (#crisis) */}
          <section id="crisis" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Chapter 02 · Problem Definition
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                The Crisis of Ecology and Generic Branding
              </h2>
              <p className="text-base text-stone-700 leading-relaxed">
                Industrial pressures forced artisans into synthetic azo dyes—contaminating the Kshipra river with heavy metals and chemical oxygen demand (COD)—while copycat mass prints erased the craft's authentic cultural identity.
              </p>
            </div>

            {/* Embedded Before vs After Slider Component */}
            <BeforeAfterSlider />
          </section>

          {/* Section: The Three-Pillar Architecture (#three-pillars) */}
          <section id="three-pillars" className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Strategic Framework
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                A Three-Pillar Architecture for Authentic Revival
              </h2>
              <p className="text-sm sm:text-base text-stone-600">
                Activated by the 2023 Geographical Indication (GI) registration, the revival binds artisan autonomy, organic chemistry, and ancient archaeological visual vocabulary into a unified system.
              </p>
            </div>

            {/* Classical Three-Pillar Pediment Structure */}
            <div className="space-y-6">
              {/* Pediment Banner */}
              <div className="bg-[#A44226] text-white p-4 rounded-xl text-center shadow-xs">
                <span className="text-xs font-mono tracking-widest uppercase opacity-85 block">
                  Governing Foundation
                </span>
                <span className="text-lg sm:text-xl font-serif font-bold">
                  Authentic Bhairavgarh Revival (2023 GI Tag Activation)
                </span>
              </div>

              {/* Three Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pillar 1 */}
                <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-stone-300 transition-all shadow-xs">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[#A3704C] uppercase tracking-wider block">
                      Pillar 01 · Babool Bark Tan
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">
                      Re-centering the Artisan
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      Abandoning brittle commercial paraffin blends in favor of 100% pure unbleached beeswax applied at 55–60.5°C. Prevents wax from flaking off handloom cotton while offering precision control over the batik's signature crackle effect.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>Pure Beeswax</span>
                    <span className="text-[#A3704C]">55–60.5°C</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-stone-300 transition-all shadow-xs">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[#D9822B] uppercase tracking-wider block">
                      Pillar 02 · Marigold Ochre
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">
                      Sustainable Chemistry
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      10 locally sourced organic dye extracts combined with historic Syahi fermented scrap-iron and jaggery liquor. Doubles color offerings without purchasing additional raw materials and eliminates river effluent toxicity.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>10 Plant Dyes</span>
                    <span className="text-[#D9822B]">Syahi Alchemy</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-stone-300 transition-all shadow-xs">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[#1E3A5F] uppercase tracking-wider block">
                      Pillar 03 · Indigo Blue
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">
                      Prehistoric Innovation
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      Reclaiming the 30,000-year-old rock art of Bhimbetka (UNESCO World Heritage). Adapts dynamic communal dancing rituals, hunters, and wild bison into teak woodblocks, creating an unreplicable aesthetic signature.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>Bhimbetka Motifs</span>
                    <span className="text-[#1E3A5F]">Upper Paleolithic</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Botanical Chemistry & Dye-Mordant Matrix (#chemistry) */}
          <section id="chemistry" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Chapter 03 · Natural Color Chemistry
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                Formulating a Sustainable Organic Palette
              </h2>
              <p className="text-base text-stone-700 leading-relaxed">
                Replacing synthetic azo chemicals with 10 non-toxic local botanicals: Madder Root (Rubia cordifolia), Marigold Petals (Tagetes), Natural Indigo (Indigofera tinctoria), Babool Bark (Acacia nilotica), and Pomegranate Peel (Punica granatum).
              </p>
            </div>

            {/* Botanical Pigments Photo Banner */}
            <div className="relative aspect-16/9 md:aspect-21/9 rounded-2xl overflow-hidden border border-stone-200 shadow-md">
              <img
                src="/src/assets/images/botanical_dyes_pigments_1792131008735.jpg"
                alt="Clay terracotta bowls with raw organic dye pigments: madder, marigold, indigo, babool bark, and iron syahi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white max-w-xl space-y-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-amber-300">
                    Bhairavgarh Raw Botanical Spectrum
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold">
                    Natural Extracts in Traditional Earthenware
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200">
                    Madder root, temple marigolds, natural indigo, babool tannin bark, and aged syahi fermented iron liquor.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Dye Matrix Simulator */}
            <DyeMatrixSimulator />

            {/* Technical Fastness & Lab Validation */}
            <LabEcoMetrics />
          </section>

          {/* Section: Prehistoric Motif Translation & Layered Synthesis (#process) */}
          <section id="process" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Chapter 04 · Motif Translation & Material Synthesis
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                From 30,000-Year Cave Art to Molten Wax
              </h2>
              <p className="text-base text-stone-700 leading-relaxed">
                How archaeological heritage is ethically and technically translated into a workable batik motif without losing its visual integrity, followed by exploded 3D textile layering.
              </p>
            </div>

            {/* Embedded Motif Translation Flow */}
            <MotifTranslationFlow />

            {/* Embedded Exploded Layer Visualizer */}
            <LayerVisualizer />
          </section>

          {/* Section: Prototype Galleries (#prototypes) */}
          <section id="prototypes" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Chapter 05 · Design Execution
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                Prototypes: Premium Apparel & Heritage Living
              </h2>
              <p className="text-base text-stone-700 leading-relaxed">
                Physical garments and home textiles proving commercial viability, aesthetic elegance, and superior handloom craft.
              </p>
            </div>

            {/* Embedded Prototype Gallery with Hotspots & Lightbox */}
            <PrototypeGallery />
          </section>

          {/* Section: Transformation, Future Roadmap & GI Activation (#transformation) */}
          <section id="transformation" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-8 lg:p-12 space-y-8">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                  Chapter 06 · Commercial Activation
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                  The Future of Authentic Bhairavgarh
                </h2>
                <p className="text-base text-stone-700 leading-relaxed">
                  The research proves that the revival of Bhairavgarh Batik is environmentally essential, technically viable, and market-ready. The three immediate vectors for commercial activation are:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-200">
                <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-3 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                    01
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    2023 GI Tag Legal Enforcement
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Leverage the 2023 Ujjain Batik Geographical Indication to protect artisan intellectual property and prosecute counterfeit industrial mill prints.
                  </p>
                </div>

                <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-3 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-[#A44226] text-white font-mono text-xs flex items-center justify-center font-bold">
                    02
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    Empowering Women Artisans
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Transition from low-wage commodity piecework ($2.50/day) to premium cooperative profit-sharing ($14–$18.50/day), centering women master wax crafters.
                  </p>
                </div>

                <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-3 shadow-2xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-mono text-xs flex items-center justify-center font-bold">
                    03
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    Circular Botanical Supply Chain
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Scale upcycled temple floral collections and local farmers' madder/indigo crops to create a regenerative local raw materials cooperative.
                  </p>
                </div>
              </div>

              {/* Pitch CTA card */}
              <div className="bg-stone-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold">
                    Ready to Present or Share This Research?
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300">
                    Switch to the interactive 15-slide deck with presenter notes or download the executive brief.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleLaunchPresentation(1)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#A44226] text-white text-xs font-semibold hover:bg-[#8B351E] transition-all shadow-sm"
                  >
                    <Presentation className="w-4 h-4" />
                    <span>Open Presentation Deck</span>
                  </button>
                  <button
                    onClick={() => setShowDossierModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold transition-all border border-stone-700"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Executive Summary</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Curatorial Footer */}
      <footer className="border-t border-stone-200 bg-[#FAF8F5] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-900 text-sm">
              The Revival of Bhairavgarh Batik
            </span>
            <span aria-hidden="true">·</span>
            <span>Creative Research Portfolio</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Ujjain Batik GI Tag (2023)</span>
            <span>SSM Tex Lab Certified</span>
            <span>UNESCO Bhimbetka Rock Art</span>
          </div>

          <div>
            © 2026 Naiya Patel · All research & design rights reserved
          </div>
        </div>
      </footer>

      {/* Executive Summary Modal */}
      {showDossierModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setShowDossierModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                  Executive Research Dossier
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Project Brief & Research Summary
                </h3>
              </div>
              <button
                onClick={() => setShowDossierModal(false)}
                className="text-stone-400 hover:text-stone-900"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-stone-700 leading-relaxed font-sans">
              <p>
                <strong>Project Title:</strong> The Revival of Bhairavgarh Batik: Integrating 400 years of Chhipa mastery, natural plant chemistry, and India's oldest prehistoric design vocabulary into a sustainable future.
              </p>
              <p>
                <strong>Author / Designer:</strong> Naiya Patel (Creative Portfolio & Case Study)
              </p>
              <p>
                <strong>Core Problem:</strong> A 400-year craft cluster faced ecological destruction (synthetic azo effluent polluting the sacred Kshipra River) and commercial erasure (competing with generic Indonesian-style machine prints for $2.50/day).
              </p>
              <p>
                <strong>Innovation Triad:</strong>
                <br />1. Re-centered 100% pure unbleached beeswax at 55–60.5°C to eliminate paraffin brittleness.
                <br />2. Reintroduced 10 organic plant dyes with Syahi iron-scrap liquor doubling color yield at zero raw cost.
                <br />3. Extracted and calibrated 30,000-year-old Bhimbetka cave art motifs for hand-carved teak woodblocks.
              </p>
              <p>
                <strong>Verified Metrics:</strong> 4.0 ISO Dry Rubbing Fastness, 4.0 Blue Wool Light Fastness, 22L water consumption per cycle, zero heavy metals in effluent, and 6x wage increase for Chhipa artisans.
              </p>
            </div>

            <div className="flex justify-end pt-4 border-t border-stone-200">
              <button
                onClick={() => setShowDossierModal(false)}
                className="px-5 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
