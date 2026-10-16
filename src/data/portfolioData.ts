export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  pillar?: number;
  content: string;
  keyInsight?: string;
  speakerNotes: string;
  image?: string;
  accentColor: string;
}

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    title: "The Revival of Bhairavgarh Batik",
    subtitle: "Integrating 400 years of Chhipa mastery, natural plant chemistry, and India's oldest prehistoric design vocabulary into a sustainable future.",
    category: "Executive Case Study",
    content: "A master creative research project investigating the ecological restoration and brand repositioning of traditional wax-resist batik textiles in Bhairavgarh, Ujjain, Madhya Pradesh.",
    keyInsight: "By replacing toxic azo synthetic chemistry with 10 indigenous plant extractions and activating the 30,000-year-old Bhimbetka visual lexicon, the craft transitions from a low-margin commodity to a globally sought luxury heritage artform.",
    speakerNotes: "Welcome everyone. Today I'm presenting 'The Revival of Bhairavgarh Batik'—a design and chemistry research initiative addressing the dual crisis of ecological degradation and identity loss in one of Central India's most historic textile clusters.",
    image: "/src/assets/images/hero_bhairavgarh_batik_1792131005667.jpg",
    accentColor: "#A44226"
  },
  {
    id: 2,
    title: "400 Years of Chhipa Mastery on the Kshipra River",
    subtitle: "A legacy of mineral-water printing and handloom craft",
    category: "Historical Provenance",
    content: "The Chhipa community arrived in Bhairavgarh during the Mughal era, drawn by the Kshipra River's unique alkaline mineral composition. They established an enduring legacy of mordant and iron-acetate printing, producing culturally vital textiles like the Lugda (traditional veil) and Chadar (bedsheet) using a rich palette of madder red, indigo blue, and syahi (iron) black.",
    keyInsight: "The mineral density of the Kshipra River naturally acted as an optimal fixing catalyst, bonding botanical tannins to cellulose fibers for centuries.",
    speakerNotes: "Slide 2 contextualizes the deep heritage: the Chhipa printers weren't just decorative artists; they were empirical mineral chemists who settled specifically along the Kshipra river for its unique water profile.",
    image: "/src/assets/images/chhipa_artisan_woodblock_1792131007154.jpg",
    accentColor: "#A3704C"
  },
  {
    id: 3,
    title: "The Crisis of Ecology and Generic Branding",
    subtitle: "Synthetic displacement and the erosion of craft sovereignty",
    category: "Problem Definition",
    content: "Over the last five decades, industrial forces pushed the cluster into two existential crises:\n\n1. Ecological Toll: Industrial market pressure forced a rapid shift to cheap synthetic azo and naphthol dyes, causing severe heavy metal pollution and skyrocketing Chemical Oxygen Demand (COD) in the holy Kshipra River.\n\n2. Erased Identity: To survive price wars, artisans adapted to mass-market Indonesian and floral wax-resist styles. The distinctive Bhairavgarh vocabulary was obliterated, turning master printers into low-wage commodity pieceworkers.",
    keyInsight: "When craft loses its indigenous raw materials and unique local visual iconography, it enters an unwinnable race to the bottom against automated textile mills.",
    speakerNotes: "Here we examine the systemic breakdown: synthetic azo dyes poisoned the river and flattened the local design language into indistinguishable generic floral prints.",
    accentColor: "#C2410C"
  },
  {
    id: 4,
    title: "A Three-Pillar Architecture for Authentic Revival",
    subtitle: "Framework grounded in the 2023 Ujjain Batik GI Tag Activation",
    category: "Strategic Architecture",
    content: "To build a resilient future, the project architected a comprehensive 3-pillar framework anchored by the historic 2023 Geographical Indication (GI) registration:\n\n• Pillar 1: Re-centering the Artisan — Traditional wax-resist techniques & 100% pure beeswax formulation.\n• Pillar 2: Sustainable Chemistry — Reintroducing indigenous non-toxic botanical dyes & historic mordant alchemy.\n• Pillar 3: Prehistoric Innovation — Reclaiming Madhya Pradesh's 30,000-year-old Bhimbetka rock art vocabulary.",
    keyInsight: "Revival requires technical rigor across both material formulation and aesthetic distinction. A GI tag is merely legal paper unless backed by authentic physical products.",
    speakerNotes: "The strategic blueprint: Three interconnected pillars balancing artisan agency, organic plant chemistry, and regional archaeological design provenance.",
    accentColor: "#854D0E"
  },
  {
    id: 5,
    title: "Pillar I: Re-centering the Living Knowledge of the Chhipa",
    subtitle: "Fieldwork, workshop co-creation, and thermal beeswax formulation",
    category: "Pillar 1: Artisan Knowledge",
    pillar: 1,
    content: "Authentic revival cannot be dictated from an external academic lab. Through extensive fieldwork with over 40 master Chhipa families, the revival framework was built directly upon inherited muscle memory and tool mastery.\n\nKey Insight: The breakthrough was abandoning brittle commercial paraffin blends in favor of 100% pure unbleached beeswax applied at precisely 55–60.5°C. This prevents the wax from flaking off handloom cotton while granting master printers micro-control over the batik's signature crackle vein effect.",
    keyInsight: "Pure beeswax maintains molecular elasticity at ambient room temperatures, creating refined, intentional crackle networks instead of uncontrolled shatter.",
    speakerNotes: "Notice our fieldwork photos: hand-stylus tjanting precision alongside carved wooden blocks, and calibrating beeswax melting pots to 55-60.5 degrees Celsius.",
    image: "/src/assets/images/chhipa_artisan_woodblock_1792131007154.jpg",
    accentColor: "#A3704C"
  },
  {
    id: 6,
    title: "Pillar II: Formulating a Sustainable Organic Palette",
    subtitle: "10 locally-sourced botanical dye sources replace synthetic chemistry",
    category: "Pillar 2: Sustainable Chemistry",
    pillar: 2,
    content: "Moving away from toxic synthetic chemicals required matching Bhairavgarh's historic aesthetic with high-performing, locally harvested organic chemistry.\n\nThe foundational 10-dye spectrum includes:\n• Madder Root (Rubia cordifolia) for warm terracotta and crimson\n• Marigold Petals (Tagetes) for mustard and vibrant warm ochre\n• Natural Indigo (Indigofera tinctoria) for rich cobalt and midnight navy\n• Babool Bark (Acacia nilotica) & Pomegranate Peel (Punica granatum) for dense tannins and earthy tones.",
    keyInsight: "Every raw botanical dye source is renewable, 100% biodegradable, and locally accessible within Madhya Pradesh and neighboring agricultural regions.",
    speakerNotes: "This slide details the botanical palette: raw roots, dried flower petals, fermenting vats, and tannin-rich tree barks arranged in traditional clay bowls.",
    image: "/src/assets/images/botanical_dyes_pigments_1792131008735.jpg",
    accentColor: "#B91C1C"
  },
  {
    id: 7,
    title: "The Chemistry of Color: Multiplying Yield Through Mordants",
    subtitle: "Doubling the color offering through historic Syahi iron liquor alchemy",
    category: "Pillar 2: Sustainable Chemistry",
    pillar: 2,
    content: "The Dye-Mordant Matrix demonstrates how a single botanical extract transforms into multiple distinct hues depending on the mineral bond:\n\n• Catechu Resin: Alum Pre-mordant -> Terracotta | Syahi Iron Liquor -> Deep Chocolate\n• Pomegranate Peel: Alum Pre-mordant -> Vibrant Mustard | Syahi Iron Liquor -> Moss Olive\n• Babool Bark: Alum Pre-mordant -> Warm Tan | Syahi Iron Liquor -> Slate Grey\n\nKey Insight: By reintroducing Syahi (fermented rusted scrap iron and jaggery)—a technique native to Bhairavgarh—artisans double their color palette without purchasing any additional raw dye materials.",
    keyInsight: "Zero-cost color expansion: waste scrap iron shavings + jaggery ferment produce rich iron tannate complexes that fix permanently to the fiber.",
    speakerNotes: "The Dye-Mordant matrix is where sustainable chemistry shines. Using historic Syahi ferment, artisans achieve rich chocolates, moss olives, and slate greys from the exact same botanical baths.",
    accentColor: "#4D7C0F"
  },
  {
    id: 8,
    title: "Validating Technical Performance and Environmental Impact",
    subtitle: "ISO and AATCC certified lab testing at SSM Tex Lab",
    category: "Lab Validation",
    content: "Natural plant chemistry does not require compromising commercial viability. Rigorous ISO and AATCC certified laboratory testing validates the new process:\n\n• Dry Rubbing Fastness: 4.0 / 5.0 (High commercial durability)\n• Light Fastness (Blue Wool Scale): 4.0 / 5.0 (Resilient to solar fading)\n• Wash Fastness Average: 3.5 / 5.0 (Stable through repeated home laundering)\n\nEcological Impact: Total water consumption is contained to 22L per production cycle (7L mordant + 15L dye bath). The effluent is completely non-toxic and free of heavy metals, protecting the Kshipra River.",
    keyInsight: "Commercial test ratings prove natural dyes can meet rigorous export apparel and home goods standards while maintaining zero toxic river effluent.",
    speakerNotes: "Rigorous quantitative verification: SSM Tex Lab testing shows 4.0 rubbing and light fastness. Water consumption is down to 22L per cycle with zero heavy metals.",
    accentColor: "#1D4ED8"
  },
  {
    id: 9,
    title: "Pillar III: An Untapped 30,000-Year-Old Design Vocabulary",
    subtitle: "Reclaiming the UNESCO World Heritage rock art of Bhimbetka",
    category: "Pillar 3: Prehistoric Design",
    pillar: 3,
    content: "To escape generic commodity competition, the revival required a design identity uniquely rooted in Madhya Pradesh. Located just a short distance from the cluster lies the UNESCO World Heritage site of Bhimbetka—home to over 750 rock shelters dating back 30,000 years to the Upper Paleolithic.\n\nBy ethically adapting these prehistoric motifs—dynamic stick-figure communal dancing rituals, hunters with ceremonial spears, and magnificent wild bison and deer—Bhairavgarh Batik establishes a proprietary aesthetic signature that no synthetic mass manufacturer can copy.",
    keyInsight: "Bhimbetka motifs are not just decorative patterns; they represent humanity's earliest documented communal creative expression, right in the artisans' home state.",
    speakerNotes: "Slide 9 highlights the artistic breakthrough: connecting Chhipa wax-resist craftsmanship with Bhimbetka's 30,000-year-old rock shelter pictographs.",
    image: "/src/assets/images/hero_bhairavgarh_batik_1792131005667.jpg",
    accentColor: "#9A3412"
  },
  {
    id: 10,
    title: "Translating Prehistoric Art into Molten Wax",
    subtitle: "Ethical deconstruction and line weight calibration for teak wood blocks",
    category: "Pillar 3: Prehistoric Design",
    pillar: 3,
    content: "Translating ancient rock paintings into workable batik motifs requires an ethical and technical 4-stage pipeline:\n\n1. Source Capture: Archival documentation of raw cave art pictographs.\n2. Deconstruction: Digital vector line extraction preserving human gesture.\n3. Stylization: Adjusting line weights and apertures to accommodate molten beeswax surface tension and viscosity at 55–60.5°C.\n4. Prototyping: Hand-carving seasoned teak wood blocks with brass pin micro-registers and producing test strike-offs on handloom cotton.",
    keyInsight: "Line weights must never drop below 1.5mm; otherwise, the molten beeswax cools prematurely on the block surface before bonding to the weave.",
    speakerNotes: "The four-step translation flowchart: from raw rock photography to digital vector extraction, thermal line calibration, and finally hand-carved woodblocks.",
    accentColor: "#B45309"
  },
  {
    id: 11,
    title: "Synthesizing the Process: Crafting a New Vocabulary",
    subtitle: "Exploded textile architecture honoring traditional border-and-field grammar",
    category: "Material Synthesis",
    content: "The unified workflow seamlessly integrates organic chemistry and prehistoric design while strictly honoring the traditional border-and-field grammar of historic Malwa textiles:\n\n• Base: 100% Handloom Cotton (Desi organic staple yarn)\n• Layer 1 (Chemistry): Alum Pre-mordant bath heated to 60°C to activate cellulose bonding sites\n• Layer 2 (Artisan & Design): Pure molten beeswax block print featuring Bhimbetka motifs\n• Layer 3 (Chemistry): Natural Madder Root dye immersion creating deep terracotta ground\n• Finish: Boiling water wash at 100°C to melt out pure beeswax (reclaimed for next cycle) and reveal the crisp, crackled white motifs.",
    keyInsight: "A zero-waste closed loop: 92% of the applied beeswax is skimmed from the boiling wash water, cooled, and remelted for subsequent batches.",
    speakerNotes: "Here is the exploded cross-section showing how chemistry, craft, and ancient design synthesize layer by layer into the finished textile.",
    accentColor: "#A44226"
  },
  {
    id: 12,
    title: "Prototype Gallery I: Premium Apparel",
    subtitle: "High-end resort wear and tailored modern silhouettes",
    category: "Prototypes & Application",
    content: "The apparel collection translates the research into contemporary, high-value fashion:\n\n• Prototype 01 — Terracotta Kaftan: Madder root dye over alum mordant on flowing handloom cotton-silk. Features stylized prehistoric dancing figures along the hem and sleeves, framed by organic crackle veining.\n\n• Prototype 02 — Warm Ochre Tailored Jacket: Marigold and blanket flower dye over alum mordant on structured handloom cotton. Accented with wild animal cave forms (Bison and Deer) and subtle crackle borders.",
    keyInsight: "Positioning the textiles as high-end contemporary resort wear unlocks 4x to 6x price premiums over traditional commodity dress materials.",
    speakerNotes: "Our apparel prototypes demonstrate how these archaeological motifs and natural hues elevate into modern luxury resort wear and structured jackets.",
    image: "/src/assets/images/prototype_apparel_collection_1792131008704.jpg",
    accentColor: "#B91C1C"
  },
  {
    id: 13,
    title: "Prototype Gallery II: Heritage Textiles & Home Goods",
    subtitle: "Archival sarees and luxury interior accents",
    category: "Prototypes & Application",
    content: "Expanding beyond apparel into luxury home interiors and formal heritage garments:\n\n• Prototype 03 — Charcoal Teak Runner: Fermented Syahi iron liquor printed over an Acacia tannin base, featuring prehistoric geometric rock patterns along the borders.\n\n• Prototype 04 — Chocolate Procession Saree: Catechu resin dye over iron liquor producing rich chocolate tones on handloom mulberry silk, detailed with narrative hunting and procession borders.",
    keyInsight: "Home goods and sarees have longer commercial lifespans and higher collectibility, providing consistent year-round income for artisan families.",
    speakerNotes: "The home and heritage collection includes the Syahi iron runner and the Catechu chocolate silk saree with complex narrative procession borders.",
    image: "/src/assets/images/heritage_textiles_saree_1792131008791.jpg",
    accentColor: "#451A03"
  },
  {
    id: 14,
    title: "Measuring the Transformation",
    subtitle: "Comparative analysis: Generic Present vs. Authentic Revival",
    category: "Comparative Impact",
    content: "A point-by-point quantitative and qualitative contrast illustrating the complete paradigm shift achieved:\n\n• Dye Source: Toxic synthetic azo & naphthol dyes  ➜  10 locally sourced organic extractions\n• Environmental Impact: Heavy river pollution & high COD  ➜  Zero toxic effluent; 100% safe for Kshipra river\n• Design Identity: Indistinguishable floral motifs  ➜  Exclusive, culturally rooted Bhimbetka heritage\n• Market Value: Low-margin commodity piecework  ➜  High-margin, premium sustainable fashion",
    keyInsight: "This transformation turns an environmentally distressed commodity cluster into a regenerative, high-margin cultural powerhouse.",
    speakerNotes: "Slide 14 provides the definitive before-and-after benchmark across chemistry, ecology, cultural identity, and artisan economics.",
    accentColor: "#059669"
  },
  {
    id: 15,
    title: "The Future of Authentic Bhairavgarh",
    subtitle: "Commercial activation, artisan IP protection, and supply chain scaling",
    category: "Future Roadmap",
    content: "The creative and scientific research proves that the revival of Bhairavgarh Batik is environmentally essential, technically viable, and market-ready. The three immediate activation vectors are:\n\n1. Leverage the 2023 Ujjain Batik GI Tag to enforce intellectual property protection against synthetic machine-printed knockoffs.\n2. Empower the Chhipa community—especially women artisans—through transparent direct-to-market pricing and profit sharing.\n3. Scale the regional organic supply chain to meet verified global demand for ethical, culturally authentic textiles.",
    keyInsight: "Sustainable revival is complete when master artisans regain creative autonomy, cultural dignity, and economic sovereignty.",
    speakerNotes: "To conclude: with the 2023 GI Tag in place, women artisans at the center, and a proven natural chemistry pipeline, Bhairavgarh Batik is ready to lead the future of Indian craft.",
    image: "/src/assets/images/hero_bhairavgarh_batik_1792131005667.jpg",
    accentColor: "#7C2D12"
  }
];

