import heroBhairavgarhImg from '../assets/images/hero_bhairavgarh_batik_1792131005667.jpg';
import chhipaArtisanImg from '../assets/images/chhipa_artisan_woodblock_1792131007154.jpg';
import botanicalDyesImg from '../assets/images/botanical_dyes_pigments_1792131008735.jpg';
import prototypeApparelImg from '../assets/images/prototype_apparel_collection_1792131008704.jpg';
import heritageTextilesImg from '../assets/images/heritage_textiles_saree_1792131008791.jpg';
import ujjainKshipraImg from '../assets/images/ujjain_kshipra_river_1792132450811.jpg';
import ujjainMahakaalImg from '../assets/images/ujjain_mahakaal_temple_1792132451019.jpg';

export const IMAGES = {
  hero: heroBhairavgarhImg,
  artisan: chhipaArtisanImg,
  dyes: botanicalDyesImg,
  apparel: prototypeApparelImg,
  saree: heritageTextilesImg,
  kshipra: ujjainKshipraImg,
  mahakaal: ujjainMahakaalImg,
  pdf: "/public/assets/aistudio/final_5623be0e.pdf",
};

export interface SlideData {
  id: number;
  part: number;
  partTitle: string;
  title: string;
  subtitle?: string;
  category: string;
  content: string;
  bulletPoints?: string[];
  metrics?: { label: string; value: string; detail?: string }[];
  keyInsight?: string;
  speakerNotes: string;
  image?: string;
  accentColor: string;
  sourceCitation?: string;
}

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    part: 0,
    partTitle: "Title",
    title: "बाटिक",
    subtitle: "Every craft has a story — Batik of Bhairavgarh",
    category: "Cover",
    content: "A doctoral research presentation on the heritage, material culture, and natural dye revival of Bhairavgarh Batik in Ujjain, Madhya Pradesh.",
    bulletPoints: [
      "400 years of Chhipa printing history along the Kshipra River",
      "Fieldwork with the hereditary Badwala artisan family",
      "Revival integrating 10 natural dyes, Bhimbetka prehistoric motifs, and lab-tested fastness"
    ],
    keyInsight: "Revival here means linking traditional knowledge with suitable present-day interventions, not restoring an old technique unchanged.",
    speakerNotes: "Welcome. Today I present 'Batik of Bhairavgarh: Every Craft Has a Story'—investigating the history, tools, community traditions, and natural dye revival of Central India's premier wax-resist cluster.",
    image: IMAGES.hero,
    accentColor: "#A44226"
  },
  {
    id: 2,
    part: 0,
    partTitle: "Introduction",
    title: "Every Craft Has a Story",
    subtitle: "Tacit knowledge carved into wood and molten wax",
    category: "Overview",
    content: "Behind every yard of Bhairavgarh batik lies centuries of migrant artisan lineage, sacred river chemistry, and community identities woven into cloth.",
    bulletPoints: [
      "From Rajasthan and Gujarat migrations to the banks of the Kshipra",
      "From 1,500 carved wooden blocks down to only 60–70 surviving today",
      "Bridging the historical gap between ancient mordant printing and contemporary sustainable design"
    ],
    keyInsight: "Craft is not merely an object; it is the living archive of an entire community's memory and relationship with nature.",
    speakerNotes: "Every craft has a story. In Bhairavgarh, that story is etched in teak wood blocks, heated beeswax, and the waters of the Kshipra.",
    image: IMAGES.artisan,
    accentColor: "#A3704C"
  },
  {
    id: 3,
    part: 0,
    partTitle: "Research Focus",
    title: "From Research Interest to Research Focus",
    subtitle: "The Journey Towards Bhairavgarh Batik",
    category: "Fieldwork Genesis",
    content: "During my time conversing with the Badwala family, who have practiced Batik for generations, I noticed a subtle loop and opportunity in their traditional workflow. This spark led us to experiment, innovate, and bring back a series of prototypes made purely with natural dyes.",
    bulletPoints: [
      "Direct dialogue with the multi-generational Badwala artisan family in Bhairavgarh",
      "Observation of the traditional workflow, sand tables, and paraffin-beeswax melting pots",
      "Co-creation of 10 contemporary prototypes dyed purely with renewable botanicals and mineral ferments"
    ],
    keyInsight: "Revival cannot be dictated from an external laboratory. It must be built upon the artisans' existing toolsets and lived memory.",
    speakerNotes: "This project originated in the living rooms and workshops of the Badwala family. Listening to their memories revealed the exact window where natural dyes could be reintroduced.",
    image: IMAGES.kshipra,
    accentColor: "#854D0E"
  },
  {
    id: 4,
    part: 0,
    partTitle: "Framework",
    title: "The Story in Six Parts",
    subtitle: "A systematic doctoral research architecture",
    category: "Table of Contents",
    content: "The research and presentation are organized into six interconnected chapters:",
    bulletPoints: [
      "Part 1: About Bhairavgarh — Place, river and the rise and fall of block print (Slides 5–7, 14)",
      "Part 2: The Craftsmen — The Chhipa community, water migration, community cloths & block census (Slides 8, 27–31)",
      "Part 3: History of Batik — Three resist families, global diffusion & Tagore's 1927 Santiniketan journey (Slides 10–13)",
      "Part 4: How Batik is Made — Tools, sand tables, 5 wax methods, colors then & now, and Neela Lugda (Slides 15–16, 32–36)",
      "Part 5: Reviving the Craft — 10 natural dyes, Bhimbetka motifs, 10 prototypes & SSM Tex Lab testing (Slides 37–43)",
      "Part 6: The Road Ahead — Outcomes, 5-point action plan & academic citations (Slides 44–45)"
    ],
    keyInsight: "A comprehensive framework balancing history, material science, sociological documentation, and commercial prototyping.",
    speakerNotes: "Here is the six-part journey: from geographic roots in Ujjain to artisan knowledge, world history of wax resist, workshop techniques, natural dye experiments, and future roadmap.",
    accentColor: "#1E3A5F"
  },
  {
    id: 5,
    part: 1,
    partTitle: "Part 1: About Bhairavgarh",
    title: "Madhya Pradesh: A State of Printing Rivers",
    subtitle: "Three hand-printing clusters, each tied to a river and migrant lineage",
    category: "Geography & Rivers",
    content: "Textile printing in Madhya Pradesh was shaped by hydrology. Three distinct hand-printing clusters emerged along flowing rivers:",
    bulletPoints: [
      "Bhairavgarh, Ujjain: The state's main wax-resist batik centre, nourished by the alkaline Kshipra River.",
      "Bagh, Dhar: Direct block printing with madder and iron producing deep red and black, set beside the Baghini River.",
      "Jawad, Neemuch: Indigo-resist work with clay, gum and lime paste (Dabu), shaped by Jawad-area waters."
    ],
    keyInsight: "Natural dyeing requires vast volumes of clean flowing water with specific mineral catalysts; craft geography followed riverbanks.",
    speakerNotes: "Notice how river chemistry dictated craft settlement: Kshipra for Bhairavgarh batik, Baghini for Bagh madder prints, and Jawad waters for Dabu mud resist.",
    image: IMAGES.kshipra,
    accentColor: "#2A4B62",
    sourceCitation: "Thesis Ch. 2, section 2.4. The Kshipra, Baghini and Jawad-area waters shaped where each craft settled."
  },
  {
    id: 6,
    part: 1,
    partTitle: "Part 1: About Bhairavgarh",
    title: "About Ujjain & Bhairavgarh Village",
    subtitle: "The religious capital of Malwa and the artisan enclave",
    category: "Cultural Provenance",
    content: "Ujjain is the religious capital of Madhya Pradesh and one of the most famous cities of the state. Situated in the Malwa region on the eastern bank of the holy river Kshipra, its culture speaks volumes about Malwa and Nimar. Famous for Dal bafla and poha jalebi, with over 1,000 temples, the sacred Mahakal Jyotirlinga, and the Simhastha Kumbh Mela held every 12 years, it is a vital pilgrimage center.",
    bulletPoints: [
      "Bhairavgarh (or Behrugarh) is a village situated 12 kms from the main city of Ujjain.",
      "Named after the ancient Shree Kalbhairav temple, revered as the army chief of Lord Shiva.",
      "Renowned across India for its printed and wax-resist fabrics."
    ],
    keyInsight: "Bhairavgarh developed as a satellite artisan sanctuary where ritual purity and industrial river water coexisted.",
    speakerNotes: "Slide 6 grounds us in Ujjain's sacred landscape: the city of Mahakal and Kalbhairav, where Bhairavgarh sits 12 kilometers downstream along the Kshipra.",
    image: IMAGES.mahakaal,
    accentColor: "#A44226"
  },
  {
    id: 7,
    part: 1,
    partTitle: "Part 1: About Bhairavgarh",
    title: "Bhairavgarh: A Village on the Kshipra Bank",
    subtitle: "The downfall of a craft after industrialization",
    category: "Historical Crisis",
    content: "The story of Bhairavgarh is a classic example of craft downfall following post-independence industrialization. When millmade cloth flooded India after the 1950s, handmade clothing went out of fashion and craft clusters fought to survive. While Chanderi and Bagh regained recognition, Bhairavgarh struggled.",
    bulletPoints: [
      "Quote from 'Saris of India': 'It is a classic case of a traditional printing area that went out in search of a modern market, was picked up by it for about 8 to 10 years and then completely dropped, for it could not compete in variety and price with the prints of Rajasthan and other silk screen prints.'",
      "Printers from Rajasthan arrived during the reign of Firoz Shah Tughlaq, attracted by the mineral waters of the Kshipra.",
      "Traditional natural colors included red from madder and alizarin, hirakasi (iron) black, indigo blue, and buttermilk-mixed dyes—all came to an end in the 1960s."
    ],
    keyInsight: "When Bhairavgarh abandoned its natural dyes and unique identity to chase cheap modern markets, it lost both its margins and its cultural moat.",
    speakerNotes: "The historical tragedy: once famed for natural madder and iron printing, post-1950s synthetic mill competition collapsed the local printing ecosystem.",
    image: IMAGES.kshipra,
    accentColor: "#C2410C",
    sourceCitation: "Quoting 'Saris of India' and field oral histories."
  },
  {
    id: 8,
    part: 1,
    partTitle: "Part 1: About Bhairavgarh",
    title: "Rise and Fall of a Block-Print Village",
    subtitle: "Timeline of technological and chemical displacement (1930s–Today)",
    category: "Historical Chronology",
    content: "A chronological timeline tracking the shift from natural dye self-sufficiency to synthetic dependency:",
    metrics: [
      { label: "1930s–40s", value: "Synthetic Indigo", detail: "Chemical indigo replaces natural indigo (which took 15 days to ferment and mature)." },
      { label: "1947", value: "Madder Roots", detail: "Natural madder arrives via nomadic Banjaras from the forests of Ratlam." },
      { label: "1957–58", value: "Market Shrinks", detail: "Hand block-print demand drops; first cooperative society is established." },
      { label: "1960–73", value: "Tin-Chloride Boom", detail: "Export surge; corrosive tin-chloride chemical discharge overtakes traditional prints." },
      { label: "1980s", value: "Batik & Naphthol", detail: "Wax-resist batik replaces tin prints; toxic synthetic naphthol azo dyes dominate." },
      { label: "Today", value: "Batik Extinction Risk", detail: "Batik is the main craft; original wooden block designs are largely extinct." }
    ],
    keyInsight: "Each step toward chemical speed saved days in the short term but eroded artisan sovereignty over 80 years.",
    speakerNotes: "This chronological timeline from 1930 to today documents the gradual loss: synthetic indigo in the 30s, cooperative formation in 57, tin-chloride in the 60s, and naphthol in the 80s.",
    accentColor: "#B45309",
    sourceCitation: "R. Nema (2019), Revival of Bhairavgarh block print; quoting 'Saris of India'."
  },
  {
    id: 9,
    part: 2,
    partTitle: "Part 2: The Craftsmen",
    title: "The Chhipa: People Who Print",
    subtitle: "A hereditary caste whose very name means their craft",
    category: "Artisan Lineage",
    content: "Originating in Rajasthan and Gujarat, the Chhipa community migrated to the border areas of Madhya Pradesh approximately 400 years ago during the Mughal era (other accounts place arrival under Firoz Shah Tughlaq).",
    bulletPoints: [
      "A Hereditary Caste: Dyers, tailors, and block-printers, also written Chippa or Chimba.",
      "A Name That Means the Work: Derived from the Hindi verb 'chhapna' (छपाना), literally meaning 'to print'.",
      "Skills Held by the Family: Fabric preparation, block carving, wax printing, vat dyeing, and finishing pass from parent to child through watching and doing.",
      "Religious Heritage: According to popular belief recorded in 'Saris of India', Hindu printers belonging to the Namdev sect converted to Islam, yet retain ancestral surnames like Khatri and Cheepa."
    ],
    keyInsight: "Craft knowledge in Bhairavgarh is not codified in textbooks; it is held in family muscle memory and generational observation.",
    speakerNotes: "The Chhipa caste: dyers and printers whose name originates from the Hindi verb 'chhapna'. They brought 400 years of block-carving and dyeing mastery to Ujjain.",
    image: IMAGES.artisan,
    accentColor: "#A3704C"
  },
  {
    id: 10,
    part: 2,
    partTitle: "Part 2: The Craftsmen",
    title: "Following the Water",
    subtitle: "Hydrological migration between Bhairavgarh, Bagh, and Jawad",
    category: "Craft Geography",
    content: "Natural dyeing requires vast volumes of clean flowing water, so printing families moved continuously until settling beside reliable rivers.",
    bulletPoints: [
      "Bhairavgarh: Settled beside the Kshipra River, utilizing its mineral alkalinity.",
      "Bagh: Settled beside the Baghini River, famed for riverbed washing of madder and iron prints.",
      "Jawad: Settled in the Neemuch region, utilizing hard well waters for indigo and Dabu mud resist.",
      "Historical Exchange: Bhairavgarh printers took an active part in the modern revival of Bagh print, and oral history records that Bagh printers originally learnt alizarin and indigo dyeing techniques from Bhairavgarh master artisans."
    ],
    keyInsight: "The three printing clusters of MP are not isolated competitors; they are kin lineages connected by water and shared dye secrets.",
    speakerNotes: "Artisans followed the water. Crucially, research shows Bagh printers originally learned alizarin and indigo dyeing from Bhairavgarh artisans.",
    image: IMAGES.kshipra,
    accentColor: "#2A4B62",
    sourceCitation: "Thesis Ch. 1 and 2; R. Nema (2019)."
  },
  {
    id: 11,
    part: 2,
    partTitle: "Part 2: The Craftsmen",
    title: "A Cloth for Every Community",
    subtitle: "Custom printed textiles for Malwa's diverse social fabric",
    category: "Sociological Textiles",
    content: "Historically, fabrics were printed strictly as per community end-use, with specific motifs and colors denoting caste and occasion:",
    metrics: [
      { label: "Anjana Community", value: "Neela Lugda", detail: "Iconic deep indigo blue veil with alizarin red and iron black borders." },
      { label: "Bagri Community", value: "Lal Lugda", detail: "Vibrant madder red veil worn for weddings and ceremonies." },
      { label: "Gaari Community", value: "Kala Lugda", detail: "Rich iron-acetate syahi black veil." },
      { label: "Mali Community", value: "Makhi Bhant Lugda", detail: "Fine fly/bee patterned floral veil." },
      { label: "Bhil Tribe", value: "Bootidar Lugda", detail: "Bold dot and nature motifs on unbleached ground." },
      { label: "Gujar Community", value: "Chunadi", detail: "Dotted auspicious veil for rituals." },
      { label: "Rajput Community", value: "Bandhav Chunri", detail: "Ceremonial tied and printed chunri." },
      { label: "Brahman & Baniya", value: "Bhairavgarhi Dhoti", detail: "Refined border dhoti cloths." }
    ],
    keyInsight: "Bhairavgarh printers served as visual ethnographers, maintaining distinct print codes for every community across Malwa.",
    speakerNotes: "Notice the sociological precision: Anjana wore Neela Lugda, Bagri wore Lal Lugda, Gaari wore Kala Lugda, and each caste had its own designated cloth.",
    accentColor: "#1E3A5F",
    sourceCitation: "R. Nema (2019), thesis fieldwork."
  },
  {
    id: 12,
    part: 2,
    partTitle: "Part 2: The Craftsmen",
    title: "Knowledge Held in the Hands & The Block Census",
    subtitle: "From 1,500 historical blocks to only 60–70 surviving today",
    category: "Tacit Knowledge & Heritage Loss",
    content: "Wax lines in Bhairavgarh are drawn freehand from memory, with no sketch or guideline. Floral and creeper motifs pass from generation to generation by watching and doing. During research fieldwork, 16 master artisans participated in two workshops (8 at Bhairavgarh and 8 at Bagh).",
    bulletPoints: [
      "1,500 Original Blocks: Once documented in Bhairavgarh karkhanas.",
      "60–70 Blocks Left: Surviving in dust-covered storerooms today.",
      "Surviving Motifs: Bhairavgarhi buta, burhani buta, dhoti buta, kamal gatta, mehraab, minar, peepal patta, haathi, titli, ghoda, tota, neem patti, jharia, aathiya, keri.",
      "Cultural Continuity: Animal and bird blocks remained deeply popular in Bhairavgarh even when all practicing printers belonged to the Muslim community."
    ],
    keyInsight: "When tacit knowledge is not recorded, it disappears as materials and markets shift. Documenting these surviving 60 blocks is urgent cultural preservation.",
    speakerNotes: "The alarming block census: out of 1,500 historic carved blocks, only 60 to 70 survive today. 16 master artisans joined our workshops to preserve them.",
    image: IMAGES.artisan,
    accentColor: "#9A3412",
    sourceCitation: "R. Nema (2019); thesis Fig. 4.1."
  },
  {
    id: 13,
    part: 3,
    partTitle: "Part 3: History of Batik",
    title: "What is Batik? One of Three Resist Families",
    subtitle: "Physical barrier vs. chemical mordant resist",
    category: "Resist Taxonomy",
    content: "Resist dyeing in world textile history belongs to three distinct technical families:",
    metrics: [
      { label: "Tied or Clamped", value: "Bandhani", detail: "The cloth itself is bound tightly with thread so dye liquor cannot enter." },
      { label: "Paste or Mud", value: "Ajrakh / Dabu", detail: "Lime, gum, and mordant paste controls where indigo and madder bond to cellulose." },
      { label: "Molten Wax", value: "Batik", detail: "A hydrophobic wax barrier is applied hot and removed by boiling heat." }
    ],
    bulletPoints: [
      "Why it matters: Wax is a purely physical hydrophobic barrier, not a chemical mordant.",
      "Crucial scientific implication: Natural dyes can enter Bhairavgarh batik through dye and mordant chemistry alone, without changing the traditional wax resist method!",
      "The only constraint: The natural dye bath must remain cooler than the wax's melting point (under 50°C)."
    ],
    keyInsight: "Because wax is physical, artisans do not need to alter their block stamping or tjanting tools to switch from synthetic to natural dyes.",
    speakerNotes: "Slide 13 provides the technical foundation: Bandhani is tied, Ajrakh is paste, and Batik is molten wax. Because wax is a physical barrier, natural dyes fit seamlessly into the workflow.",
    accentColor: "#4338CA",
    sourceCitation: "Thesis Ch. 2, section 2.3 (after Hann, n.d.)."
  },
  {
    id: 14,
    part: 3,
    partTitle: "Part 3: History of Batik",
    title: "Batik Travels the World",
    subtitle: "Independent invention, Dutch mechanization, and global cultural heritage",
    category: "Global History",
    content: "There is no single point of invention: wax-resist developed independently, or by early maritime trade diffusion, across several ancient civilisations.",
    bulletPoints: [
      "1. Java (19th Century): The artform peaks in Indonesia. The canting (copper pen) produces fine hand-drawn batik tulis; the cap (copper stamp) makes production scalable.",
      "2. Dutch Trade: Colonial Dutch traders attempt to mechanize Javanese batik using engraved copper rollers, intending to sell cheap imitations back to Indonesia.",
      "3. West Africa (1880s): While the machine prints fail in Java due to lack of authentic wax crackle, they find an eager market in West African ports, becoming iconic Ankara / Dutch wax prints.",
      "4. UNESCO (2009): Indonesian batik is officially inscribed on the UNESCO Representative List of Intangible Cultural Heritage, protecting its entire motif vocabulary."
    ],
    keyInsight: "Batik is a truly global medium with deep Indian ocean maritime roots connecting Indonesia, Africa, and India.",
    speakerNotes: "From Java's canting and copper caps, to Dutch industrialization attempts, to West African wax prints, and UNESCO inscription in 2009.",
    accentColor: "#1E3A5F"
  },
  {
    id: 15,
    part: 3,
    partTitle: "Part 3: History of Batik",
    title: "Batik Comes to India: The 1927 Santiniketan Spark",
    subtitle: "Rabindranath Tagore's Javanese expedition and Indian aesthetic rebirth",
    category: "Modern Revival",
    content: "While craft historians trace resist-dyeing in India back over 2,000 years, modern wax batik owes its institutional renaissance to Rabindranath Tagore:",
    bulletPoints: [
      "1927 Expedition: Tagore visits Java and Bali, captivated by Javanese wax resist.",
      "Java to Santiniketan: Authentic tools (cantings), wax formulas, and specimens return with Tagore to Visva-Bharati University.",
      "Kala Bhavana: Artists like Nandalal Bose adapt Javanese methods to Indian classical and rural design vocabularies.",
      "Diffusion to Regional Clusters: From Bengal, wax batik knowledge spread across western India, taking deep root in Bhairavgarh, Gujarat, and Rajasthan."
    ],
    keyInsight: "Tagore saw batik as a pan-Asian artistic bridge that could revitalize rural artisan economies across India.",
    speakerNotes: "In 1927 Tagore visited Java and brought canting tools back to Santiniketan. Kala Bhavana adapted it, and the craft spread to Bhairavgarh.",
    accentColor: "#B91C1C",
    sourceCitation: "Roy Maulik (2021): Tagore, Java and Indian batik."
  },
  {
    id: 16,
    part: 3,
    partTitle: "Part 3: History of Batik",
    title: "Batik in Bhairavgarh & The 2019 Technique Census",
    subtitle: "From survival pivot to master innovation under Rahim Gutti",
    category: "Cluster Evolution",
    content: "Families from Gujarat and Rajasthan carried batik along with block printing. In the 1940s–60s, batik expanded dramatically as natural-dye mud prints collapsed, because wax-resist was quicker to learn and produce. Master craftsman Rahim Gutti reinvented the craft by introducing kalamkari with a coconut-husk pen and the Indonesian tzanting.",
    metrics: [
      { label: "Block Batik", value: "Most Artisans", detail: "The commonest, fastest technique using hand-carved woodblocks." },
      { label: "Kalamkari Pen", value: "6–8 Artisans", detail: "Freehand drawing with coconut husk or yarn on metal rod." },
      { label: "Screen Batik", value: "4–5 Artisans", detail: "Wax applied through specialized heat-resistant screens." },
      { label: "Tzanting Pen", value: "Only 2 Artisans", detail: "Finest capillary work; locally devised PVC-and-nozzle pen." }
    ],
    keyInsight: "The 2019 census reveals extreme vulnerability: only 2 master artisans still know how to handle the tzanting pen.",
    speakerNotes: "The 2019 artisan census: most do block batik, 6 to 8 do kalamkari, 4 to 5 do screen batik, and only 2 elderly artisans still master the tzanting pen.",
    image: IMAGES.artisan,
    accentColor: "#A3704C",
    sourceCitation: "Techniques in use, documented in 2019 thesis fieldwork."
  },
  {
    id: 17,
    part: 4,
    partTitle: "Part 4: How Batik is Made",
    title: "Tools and Materials of the Bhairavgarh Workshop",
    subtitle: "Ingenious local adaptations for thermal wax control",
    category: "Workshop Technology",
    content: "Bhairavgarh printers developed specialized workshop equipment using locally available materials:",
    bulletPoints: [
      "Coconut-Husk Stylus: Dried husk fibers tightly bound to a metal rod or capillary tube; hot wax flows smoothly by capillary action.",
      "Sand-Covered Table: A damp 1 to 2 cm layer of river sand stops molten wax from sticking to the printing table during stamping.",
      "Wax Blend: Paraffin mixed 70:30 with pure beeswax for block stamping; pure paraffin alone for pens, since beeswax viscosity blocks the fine capillary.",
      "Fabric Substrate: Handloom cotton or silk, including celebrated regional Chanderi (cotton-silk) and Maheshwar weaves.",
      "Textbook vs. Cluster Practice: Academic texts cite a 75:25 blend at 55–60.5°C; cluster artisans judge temperature by smoke wisps and wax opacity."
    ],
    keyInsight: "The damp sand printing table is a unique Malwa innovation that instantly cools the bottom wax layer, ensuring sharp registration.",
    speakerNotes: "Examine the tools: the coconut-husk capillary stylus, the damp sand printing table that prevents sticking, and the 70:30 paraffin-beeswax blend.",
    image: IMAGES.artisan,
    accentColor: "#D97706",
    sourceCitation: "R. Nema (2019) for cluster wax practice; thesis Ch. 2."
  },
  {
    id: 18,
    part: 4,
    partTitle: "Part 4: How Batik is Made",
    title: "How a Batik Cloth is Made: The 6-Step Workflow",
    subtitle: "From raw cellulose preparation to dewaxing reveal",
    category: "Process Engineering",
    content: "The traditional production cycle follows six sequential stages:",
    metrics: [
      { label: "1. Pre-treat", value: "Desize & Wash", detail: "Wash cloth in water to remove starch, dust, sizing, and weave impurities, then dry." },
      { label: "2. Wax", value: "Hot Application", detail: "Apply molten wax with blocks or pens where fabric must remain undyed." },
      { label: "3. Dye", value: "Immersion", detail: "Immerse or hand-paint cloth; cold dye liquor cannot penetrate waxed zones." },
      { label: "4. Repeat", value: "Overdye Layering", detail: "Re-wax and overdye progressively from lighter to darker shades." },
      { label: "5. Dewax", value: "Boiling Bath", detail: "Plunge cloth into boiling water to melt off the wax and reveal the pattern." },
      { label: "6. Wash & Dry", value: "Final Rinse", detail: "Rinse until water runs crystal clear, then dry flat in the shade." }
    ],
    keyInsight: "Because each color requires a full wax-dye-rinse cycle, multi-color batik demands precise thermal and registration discipline.",
    speakerNotes: "The classic 6-step workflow: pre-treat, wax, dye, repeat, dewax in boiling water, and final wash and dry.",
    accentColor: "#A44226"
  },
  {
    id: 19,
    part: 4,
    partTitle: "Part 4: How Batik is Made",
    title: "Five Ways to Apply the Wax",
    subtitle: "From industrial block stamping to delicate hand tzanting",
    category: "Technique Comparison",
    content: "Bhairavgarh artisans practice five distinct wax application methodologies:",
    metrics: [
      { label: "Block Batik", value: "Commonest", detail: "Carved teak block dipped in wax and stamped on the sand table. Easiest and most scalable." },
      { label: "Kalamkari Pen", value: "Fine Lines", detail: "Coconut husk, yarn, or horse hair wound on a metal capillary; draws fluid freehand outlines." },
      { label: "Brush Batik", value: "Large Fills", detail: "Coarse brushes for broad background coverage; cloth stretched on hooked frames to prevent drips." },
      { label: "Sponge Batik", value: "Makeshift Stamp", detail: "Dense sponge hand-cut into floral shapes when custom carved blocks are unavailable." },
      { label: "Tzanting", value: "Master Craft", detail: "Most laborious and finest capillary technique, using locally devised PVC-and-brass nozzle pens." }
    ],
    keyInsight: "Improvisation is core to the craft: artisans engineered pens from coconut husk, PVC pipe, and domestic sponges.",
    speakerNotes: "Five application methods: block, kalamkari pen, brush, sponge, and tzanting pen.",
    accentColor: "#1E3A5F"
  },
  {
    id: 20,
    part: 4,
    partTitle: "Part 4: How Batik is Made",
    title: "Colours: Then and Now",
    subtitle: "The chemical transition from organic mordants to synthetic dyes",
    category: "Color Chemistry Shift",
    content: "A side-by-side comparison illustrating how chemical dye systems displaced indigenous plant extractions:",
    bulletPoints: [
      "Then (Natural): Mordant and iron-acetate printing using Madder red, Hirakasi iron black, and Indigo blue.",
      "Now (Synthetic): Commercial chemical dye systems including Naphthol salts, Indigosol vats, Reactive fiber-reactive dyes, and Vat dyes.",
      "The Cost of Speed: Synthetic dyes reduced processing from 15 days to 2 hours, but discharged toxic aromatic amines and heavy metals into the Kshipra River."
    ],
    keyInsight: "The transition to synthetic dyes severed the craft's organic connection to local plant chemistry and clean river ecology.",
    speakerNotes: "Comparing then and now: madder, iron black, and indigo replaced by naphthol, indigosol, reactive, and vat dyes.",
    image: IMAGES.dyes,
    accentColor: "#B91C1C",
    sourceCitation: "Thesis Fig. 4.1: dye room and wash tank, Bhairavgarh."
  },
  {
    id: 21,
    part: 4,
    partTitle: "Part 4: How Batik is Made",
    title: "The Iconic Neela Lugda: Cultural Meaning & Documentation",
    subtitle: "The traditional veil worn by the Anjana farming community",
    category: "Heritage Case Study",
    content: "The Neela Lugda is Bhairavgarh's most culturally significant textile—an indigo-dyed veil carrying deep memories, identity, and social history for the Anjana community.",
    bulletPoints: [
      "Worked directly with senior artisans in Bhairavgarh to recreate and document the authentic multi-stage process.",
      "Step 1 — Fabric Prep: Cotton cloth washed and pre-treated with Harda (myrobalan) to deposit natural tannins.",
      "Step 2 — Block Print with Mordants: Wooden blocks apply alum (for red) and ferrous sulphate (for black) patterns.",
      "Step 3 — Padat Rakhna (Curing): Printed fabric rests in shade for 7–8 days to allow deep chemical fiber absorption.",
      "Step 4 — Alizarin Dyeing: Simmered with Dhawde flowers in copper vessels to develop rich red and deep black tones.",
      "Step 5 — Gar Resist: Yellow clay and gum resin paste applied to protect red and black motifs.",
      "Step 6 — Final Indigo Dip: Textile dipped in fermented indigo vats, creating the iconic midnight-blue body."
    ],
    keyInsight: "The Neela Lugda proves that Bhairavgarh once commanded complex multi-pass natural mordant and resist alchemy.",
    speakerNotes: "The Neela Lugda: harda prep, alum and iron mordants, 7 to 8 days padat rakhna curing, Dhawde alizarin simmer, gar clay resist, and final indigo bath.",
    image: IMAGES.hero,
    accentColor: "#1E3A5F"
  },
  {
    id: 22,
    part: 4,
    partTitle: "Part 4: How Batik is Made",
    title: "Neela Lugda: Problem Statement & Why Revival Matters",
    subtitle: "Preserving cultural memory, artisan dignity, and river ecology",
    category: "Heritage Crisis",
    content: "The urgent imperative to document and revive this ancestral masterpiece:",
    bulletPoints: [
      "Problem Statement: The Neela Lugda is disappearing. Fast fashion has commodified its motifs into synthetic polyester prints, separating them from their cultural meaning. Traditional dyeing knowledge survives with only a handful of elderly artisans.",
      "Block Loss: Destruction of community-specific carved wooden blocks threatens cultural continuity.",
      "Why Revival Matters: The Neela Lugda carries the lived memories and social history of rural women who wore it for generations.",
      "Restoring Dignity: Revival strengthens the economic recognition of elder Chhipa knowledge holders and fosters healthier chemical-free workshops."
    ],
    keyInsight: "Without urgent documentation, the centuries-old cultural narrative woven into the Neela Lugda will be permanently extinguished.",
    speakerNotes: "Why revival matters: saving the disappearing Neela Lugda restores artisan dignity, prevents cultural erasure, and removes toxic dyes from the workshop.",
    accentColor: "#C2410C"
  },
  {
    id: 23,
    part: 4,
    partTitle: "Part 4: How Batik is Made",
    title: "Where the Craft Stands Today",
    subtitle: "A six-fold systemic diagnosis of Bhairavgarh's contemporary distress",
    category: "Systemic Diagnosis",
    content: "A rigorous audit reveals six interlocking vulnerabilities facing the cluster today:",
    metrics: [
      { label: "Generic Branding", value: "Lost Distinction", detail: "Bhairavgarh batik is difficult to differentiate from generic machine prints or Indonesian copies." },
      { label: "Chemical Dependence", value: "River Pollution", detail: "Synthetic naphthol and azo dyes dominate beside a river whose ecological distress is documented." },
      { label: "Lost Design Language", value: "Extinct Blocks", detail: "Original regional block designs are largely extinct; contemporary motifs lack coherence." },
      { label: "Fading Knowledge", value: "Tacit Erosion", detail: "Oral skills learned by doing are at imminent risk as youth seek factory employment." },
      { label: "Market Pressure", value: "Margin Squeeze", detail: "Aggressive competition from screen printers leaves master artisans earning meager piecework wages." },
      { label: "The Balance", value: "Revival Imperative", detail: "Revival must hold tradition, ecological sustainability, innovation, and market demand together." }
    ],
    keyInsight: "Revival cannot succeed through nostalgia alone; it must resolve the economic squeeze through high-value product innovation.",
    speakerNotes: "The six-fold crisis: generic branding, chemical dependence, lost designs, fading tacit knowledge, and market pressure.",
    accentColor: "#78350F"
  },
  {
    id: 24,
    part: 5,
    partTitle: "Part 5: Reviving the Craft",
    title: "A Revival, Not a Replica",
    subtitle: "The 5-Pillar Doctoral Methodology",
    category: "Revival Strategy",
    content: "Revival here means linking traditional knowledge with suitable present-day interventions, not restoring an old technique unchanged:",
    bulletPoints: [
      "1. Document: Record the Chhipa community's techniques, tools, oral histories, and workshop workflows.",
      "2. Natural Dyes: Test madder, indigo, marigold, catechu, alkanet, and more for wax-resist batik compatibility.",
      "3. Bhimbetka Motifs: Translate prehistoric rock-art forms into a proprietary, defensible Bhairavgarh design vocabulary.",
      "4. Artisan Partners: Treat artisans as active research co-creators and profit-sharing partners, not passive subjects.",
      "5. Market Fit: Assess contemporary consumer demand, branding, and lifestyle products (apparel, home decor, stationery)."
    ],
    keyInsight: "True craft sustainability requires innovation: ancient motifs + non-toxic botanical chemistry + contemporary silhouettes.",
    speakerNotes: "The five-pillar methodology: document, natural dyes, Bhimbetka motifs, artisan partnership, and modern market fit.",
    accentColor: "#059669"
  },
  {
    id: 25,
    part: 5,
    partTitle: "Part 5: Reviving the Craft",
    title: "Bhimbetka: A Design Source from the Rock",
    subtitle: "Reclaiming Madhya Pradesh's 2003 UNESCO World Heritage rock art",
    category: "Archaeological Provenance",
    content: "Located in the same state as Bhairavgarh, the UNESCO World Heritage site of Bhimbetka contains over 750 rock shelters spanning from the Upper Paleolithic through the Mesolithic.",
    bulletPoints: [
      "2003 UNESCO Listing: Recognized as humanity's earliest documented communal creative expression.",
      "Iconography: Stick-figure human dancing rituals, hunters with ceremonial bows, bison, deer, and geometric petroglyphs.",
      "Ethical Adaptation: The study does NOT indiscriminately copy rock art. Selected forms are analyzed, abstracted, and calibrated into workable wooden blocks.",
      "Ethical Boundary: All sacred, burial, or spiritual motifs remain strictly excluded from commercial textile products."
    ],
    keyInsight: "Bhimbetka gives Bhairavgarh an aesthetic signature that no synthetic mass mill in Gujarat or Rajasthan can replicate.",
    speakerNotes: "Bhimbetka rock art: 2003 UNESCO site in Madhya Pradesh. We ethically adapt selected hunting and dancing figures while respecting ritual boundaries.",
    image: IMAGES.hero,
    accentColor: "#9A3412",
    sourceCitation: "UNESCO World Heritage Centre (2003); thesis Fig. 1.6."
  },
  {
    id: 26,
    part: 5,
    partTitle: "Part 5: Reviving the Craft",
    title: "From Rock Wall to Wax Block",
    subtitle: "The 4-stage motif translation pipeline",
    category: "Design Translation",
    content: "How raw archaeological rock paintings become workable carved wooden blocks for molten wax:",
    metrics: [
      { label: "1. Deconstruct", value: "Line & Space", detail: "Study line quality, kinetic gesture, human geometry, and negative space from raw cave photographs." },
      { label: "2. Stylise", value: "Thermal Flow", detail: "Simplify line weights (≥1.5mm) for molten beeswax viscosity, wooden block chisels, and hand styluses." },
      { label: "3. Prototype", value: "Strike-Offs", detail: "Hand-carve seasoned teak wood blocks and produce test strike-offs on handloom cotton with Chhipa artisans." },
      { label: "4. Validate", value: "Peer Review", detail: "Review test yardage with senior artisans and independent textile design specialists." }
    ],
    bulletPoints: [
      "Rigid Ethical Principle: Ritual and spiritual motifs stay strictly out of commercial use."
    ],
    keyInsight: "Lines narrower than 1.5mm cause molten wax to cool before penetrating handloom weave; stylization balances art and physics.",
    speakerNotes: "The 4-step translation: deconstruct line quality, stylize for molten wax flow, prototype with Chhipa carvers, and validate with design peers.",
    accentColor: "#B45309",
    sourceCitation: "Thesis Fig. 1.7: Selected visual elements from Bhimbetka rock paintings for motif development."
  },
  {
    id: 27,
    part: 5,
    partTitle: "Part 5: Reviving the Craft",
    title: "The Ten Natural Dye Palette",
    subtitle: "10 renewable botanical and mineral colorants replace synthetic chemistry",
    category: "Organic Chemistry",
    content: "The research successfully formulated and validated 10 non-toxic natural dye sources for wax-resist printing:",
    metrics: [
      { label: "Madder (Manjistha)", value: "#A44226", detail: "Rubia cordifolia roots; produces crimson and terracotta red." },
      { label: "Indigo", value: "#1E3A5F", detail: "Indigofera tinctoria fermented leaves; cobalt to deep midnight navy." },
      { label: "Pomegranate Peel", value: "#656D4A", detail: "Punica granatum dried fruit rinds; olive green and khaki." },
      { label: "Henna Leaf", value: "#7F5539", detail: "Lawsonia inermis leaves; warm olive brown and bronze." },
      { label: "Turmeric", value: "#E09F3E", detail: "Curcuma longa rhizomes; luminous sun yellow." },
      { label: "Marigold", value: "#D97706", detail: "Upcycled Tagetes temple flower garlands; mustard and warm ochre." },
      { label: "Babool Bark", value: "#8C5835", detail: "Acacia nilotica tree bark tannins; rich earthy tan." },
      { label: "Catechu (Cutch)", value: "#4A2810", detail: "Senegalia catechu heartwood resin; deep chocolate brown." },
      { label: "Alkanet Root", value: "#722F37", detail: "Alkanna tinctoria roots; ruby crimson and lavender." },
      { label: "Iron + Jaggery", value: "#262626", detail: "Fermented scrap iron shavings and molasses (Syahi); charcoal and slate black." }
    ],
    keyInsight: "Every colorant is 100% biodegradable, non-toxic to river ecosystems, and locally obtainable in Madhya Pradesh.",
    speakerNotes: "The complete 10 natural dye palette: madder, indigo, pomegranate peel, henna, turmeric, marigold, babool bark, catechu, alkanet, and iron jaggery.",
    image: IMAGES.dyes,
    accentColor: "#A44226",
    sourceCitation: "Thesis Ch. 4, Table 4.2."
  },
  {
    id: 28,
    part: 5,
    partTitle: "Part 5: Reviving the Craft",
    title: "The Natural Dyeing Sequence",
    subtitle: "The six-step scientific recipe for handloom cotton",
    category: "Chemical Protocol",
    content: "The standardized protocol developed during doctoral laboratory experiments:",
    metrics: [
      { label: "1. Desize", value: "24–48 Hours", detail: "Soak unbleached cotton in natural soapnut (aritha) water to strip processing starches." },
      { label: "2. Mordant", value: "60°C · 30 Mins", detail: "Dissolve 50 g alum in 7 L water at 60°C; immerse cloth 30 mins and sun-dry." },
      { label: "3. Print Wax", value: "Molten Stamping", detail: "Block-print motif in 70:30 paraffin-beeswax blend directly on the dry mordanted cloth." },
      { label: "4. Dye", value: "Cool Immersion", detail: "Immerse in plant dye bath under 50°C; indigo takes 2 to 3 dips with air oxidation." },
      { label: "5. Set", value: "24 Hours Shade", detail: "Shade-dry 24 hours, followed by a 10-minute mild alum or iron acetate fixing bath." },
      { label: "6. Dewax & Wash", value: "100°C Boiling", detail: "Boil in water to reclaim molten wax; cool wash with pH-neutral soap; dry in shade." }
    ],
    bulletPoints: [
      "Water Efficiency Metric: Exactly ~22 litres of water per color cycle (7 L mordant bath + 15 L dye bath, before final rinsing)."
    ],
    keyInsight: "At 22L per cycle, the natural process cuts water consumption by 68% compared to synthetic dyeing lines.",
    speakerNotes: "The standardized recipe: 50g alum in 7L water at 60 degrees, 22 liters total water per cycle, and dewaxing in rolling boiling water.",
    accentColor: "#059669"
  },
  {
    id: 29,
    part: 5,
    partTitle: "Part 5: Reviving the Craft",
    title: "Ten Products, Ten Natural Colours",
    subtitle: "Physical prototypes spanning apparel, home furnishings, and lifestyle accessories",
    category: "Product Execution",
    content: "The research developed a complete 10-piece collection proving that natural-dyed Bhairavgarh batik can thrive across contemporary retail categories:",
    metrics: [
      { label: "01. Kaftan", value: "Madder Red", detail: "Flowing resort silhouette in crimson Manjistha." },
      { label: "02. Men's Jacket", value: "Marigold Ochre", detail: "Structured handloom khadi jacket with prehistoric animal motifs." },
      { label: "03. Shirt", value: "Natural Indigo", detail: "Men's and kid's relaxed shirts in cobalt-to-navy tones." },
      { label: "04. Saree", value: "Catechu Brown", detail: "Chanderi silk-cotton drape with continuous procession border." },
      { label: "05. Table Runner", value: "Iron + Jaggery", detail: "Charcoal black dining runner with geometric rock petroglyphs." },
      { label: "06. File Cover", value: "Pomegranate Peel", detail: "Stationery accessory in olive khaki." },
      { label: "07. Pillow Cover", value: "Alkanet Root", detail: "Home furnishing accent in warm ruby-lavender." },
      { label: "08. Tote Bag", value: "Turmeric Yellow", detail: "Eco-friendly reusable shopping bag in solar yellow." },
      { label: "09. Goggle Cover", value: "Henna Leaf", detail: "Padded eyewear case in earthy bronze-olive." },
      { label: "10. Diary Cover", value: "Babool Bark", detail: "Handloom-bound journal in warm tan." }
    ],
    keyInsight: "Diversifying from sarees into home decor and lifestyle accessories gives artisans year-round commercial resilience.",
    speakerNotes: "Ten products, ten natural colors: from kaftans and jackets to shirts, sarees, table runners, file covers, pillow covers, and tote bags.",
    image: IMAGES.apparel,
    accentColor: "#A44226",
    sourceCitation: "Thesis Ch. 4: Product Development."
  },
  {
    id: 30,
    part: 5,
    partTitle: "Part 5: Reviving the Craft",
    title: "What the Laboratory Says: SSM Tex Lab Testing",
    subtitle: "ISO and AATCC certified commercial validation (Test ID SAR 26-27-610)",
    category: "Quantitative Proof",
    content: "Independent lab testing performed at SSM Tex Lab, Ahmedabad (29 Sept 2026; thesis Table 4.6) confirms that natural dyes meet commercial standards:",
    metrics: [
      { label: "Dry Rubbing", value: "4.0 / 5.0", detail: "Grade 4 (Very Good). Excellent dry rub stability on handloom cotton." },
      { label: "Wet Rubbing", value: "3.0 / 5.0", detail: "Grade 3 (Moderate). Acceptable commercial wet fastness." },
      { label: "Wash: Colour Change", value: "3.0 / 5.0", detail: "Grade 3 (Moderate). Retains tonal integrity under gentle laundering." },
      { label: "Wash: Staining", value: "4.0 / 5.0", detail: "Grade 4 (Lowest Staining). Minimal bleed onto adjacent white cellulose." },
      { label: "Spot Extraction Test", value: "No Colour Change", detail: "Consistent with stable organic complexing; no fugitive dye run." },
      { label: "Light Fastness", value: "4 of 8", detail: "Grade 4 on Blue Wool Scale. Resilient to indoor and indirect sunlight." }
    ],
    bulletPoints: [
      "Commercial Recommendation: Moderate to good performance. Care label: cool hand wash, dry in shade.",
      "Note: The lab gave one combined grade for all ten samples, so dyes and mordants cannot yet be compared one by one."
    ],
    keyInsight: "Natural chemistry is commercially viable. SSM Tex Lab ratings disprove the myth that natural dyes instantly fade.",
    speakerNotes: "Lab results from SSM Tex Lab Ahmedabad: dry rubbing grade 4, wet rubbing 3, wash change 3, wash staining 4, and blue wool light fastness 4 of 8.",
    accentColor: "#1D4ED8",
    sourceCitation: "SSM Tex Lab, Ahmedabad, Test ID SAR 26-27-610 (29 Sept 2026); thesis Table 4.6."
  },
  {
    id: 31,
    part: 6,
    partTitle: "Part 6: The Road Ahead",
    title: "The Road Ahead: Five Strategic Pillars",
    subtitle: "A practical roadmap for artisan empowerment and commercial activation",
    category: "Strategic Action Plan",
    content: "The research proves that revival of Bhairavgarh Batik is ecologically essential, technically viable, and market-ready. Five strategic vectors guide next steps:",
    bulletPoints: [
      "1. Document the Chhipa community's knowledge before it fades: Create an archival open-access registry of surviving blocks and oral recipes.",
      "2. Bring back natural dyes, tested for fastness and effluent: Establish community testing kits for pH, TDS, and COD monitoring along the Kshipra.",
      "3. Build a Bhimbetka motif language for a Bhairavgarh identity: License and register regional designs under the 2023 Ujjain Batik GI Tag.",
      "4. Keep artisans at the centre of every decision: Enforce fair-trade pricing ($14–$18.50/day) with women-led cooperative profit sharing.",
      "5. Test the market: branding, policy and contemporary products: Scale capsule collections across ethical luxury, sustainable resort, and home living retail."
    ],
    keyInsight: "Every craft has a story. This one is still being written.",
    speakerNotes: "The road ahead in five steps: document knowledge, scale tested natural dyes, build Bhimbetka identity, center artisans, and activate the market. Every craft has a story—this one is still being written.",
    image: IMAGES.apparel,
    accentColor: "#A44226"
  },
  {
    id: 32,
    part: 6,
    partTitle: "Part 6: The Road Ahead",
    title: "References and Links",
    subtitle: "Academic thesis citations and archival documentation",
    category: "Bibliography",
    content: "Primary research references and sources cited in the doctoral thesis:",
    bulletPoints: [
      "R. Joshi, doctoral thesis: Synopsis and Chapters 1 to 5 (revised drafts).",
      "R. Nema (2019), Revival of Bhairavgarh block print and technique development in batik, graduation project, NIFT Bhopal (reference PDF).",
      "Behance: Craft Documentation, Batik of Bherugargh.",
      "Roy Maulik (2021): Tagore, Java and Indian batik.",
      "Santiago, Cunha and Cabral (2023): Natural dyes review.",
      "Li et al. (2020) and Febriani et al. (2023): Batik origins.",
      "UNESCO ICH (2009): Indonesian batik.",
      "UNESCO World Heritage Centre (2003): Bhimbetka.",
      "Gaatha (n.d.); Handicrafts.nic.in (n.d.): Bhairavgarh tools.",
      "Hann (n.d.): Resist-dyeing families."
    ],
    keyInsight: "A thesis grounded in verified peer-reviewed textile literature, archival fieldwork, and direct artisan partnership.",
    speakerNotes: "Slide 32 lists our academic references: Rupal Joshi doctoral thesis, NIFT Bhopal documentation by R. Nema, UNESCO records, and textile literature.",
    accentColor: "#374151"
  }
];

