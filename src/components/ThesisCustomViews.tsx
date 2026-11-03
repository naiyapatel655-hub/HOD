import React, { useState } from 'react';
import {
  COMMUNITY_CLOTHS,
  CommunityCloth,
  TEN_PRODUCTS_DATA,
  ProductCollectionItem,
  SSM_TEX_LAB_DATA,
  IMAGES
} from '../data/portfolioData';
import {
  CheckCircle2,
  Droplets,
  Layers,
  Sparkles,
  Award,
  Download,
  FileText,
  Clock,
  ArrowRight,
  Info,
  Palette,
  Eye
} from 'lucide-react';
import { SlideImageRipple } from './SlideImageRipple';

/**
 * Interactive Timeline (1930s to Today) from Thesis Slide 14
 */
export const BatikTimeline: React.FC = () => {
  const [activeEra, setActiveEra] = useState<number>(0);

  const eras = [
    {
      era: "1930s–40s",
      title: "Chemical Indigo Influx",
      text: "Chemical synthetic indigo replaces natural plant indigo, which traditionally required 15 days of anaerobic fermentation to mature in earthen vats.",
      tag: "Chemical Shift"
    },
    {
      era: "1947",
      title: "Ratlam Forest Madder",
      text: "Natural madder roots arrive through the nomadic Banjara community traded from the deciduous forests of Ratlam, fueling traditional Lugda dyeing.",
      tag: "Botanical Trade"
    },
    {
      era: "1957–58",
      title: "Block Print Contraction",
      text: "Traditional block-print market faces industrial mill competition; the first Bhairavgarh weaver-printer cooperative society is formally established.",
      tag: "Cooperative Birth"
    },
    {
      era: "1960–73",
      title: "Export Boom & Tin Chloride",
      text: "Massive export boom. Tin-chloride chemical resist printing overtakes traditional mud-and-wax resists due to speed requirements.",
      tag: "Export Era"
    },
    {
      era: "1980s",
      title: "Wax Batik & Naphthol Dominance",
      text: "Batik replaces tin-chloride printing; hazardous toxic synthetic naphthol, indigosol, and reactive dyes entirely displace traditional natural color vats.",
      tag: "Synthetic Takeover"
    },
    {
      era: "Today",
      title: "Revival & 2023 GI Protection",
      text: "Batik is the village's principal craft. While historic blocks dwindled from 1,500 to 60, the 2023 GI Tag and doctoral natural-dye revival open an ethical future.",
      tag: "Sustainable Revival"
    }
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
          1930s – Today Historical Timeline · Thesis Slide 14
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
          Rise and Fall of a Central Indian Printing Village
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          "A classic case of a traditional printing area that went in search of a modern market, then could not compete in variety and price with Rajasthan and silk-screen prints." — <em>Saris of India</em>
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {eras.map((item, idx) => (
          <button
            key={item.era}
            onClick={() => setActiveEra(idx)}
            className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
              activeEra === idx
                ? 'bg-[#A44226] text-white border-[#A44226] shadow-sm'
                : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
            }`}
          >
            <span className={`text-xs font-mono font-bold ${activeEra === idx ? 'text-amber-200' : 'text-[#A44226]'}`}>
              {item.era}
            </span>
            <span className="text-xs font-medium line-clamp-2 mt-2">
              {item.title}
            </span>
            <span className={`text-[10px] font-mono mt-2 uppercase tracking-wider ${activeEra === idx ? 'text-stone-200' : 'text-stone-400'}`}>
              {item.tag}
            </span>
          </button>
        ))}
      </div>

      {/* Active Era Detail Box */}
      <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-serif font-bold text-stone-900">
            {eras[activeEra].era} — {eras[activeEra].title}
          </span>
          <span className="text-xs font-mono bg-stone-200 px-2.5 py-1 rounded text-stone-700">
            Phase {activeEra + 1} of 6
          </span>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          {eras[activeEra].text}
        </p>
      </div>
    </div>
  );
};

/**
 * Interactive Community Cloths Matrix (Thesis Slide 11 & 29)
 */
export const CommunityClothsMatrix: React.FC = () => {
  const [selectedCloth, setSelectedCloth] = useState<CommunityCloth>(COMMUNITY_CLOTHS[0]);

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
          Part 2: The Craftsmen · Thesis Slide 11 & 29
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
          A Cloth for Every Community: Caste-Specific Identity Textiles
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Historically in Malwa, every community wore its own custom printed cloth for religious, matrimonial, and communal gatherings, carefully differentiated by dye chemistry, ground color, and block motif.
        </p>
      </div>

      {/* 8 Community Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {COMMUNITY_CLOTHS.map((item) => {
          const isSelected = selectedCloth.community === item.community;
          return (
            <button
              key={item.community}
              onClick={() => setSelectedCloth(item)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-[#A44226] bg-[#A44226]/5 ring-2 ring-[#A44226]'
                  : 'border-stone-200 bg-stone-50 hover:bg-stone-100 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className="w-5 h-5 rounded-full border border-stone-300 shadow-2xs"
                  style={{ backgroundColor: item.chipColor }}
                />
                <span className="text-[10px] font-mono text-stone-400">Malwa</span>
              </div>
              <div className="mt-3">
                <div className="text-xs font-serif font-bold text-stone-900">
                  {item.community}
                </div>
                <div className="text-xs text-[#A44226] font-medium mt-0.5">
                  {item.cloth}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Focused Community Specimen View */}
      <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full border border-stone-300"
              style={{ backgroundColor: selectedCloth.chipColor }}
            />
            <span className="text-sm font-serif font-bold text-stone-900">
              {selectedCloth.community} Community — {selectedCloth.cloth}
            </span>
            <span className="text-xs font-mono text-stone-500">({selectedCloth.colorName})</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl font-sans">
            {selectedCloth.description}
          </p>
        </div>
        <div className="text-right text-[11px] font-mono text-stone-400 shrink-0">
          Source: R. Nema (2019) / Rupal Joshi Fieldwork
        </div>
      </div>
    </div>
  );
};

/**
 * Surviving Blocks Census (Thesis Slide 12 & 31)
 */
export const SurvivingBlocksCensus: React.FC = () => {
  const survivingNames = [
    "Bhairavgadi buta", "Burhani buta", "Dhoti buta", "Kamal gatta", "Mehraab", "Minar",
    "Peepal patta", "Haathi", "Titli", "Ghoda", "Tota", "Neem patti", "Laggad", "Bela",
    "Gulli", "Narelia", "Chokhdi", "Dhoti ki kinar", "Baadi bela", "Shahtoot", "Mandal",
    "Patashi", "Gaula", "Leheriya", "Aathiya", "Jawaariya", "Taakdaan", "Gaabla", "Khutri",
    "Chakri", "Phirma chakri", "Kalashwaali chakri", "Aamdaal", "Haathi pagga", "Chunri border",
    "Phool chokhdi", "Kherala", "Keri", "Jaalwaali keri", "Jabdaar", "Chaand", "Janjeri",
    "Kangura", "Bataana", "Safrekachaand", "Moongphali", "Tiles", "Pharde", "Haath-paan", "Paagdo", "Jhaaria"
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
          Woodblock Heritage Census · Thesis Slide 12 & 31
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
          From 1,500 Historic Blocks to Only 60–70 Surviving
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Originally, Bhairavgarh housed ~1,500 intricately carved teakwood blocks. Today, only 60 to 70 survive in hereditary family stores. Notably, animal and bird blocks remained beloved across religious lines.
        </p>
      </div>

      {/* KPI Pair */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-stone-50 border border-stone-200">
          <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-400">1,500</div>
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mt-1">
            Original Carved Teak Blocks (Peak)
          </div>
        </div>
        <div className="p-5 rounded-xl bg-[#A44226]/5 border border-[#A44226]/30">
          <div className="text-3xl sm:text-4xl font-serif font-bold text-[#A44226]">60–70</div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#A44226] mt-1">
            Surviving Blocks Documented (2026)
          </div>
        </div>
      </div>

      {/* Surviving Block Names Cloud */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block">
          Documented Surviving Block Names ({survivingNames.length} catalogued):
        </span>
        <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-3 bg-stone-50 border border-stone-200 rounded-xl">
          {survivingNames.map((name) => (
            <span
              key={name}
              className="text-xs font-mono bg-white border border-stone-200 text-stone-700 px-2.5 py-1 rounded-md"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Three Resist Families Comparison (Thesis Slide 13 & Page 10)
 */
export const ThreeResistFamilies: React.FC = () => {
  const families = [
    {
      name: "Bandhani",
      category: "Tied or Clamped",
      method: "Physical binding with thread or mechanical clamps so dye solution cannot penetrate the bound folds.",
      colorSystem: "Indigo and reactive dips; thread tension resists dye mechanically.",
      insight: "Tied cloth barrier"
    },
    {
      name: "Ajrakh",
      category: "Paste or Mud (Dabu)",
      method: "Slaked lime, Arabic gum, and clay paste applied through wooden blocks to resist indigo and madder baths.",
      colorSystem: "Mineral mordants control chemical bonding directly on the cellulose fibers.",
      insight: "Chemical & mud resist"
    },
    {
      name: "Batik",
      category: "Molten Wax",
      method: "Hydrophobic wax barrier (beeswax/paraffin) applied hot, cooling instantly, and cleanly removed in boiling water.",
      colorSystem: "Wax is a purely physical barrier, not a chemical mordant! Plant dyes enter through mordant sites alone.",
      insight: "Hydrophobic thermal barrier"
    }
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
          Comparative Resist Morphology · Thesis Slide 13
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
          What is Batik? One of Three Ancient Indian Resist Families
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Understanding why natural plant chemistry integrates effortlessly into batik: wax acts as an inert physical barrier, requiring zero chemical alterations to accept organic dyestuffs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {families.map((fam, idx) => (
          <div
            key={fam.name}
            className={`p-5 rounded-xl border flex flex-col justify-between space-y-4 ${
              fam.name === 'Batik'
                ? 'bg-amber-50/50 border-amber-300 shadow-xs'
                : 'bg-stone-50 border-stone-200'
            }`}
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block">
                {fam.category}
              </span>
              <h4 className="text-xl font-serif font-bold text-stone-900">
                {fam.name}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {fam.method}
              </p>
            </div>
            <div className="pt-3 border-t border-stone-200 text-xs font-mono text-stone-700">
              <span className="font-semibold text-stone-900">Key Mechanism: </span>
              {fam.insight}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-700 leading-relaxed font-sans">
        <strong className="text-stone-900 font-serif">Crucial Scientific Implication:</strong> Because molten wax is an inert physical hydrophobic mask, natural plant extracts (madder, marigold, indigo, catechu) bind naturally to the exposed mordanted cotton without attacking or compromising the wax pattern.
      </div>
    </div>
  );
};

/**
 * 6-Step Batik Workflow (Thesis Slide 18 & 33)
 */
export const BatikSixStepWorkflow: React.FC = () => {
  const steps = [
    { num: 1, title: "Pre-treat", desc: "Wash grey kora cloth in soapnut (aritha) to remove dust, size starches, and natural impurities, then thoroughly sun-dry." },
    { num: 2, title: "Wax", desc: "Apply molten wax blend (70:30 paraffin/beeswax) at 55–60.5°C over a damp sand table where the cloth must stay undyed." },
    { num: 3, title: "Dye", desc: "Immerse or hand-paint the fabric in cold plant dye bath (under wax melting point); waxed areas resist the dye liquor." },
    { num: 4, title: "Repeat", desc: "Re-wax and overdye for each additional tonal layer the design requires, building multi-chromatic depth." },
    { num: 5, title: "Dewax", desc: "Submerge dyed textile in rolling boiling water tank to melt and detach the wax, floating it for 92% reclaiming." },
    { num: 6, title: "Wash & Dry", desc: "Rinse in cold water until effluent runs completely clear, then shade-dry to preserve botanical brilliance." }
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
          Process Architecture · Thesis Slide 18 & 33
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
          How a Batik Cloth is Made: The 6-Step Cycle
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          From unbleached cotton to finished heritage textile: each stage represents calibrated thermodynamic and chemical control.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((st) => (
          <div key={st.num} className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#A44226] text-white text-xs font-mono font-bold flex items-center justify-center">
                {st.num}
              </span>
              <span className="text-sm font-serif font-bold text-stone-900">
                {st.title}
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              {st.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 5 Wax Application Methods (Thesis Slide 19 & 34)
 */
export const FiveWaxMethods: React.FC = () => {
  const methods = [
    {
      name: "Block Batik",
      badge: "Commonest & Most Scalable",
      detail: "Carved teak woodblock dipped into molten wax and stamped firmly over the damp sand table. Produces sharp geometric repeats and rhythmic borders."
    },
    {
      name: "Kalamkari Pen",
      badge: "Freehand Master Stylus",
      detail: "Coconut husk, yarn, or hair wound around a metal rod capillary tube. Draws freehand organic lines and contours finer than any woodblock."
    },
    {
      name: "Brush Batik",
      badge: "Expressive Fluid Grounds",
      detail: "Bristle brushes for sweeping textural washes. Cloth is suspended on wooden frames with copper hooks to prevent inadvertent drip errors."
    },
    {
      name: "Sponge Batik",
      badge: "Tactile Makeshift Textures",
      detail: "Hand-cut porous sponge blocks dipped in molten wax when precise carved woodblocks are unavailable, producing mottled organic textures."
    },
    {
      name: "Tzanting",
      badge: "Finest Javanese Lineage",
      detail: "A specialized copper or PVC pen reservoir with a fine precision nozzle, imported through Tagore's 1927 mission and mastered by only 2 artisans."
    }
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
          Artisan Techniques · Thesis Slide 19 & 34
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
          Five Ways to Apply Molten Wax in Bhairavgarh
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Tools improvised from local materials: coconut husk, yarn, sponge, and metal capillary tubes accommodate different design scales and fluidity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {methods.map((m, idx) => (
          <div key={m.name} className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-mono text-[#A44226] block font-bold">
                Method 0{idx + 1}
              </span>
              <h4 className="text-base font-serif font-bold text-stone-900 mt-1">
                {m.name}
              </h4>
              <span className="inline-block text-[10px] font-mono bg-stone-200 text-stone-700 px-2 py-0.5 rounded mt-1">
                {m.badge}
              </span>
              <p className="text-xs text-stone-600 leading-relaxed font-sans mt-2">
                {m.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Neela Lugda Traditional Process (Thesis Slide 21 & Page 15)
 */
export const NeelaLugdaDocumentation: React.FC = () => {
  const processSteps = [
    { step: 1, title: "Harda Pre-treatment", desc: "Unbleached cotton washed and soaked in myrobalan (harda) tannin to create chemical receptor sites for natural dyes." },
    { step: 2, title: "Mordant Block Printing", desc: "Carved wooden blocks stamp alum (for red alizarin development) and ferrous sulphate (for deep black) patterns." },
    { step: 3, title: "Padat Rakhna (Curing)", desc: "Printed fabric rests untouched for 7 to 8 days in the workshop to allow full fiber penetration and color maturation." },
    { step: 4, title: "Alizarin Dyeing", desc: "Cloth is simmered in large copper cauldrons with Dhawde flowers, magically revealing rich madder reds and iron blacks." },
    { step: 5, title: "Gar Mud Resist", desc: "A paste of yellow clay, lime, and Arabic gum is block-stamped to protect intricate borders and body motifs." },
    { step: 6, title: "Final Natural Indigo Dip", desc: "Cloth is plunged into fermented indigo vats, yielding the legendary deep blue field of the authentic Neela Lugda." }
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
          Archival Documentation · Thesis Slide 21 & Page 15
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
          The Authentic Neela Lugda: 6-Stage Traditional Process
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Reconstructed through deep fieldwork conversations with the hereditary Badwala family. The iconic blue veil worn by the Anjana Patel community represents Malwa's highest traditional textile achievement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {processSteps.map((s) => (
          <div key={s.step} className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#1E3A5F] text-white text-xs font-mono font-bold flex items-center justify-center">
                {s.step}
              </span>
              <h4 className="text-sm font-serif font-bold text-stone-900">
                {s.title}
              </h4>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 10 Physical Products Showcase (Thesis Slide 29 & Page 42)
 */
export const TenProductsShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCollectionItem>(TEN_PRODUCTS_DATA[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
            Physical Prototypes · Thesis Slide 29 & Page 42
          </span>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            Ten Products, Ten Natural Colours: The Prototype Capsule
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            A market-ready capsule spanning apparel, home furnishings, accessories, and stationery, proving that 10 locally sourced botanicals achieve full commercial versatility.
          </p>
        </div>
        <div className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 border border-stone-200 self-start sm:self-auto">
          10 / 10 Verified Prototypes
        </div>
      </div>

      {/* 10 Products Grid with Authentic Photos */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
        {TEN_PRODUCTS_DATA.map((prod) => {
          const isSelected = selectedProduct.id === prod.id;
          return (
            <button
              key={prod.id}
              onClick={() => setSelectedProduct(prod)}
              className={`group p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between overflow-hidden cursor-pointer ${
                isSelected
                  ? 'border-[#A44226] bg-[#A44226]/5 ring-2 ring-[#A44226] shadow-sm'
                  : 'border-stone-200 bg-stone-50 hover:bg-stone-100 hover:border-stone-300'
              }`}
            >
              {/* Product Photo Thumbnail */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-stone-200 mb-2.5">
                <img
                  src={prod.image}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/gdrive/DSC00823.jpeg';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay Badge */}
                <div className="absolute top-1.5 left-1.5 flex items-center gap-1 bg-black/60 backdrop-blur-xs px-1.5 py-0.5 rounded text-[10px] text-white font-mono">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/50"
                    style={{ backgroundColor: prod.colorHex }}
                  />
                  <span>{prod.category}</span>
                </div>
              </div>

              {/* Title & Dye info */}
              <div className="space-y-0.5 w-full">
                <div className="text-xs font-serif font-bold text-stone-900 line-clamp-1 group-hover:text-[#A44226] transition-colors">
                  {prod.name}
                </div>
                <div className="text-[11px] text-[#A44226] font-medium line-clamp-1">
                  {prod.dye}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Product Detail Card with Large Photo */}
      <div className="p-6 bg-[#FAF8F5] border border-stone-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Large Image Preview with Interactive Dye Water Ripples */}
        <div className="w-full md:w-5/12 relative">
          <SlideImageRipple
            src={selectedProduct.image}
            alt={selectedProduct.name}
            caption={`Prototype #${selectedProduct.id.toUpperCase()} · ${selectedProduct.dye} (${selectedProduct.colorName})`}
            aspectRatio="aspect-4/3"
          />
        </div>

        {/* Detailed Information */}
        <div className="w-full md:w-7/12 space-y-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase bg-[#A44226] text-white px-2.5 py-0.5 rounded">
                Prototype {selectedProduct.id.toUpperCase()}
              </span>
              <span className="text-xs font-mono bg-stone-200 px-2 py-0.5 rounded text-stone-700">
                {selectedProduct.category}
              </span>
            </div>

            <h4 className="text-2xl font-serif font-bold text-stone-900">
              {selectedProduct.name}
            </h4>

            <div className="text-xs font-mono text-[#A44226] font-semibold">
              Dye Source: {selectedProduct.dye} · <em className="italic">{selectedProduct.dyeScientific}</em>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
            {selectedProduct.description}
          </p>

          <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <div className="text-[11px] font-mono text-stone-500">SSM Tex Lab Fastness Verified</div>
              <div className="font-serif font-bold text-emerald-800">Test ID: SAR 26-27-610 · Grade 4 (Very Good)</div>
            </div>

            <button
              onClick={() => setLightboxImage(selectedProduct.image)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-[#A44226] text-white rounded-xl text-xs font-mono transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Fullscreen</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-stone-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all"
              aria-label="Close photo preview"
            >
              ✕
            </button>
            <img
              src={lightboxImage}
              alt={selectedProduct.name}
              referrerPolicy="no-referrer"
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl"
            />
            <div className="w-full text-center py-2 text-stone-300 font-serif text-sm">
              {selectedProduct.name} — Authentic Research Prototype Specimen ({selectedProduct.dye})
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * SSM Tex Lab Certificate Card (Thesis Slide 30 & Page 43)
 */
export const SSMTexLabCertificate: React.FC = () => {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xs">
      <div className="border-b border-stone-100 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#A44226]">
            Scientific Verification · Thesis Slide 30 & Page 43
          </span>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            SSM Tex Lab Certified Fastness: Test ID {SSM_TEX_LAB_DATA.testId}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Testing conducted at SSM Tex Lab, Ahmedabad (Dated {SSM_TEX_LAB_DATA.date}, Thesis Table 4.6).
          </p>
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center shrink-0">
          <span className="text-[10px] font-mono uppercase text-emerald-800 block">Spot Test Extraction</span>
          <span className="text-xs font-bold text-emerald-950 font-serif">100% Pure Natural Dye</span>
        </div>
      </div>

      {/* Ratings Bar Chart */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SSM_TEX_LAB_DATA.ratings.map((r) => {
          const pct = (r.score / r.max) * 100;
          return (
            <div key={r.parameter} className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-stone-900">{r.parameter}</span>
                <span className="font-mono font-bold text-stone-800">{r.score} / {r.max}</span>
              </div>
              <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#A44226] rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-stone-500">
                <span>{r.standard}</span>
                <span className="text-emerald-700 font-sans">{r.verdict}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lab Highlights Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
          <span className="text-xs font-mono uppercase text-stone-500">Light Fastness Rating</span>
          <div className="text-base font-serif font-bold text-stone-900">
            {SSM_TEX_LAB_DATA.lightFastness}
          </div>
          <p className="text-xs text-stone-600">Tested on international Blue Wool standard</p>
        </div>

        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
          <span className="text-xs font-mono uppercase text-stone-500">Water Consumption</span>
          <div className="text-base font-serif font-bold text-[#A44226]">
            {SSM_TEX_LAB_DATA.waterMetric}
          </div>
          <p className="text-xs text-stone-600">68% reduction compared to synthetic azo dyeing</p>
        </div>

        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
          <span className="text-xs font-mono uppercase text-stone-500">Care Instructions</span>
          <div className="text-base font-serif font-bold text-stone-900">
            {SSM_TEX_LAB_DATA.careInstruction}
          </div>
          <p className="text-xs text-stone-600">Maintains alizarin & indigo vibrancy over years</p>
        </div>
      </div>
    </div>
  );
};
