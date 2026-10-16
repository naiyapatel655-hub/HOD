import React, { useState } from 'react';
import { Layers, Thermometer, Droplets, Flame, CheckCircle2 } from 'lucide-react';
import { soundscape } from '../utils/soundscape';

interface TextileLayer {
  id: number;
  name: string;
  category: 'Base' | 'Chemistry' | 'Artisan & Design' | 'Finish';
  temperature: string;
  description: string;
  chemicalAction: string;
  color: string;
  opacity: number;
  patternType: 'fabric' | 'liquid' | 'wax' | 'dye' | 'crackled';
}

const LAYERS: TextileLayer[] = [
  {
    id: 1,
    name: "Base: 100% Handloom Cotton",
    category: "Base",
    temperature: "Ambient (25°C)",
    description: "Desi organic hand-spun cotton woven on pit looms, providing maximum cellulose surface area and breathability.",
    chemicalAction: "Raw porous cellulose micro-fibrils awaiting mineral cation coordination sites.",
    color: "#F5EFE6",
    opacity: 1,
    patternType: "fabric"
  },
  {
    id: 2,
    name: "Layer 1: Alum Pre-mordant Bath",
    category: "Chemistry",
    temperature: "60°C Sustained",
    description: "Fabric is immersed in a heated potassium aluminum sulfate bath to coat fibers with metallic ions.",
    chemicalAction: "Al³⁺ cations establish coordinate covalent bonds with cotton hydroxyl (-OH) groups.",
    color: "#E2D9C8",
    opacity: 0.85,
    patternType: "liquid"
  },
  {
    id: 3,
    name: "Layer 2: Pure Beeswax Block Print",
    category: "Artisan & Design",
    temperature: "55.0°C – 60.5°C",
    description: "Molten 100% unbleached beeswax hand-stamped with hand-carved teak wood blocks bearing Bhimbetka prehistoric motifs.",
    chemicalAction: "Hydrophobic lipid barrier shields designated motif areas from subsequent dye bath absorption.",
    color: "#E5A93C",
    opacity: 0.9,
    patternType: "wax"
  },
  {
    id: 4,
    name: "Layer 3: Natural Madder Dye Bath",
    category: "Chemistry",
    temperature: "70°C – 80°C",
    description: "Immersion in hot aqueous Rubia cordifolia (Manjistha) dye liquor for rich terracotta crimson saturation.",
    chemicalAction: "Alizarin molecules bind aggressively to alum-mordanted exposed cotton, while controlled wax crinkles allow dye penetration.",
    color: "#A44226",
    opacity: 0.8,
    patternType: "dye"
  },
  {
    id: 5,
    name: "Finish: Boiling Water Dewaxing & Reveal",
    category: "Finish",
    temperature: "100°C Boiling",
    description: "Textile is plunged into rolling boiling water. Molten beeswax rises to the surface for collection; pristine crackled motifs emerge.",
    chemicalAction: "Thermal wax dissociation without chemical solvents. 92% beeswax reclaimed for next production cycle.",
    color: "#8B2F18",
    opacity: 0.95,
    patternType: "crackled"
  }
];

