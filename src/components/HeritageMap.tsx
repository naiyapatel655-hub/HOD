import React, { useState } from 'react';
import { Compass, MapPin, Waves, Sparkles, Building2, Mountain } from 'lucide-react';

interface POI {
  id: string;
  name: string;
  category: 'Settlement' | 'Hydrology' | 'Archaeology' | 'Raw Material';
  coords: { x: number; y: number }; // percentage on map
  era: string;
  significance: string;
}

const POINTS_OF_INTEREST: POI[] = [
  {
    id: 'bhairavgarh',
    name: 'Bhairavgarh, Ujjain (Kshipra River)',
    category: 'Settlement',
    coords: { x: 42, y: 38 },
    era: '16th Century Mughal Era / Firoz Shah Tughlaq',
    significance: "The state's main wax-resist batik centre. Settled by migrant Chhipa printers along the Kshipra river for its alkaline mineral water that naturally fixes plant alizarin."
  },
  {
    id: 'bagh',
    name: 'Bagh, Dhar (Baghini River)',
    category: 'Settlement',
    coords: { x: 28, y: 64 },
    era: '400 Years Heritage',
    significance: "Direct block printing with madder and iron (deep red and black). Printers of Bagh learnt the technique of dyeing with alizarin and indigo from the artisans of Bhairavgarh."
  },
  {
    id: 'jawad',
    name: 'Jawad, Neemuch (Neemuch Region)',
    category: 'Settlement',
    coords: { x: 20, y: 25 },
    era: 'Traditional Dabu Cluster',
    significance: "Indigo-resist work with clay, gum, and lime paste (Dabu). Printers followed running water to establish craft roots."
  },
  {
    id: 'kshipra',
    name: 'Kshipra River Basin',
    category: 'Hydrology',
    coords: { x: 55, y: 55 },
    era: 'Sacred Alkaline Watercourse',
    significance: 'Its high alkaline mineral density (calcium carbonate & iron traces) serves as a natural mordant fixing bath, bonding plant alizarin and tannins without synthetic chemicals.'
  },
  {
    id: 'ujjain-temple',
    name: 'Ujjain & Mahakal Temple',
    category: 'Raw Material',
    coords: { x: 34, y: 58 },
    era: 'Religious Capital (1000+ Temples)',
    significance: 'Spiritual heart of Malwa. Daily discarded floral offerings (sacred marigolds) from temples are diverted from river waste to create solar yellow and ochre dye extracts.'
  },
  {
    id: 'bhimbetka',
    name: 'Bhimbetka Caves (UNESCO)',
    category: 'Archaeology',
    coords: { x: 78, y: 72 },
    era: 'Upper Paleolithic (30,000 BCE)',
    significance: '750+ prehistoric rock shelters containing humanity\'s earliest documented kinetic ritual art, the proprietary design vocabulary adapted into molten wax.'
  }
];