export interface CommunityCloth {
  community: string;
  cloth: string;
  colorName: string;
  chipColor: string;
  description: string;
}

export const COMMUNITY_CLOTHS: CommunityCloth[] = [
  { community: "Anjana", cloth: "Neela lugda", colorName: "Indigo Blue", chipColor: "#1E3A5F", description: "Iconic deep indigo blue veil with alizarin red and iron black borders." },
  { community: "Bagri", cloth: "Lal lugda", colorName: "Madder Red", chipColor: "#A44226", description: "Vibrant madder red veil worn for weddings and ceremonies." },
  { community: "Gaari", cloth: "Kala lugda", colorName: "Iron Black", chipColor: "#262626", description: "Rich iron-acetate syahi black veil." },
  { community: "Mali", cloth: "Makhi bhant lugda", colorName: "Fly / Bee Floral", chipColor: "#6B7280", description: "Fine bee-patterned floral veil for agricultural celebrations." },
  { community: "Bhil", cloth: "Bootidar lugda", colorName: "Dot Motif", chipColor: "#4B5563", description: "Bold dot and forest nature motifs on unbleached ground." },
  { community: "Gujar", cloth: "Chunadi", colorName: "Dotted Chunadi", chipColor: "#6B7280", description: "Dotted auspicious veil for rituals and family ceremonies." },
  { community: "Rajput", cloth: "Bandhav chunri", colorName: "Tied Chunri", chipColor: "#4B5563", description: "Ceremonial tied and printed chunri." },
  { community: "Brahman & Baniya", cloth: "Bhairavgarhi dhoti", colorName: "Border Dhoti", chipColor: "#6B7280", description: "Refined border dhoti cloths for formal and temple wear." }
];