export const LayerVisualizer: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<number>(5);
  const [isExploded, setIsExploded] = useState<boolean>(true);

  const activeLayer = LAYERS.find(l => l.id === activeLayerId) || LAYERS[4];

  return (
    <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-8 shadow-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-500">
            Exploded Material Synthesis · Slide 11
          </span>
          <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-stone-900 mt-1">
            Synthesizing the Process: Crafting a New Vocabulary
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            The new workflow seamlessly integrates organic chemistry and prehistoric design while strictly honoring the traditional border-and-field grammar of Bhairavgarh textiles.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              isExploded
                ? 'bg-[#A44226] text-white border-[#A44226]'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5 inline mr-1.5" />
            {isExploded ? 'View: Exploded Stack' : 'View: Compressed Textile'}
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive 3D Stack + Layer Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Col: Exploded Layer Graphic */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-stone-100/70 border border-stone-200 rounded-2xl min-h-[440px] relative overflow-hidden">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#78716c 1px, transparent 1px), linear-gradient(to right, #78716c 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Perspective Container */}
          <div
            className="relative w-72 sm:w-80 h-80 flex items-center justify-center transition-all duration-700"
            style={{
              perspective: '1000px'
            }}
          >
            <div
              className="relative w-full h-full transition-all duration-700"
              style={{
                transform: 'rotateX(58deg) rotateZ(-38deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {LAYERS.map((layer, index) => {
                const isSelected = activeLayerId === layer.id;
                // Calculate z-offset in exploded view vs compressed view
                const zOffset = isExploded ? index * 52 : index * 8;
                return (
                  <div
                    key={layer.id}
                    onClick={() => {
                      soundscape.playBronzeChime();
                      setActiveLayerId(layer.id);
                    }}
                    className={`absolute inset-0 rounded-xl cursor-pointer transition-all duration-500 border ${
                      isSelected
                        ? 'ring-2 ring-[#A44226] ring-offset-2 ring-offset-stone-100 shadow-xl'
                        : 'shadow-md hover:scale-105'
                    }`}
                    style={{
                      transform: `translateZ(${zOffset}px)`,
                      backgroundColor: layer.color,
                      borderColor: isSelected ? '#A44226' : 'rgba(0,0,0,0.15)',
                      opacity: isSelected ? 1 : isExploded ? 0.92 : 0.8
                    }}
                  >
                    {/* Inner layer graphics */}
                    {layer.id === 1 && (
                      <div className="w-full h-full p-4 flex flex-col justify-between opacity-40">
                        <span className="text-[10px] font-mono font-bold text-stone-700">BASE · 100% HANDLOOM COTTON</span>
                        <div className="grid grid-cols-6 gap-2">
                          {Array.from({ length: 18 }).map((_, i) => (
                            <div key={i} className="h-0.5 bg-stone-400 rounded-full" />
                          ))}
                        </div>
                      </div>
                    )}

                    {layer.id === 2 && (
                      <div className="w-full h-full p-4 flex flex-col justify-between">
                        <span className="text-[10px] font-mono font-bold text-stone-800">LAYER 1 · ALUM MORDANT (60°C)</span>
                        <div className="text-center text-xs font-mono text-stone-700">Al³⁺ Coordinate Mesh</div>
                      </div>
                    )}

                    {layer.id === 3 && (
                      <div className="w-full h-full p-4 flex flex-col justify-between bg-amber-500/20">
                        <span className="text-[10px] font-mono font-bold text-amber-950">LAYER 2 · MOLTEN BEESWAX (58°C)</span>
                        <div className="flex justify-center items-center gap-4">
                          <svg viewBox="0 0 100 60" className="w-16 h-10 fill-amber-950">
                            <path d="M 10,30 Q 30,15 50,16 Q 70,15 85,25 L 80,45 L 75,45 L 76,35 L 55,35 L 52,45 L 45,45 L 48,32 Q 35,33 25,36 L 22,45 L 15,45 Z" />
                          </svg>
                          <span className="text-[10px] font-mono text-amber-900 font-bold">Bhimbetka Relief</span>
                        </div>
                      </div>
                    )}

                    {layer.id === 4 && (
                      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#A44226]/40">
                        <span className="text-[10px] font-mono font-bold text-white">LAYER 3 · MADDER DYE BATH</span>
                        <div className="text-center text-[11px] font-mono text-white/90">Rubia cordifolia Tannin Bond</div>
                      </div>
                    )}

                    {layer.id === 5 && (
                      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#902A12] text-white">
                        <span className="text-[10px] font-mono font-bold">FINISH · REVEALED CRACKLE BATIK</span>
                        <div className="text-center text-[10px] font-mono text-amber-200">
                          100°C Dewaxing Rinse · 92% Wax Reclaimed
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-xs font-mono text-stone-500 mt-4 text-center">
            Click any layer in the isometric stack to inspect temperature & chemical bonding.
          </div>
        </div>

        {/* Right Col: Active Layer Dossier */}
        <div className="lg:col-span-5 space-y-4">
          {/* Stepper buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {LAYERS.map(l => (
              <button
                key={l.id}
                onClick={() => setActiveLayerId(l.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  activeLayerId === l.id
                    ? 'bg-stone-900 text-white font-semibold shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                L{l.id}: {l.category}
              </button>
            ))}
          </div>

          {/* Active Layer Detail Card */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A44226]">
                {activeLayer.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md">
                <Thermometer className="w-3.5 h-3.5 text-[#A44226]" />
                {activeLayer.temperature}
              </div>
            </div>

            <h4 className="text-xl font-serif font-bold text-stone-900">
              {activeLayer.name}
            </h4>

            <p className="text-sm text-stone-600 leading-relaxed">
              {activeLayer.description}
            </p>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 block">
                Chemical & Physical Action
              </span>
              <p className="text-xs text-stone-700 font-mono leading-relaxed">
                {activeLayer.chemicalAction}
              </p>
            </div>

            {/* Closed Loop Stat */}
            {activeLayer.id === 5 && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <div className="text-xs text-emerald-900 leading-tight">
                  <span className="font-semibold">Closed-Loop Chemistry:</span> 92% of pure beeswax is skimmed from boiling wash water and recycled indefinitely.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
