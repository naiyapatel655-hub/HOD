import React, { useState } from 'react';
import { Camera, PenTool, Sliders, Stamp, Check, RotateCcw } from 'lucide-react';

interface TranslationStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  technicalRule: string;
}

const STEPS: TranslationStep[] = [
  {
    step: 1,
    title: "1. Source Capture",
    subtitle: "Raw cave art photograph",
    description: "Archival photography of Paleolithic ochre hematite cave paintings from Bhimbetka Rock Shelters (UNESCO site), capturing the authentic kinetic vitality of stick-figure dancers and wild bison.",
    technicalRule: "Ethical documentation without disturbing rock shelter minerals or historical surface patina."
  },
  {
    step: 2,
    title: "2. Deconstruction",
    subtitle: "Digital line extraction",
    description: "Vector segmentation isolating the primary human gesture and anatomical proportions from background sandstone texture.",
    technicalRule: "Preserves the 30,000-year-old dynamic posture without smoothing away the organic prehistoric geometry."
  },
  {
    step: 3,
    title: "3. Stylization",
    subtitle: "Adjusting line weights for molten beeswax",
    description: "Optimizing vector pathways to accommodate the thermal viscosity and surface tension of molten pure beeswax applied at 55.0–60.5°C.",
    technicalRule: "Rule of thumb: Minimum line width must be ≥ 1.5mm to avoid premature cooling and wax clogging on the block face."
  },
  {
    step: 4,
    title: "4. Prototyping",
    subtitle: "Carved wooden block & final fabric print",
    description: "Master Chhipa woodcarver cuts seasoned Sheesham/Teak blocks with micro brass pin air-vents. Stamped onto handloom cotton before natural madder dye immersion.",
    technicalRule: "Double-striking registers calibrated for traditional border-and-field textile alignment."
  }
];

