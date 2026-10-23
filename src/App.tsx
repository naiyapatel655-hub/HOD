/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { PresentationDeck } from './components/PresentationDeck';
import { DyeMatrixSimulator } from './components/DyeMatrixSimulator';
import { LayerVisualizer } from './components/LayerVisualizer';
import { MotifTranslationFlow } from './components/MotifTranslationFlow';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PrototypeGallery } from './components/PrototypeGallery';
import { HeritageMap } from './components/HeritageMap';
import { LabEcoMetrics } from './components/LabEcoMetrics';
import { AudioPanel } from './components/AudioPanel';
import { soundscape } from './utils/soundscape';
import { IMAGES, SLIDES_DATA, COMMUNITY_CLOTHS, TEN_PRODUCTS_DATA, SSM_TEX_LAB_DATA } from './data/portfolioData';
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
} from './components/ThesisCustomViews';
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
  Award,
  Download,
  Calendar,
  Waves,
  MapPin,
  ExternalLink,
  ChevronRight
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
          {/* Hero Section: Split Column + 6-Part Architecture Strip */}
          <section id="top" className="pt-10 md:pt-16 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Typographic Hierarchy */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                    <span className="text-[#A44226] font-semibold">Doctoral Creative Research</span>
                    <span aria-hidden="true">·</span>
                    <span>Rupal Joshi</span>
                    <span aria-hidden="true">·</span>
                    <span>Ujjain, Madhya Pradesh</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.08] tracking-tight text-balance">
                    बाटिक: Every Craft Has a Story
                  </h1>

                  <p className="text-lg sm:text-xl font-serif italic text-stone-600 max-w-2xl leading-relaxed">
                    The Heritage, Community Lineage, and Natural Dye Revival of Bhairavgarh Batik.
                  </p>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl">
                    During fieldwork conversations with the hereditary Badwala family—who have practiced batik for generations along Ujjain's sacred Kshipra River—a subtle opportunity emerged in their traditional workflow. This sparked a comprehensive design and scientific intervention: replacing toxic synthetic azo chemicals with 10 indigenous plant dyes, re-centering 30,000-year-old Bhimbetka rock art, and documenting the endangered craft across 6 structured chapters.
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleLaunchPresentation(1)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#A44226] text-white text-sm font-medium hover:bg-[#8B351E] transition-all shadow-sm"
                  >
                    <Presentation className="w-4 h-4" />
                    <span>Launch 32-Slide Presentation Deck</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                  <a
                    href={IMAGES.pdf}
                    download="Rupal_Joshi_Bhairavgarh_Batik_Presentation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-sm font-medium transition-all shadow-xs"
                  >
                    <Download className="w-4 h-4 text-[#A44226]" />
                    <span>Download Full 45-Page Thesis (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Container */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative aspect-4/3 lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 min-h-[360px]">
                  <img
                    src={IMAGES.hero}
                    alt="Authentic Bhairavgarh Batik textile with madder red dye and prehistoric dancing motifs"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/images/hero_bhairavgarh_batik_1792131005667.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <div className="text-xs font-serif font-bold">Fieldwork at Badwala Workshop</div>
                      <div className="text-[11px] font-mono text-stone-300">Bhairavgarh, Ujjain · Rupal Joshi</div>
                    </div>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded text-white">
                      Fieldwork Specimen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Story in Six Parts Overview Strip */}
            <div className="mt-12 pt-8 border-t border-stone-200">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226] block mb-4">
                The Journey · Six-Part Research Architecture
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { num: 1, title: "About Bhairavgarh", desc: "Printing rivers & village history", slide: 5 },
                  { num: 2, title: "The Craftsmen", desc: "Chhipa lineage & community cloths", slide: 9 },
                  { num: 3, title: "History of Batik", desc: "3 Resist families & Tagore 1927", slide: 13 },
                  { num: 4, title: "How Batik is Made", desc: "Tools, 6 steps & 5 wax methods", slide: 17 },
                  { num: 5, title: "Reviving the Craft", desc: "10 Dyes, Bhimbetka & lab tests", slide: 24 },
                  { num: 6, title: "The Road Ahead", desc: "5 Strategic pillars & bibliography", slide: 31 }
                ].map((part) => (
                  <button
                    key={part.num}
                    onClick={() => handleLaunchPresentation(part.slide)}
                    className="p-4 rounded-xl border border-stone-200 bg-white hover:border-[#A44226] hover:bg-stone-50 transition-all text-left flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-[#A44226]">
                        Part 0{part.num}
                      </span>
                      <h4 className="text-xs font-serif font-bold text-stone-900 mt-1 group-hover:text-[#A44226] transition-colors">
                        {part.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                        {part.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-stone-400 mt-2">
                      <span>Jump</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Full-width 4-Column KPI Strip */}
            <div className="mt-8 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 tabular-nums">
                  ~400 Yrs
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Chhipa Heritage on Kshipra
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-[#A44226] tabular-nums">
                  10 Dyes
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Natural Plant & Ferment Palette
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 tabular-nums">
                  8 Castes
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Community Identity Cloths
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl lg:text-4xl font-serif font-bold text-emerald-800 tabular-nums">
                  Grade 4.0
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  SSM Tex Lab Fastness Rating
                </div>
              </div>
            </div>
          </section>

          {/* PART 1: ABOUT BHAIRAVGARH (#part-1) */}
          <section id="context" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Part 01 · About Bhairavgarh
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                A State of Printing Rivers: Kshipra, Baghini & Jawad
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                Madhya Pradesh's textile printing identity is fundamentally shaped by running water. Three historic clusters settled along three specific rivers: Bhairavgarh on the Kshipra (wax-resist batik), Bagh on the Baghini (direct block printing with madder and iron), and Jawad in Neemuch (indigo Dabu mud-resist). Migrant printers moved along these watercourses during the Mughal era and the reign of Firoz Shah Tughlaq.
              </p>
            </div>

            {/* Visual Sequence: 1. Ujjain Kshipra River, 2. Mahakaal Temple */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Image: Ujjain Kshipra River */}
              <div className="space-y-2">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 group">
                  <img
                    src={IMAGES.kshipra}
                    alt="Sacred Kshipra River in Ujjain at golden hour sunrise with historic stone ghats"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/images/ujjain_kshipra_river_1792132450811.jpg';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white/95">
                    01 · Sacred Kshipra River, Ujjain
                  </div>
                </div>
                <div className="text-xs text-stone-600 leading-relaxed font-sans px-1">
                  <span className="font-semibold text-stone-900 font-serif">The Mineral Hydrology:</span> The sacred Kshipra River's alkaline calcium-rich water profile provides the natural fixing catalyst that bonds plant alizarin and tannins permanently to cotton fibers without synthetic chemicals.
                </div>
              </div>

              {/* Second Image: Mahakaal Temple */}
              <div className="space-y-2">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 group">
                  <img
                    src={IMAGES.mahakaal}
                    alt="Historic sacred Mahakaleshwar Temple in Ujjain at dawn"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/images/ujjain_mahakaal_temple_1792132451019.jpg';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white/95">
                    02 · Shri Mahakaleshwar Temple (Mahakaal)
                  </div>
                </div>
                <div className="text-xs text-stone-600 leading-relaxed font-sans px-1">
                  <span className="font-semibold text-stone-900 font-serif">Circular Heritage:</span> Ujjain is the religious capital of Madhya Pradesh with over 1,000 temples and the Mahakal Jyotirlinga. Daily floral garland offerings (sacred marigolds) are diverted from river waste to create solar yellow and warm ochre dye baths.
                </div>
              </div>
            </div>

            {/* Embedded Interactive Heritage Map */}
            <HeritageMap />

            {/* Embedded Interactive Timeline (1930s to Today) */}
            <BatikTimeline />
          </section>

          {/* PART 2: THE CRAFTSMEN (#part-2) */}
          <section id="three-pillars" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Part 02 · The Craftsmen
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                The Chhipa Lineage & Community Identity Cloths
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                The name <em>Chhipa</em> stems directly from the Hindi verb <em>chhapna</em> ('to print'). Migrating ~400 years ago from Rajasthan and Gujarat, Hindu and Muslim artisan families belonging to the Namdev sect carried tacit printing mastery held purely in memory. They designed custom printed cloths for every local community—from the Anjana Patel's <em>Neela lugda</em> to the Bhil's <em>Bootidar</em>.
              </p>
            </div>

            {/* Interactive Community Cloths Matrix */}
            <CommunityClothsMatrix />

            {/* Surviving Blocks Census */}
            <SurvivingBlocksCensus />
          </section>

          {/* PART 3: HISTORY OF BATIK (#part-3) */}
          <section className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Part 03 · History of Batik
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                From Ancient Resist Families to Rabindranath Tagore
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                Batik belongs to one of three universal resist families. While Bandhani binds cloth mechanically and Ajrakh applies mineral-mud paste, Batik uses molten wax as a purely physical barrier. In 1927, Rabindranath Tagore visited Java, returning with canting pens and wax specimens to Santiniketan's Kala Bhavana, establishing modern Indian batik that soon diffused to Bhairavgarh.
              </p>
            </div>

            {/* Embedded 3 Resist Families Card */}
            <ThreeResistFamilies />

            {/* Artisan Census 2019 Card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-4">
              <span className="text-xs font-mono uppercase text-[#A44226]">
                Techniques in Use (Documented 2019 · Thesis Slide 13)
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-center">
                  <div className="text-2xl font-serif font-bold text-stone-900">Most</div>
                  <div className="text-xs font-mono text-stone-600 mt-1">Artisans do block batik</div>
                </div>
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-center">
                  <div className="text-2xl font-serif font-bold text-[#A44226]">6–8</div>
                  <div className="text-xs font-mono text-stone-600 mt-1">Artisans do kalamkari</div>
                </div>
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-center">
                  <div className="text-2xl font-serif font-bold text-stone-900">4–5</div>
                  <div className="text-xs font-mono text-stone-600 mt-1">Artisans do screen batik</div>
                </div>
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-center">
                  <div className="text-2xl font-serif font-bold text-[#1E3A5F]">2</div>
                  <div className="text-xs font-mono text-stone-600 mt-1">Work with tzanting</div>
                </div>
              </div>
            </div>
          </section>

          {/* PART 4: HOW BATIK IS MADE (#part-4) */}
          <section className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Part 04 · How Batik is Made
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                Tools, Thermodynamics, and Neela Lugda Documentation
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                Bhairavgarh batik relies on specialized workshop apparatus: damp sand tables (1–2 cm) that instantly freeze molten wax without sticking, coconut-husk stylus pens feeding wax by capillary action, and calibrated wax blends (70:30 paraffin/beeswax).
              </p>
            </div>

            {/* 6-Step Workflow */}
            <BatikSixStepWorkflow />

            {/* 5 Wax Application Methods */}
            <FiveWaxMethods />

            {/* Traditional Neela Lugda Documentation */}
            <NeelaLugdaDocumentation />

            {/* Before vs After Slider Component */}
            <BeforeAfterSlider />
          </section>

          {/* PART 5: REVIVING THE CRAFT (#part-5) */}
          <section id="chemistry" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                Part 05 · Reviving the Craft
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                A Revival, Not a Replica: Bhimbetka Rock Art & 10 Natural Dyes
              </h2>
              <p className="text-base text-stone-700 leading-relaxed font-sans">
                Revival here does not mean naively freezing an obsolete technique in amber. It means linking traditional artisan knowledge with rigorous modern interventions: extracting design motifs from the 30,000-year-old rock shelters of Bhimbetka (UNESCO 2003), deploying a 10-botanical dye palette, and scientifically verifying colorfastness at SSM Tex Lab.
              </p>
            </div>

            {/* 4-Stage Motif Translation Flow */}
            <MotifTranslationFlow />

            {/* Dye Matrix Simulator */}
            <DyeMatrixSimulator />

            {/* 10 Physical Products Showcase & Prototypes */}
            <div id="prototypes" className="space-y-10 scroll-mt-24">
              <TenProductsShowcase />
              <PrototypeGallery />
            </div>

            {/* SSM Tex Lab Certificate & Environmental Metrics */}
            <SSMTexLabCertificate />

            {/* Quantitative River Metrics & Eco Calculator */}
            <LabEcoMetrics />
          </section>

          {/* PART 6: THE ROAD AHEAD & REFERENCES (#part-6) */}
          <section id="transformation" className="max-w-7xl mx-auto px-6 space-y-10">
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-8 lg:p-12 space-y-8">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
                  Part 06 · The Road Ahead
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
                  Five Strategic Pillars for Bhairavgarh's Future
                </h2>
                <p className="text-base text-stone-700 leading-relaxed font-sans">
                  "Every craft has a story. This one is still being written." — Rupal Joshi. The research establishes five concrete action vectors to anchor the craft's sustainable survival:
                </p>
              </div>

              {/* 5 Strategic Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { num: 1, title: "Document Chhipa Knowledge", desc: "Record oral histories and hereditary wax techniques before the elder generation fades." },
                  { num: 2, title: "Scale Natural Dyes", desc: "Deploy 10 non-toxic botanicals tested for fastness, eliminating Kshipra River chemical pollution." },
                  { num: 3, title: "Bhimbetka Motif IP", desc: "Build a defensible prehistoric visual language backed by the 2023 Ujjain Batik GI Tag." },
                  { num: 4, title: "Artisan-Centered Economy", desc: "Center craftsmen as active co-designers, raising incomes from $2.50 to $14–$18.50 per day." },
                  { num: 5, title: "Test Contemporary Markets", desc: "Develop high-margin apparel, home living, and ethical luxury accessories." }
                ].map((pillar) => (
                  <div key={pillar.num} className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-[#A44226] text-white font-mono text-xs font-bold flex items-center justify-center">
                      {pillar.num}
                    </span>
                    <h3 className="text-sm font-serif font-bold text-stone-900 mt-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct PDF Download / Pitch CTA card */}
              <div className="bg-stone-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Award className="w-4 h-4" />
                    <span>Doctoral Presentation & Complete Academic Monograph</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold">
                    Read the Complete 45-Page Doctoral Thesis Deck
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
                    Access the complete research document, including field interviews with the Badwala family, NIFT graduation data, and SSM Tex Lab fastness certificates.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href={IMAGES.pdf}
                    download="Rupal_Joshi_Bhairavgarh_Batik_Presentation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#A44226] text-white text-xs font-semibold hover:bg-[#8B351E] transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Thesis PDF (45 Pages)</span>
                  </a>

                  <button
                    onClick={() => handleLaunchPresentation(1)}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold transition-all border border-stone-700"
                  >
                    <Presentation className="w-4 h-4" />
                    <span>Launch 32 Slides</span>
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

              {/* Academic References */}
              <div className="pt-6 border-t border-stone-200 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
                  Cited Academic Literature & Sources (Thesis Slide 32 & Page 45)
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-600 font-mono">
                  <div>• R. Joshi: Doctoral thesis (Synopsis & Chapters 1 to 5)</div>
                  <div>• R. Nema (2019): Revival of Bhairavgarh block print, NIFT Bhopal</div>
                  <div>• Roy Maulik (2021): Tagore, Java and Indian batik</div>
                  <div>• Santiago, Cunha and Cabral (2023): Natural dyes review</div>
                  <div>• Li et al. (2020) & Febriani et al. (2023): Batik origins</div>
                  <div>• UNESCO World Heritage Centre (2003): Bhimbetka Rock Shelters</div>
                  <div>• UNESCO Intangible Cultural Heritage (2009): Indonesian Batik</div>
                  <div>• Gaatha (n.d.); Handicrafts.nic.in: Bhairavgarh tools & history</div>
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
              बाटिक · The Revival of Bhairavgarh Batik
            </span>
            <span aria-hidden="true">·</span>
            <span>Doctoral Creative Portfolio</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Ujjain Batik GI Tag (2023)</span>
            <span>SSM Tex Lab Certified (SAR 26-27-610)</span>
            <span>UNESCO Bhimbetka Rock Art</span>
          </div>

          <div>
            © 2026 Rupal Joshi · All research & design rights reserved
          </div>
        </div>
      </footer>

      {/* Floating Audio Console */}
      <AudioPanel
        isAudioActive={isAudioActive}
        onAudioStateChange={(active) => setIsAudioActive(active)}
      />

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
                  बाटिक: Every Craft Has a Story
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
                <strong>Author / Researcher:</strong> Rupal Joshi (Doctoral Research & Creative Portfolio)
              </p>
              <p>
                <strong>Original Presentation:</strong> 45-page doctoral defense deck (`final_5623be0e.pdf`) organized across 6 parts: About Bhairavgarh, The Craftsmen, History of Batik, How Batik is Made, Reviving the Craft, and The Road Ahead.
              </p>
              <p>
                <strong>Key Findings & Scientific Validation:</strong>
                <br />1. Tested at SSM Tex Lab (Test ID SAR 26-27-610): Grade 4.0 dry rubbing fastness, Grade 4.0 light fastness on Blue Wool scale, and positive spot extraction confirming 100% pure natural dye.
                <br />2. Reintroduced 10 indigenous dyestuffs: Madder, Marigold, Indigo, Babool bark, Pomegranate peel, Catechu, Henna, Alkanet, Turmeric, and Iron-jaggery liquor.
                <br />3. Water efficiency: Reduced consumption to 22L per color cycle with 92% beeswax thermal reclamation.
              </p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-stone-200">
              <a
                href={IMAGES.pdf}
                download="Rupal_Joshi_Bhairavgarh_Batik_Presentation.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A44226] hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Thesis PDF</span>
              </a>
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