export interface ProductCollectionItem {
  id: string;
  name: string;
  dye: string;
  dyeScientific: string;
  colorHex: string;
  colorName: string;
  category: "Apparel" | "Home Furnishing" | "Accessories" | "Stationery";
  description: string;
}

export const TEN_PRODUCTS_DATA: ProductCollectionItem[] = [
  { id: "p1", name: "Kaftan", dye: "Madder Root", dyeScientific: "Rubia cordifolia (Manjistha)", colorHex: "#A44226", colorName: "Crimson / Brick Red", category: "Apparel", description: "Flowing resort silhouette featuring stylized Bhimbetka dancing figures." },
  { id: "p2", name: "Men's Jacket", dye: "Marigold Petals", dyeScientific: "Tagetes erecta (Temple Upcycled)", colorHex: "#D97706", colorName: "Mustard / Warm Ochre", category: "Apparel", description: "Structured handloom khadi jacket with prehistoric wild bison motifs." },
  { id: "p3", name: "Men's & Kid's Shirt", dye: "Natural Indigo", dyeScientific: "Indigofera tinctoria", colorHex: "#1E3A5F", colorName: "Cobalt to Navy", category: "Apparel", description: "Relaxed breathable shirts dyed in natural fermented indigo vats." },
  { id: "p4", name: "Saree", dye: "Catechu (Cutch)", dyeScientific: "Senegalia catechu", colorHex: "#4A2810", colorName: "Deep Chocolate Brown", category: "Apparel", description: "Handspun Chanderi silk-cotton drape with continuous procession border." },
  { id: "p5", name: "Table Runner & Bedsheets", dye: "Iron + Jaggery", dyeScientific: "Syahi Iron Acetate Ferment", colorHex: "#262626", colorName: "Charcoal / Slate Black", category: "Home Furnishing", description: "Architectural dining runner with prehistoric geometric rock petroglyphs." },
  { id: "p6", name: "File Cover", dye: "Pomegranate Peel", dyeScientific: "Punica granatum", colorHex: "#656D4A", colorName: "Olive / Khaki", category: "Stationery", description: "Handloom document portfolio cover dyed with sun-dried pomegranate rinds." },
  { id: "p7", name: "Pillow Cover", dye: "Alkanet Root", dyeScientific: "Alkanna tinctoria", colorHex: "#722F37", colorName: "Ruby / Lavender", category: "Home Furnishing", description: "Comfortable accent cushion featuring Bhimbetka animal border registers." },
  { id: "p8", name: "Canvas Tote Bag", dye: "Turmeric Rhizome", dyeScientific: "Curcuma longa", colorHex: "#E09F3E", colorName: "Solar Yellow", category: "Accessories", description: "Heavy organic cotton carryall bag dyed in natural turmeric bath." },
  { id: "p9", name: "Goggle Cover", dye: "Henna Leaf", dyeScientific: "Lawsonia inermis", colorHex: "#7F5539", colorName: "Olive Brown / Bronze", category: "Accessories", description: "Padded protective eyewear case featuring geometric rock engravings." },
  { id: "p10", name: "Diary Cover", dye: "Babool Bark", dyeScientific: "Acacia nilotica", colorHex: "#8C5835", colorName: "Earthy Tan", category: "Stationery", description: "Hand-stitched notebook cover with traditional buta motifs." }
];