export const HeritageMap: React.FC = () => {
  const [selectedPoi, setSelectedPoi] = useState<POI>(POINTS_OF_INTEREST[0]);

  return (
    <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-8 shadow-xs">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs uppercase tracking-widest font-mono text-stone-500">
          Geographic Provenance · Slide 02
        </span>
        <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-stone-900 mt-1">
          400 Years of Chhipa Mastery on the Kshipra River
        </h3>
        <p className="text-sm text-stone-600 mt-1 max-w-2xl">
          The Chhipa community settled in Bhairavgarh during the Mughal era, drawn by the Kshipra River’s unique alkaline mineral composition.
        </p>
      </div>

      {/* Main Grid: Interactive Cartographic Map + POI Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Stylized Archival Vector Map Canvas */}
        <div className="lg:col-span-7 bg-[#F4EDE2] border border-[#D9CDB8] rounded-2xl p-6 relative overflow-hidden min-h-[420px] shadow-inner select-none">
          {/* Parchment texture simulation */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#8C6B4F 1px, transparent 1px)',
              backgroundSize: '12px 12px'
            }}
          />

          {/* Compass Rose */}
          <div className="absolute top-4 right-4 text-stone-700/60 flex flex-col items-center pointer-events-none">
            <Compass className="w-9 h-9" />
            <span className="text-[10px] font-mono tracking-widest mt-0.5">NORTH</span>
          </div>

          {/* Map Title Tag */}
          <div className="absolute top-4 left-4 bg-[#FAF8F5]/85 backdrop-blur-xs border border-stone-300 px-3 py-1.5 rounded-lg text-xs font-serif shadow-xs">
            <span className="font-bold text-stone-900 block">Malwa Craft Geography</span>
            <span className="text-[10px] font-mono text-stone-500">Madhya Pradesh, India</span>
          </div>

          {/* River & Topography SVG */}
          <svg viewBox="0 0 500 350" className="w-full h-full my-4">
            {/* Outline of Malwa Plateau */}
            <path
              d="M 40,50 Q 150,20 280,40 T 460,90 Q 480,220 420,300 T 220,330 Q 80,310 30,220 Z"
              fill="#EFE7D8"
              stroke="#D4C4AA"
              strokeWidth="2"
              strokeDasharray="4 2"
            />

            {/* Winding Kshipra River with label */}
            <path
              d="M 60,300 C 130,280 180,210 240,190 C 300,170 340,130 420,110 C 460,100 480,70 490,40"
              fill="none"
              stroke="#5E839B"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M 60,300 C 130,280 180,210 240,190 C 300,170 340,130 420,110 C 460,100 480,70 490,40"
              fill="none"
              stroke="#3B6785"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.85"
            />
            <text x="140" y="270" fill="#2A4B62" fontSize="12" fontFamily="serif" fontStyle="italic" opacity="0.9">
              Kshipra River (Alkaline Mineral Waters) ~ ~ ~
            </text>

            {/* Connecting ancient trade caravan route to Bhimbetka */}
            <path
              d="M 210,140 Q 300,180 390,260"
              fill="none"
              stroke="#9A3412"
              strokeWidth="2"
              strokeDasharray="5 3"
              opacity="0.6"
            />
            <text x="290" y="225" fill="#9A3412" fontSize="10" fontFamily="monospace" opacity="0.8">
              Archaeological Route (Bhimbetka Axis)
            </text>

            {/* POI Markers */}
            {POINTS_OF_INTEREST.map((poi) => {
              const isSelected = selectedPoi.id === poi.id;
              // Map percentage coords to SVG viewBox 500x350
              const cx = (poi.coords.x / 100) * 500;
              const cy = (poi.coords.y / 100) * 350;
              return (
                <g
                  key={poi.id}
                  onClick={() => setSelectedPoi(poi)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 14 : 9}
                    fill={isSelected ? '#A44226' : '#FAF8F5'}
                    stroke={isSelected ? '#FAF8F5' : '#A44226'}
                    strokeWidth="3"
                    className="transition-all duration-300 drop-shadow-md"
                  />
                  {isSelected && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r="20"
                      fill="none"
                      stroke="#A44226"
                      strokeWidth="1.5"
                      opacity="0.5"
                      className="animate-ping"
                    />
                  )}
                  <text
                    x={cx}
                    y={cy - 16}
                    textAnchor="middle"
                    fill="#1C1917"
                    fontSize="11"
                    fontFamily="serif"
                    fontWeight="bold"
                    className="drop-shadow-sm select-none"
                  >
                    {poi.name.split(' (')[0].split(' & ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Scale bar */}
          <div className="absolute bottom-4 left-4 bg-[#FAF8F5]/85 backdrop-blur-xs border border-stone-300 px-3 py-1 rounded text-[10px] font-mono flex items-center gap-2">
            <span className="w-8 h-1 bg-stone-800 inline-block" />
            <span>0 — 50 km (Kshipra Valley)</span>
          </div>
        </div>

        {/* Right: Selected POI Detail Dossier */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {POINTS_OF_INTEREST.map((poi) => (
              <button
                key={poi.id}
                onClick={() => setSelectedPoi(poi)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  selectedPoi.id === poi.id
                    ? 'bg-stone-900 text-white font-semibold shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {poi.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A44226]">
                {selectedPoi.category}
              </span>
              <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded">
                {selectedPoi.era}
              </span>
            </div>

            <h4 className="text-xl font-serif font-bold text-stone-900">
              {selectedPoi.name}
            </h4>

            <p className="text-xs text-stone-600 leading-relaxed">
              {selectedPoi.significance}
            </p>

            {/* Specialized callout per POI */}
            {selectedPoi.id === 'kshipra' && (
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1">
                <span className="font-semibold flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-blue-700" />
                  Hydro-Chemical Synergy:
                </span>
                <p className="text-[11px] text-blue-800 leading-relaxed">
                  The natural calcium carbonate in Kshipra waters elevates dye bath pH, creating deep red chelation with madder (Rubia cordifolia) that synthetic acid baths cannot replicate.
                </p>
              </div>
            )}

            {selectedPoi.id === 'bhimbetka' && (
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                <span className="font-semibold flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-amber-800" />
                  Prehistoric Cultural Provenance:
                </span>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Bhimbetka sits within the same geological corridor, providing the natural design vocabulary needed to differentiate Bhairavgarh from generic commercial prints.
                </p>
              </div>
            )}

            {selectedPoi.id === 'bhairavgarh' && (
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-700 space-y-1">
                <span className="font-semibold text-stone-900">Mughal Textile Heritage:</span>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  Famous for culturally vital textiles including the Lugda (traditional veil) and Chadar (bedsheet) dyed with madder red, indigo blue, and syahi black.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