export interface DyeMatrixEntry {
  rawMaterial: string;
  scientificName: string;
  sourcePart: string;
  nativeColor: string;
  alumPreMordant: {
    name: string;
    hex: string;
    textDark: boolean;
    description: string;
  };
  syahiIronMordant: {
    name: string;
    hex: string;
    textDark: boolean;
    description: string;
  };
  unmordantedHex: string;
  fastnessRating: string;
  phSensitivity: string;
}

export const DYE_MATRIX_DATA: DyeMatrixEntry[] = [
  {
    rawMaterial: "Catechu Resin",
    scientificName: "Senegalia catechu",
    sourcePart: "Heartwood extract",
    nativeColor: "Amber brown",
    alumPreMordant: {
      name: "Terracotta Red-Brown",
      hex: "#9C4127",
      textDark: false,
      description: "Warm earthy brick hue with vibrant undertones; excellent light fastness."
    },
    syahiIronMordant: {
      name: "Deep Chocolate",
      hex: "#3D2314",
      textDark: false,
      description: "Rich dark espresso tone resulting from iron-tannate crystallization."
    },
    unmordantedHex: "#B86B3E",
    fastnessRating: "4.5 / 5.0",
    phSensitivity: "Stable in neutral-to-acidic pH (5.5 - 7.0)"
  },
  {
    rawMaterial: "Pomegranate Peel",
    scientificName: "Punica granatum",
    sourcePart: "Sun-dried fruit rinds",
    nativeColor: "Pale straw yellow",
    alumPreMordant: {
      name: "Mustard Ochre",
      hex: "#D49E24",
      textDark: true,
      description: "Golden warm mustard tone rich in ellagic acid tannins."
    },
    syahiIronMordant: {
      name: "Moss Olive",
      hex: "#5A5D33",
      textDark: false,
      description: "Complex sage-olive green formed by ferrous mordanting on high-tannin rinds."
    },
    unmordantedHex: "#E5BE53",
    fastnessRating: "4.0 / 5.0",
    phSensitivity: "Shifts to deep olive when alkaline"
  },
  {
    rawMaterial: "Babool Bark",
    scientificName: "Acacia nilotica",
    sourcePart: "Tree bark tannins",
    nativeColor: "Dull wood beige",
    alumPreMordant: {
      name: "Warm Tan",
      hex: "#A87A51",
      textDark: true,
      description: "Smooth caramel tan; traditional ground base for multi-color Lugda cloths."
    },
    syahiIronMordant: {
      name: "Slate Grey",
      hex: "#4E5561",
      textDark: false,
      description: "Cool mineral charcoal slate grey; highly wash-stable."
    },
    unmordantedHex: "#C29B72",
    fastnessRating: "4.5 / 5.0",
    phSensitivity: "Acidic wash preserves warm tones"
  },
  {
    rawMaterial: "Madder Root",
    scientificName: "Rubia cordifolia (Manjistha)",
    sourcePart: "Crushed dried taproot",
    nativeColor: "Rusty pink",
    alumPreMordant: {
      name: "Royal Crimson Terracotta",
      hex: "#B23A22",
      textDark: false,
      description: "The signature ancient Malwa red; alizarin binds permanently to alum sites."
    },
    syahiIronMordant: {
      name: "Aubergine Plum Black",
      hex: "#381E28",
      textDark: false,
      description: "Deep velvety burgundy-black used for outlining religious shrine cloths."
    },
    unmordantedHex: "#C75943",
    fastnessRating: "4.0 / 5.0",
    phSensitivity: "Requires calcium-rich water (Kshipra River alkalinity) for brilliance"
  },
  {
    rawMaterial: "Natural Indigo",
    scientificName: "Indigofera tinctoria",
    sourcePart: "Fermented leaf cake",
    nativeColor: "Greenish blue liquor",
    alumPreMordant: {
      name: "Cobalt Blue",
      hex: "#1E4B82",
      textDark: false,
      description: "Brilliant cobalt blue oxidized upon removal from reduction vat."
    },
    syahiIronMordant: {
      name: "Midnight Iron Navy",
      hex: "#102038",
      textDark: false,
      description: "Ultra-dark ink navy created through successive iron-assisted reduction dips."
    },
    unmordantedHex: "#2C5B96",
    fastnessRating: "4.5 / 5.0",
    phSensitivity: "Requires alkaline vat (pH 9-10) with slaked lime and jaggery"
  },
  {
    rawMaterial: "Marigold Petals",
    scientificName: "Tagetes erecta",
    sourcePart: "Temple waste flower heads",
    nativeColor: "Bright yellow",
    alumPreMordant: {
      name: "Solar Sun Yellow",
      hex: "#E09B13",
      textDark: true,
      description: "Luminous saffron yellow upcycled from Ujjain Mahakaleshwar temple offerings."
    },
    syahiIronMordant: {
      name: "Antique Khaki Olive",
      hex: "#6B663D",
      textDark: false,
      description: "Muted historical military khaki tone with subtle golden highlights."
    },
    unmordantedHex: "#F2B831",
    fastnessRating: "3.5 / 5.0",
    phSensitivity: "Sensitive to high alkali; fixed with mild alum"
  }
];

