import React, { useState } from 'react';
import { PROTOTYPES_DATA, PrototypeItem } from '../data/portfolioData';
import { Maximize2, X, Clock, Sparkles, Layers, Info } from 'lucide-react';
import { soundscape } from '../utils/soundscape';

type CategoryFilter = 'All' | 'Apparel' | 'Home Furnishing' | 'Accessories' | 'Stationery';

export const PrototypeGallery: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [selectedProto, setSelectedProto] = useState<PrototypeItem | null>(null);
  const [activeHotspotIdx, setActiveHotspotIdx] = useState<number | null>(null);
  const [activeImageKey, setActiveImageKey] = useState<'primary' | 'secondary'>('primary');

  const filteredItems = filter === 'All'
    ? PROTOTYPES_DATA
    : PROTOTYPES_DATA.filter(p => p.category === filter);

  return (
    <div className="space-y-8">
      {/* Category Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-[#A44226]">
            Doctoral Physical Proof · 10 Prototypes
          </span>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mt-0.5">
            Prototype Galleries: Apparel, Home Furnishing & Accessories
          </h3>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 rounded-xl">
          {(['All', 'Apparel', 'Home Furnishing', 'Accessories', 'Stationery'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => {
                soundscape.playPaperSlide();
                setFilter(cat);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === cat ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Prototype Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((proto) => (
          <div
            key={proto.id}
            className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 transition-all flex flex-col shadow-xs"
          >
            {/* Image Container with Interactive Hotspots */}
            <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
              <img
                src={proto.image}
                alt={proto.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/assets/gdrive/DSC00823.jpeg';
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />

              {/* Top Meta Tag */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white/95">
                {proto.category}
              </div>

              {/* Lightbox Trigger */}
              <button
                onClick={() => {
                  soundscape.playBronzeChime();
                  setSelectedProto(proto);
                }}
                aria-label="Inspect prototype in lightbox"
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white rounded-lg transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Clickable Hotspots */}
              {proto.hotspots.map((hs, hIdx) => (
                <div
                  key={hs.title}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/hs cursor-pointer"
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  onClick={() => {
                    soundscape.playBronzeChime();
                    setSelectedProto(proto);
                    setActiveHotspotIdx(hIdx);
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-[#A44226] opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-[#A44226] text-white text-[10px] font-mono items-center justify-center border-2 border-white shadow-md">
                      {hIdx + 1}
                    </span>
                  </div>

                  {/* Hotspot Hover Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover/hs:block w-48 bg-stone-900 text-white p-2.5 rounded-lg text-xs z-30 shadow-xl pointer-events-none">
                    <div className="font-semibold text-amber-200">{hs.title}</div>
                    <div className="text-[11px] text-stone-300 mt-1 line-clamp-2">{hs.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-serif font-bold text-stone-900">
                    {proto.name}
                  </h4>
                  <span className="text-xs font-mono text-stone-500 inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {proto.artisanHours}h Craft
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {proto.description}
                </p>
              </div>

              {/* Technical Spec Matrix */}
              <div className="pt-3 border-t border-stone-100 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2 bg-stone-50 rounded">
                  <span className="text-stone-400 block uppercase">Botanical Dye</span>
                  <span className="text-stone-800 font-medium truncate block">{proto.dyeSource.split('(')[0]}</span>
                </div>
                <div className="p-2 bg-stone-50 rounded">
                  <span className="text-stone-400 block uppercase">Motif Provenance</span>
                  <span className="text-stone-800 font-medium truncate block">{proto.motifSource.split('(')[0]}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedProto(proto)}
                className="w-full py-2.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-[#A44226] hover:text-white rounded-xl transition-all text-center"
              >
                Inspect Technical Dossier & Hotspots
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedProto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => {
            setSelectedProto(null);
            setActiveHotspotIdx(null);
          }}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Left: Image */}
            <div className="md:w-1/2 bg-stone-950 relative min-h-[340px] flex flex-col items-center justify-center overflow-hidden">
              <img
                src={activeImageKey === 'secondary' && selectedProto.secondaryImage ? selectedProto.secondaryImage : selectedProto.image}
                alt={selectedProto.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/assets/gdrive/DSC00823.jpeg';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-mono px-3 py-1 rounded">
                {activeImageKey === 'secondary' ? 'Detail / Variation View' : 'Authentic Fieldwork Specimen'}
              </div>

              {selectedProto.secondaryImage && (
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-black/70 backdrop-blur-md p-1.5 rounded-xl">
                  <button
                    onClick={() => setActiveImageKey('primary')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      activeImageKey === 'primary' ? 'bg-[#A44226] text-white font-bold' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Main View
                  </button>
                  <button
                    onClick={() => setActiveImageKey('secondary')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      activeImageKey === 'secondary' ? 'bg-[#A44226] text-white font-bold' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Detail / Variant
                  </button>
                </div>
              )}
            </div>

            {/* Modal Right: Technical Specs */}
            <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest font-mono text-[#A44226]">
                    {selectedProto.category} · Prototype Specification
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                    {selectedProto.name}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedProto(null);
                    setActiveHotspotIdx(null);
                  }}
                  className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedProto.description}
              </p>

              {/* Detailed Breakdown */}
              <div className="space-y-3 border-t border-stone-200 pt-4">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                  Material & Chemistry Dossier
                </div>
                <dl className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <dt className="text-stone-500 font-mono">Dye Formulation</dt>
                    <dd className="font-medium text-stone-900 text-right">{selectedProto.dyeSource}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <dt className="text-stone-500 font-mono">Mineral Mordant</dt>
                    <dd className="font-medium text-stone-900 text-right">{selectedProto.mordant}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <dt className="text-stone-500 font-mono">Motif Origin</dt>
                    <dd className="font-medium text-stone-900 text-right">{selectedProto.motifSource}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-stone-100">
                    <dt className="text-stone-500 font-mono">Fabric Substrate</dt>
                    <dd className="font-medium text-stone-900 text-right">{selectedProto.fabricBase}</dd>
                  </div>
                  <div className="flex justify-between py-1">
                    <dt className="text-stone-500 font-mono">Artisan Handwork</dt>
                    <dd className="font-medium text-stone-900 text-right">{selectedProto.artisanHours} recorded hours</dd>
                  </div>
                </dl>
              </div>

              {/* Hotspot details selector */}
              <div className="space-y-2 border-t border-stone-200 pt-4">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
                  Feature Hotspots
                </div>
                <div className="space-y-2">
                  {selectedProto.hotspots.map((hs, i) => (
                    <div
                      key={hs.title}
                      onClick={() => setActiveHotspotIdx(i)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        activeHotspotIdx === i
                          ? 'border-[#A44226] bg-[#A44226]/5'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-semibold text-stone-900 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#A44226] text-white text-[10px] font-mono flex items-center justify-center">
                          {i + 1}
                        </span>
                        {hs.title}
                      </div>
                      <div className="text-stone-600 mt-1 pl-6 leading-relaxed">
                        {hs.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
