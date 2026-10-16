import React, { useState } from 'react';
import { TECHNICAL_METRICS } from '../data/portfolioData';
import { AlertTriangle, CheckCircle, ShieldCheck, ArrowRightLeft } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [activeTab, setActiveTab] = useState<'visual' | 'matrix'>('visual');

  return (
    <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-8 shadow-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-500">
            Systemic Impact · Slides 03 & 14
          </span>
          <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-stone-900 mt-1">
            Measuring the Transformation
          </h3>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            A comprehensive quantitative and qualitative benchmark contrasting industrial degradation against regenerative revival.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/60 rounded-lg">
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === 'visual' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Visual Comparison Slider
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === 'matrix' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Audit Matrix Table
          </button>
        </div>
      </div>

      {activeTab === 'visual' ? (
        <div className="space-y-6">
          {/* Interactive Split-Screen Slider */}
          <div className="relative h-[380px] md:h-[420px] rounded-2xl overflow-hidden border border-stone-200 select-none shadow-sm">
            {/* Left Side: Generic Industrial Present */}
            <div className="absolute inset-0 bg-stone-900 flex flex-col justify-between p-6">
              {/* Synthetic Azo visual background simulation */}
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  background: 'linear-gradient(135deg, #701a75 0%, #1e1b4b 50%, #042f2e 100%)'
                }}
              >
                {/* Generic floral mass-printed pattern simulation */}
                <div
                  className="w-full h-full opacity-40"
                  style={{
                    backgroundImage: 'radial-gradient(#ec4899 4px, transparent 4px), radial-gradient(#a855f7 3px, transparent 3px)',
                    backgroundSize: '36px 36px',
                    backgroundPosition: '0 0, 18px 18px'
                  }}
                />
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-mono text-rose-300 bg-black/60 px-3 py-1 rounded">
                  Before: The Generic Present
                </span>
                <span className="text-xs font-mono text-rose-300 bg-black/60 px-3 py-1 rounded">
                  COD: 1,400+ mg/L
                </span>
              </div>

              <div className="relative z-10 max-w-xs space-y-2 text-white bg-black/65 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  Toxic Synthetic Azo Displacement
                </div>
                <p className="text-xs text-stone-200 leading-relaxed">
                  Heavy river pollution, hazardous naphthol salts, erased regional identity, and low-margin commodity race to the bottom ($2.50/day).
                </p>
              </div>
            </div>

            {/* Right Side: Authentic Organic Revival (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(${sliderPos}% 0%, 100% 0%, 100% 100%, ${sliderPos}% 100%)`
              }}
            >
              <div className="absolute inset-0 bg-[#A44226] flex flex-col justify-between p-6">
                {/* Natural Madder & Beeswax crackle simulation */}
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background: 'radial-gradient(circle at 60% 40%, #B23A22 0%, #6E2616 100%)'
                  }}
                >
                  <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,10 Q140,80 220,190 T480,210 M310,20 L370,180 Q420,290 560,340 M90,320 Q190,260 320,280 T590,240" stroke="#FAF8F5" strokeWidth="1.8" fill="none" />
                  </svg>
                </div>

                <div className="relative z-10 flex items-center justify-between ml-auto">
                  <span className="text-xs font-mono text-emerald-200 bg-black/60 px-3 py-1 rounded mr-3">
                    COD: &lt; 90 mg/L (Safe)
                  </span>
                  <span className="text-xs uppercase tracking-widest font-mono text-emerald-300 bg-black/60 px-3 py-1 rounded">
                    After: Authentic Revival
                  </span>
                </div>

                <div className="relative z-10 max-w-xs space-y-2 text-white bg-black/65 backdrop-blur-md p-4 rounded-xl border border-white/10 ml-auto">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    Regenerative Organic Chemistry
                  </div>
                  <p className="text-xs text-stone-200 leading-relaxed">
                    10 botanical dyes, 100% pure beeswax, 30,000-year Bhimbetka rock art vocabulary, and high-margin luxury fashion ($14–$18.50/day).
                  </p>
                </div>
              </div>
            </div>

            {/* Draggable Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-2xl flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-stone-900 shadow-lg flex items-center justify-center border border-stone-200">
                <ArrowRightLeft className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Transparent input slider overlay */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(parseFloat(e.target.value))}
              aria-label="Comparison slider position"
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            />
          </div>

          <div className="flex justify-between items-center text-xs font-mono text-stone-500">
            <span>← Drag slider to reveal Synthetic Crisis</span>
            <span>Drag slider to reveal Authentic Revival →</span>
          </div>
        </div>
      ) : (
        /* Matrix Table View (Slide 14) */
        <div className="overflow-x-auto bg-white border border-stone-200 rounded-xl p-4 shadow-2xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200 font-mono text-stone-500 uppercase">
                <th className="py-3 px-3">Dimension</th>
                <th className="py-3 px-3 text-rose-800 bg-rose-50/50">The Generic Present</th>
                <th className="py-3 px-3 text-emerald-800 bg-emerald-50/50">The Authentic Revival</th>
                <th className="py-3 px-3">Systemic Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {TECHNICAL_METRICS.comparison.map((item) => (
                <tr key={item.metric} className="hover:bg-stone-50/70 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-stone-900">{item.metric}</td>
                  <td className="py-3.5 px-3 text-rose-900 bg-rose-50/30 font-medium">{item.generic}</td>
                  <td className="py-3.5 px-3 text-emerald-900 bg-emerald-50/30 font-medium">{item.revival}</td>
                  <td className="py-3.5 px-3 text-stone-600 italic">{item.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 2023 GI Tag Legal Protection Banner */}
      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed">
          <span className="font-semibold">2023 Ujjain Batik GI Tag Activation: </span>
          The Geographical Indication certificate legally safeguards Bhairavgarh's wax-resist techniques from synthetic machine mill counterfeits, creating an unassailable legal moat for the artisan cooperative.
        </div>
      </div>
    </div>
  );
};