export interface PrototypeItem {
  id: string;
  name: string;
  category: "Apparel" | "Heritage Textiles";
  dyeSource: string;
  mordant: string;
  motifSource: string;
  fabricBase: string;
  description: string;
  artisanHours: number;
  image: string;
  hotspots: {
    x: number; // percentage
    y: number; // percentage
    title: string;
    detail: string;
  }[];
}

export const PROTOTYPES_DATA: PrototypeItem[] = [
  {
    id: "proto-kaftan",
    name: "Terracotta Prehistoric Kaftan",
    category: "Apparel",
    dyeSource: "Madder Root (Rubia cordifolia)",
    mordant: "Potassium Alum Pre-mordant (60°C)",
    motifSource: "Bhimbetka Cave Shelter III (Dancing figures ritual)",
    fabricBase: "100% Handloom Cotton-Silk (60s count)",
    description: "Flowing resort silhouette featuring stylized prehistoric dancing figures along the neckline and hem. The distinctive fine veining is produced through controlled thermal cracking of 100% pure beeswax.",
    artisanHours: 42,
    image: "/src/assets/images/prototype_apparel_collection_1792131008704.jpg",
    hotspots: [
      {
        x: 48,
        y: 28,
        title: "Madder Terracotta Dye",
        detail: "Naturally extracted from Himalayan Manjistha roots, delivering a deep, warm crimson without toxic heavy metal salts."
      },
      {
        x: 52,
        y: 48,
        title: "Pure Beeswax Crackle Control",
        detail: "Melted at 58.5°C to preserve flexibility during handling, producing micro-capillary crackle veins rather than brittle flaking."
      },
      {
        x: 43,
        y: 75,
        title: "Bhimbetka Dancing Figures",
        detail: "Human figures in celebration extracted from Cave 3 pictographs, calibrated for block print stamping."
      }
    ]
  },
  {
    id: "proto-jacket",
    name: "Warm Ochre Animal Motif Jacket",
    category: "Apparel",
    dyeSource: "Marigold Petals (Temple Upcycled) + Blanket Flower",
    mordant: "Alum Pre-mordant + Hard Kshipra Well Water",
    motifSource: "Bhimbetka Cave Shelter IV (Wild Bison & Antelope)",
    fabricBase: "Structured Handloom Khadi Denim (10 oz)",
    description: "Tailored unstructured jacket with raw white crackle silhouettes of prehistoric bison and deer charging across the breast and pockets. Fully compostable natural buttons and unbleached cotton lining.",
    artisanHours: 36,
    image: "/src/assets/images/prototype_apparel_collection_1792131008704.jpg",
    hotspots: [
      {
        x: 56,
        y: 35,
        title: "Wild Bison Resist Motif",
        detail: "Prehistoric animal profiles rendered in negative wax-resist space, highlighting the power of Upper Paleolithic line work."
      },
      {
        x: 54,
        y: 50,
        title: "Upcycled Marigold Dye",
        detail: "Extracted from discarded flower garlands from Ujjain's ancient temples, establishing a circular local supply chain."
      }
    ]
  },
  {
    id: "proto-saree",
    name: "Chocolate Narrative Procession Saree",
    category: "Heritage Textiles",
    dyeSource: "Catechu Heartwood Resin (Khair)",
    mordant: "Syahi Fermented Iron Scrap Liquor",
    motifSource: "Bhimbetka Shelter VII (Ceremonial Procession with Horned Animals)",
    fabricBase: "Handspun Chanderi Cotton-Silk Weave (5.5 meters)",
    description: "A monumental heritage drape bearing a continuous 45cm narrative border depicting hunters, ceremonial drummers, and royal elephants from prehistoric cave walls. The chocolate ground is achieved through a multi-pass iron-tannate reaction.",
    artisanHours: 96,
    image: "/src/assets/images/heritage_textiles_saree_1792131008791.jpg",
    hotspots: [
      {
        x: 45,
        y: 40,
        title: "Catechu Resin Darkening",
        detail: "Extracted from Acacia catechu heartwood, this tannin-dense liquor bonds with iron to form permanent non-fading chocolate."
      },
      {
        x: 58,
        y: 65,
        title: "Narrative Procession Border",
        detail: "Hand-stamped using a sequence of 6 interconnected carved teak blocks depicting prehistoric ritual marchers."
      }
    ]
  },
  {
    id: "proto-runner",
    name: "Charcoal Teak Geometric Table Runner",
    category: "Heritage Textiles",
    dyeSource: "Acacia Tannin Base + Fermented Iron Acetate",
    mordant: "Direct Iron Acetate Brush Strike",
    motifSource: "Bhimbetka Rock Art Geometric Petroglyphs",
    fabricBase: "Heavy Organic Canvas (320 GSM)",
    description: "Architectural home textile featuring intricate geometric rock engravings and petroglyphic grids. The deep matte charcoal is completely free of synthetic carbon black or coal tar derivatives.",
    artisanHours: 24,
    image: "/src/assets/images/heritage_textiles_saree_1792131008791.jpg",
    hotspots: [
      {
        x: 75,
        y: 62,
        title: "Geometric Rock Petroglyphs",
        detail: "Abstract rectilinear symbols found in the deepest Bhimbetka shelters, symbolizing sacred landscape boundaries."
      },
      {
        x: 82,
        y: 45,
        title: "Syahi Iron Liquor Ferment",
        detail: "Formulated with rusted nail scrap, jaggery molasses, and fermented buttermilk aged for 21 days."
      }
    ]
  }
];