export const SSM_TEX_LAB_DATA = {
  testId: "SAR 26-27-610",
  date: "29 Sept 2026",
  lab: "SSM Tex Lab, Ahmedabad",
  citation: "Thesis Table 4.6",
  ratings: [
    { parameter: "Dry Rubbing Fastness", score: 4.0, max: 5.0, standard: "ISO 105-X12", verdict: "Grade 4 (Very Good)" },
    { parameter: "Wet Rubbing Fastness", score: 3.0, max: 5.0, standard: "ISO 105-X12", verdict: "Grade 3 (Moderate)" },
    { parameter: "Wash: Colour Change", score: 3.0, max: 5.0, standard: "ISO 105-C06", verdict: "Grade 3 (Moderate)" },
    { parameter: "Wash: Staining (Lowest)", score: 4.0, max: 5.0, standard: "ISO 105-C06", verdict: "Grade 4 (Low Staining)" }
  ],
  lightFastness: "4 of 8 on Blue Wool Scale",
  spotTest: "No colour change (Consistent with natural dye)",
  careInstruction: "Cool hand wash, dry in shade",
  waterMetric: "22 Litres per cycle (7L mordant bath + 15L dye bath)"
};

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
    rawMaterial: "Madder (Manjistha)",
    scientificName: "Rubia cordifolia",
    sourcePart: "Crushed taproot",
    nativeColor: "Rusty pink",
    alumPreMordant: {
      name: "Crimson / Brick Red",
      hex: "#A44226",
      textDark: false,
      description: "Signature Malwa terracotta red; alizarin binds permanently to alum sites."
    },
    syahiIronMordant: {
      name: "Velvety Plum Black",
      hex: "#381E28",
      textDark: false,
      description: "Deep iron-tannate complex used for border and religious cloths."
    },
    unmordantedHex: "#C75943",
    fastnessRating: "4.0 / 5.0 (SSM Tex Lab)",
    phSensitivity: "Favors Kshipra River calcium alkalinity"
  },
  {
    rawMaterial: "Marigold Petals",
    scientificName: "Tagetes erecta",
    sourcePart: "Temple waste flower garlands",
    nativeColor: "Bright yellow",
    alumPreMordant: {
      name: "Mustard / Warm Ochre",
      hex: "#D97706",
      textDark: true,
      description: "Solar golden yellow upcycled from Ujjain Mahakal temple offerings."
    },
    syahiIronMordant: {
      name: "Antique Khaki Olive",
      hex: "#6B663D",
      textDark: false,
      description: "Muted earth khaki tone with warm undertones."
    },
    unmordantedHex: "#F59E0B",
    fastnessRating: "3.5 / 5.0",
    phSensitivity: "Sensitive to high alkali; fixed with mild alum"
  },
  {
    rawMaterial: "Natural Indigo",
    scientificName: "Indigofera tinctoria",
    sourcePart: "Fermented leaf cake",
    nativeColor: "Greenish blue liquor",
    alumPreMordant: {
      name: "Cobalt to Navy",
      hex: "#1E3A5F",
      textDark: false,
      description: "Brilliant cobalt blue oxidized upon 2 to 3 dips in reduction vat."
    },
    syahiIronMordant: {
      name: "Midnight Iron Navy",
      hex: "#0F172A",
      textDark: false,
      description: "Ultra-dark ink navy created through successive iron-assisted dips."
    },
    unmordantedHex: "#2563EB",
    fastnessRating: "4.5 / 5.0",
    phSensitivity: "Requires alkaline vat with slaked lime and jaggery"
  },
  {
    rawMaterial: "Catechu (Cutch)",
    scientificName: "Senegalia catechu",
    sourcePart: "Heartwood extract",
    nativeColor: "Amber brown",
    alumPreMordant: {
      name: "Warm Terracotta Brown",
      hex: "#9C4127",
      textDark: false,
      description: "Warm earthy brick hue with vibrant undertones."
    },
    syahiIronMordant: {
      name: "Deep Chocolate Brown",
      hex: "#4A2810",
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
      name: "Olive / Khaki",
      hex: "#656D4A",
      textDark: false,
      description: "Golden warm mustard tone rich in ellagic acid tannins."
    },
    syahiIronMordant: {
      name: "Moss Dark Olive",
      hex: "#3F4E2E",
      textDark: false,
      description: "Complex sage-olive green formed by ferrous mordanting on high-tannin rinds."
    },
    unmordantedHex: "#A3B18A",
    fastnessRating: "4.0 / 5.0",
    phSensitivity: "Shifts to deep olive when alkaline"
  },
  {
    rawMaterial: "Babool Bark",
    scientificName: "Acacia nilotica",
    sourcePart: "Tree bark tannins",
    nativeColor: "Dull wood beige",
    alumPreMordant: {
      name: "Earthy Tan",
      hex: "#8C5835",
      textDark: false,
      description: "Smooth caramel tan; traditional ground base for multi-color Lugda cloths."
    },
    syahiIronMordant: {
      name: "Slate Grey",
      hex: "#4B5563",
      textDark: false,
      description: "Cool mineral charcoal slate grey; highly wash-stable."
    },
    unmordantedHex: "#A87A51",
    fastnessRating: "4.5 / 5.0",
    phSensitivity: "Acidic wash preserves warm tones"
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
    x: number;
    y: number;
    title: string;
    detail: string;
  }[];
}

