import React, { useState } from 'react';
import { DYE_MATRIX_DATA } from '../data/portfolioData';
import { FlaskConical, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { soundscape } from '../utils/soundscape';

export const DyeMatrixSimulator: React.FC = () => {
  const [selectedMaterialIdx, setSelectedMaterialIdx] = useState<number>(0);
  const [activeMordant, setActiveMordant] = useState<'alum' | 'syahi' | 'raw'>('alum');
  const [showCrackle, setShowCrackle] = useState<boolean>(true);

  const currentMaterial = DYE_MATRIX_DATA[selectedMaterialIdx];

  const activeColor =
    activeMordant === 'alum'
      ? currentMaterial.alumPreMordant
      : activeMordant === 'syahi'
      ? currentMaterial.syahiIronMordant
      : {
          name: `${currentMaterial.rawMaterial} (Unmordanted Base)`,
          hex: currentMaterial.unmordantedHex,
          textDark: true,
          description: "Raw unbonded organic pigment; susceptible to premature wash fade without mineral catalyst."
        };

  return (
    <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-8 shadow-xs">
      {/* Header kicker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-500">
            Interactive Laboratory Tool · Slide 07
          </span>
          <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-stone-900 mt-1">
            The Dye-Mordant Matrix Simulator
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Test how Bhairavgarh's indigenous mordants transform single botanical sources into double the color offerings without extra raw materials.
          </p>
        </div>

        {/* Crackle toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCrackle(!showCrackle)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              showCrackle
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5 inline mr-1.5" />
            {showCrackle ? 'Beeswax Crackle: Active' : 'Beeswax Crackle: Flat'}
          </button>
        </div>
      </div>

      {/* Main Grid: Selection + Swatch Chamber */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Botanical Selector */}
        <div className="lg:col-span-5 space-y-4">
          <label className="text-xs font-mono uppercase tracking-wider text-stone-500 block">
            1. Select Botanical Raw Material
          </label>
          <div className="space-y-2">
            {DYE_MATRIX_DATA.map((item, idx) => (
              <button
                key={item.rawMaterial}
                onClick={() => {
                  soundscape.playDropletSound();
                  setSelectedMaterialIdx(idx);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  selectedMaterialIdx === idx
                    ? 'border-[#A44226] bg-[#A44226]/5 shadow-xs'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div>
                  <div className="text-sm font-semibold text-stone-900">{item.rawMaterial}</div>
                  <div className="text-xs italic text-stone-500">{item.scientificName} · {item.sourcePart}</div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div
                    className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                    style={{ backgroundColor: item.alumPreMordant.hex }}
                    title={`Alum: ${item.alumPreMordant.name}`}
                  />
                  <div
                    className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                    style={{ backgroundColor: item.syahiIronMordant.hex }}
                    title={`Syahi: ${item.syahiIronMordant.name}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Mordant Catalyst Selector */}
          <div className="pt-2 space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-stone-500 block">
              2. Apply Mineral Mordant Catalyst
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  soundscape.playDropletSound();
                  setActiveMordant('alum');
                }}
                className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                  activeMordant === 'alum'
                    ? 'border-[#A44226] bg-[#A44226] text-white shadow-xs'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                }`}
              >
                <div className="font-semibold">Alum Salt</div>
                <div className="opacity-80 text-[11px]">60°C Pre-mordant</div>
              </button>

              <button
                onClick={() => {
                  soundscape.playDropletSound();
                  setActiveMordant('syahi');
                }}
                className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                  activeMordant === 'syahi'
                    ? 'border-[#2B2625] bg-[#2B2625] text-white shadow-xs'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                }`}
              >
                <div className="font-semibold">Syahi Liquor</div>
                <div className="opacity-80 text-[11px]">Iron Ferment</div>
              </button>

              <button
                onClick={() => {
                  soundscape.playDropletSound();
                  setActiveMordant('raw');
                }}
                className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                  activeMordant === 'raw'
                    ? 'border-stone-400 bg-stone-200 text-stone-900 shadow-xs'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                }`}
              >
                <div className="font-semibold">Unmordanted</div>
                <div className="opacity-80 text-[11px]">Pure Raw Wash</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Swatch Display & Chemical Breakdown */}
        <div className="lg:col-span-7 space-y-5">
          {/* Virtual Textile Swatch */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-stone-950 p-6 flex flex-col justify-between min-h-[340px]">
            {/* Color fill */}
            <div
              className="absolute inset-0 transition-colors duration-500 ease-out"
              style={{ backgroundColor: activeColor.hex }}
            />

            {/* Handloom Cotton Grain simulation overlay */}
            <div
              className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#000 1px, transparent 1px), radial-gradient(#fff 1px, transparent 1px)`,
                backgroundSize: '8px 8px',
                backgroundPosition: '0 0, 4px 4px'
              }}
            />

            {/* Pure Beeswax Batik Crackle SVG overlay */}
            {showCrackle && (
              <svg
                className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="crackleFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
                  <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" />
                </filter>
                <path
                  d="M10,20 Q120,40 180,120 T350,140 M220,10 L280,160 Q320,240 460,280 M80,260 Q140,200 240,220 T420,180 M30,120 Q90,140 140,240 T280,310 M380,40 Q390,120 460,190"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  fill="none"
                  strokeDasharray="2 1"
                />
                <path
                  d="M15,180 Q100,160 170,220 M200,90 Q270,110 320,60 M260,230 Q330,280 430,240"
                  stroke="#1A0A05"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            )}

            {/* Swatch Top Meta */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-mono text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md">
                100% Handloom Cotton Swatch
              </span>
              <span className="text-xs font-mono text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md">
                HEX {activeColor.hex}
              </span>
            </div>

            {/* Swatch Center Graphic: Bhimbetka Animal Silhouette */}
            <div className="relative z-10 flex flex-col items-center justify-center my-6">
              <svg
                viewBox="0 0 160 90"
                className="w-32 h-20 text-white/85 fill-current filter drop-shadow-md transition-transform duration-300 hover:scale-105"
              >
                {/* Stylized Prehistoric Bison */}
                <path d="M 20,45 Q 35,20 65,22 Q 95,20 125,32 Q 140,38 145,50 Q 140,58 130,55 L 125,75 L 115,75 L 118,55 L 90,55 L 85,75 L 75,75 L 80,52 Q 60,54 45,58 L 40,75 L 30,75 L 34,56 Q 25,55 20,45 Z M 40,28 Q 45,15 35,10 Q 50,15 50,25 Z" />
              </svg>
              <span className="text-[11px] font-mono tracking-widest uppercase text-white/75 mt-2">
                Bhimbetka Cave IV · Molten Beeswax Resist (58.5°C)
              </span>
            </div>

            {/* Swatch Bottom Meta */}
            <div className="relative z-10 bg-black/55 backdrop-blur-md rounded-xl p-4 text-white border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-base font-serif font-bold text-white tracking-wide">
                  {activeColor.name}
                </span>
                <span className="text-xs font-mono text-amber-300">
                  Fastness: {currentMaterial.fastnessRating}
                </span>
              </div>
              <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                {activeColor.description}
              </p>
            </div>
          </div>

          {/* Dye-Mordant Matrix Table (Directly from Slide 7) */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 overflow-x-auto">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5 text-[#A44226]" />
              The Authentic Dye-Mordant Matrix (Slide 7 Benchmark)
            </div>
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 font-mono">
                  <th className="py-2 pr-3">Raw Material</th>
                  <th className="py-2 px-3">Alum Pre-Mordant</th>
                  <th className="py-2 pl-3">Syahi Iron Liquor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {DYE_MATRIX_DATA.slice(0, 3).map((row, idx) => (
                  <tr
                    key={row.rawMaterial}
                    onClick={() => setSelectedMaterialIdx(idx)}
                    className={`cursor-pointer transition-colors ${
                      selectedMaterialIdx === idx ? 'bg-stone-50 font-medium' : 'hover:bg-stone-50/60'
                    }`}
                  >
                    <td className="py-2.5 pr-3 text-stone-900">{row.rawMaterial}</td>
                    <td className="py-2.5 px-3">
                      <span
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-white font-medium"
                        style={{ backgroundColor: row.alumPreMordant.hex }}
                      >
                        {row.alumPreMordant.name.split(' ')[0]}
                      </span>
                    </td>
                    <td className="py-2.5 pl-3">
                      <span
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-white font-medium"
                        style={{ backgroundColor: row.syahiIronMordant.hex }}
                      >
                        {row.syahiIronMordant.name}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Insight Box */}
          <div className="p-4 rounded-xl bg-[#F5EFEB] border border-stone-200/80 text-xs text-stone-700 leading-relaxed">
            <span className="font-semibold text-stone-900">Key Scientific Insight: </span>
            By reintroducing Syahi (fermented scrap iron and jaggery)—a technique native to Bhairavgarh—artisans can double their color offerings without sourcing additional raw materials.
          </div>
        </div>
      </div>
    </div>
  );
};
