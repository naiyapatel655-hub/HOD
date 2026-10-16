import React, { useState } from 'react';
import { TECHNICAL_METRICS } from '../data/portfolioData';
import { Droplet, Award, CheckCircle, Calculator, ShieldCheck } from 'lucide-react';

export const LabEcoMetrics: React.FC = () => {
  const [productionMeters, setProductionMeters] = useState<number>(250);

  // Math for eco impact:
  // Synthetic benchmark consumes ~70L per 10m of fabric + 450g toxic sludge
  // Organic Revival uses 22L per 10m of fabric with 0g toxic sludge and 92% beeswax recovery
  const cycles = productionMeters / 10;
  const cleanWaterSavedLiters = Math.round(cycles * (70 - 22));
  const toxicSludgePreventedKg = (cycles * 0.45).toFixed(1);
  const beeswaxReclaimedKg = (cycles * 1.8 * 0.92).toFixed(1);
  const artisanIncomeGenerated = Math.round(cycles * 32); // in USD

  return (
    <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-8 shadow-xs">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs uppercase tracking-widest font-mono text-stone-500">
          Quantitative Verification · Slide 08
        </span>
        <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-stone-900 mt-1">
          Validating Technical Performance & Environmental Impact
        </h3>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">
          Natural chemistry does not require compromising commercial viability. ISO and AATCC certified lab testing (SSM Tex Lab) validates the new process.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Lab Durability Fastness Ratings */}
        <div className="lg:col-span-6 bg-white border border-stone-200 rounded-2xl p-6 space-y-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A44226] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              SSM Tex Lab Certified Fastness (Scale 1–5)
            </span>
            <span className="text-xs font-mono text-stone-500">ISO / AATCC</span>
          </div>

          <div className="space-y-4">
            {TECHNICAL_METRICS.fastness.map((item) => {
              const pct = (item.score / item.max) * 100;
              return (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-900">{item.label}</span>
                    <span className="font-mono font-bold text-stone-800">
                      {item.score.toFixed(1)} / {item.max.toFixed(1)}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#A44226] rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                    <span>{item.test}</span>
                    <span className="text-emerald-700 font-sans">{item.verdict}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Water Consumption Metric */}
          <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                <Droplet className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-blue-700">Water Consumption</div>
                <div className="text-xl font-bold font-mono text-blue-950">22L / Cycle</div>
              </div>
            </div>
            <div className="text-right text-[11px] font-mono text-blue-800">
              <div>7L mordant bath</div>
              <div>15L dye bath</div>
            </div>
          </div>
        </div>

        {/* Right: Interactive River Impact Calculator */}
        <div className="lg:col-span-6 bg-white border border-stone-200 rounded-2xl p-6 space-y-5 shadow-xs">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-[#A44226]" />
              Kshipra River Ecological Benefit Calculator
            </span>
          </div>

          {/* Interactive Yardage Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-stone-600">Simulate Production Volume:</span>
              <span className="font-bold text-[#A44226]">{productionMeters} Linear Meters</span>
            </div>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={productionMeters}
              onChange={(e) => setProductionMeters(parseInt(e.target.value))}
              className="w-full accent-[#A44226] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-stone-400">
              <span>50m (Boutique Capsule)</span>
              <span>1000m (Collection Run)</span>
              <span>2000m (Export Batch)</span>
            </div>
          </div>

          {/* Computed Ecological Results */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
              <span className="text-[10px] font-mono uppercase text-emerald-800 block">Clean Water Saved</span>
              <div className="text-xl font-bold font-mono text-emerald-950">
                {cleanWaterSavedLiters.toLocaleString()} L
              </div>
              <p className="text-[11px] text-emerald-800">vs toxic synthetic baseline</p>
            </div>

            <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
              <span className="text-[10px] font-mono uppercase text-emerald-800 block">Toxic Sludge Prevented</span>
              <div className="text-xl font-bold font-mono text-emerald-950">
                {toxicSludgePreventedKg} kg
              </div>
              <p className="text-[11px] text-emerald-800">Azo dyes kept out of Kshipra</p>
            </div>

            <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
              <span className="text-[10px] font-mono uppercase text-amber-800 block">Beeswax Reclaimed</span>
              <div className="text-xl font-bold font-mono text-amber-950">
                {beeswaxReclaimedKg} kg
              </div>
              <p className="text-[11px] text-amber-800">92% recycled closed loop</p>
            </div>

            <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
              <span className="text-[10px] font-mono uppercase text-amber-800 block">Cooperative Income</span>
              <div className="text-xl font-bold font-mono text-amber-950">
                ${artisanIncomeGenerated.toLocaleString()}
              </div>
              <p className="text-[11px] text-amber-800">6x standard piecework wages</p>
            </div>
          </div>

          <div className="text-[11px] text-stone-500 font-mono text-center">
            Zero heavy metals (Lead, Chromium VI, Cadmium) detected in treated wash water.
          </div>
        </div>
      </div>
    </div>
  );
};