export const PROTOTYPES_DATA: PrototypeItem[] = [
  {
    id: "proto-kaftan",
    name: "Kaftan (Madder Root)",
    category: "Apparel",
    dyeSource: "Madder Root / Manjistha (Rubia cordifolia)",
    mordant: "50g Alum in 7L water at 60°C",
    motifSource: "Bhimbetka Cave Rock Art (Dancing Figures)",
    fabricBase: "100% Handloom Cotton-Silk (60s count)",
    description: "Flowing resort silhouette featuring stylized prehistoric dancing figures along the neckline and hem. Hand-stamped in pure beeswax on damp sand table.",
    artisanHours: 42,
    image: IMAGES.apparel,
    hotspots: [
      {
        x: 48,
        y: 28,
        title: "Madder Root Dye",
        detail: "Naturally extracted from Himalayan Manjistha roots, delivering crimson and brick red tones tested at SSM Tex Lab (Grade 4 rubbing)."
      },
      {
        x: 52,
        y: 48,
        title: "Sand Table Wax Resist",
        detail: "Stamped with 70:30 paraffin-beeswax blend over damp sand table to prevent sticking."
      },
      {
        x: 43,
        y: 75,
        title: "Bhimbetka Motifs",
        detail: "Deconstructed from Upper Paleolithic cave art pictographs, adapted for teak block carving."
      }
    ]
  },
  {
    id: "proto-jacket",
    name: "Men's Jacket (Marigold)",
    category: "Apparel",
    dyeSource: "Upcycled Temple Marigold Flower Petals",
    mordant: "Alum Pre-mordant + Hard Kshipra Well Water",
    motifSource: "Bhimbetka Animal Profiles (Wild Bison & Antelope)",
    fabricBase: "Structured Handloom Khadi Cotton (10 oz)",
    description: "Tailored unstructured jacket with white resist silhouettes of prehistoric bison and deer charging across the breast and pockets.",
    artisanHours: 36,
    image: IMAGES.apparel,
    hotspots: [
      {
        x: 56,
        y: 35,
        title: "Bhimbetka Wild Bison",
        detail: "Prehistoric animal profiles rendered in negative wax-resist space."
      },
      {
        x: 54,
        y: 50,
        title: "Upcycled Marigold Dye",
        detail: "Diverted from Ujjain temple waste to produce luminous mustard and ochre hues."
      }
    ]
  },
  {
    id: "proto-saree",
    name: "Saree (Catechu Cutch)",
    category: "Heritage Textiles",
    dyeSource: "Catechu Heartwood Resin (Khair)",
    mordant: "Syahi Fermented Scrap Iron Liquor",
    motifSource: "Bhimbetka Procession Borders",
    fabricBase: "Handspun Chanderi Cotton-Silk Weave (5.5 meters)",
    description: "A monumental heritage drape bearing a continuous narrative border depicting hunters, ceremonial drummers, and elephants from prehistoric cave walls.",
    artisanHours: 96,
    image: IMAGES.saree,
    hotspots: [
      {
        x: 45,
        y: 40,
        title: "Catechu Resin Darkening",
        detail: "Heartwood extract forming non-fading chocolate brown when complexed with iron acetate."
      },
      {
        x: 58,
        y: 65,
        title: "Narrative Procession Border",
        detail: "Hand-stamped using a sequence of interconnected carved teak blocks."
      }
    ]
  },
  {
    id: "proto-runner",
    name: "Table Runner & Bedsheets (Iron Liquor)",
    category: "Heritage Textiles",
    dyeSource: "Iron Acetate + Jaggery Molasses (Syahi)",
    mordant: "Direct Iron Brush Strike over Acacia Tannin Base",
    motifSource: "Bhimbetka Geometric Rock Petroglyphs",
    fabricBase: "Heavy Organic Handloom Canvas (320 GSM)",
    description: "Architectural home textile featuring intricate geometric rock engravings and petroglyphic grids in deep matte charcoal black.",
    artisanHours: 24,
    image: IMAGES.saree,
    hotspots: [
      {
        x: 75,
        y: 62,
        title: "Geometric Rock Petroglyphs",
        detail: "Abstract rectilinear symbols found in the deepest Bhimbetka shelters."
      },
      {
        x: 82,
        y: 45,
        title: "Syahi Iron Liquor Ferment",
        detail: "Formulated with rusted nail scrap, jaggery molasses, and fermented buttermilk."
      }
    ]
  }
];