export const TECHNICAL_METRICS = {
  fastness: [
    { label: "Dry Rubbing Fastness", score: 4.0, max: 5.0, test: "ISO 105-X12", verdict: "Excellent commercial grade" },
    { label: "Light Fastness", score: 4.0, max: 5.0, test: "AATCC 16 (Blue Wool)", verdict: "High UV degradation resistance" },
    { label: "Wash Fastness Average", score: 3.5, max: 5.0, test: "ISO 105-C06 (40°C)", verdict: "Safe for repeated household washing" },
    { label: "Wet Rubbing Fastness", score: 3.5, max: 5.0, test: "ISO 105-X12", verdict: "Zero color transfer under sweat/moisture" }
  ],
  waterUsage: {
    cycleTotalLiters: 22,
    mordantBathLiters: 7,
    dyeBathLiters: 15,
    savingVsSyntheticPercent: 68,
    reclaimedBeeswaxPercent: 92
  },
  comparison: [
    {
      metric: "Dye Chemistry",
      generic: "Toxic synthetic azo & naphthol salts with hazardous amines",
      revival: "10 locally harvested botanical & mineral extractions",
      impact: "Zero bioaccumulation risk for artisans & waterways"
    },
    {
      metric: "River Effluent & COD",
      generic: "High Chemical Oxygen Demand (COD > 1400 mg/L) & heavy metals",
      revival: "Compostable organic effluent (COD < 90 mg/L), heavy metals free",
      impact: "Safe for immediate agricultural irrigation or direct river discharge"
    },
    {
      metric: "Design Identity",
      generic: "Indistinguishable Indonesian & generic floral prints",
      revival: "Protected 30,000-year-old Bhimbetka rock art vocabulary",
      impact: "Defensible IP backed by 2023 Ujjain Batik GI Tag"
    },
    {
      metric: "Artisan Compensation",
      generic: "Low-margin commodity piecework ($2.50 / day)",
      revival: "Premium ethical cooperative model ($14.00 - $18.50 / day)",
      impact: "6x wage increase with 65% retained by women artisan collectives"
    }
  ]
};