export const MotifTranslationFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [lineWidth, setLineWidth] = useState<number>(2.0); // mm
  const [stampedPositions, setStampedPositions] = useState<{ x: number; y: number }[]>([
    { x: 30, y: 50 },
    { x: 70, y: 50 }
  ]);

  const currentStepData = STEPS.find(s => s.step === activeStep) || STEPS[0];

  const handleFabricClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (stampedPositions.length < 8) {
      setStampedPositions([...stampedPositions, { x, y }]);
    }
  };

  const handleClearStamps = () => {
    setStampedPositions([]);
  };

  return (
    <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-8 shadow-xs">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs uppercase tracking-widest font-mono text-stone-500">
          Design Translation Pipeline · Slide 10
        </span>
        <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-stone-900 mt-1">
          Translating Prehistoric Art into Molten Wax
        </h3>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">
          How archaeological heritage is ethically and technically translated into a workable batik motif without losing its visual integrity.
        </p>
      </div>

      {/* 4-Step Interactive Flow Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {STEPS.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`text-left p-4 rounded-xl border transition-all ${
              activeStep === s.step
                ? 'border-[#A44226] bg-[#A44226]/5 shadow-xs'
                : 'border-stone-200 bg-white hover:border-stone-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-[#A44226]">
                0{s.step}
              </span>
              {s.step === 1 && <Camera className="w-4 h-4 text-stone-400" />}
              {s.step === 2 && <PenTool className="w-4 h-4 text-stone-400" />}
              {s.step === 3 && <Sliders className="w-4 h-4 text-stone-400" />}
              {s.step === 4 && <Stamp className="w-4 h-4 text-stone-400" />}
            </div>
            <div className="text-sm font-semibold text-stone-900 leading-snug">
              {s.title.split('. ')[1]}
            </div>
            <div className="text-xs text-stone-500 mt-1 line-clamp-1">
              {s.subtitle}
            </div>
          </button>
        ))}
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Dynamic Visual Translation Stage */}
        <div className="lg:col-span-6 bg-white border border-stone-200 rounded-2xl p-6 min-h-[360px] flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Stage Preview: {currentStepData.title}
            </span>
            <span className="text-xs font-mono text-[#A44226] bg-[#A44226]/10 px-2 py-0.5 rounded">
              {activeStep === 1 && 'Raw Hematite Red Pigment'}
              {activeStep === 2 && 'Pure Vector Geometry'}
              {activeStep === 3 && `Line Weight: ${lineWidth.toFixed(1)}mm`}
              {activeStep === 4 && 'Negative Wax Resist & Crackle'}
            </span>
          </div>

          {/* Graphical Render for current step */}
          <div className="my-6 flex items-center justify-center min-h-[220px]">
            {activeStep === 1 && (
              <div
                className="w-full h-56 rounded-xl relative overflow-hidden flex items-center justify-center p-4 border border-stone-200"
                style={{
                  backgroundColor: '#7A4836',
                  backgroundImage: 'radial-gradient(circle at 50% 50%, #8C533E 0%, #5C3224 100%)'
                }}
              >
                {/* Rock art sandstone texture */}
                <div className="absolute inset-0 opacity-40 mix-blend-color-burn" style={{
                  backgroundImage: 'radial-gradient(#22110c 1px, transparent 1px)',
                  backgroundSize: '4px 4px'
                }} />
                {/* Raw painted rock figure */}
                <svg viewBox="0 0 100 120" className="w-28 h-36 fill-[#451910] opacity-90 drop-shadow-sm">
                  {/* Dancing Paleolithic Human Motif */}
                  <circle cx="50" cy="18" r="7" />
                  <path d="M 50,25 L 50,55 M 50,33 L 25,20 L 15,35 M 50,33 L 75,20 L 85,35 M 50,55 L 32,80 L 22,105 M 50,55 L 68,80 L 78,105" stroke="#451910" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-stone-300 bg-black/40 px-2 py-0.5 rounded">
                  Bhimbetka Shelter III · C. 10,000 BCE
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="w-full h-56 rounded-xl bg-stone-50 border border-dashed border-stone-300 flex items-center justify-center p-4 relative">
                {/* Blueprint grid */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }} />
                {/* Clean vector extraction */}
                <svg viewBox="0 0 100 120" className="w-28 h-36 relative z-10">
                  <circle cx="50" cy="18" r="6" fill="#1C1917" />
                  <path d="M 50,24 L 50,55 M 50,32 L 25,20 L 16,34 M 50,32 L 75,20 L 84,34 M 50,55 L 32,80 L 22,105 M 50,55 L 68,80 L 78,105" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-stone-500">
                  Digital Bezier Splines · Zero Smoothing Distortion
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="w-full h-56 rounded-xl bg-amber-50/60 border border-amber-200 flex flex-col items-center justify-center p-4 relative">
                <svg viewBox="0 0 100 120" className="w-28 h-36">
                  <circle cx="50" cy="18" r={5 + lineWidth} fill="#9A3412" />
                  <path
                    d="M 50,24 L 50,55 M 50,32 L 25,20 L 16,34 M 50,32 L 75,20 L 84,34 M 50,55 L 32,80 L 22,105 M 50,55 L 68,80 L 78,105"
                    stroke="#9A3412"
                    strokeWidth={lineWidth * 2.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <div className="w-full max-w-xs mt-3 flex items-center gap-3">
                  <span className="text-[11px] font-mono text-stone-600 shrink-0">Line: {lineWidth.toFixed(1)}mm</span>
                  <input
                    type="range"
                    min="1.0"
                    max="4.0"
                    step="0.2"
                    value={lineWidth}
                    onChange={(e) => setLineWidth(parseFloat(e.target.value))}
                    className="w-full accent-[#A44226]"
                  />
                </div>
                <div className="text-[10px] font-mono text-amber-800 mt-1">
                  {lineWidth < 1.5 ? '⚠️ Warning: Wax risks premature cooling (<1.5mm)' : '✓ Optimal thermal flow across block wood'}
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="w-full h-56 rounded-xl bg-[#A44226] text-white flex items-center justify-center p-4 relative overflow-hidden shadow-inner">
                {/* Crackled fabric finish */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5,10 Q80,40 140,110 T250,130 M150,10 L190,140 Q210,190 320,220 M40,180 Q100,150 180,170" stroke="#FFF" strokeWidth="1.5" fill="none" />
                </svg>
                <svg viewBox="0 0 100 120" className="w-28 h-36 relative z-10">
                  <circle cx="50" cy="18" r="7" fill="#FAF8F5" />
                  <path d="M 50,25 L 50,55 M 50,33 L 25,20 L 15,35 M 50,33 L 75,20 L 85,35 M 50,55 L 32,80 L 22,105 M 50,55 L 68,80 L 78,105" stroke="#FAF8F5" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-amber-100 bg-black/40 px-2 py-0.5 rounded">
                  Madder Red Bath · Negative Resist Print
                </div>
              </div>
            )}
          </div>

          <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-100">
            <span className="font-semibold text-stone-900">Technical Rule: </span>
            {currentStepData.technicalRule}
          </div>
        </div>

        {/* Right: Interactive Stamping Mini-Studio */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Interactive Fabric Strike-Off Canvas
            </label>
            <button
              onClick={handleClearStamps}
              className="text-xs font-mono text-stone-500 hover:text-stone-900 inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Stamped Fabric
            </button>
          </div>

          {/* Handloom Cotton Interactive Canvas */}
          <div
            onClick={handleFabricClick}
            className="w-full h-80 rounded-2xl border-2 border-dashed border-stone-300 relative cursor-crosshair overflow-hidden p-4 select-none group transition-all"
            style={{
              backgroundColor: '#B23A22'
            }}
            title="Click anywhere on the cloth to stamp molten beeswax motif!"
          >
            {/* Crackle vein texture */}
            <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,40 Q100,60 200,30 T400,60 M120,0 L140,200 Q200,280 340,320 M50,220 Q180,180 320,240" stroke="#FFF" strokeWidth="1.5" fill="none" />
            </svg>

            {/* Click instruction hint */}
            {stampedPositions.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 pointer-events-none p-6 text-center">
                <Stamp className="w-8 h-8 mb-2 opacity-80" />
                <span className="text-sm font-medium">Click anywhere to stamp the carved teak block</span>
                <span className="text-xs opacity-75 font-mono mt-1">Molten beeswax resist (58.5°C) · Madder ground</span>
              </div>
            )}

            {/* Render Stamped Motifs */}
            {stampedPositions.map((pos, idx) => (
              <div
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-in fade-in zoom-in duration-200"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <svg viewBox="0 0 80 100" className="w-14 h-18 fill-stone-100 filter drop-shadow">
                  <circle cx="40" cy="15" r="5" />
                  <path
                    d="M 40,20 L 40,46 M 40,28 L 20,17 L 12,28 M 40,28 L 60,17 L 68,28 M 40,46 L 26,68 L 18,88 M 40,46 L 54,68 L 62,88"
                    stroke="#FAF8F5"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            ))}

            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-white/90">
              {stampedPositions.length} Motifs Stamped · Teak Wood Block Strike-Off
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700 leading-relaxed">
            <span className="font-semibold text-stone-900">Fieldwork Insight: </span>
            Bhairavgarh Chhipas use a rhythmic three-point register tap with the base of the palm to ensure the molten wax penetrates deep into the handloom cotton fibers before setting.
          </div>
        </div>
      </div>
    </div>
  );
};