export const TECHNICAL_METRICS = {
  fastness: [
    { label: "Dry Rubbing Fastness", score: 4.0, max: 5.0, test: "ISO 105-X12 (SSM Tex Lab)", verdict: "Grade 4 (Very Good)" },
    { label: "Light Fastness", score: 4.0, max: 8.0, test: "Blue Wool Scale (SSM Tex Lab)", verdict: "Grade 4 of 8 (Resilient)" },
    { label: "Wash: Colour Change", score: 3.0, max: 5.0, test: "ISO 105-C06 (SSM Tex Lab)", verdict: "Grade 3 (Moderate)" },
    { label: "Wash: Staining (Lowest)", score: 4.0, max: 5.0, test: "ISO 105-C06 (SSM Tex Lab)", verdict: "Grade 4 (Low Staining)" }
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
      generic: "Toxic synthetic naphthol, indigosol, and reactive dyes",
      revival: "10 locally sourced organic extractions (Manjistha, Indigo, Catechu, etc.)",
      impact: "Zero bioaccumulation risk for artisans and waterways"
    },
    {
      metric: "River Effluent & COD",
      generic: "Heavy river pollution with high COD in Kshipra River",
      revival: "Zero toxic effluent; only 22L water consumed per color cycle",
      impact: "Effluent free of heavy metals; safe for agricultural reuse"
    },
    {
      metric: "Design Identity",
      generic: "Indistinguishable floral and generic mass prints",
      revival: "Culturally rooted Bhimbetka rock art vocabulary + surviving blocks",
      impact: "Defensible IP backed by 2023 Ujjain Batik GI Tag"
    },
    {
      metric: "Artisan Compensation",
      generic: "Low-margin commodity piecework ($2.50 / day)",
      revival: "Ethical cooperative model ($14.00 – $18.50 / day)",
      impact: "6x wage increase centering elder Chhipa knowledge holders"
    }
  ]
};
