// Hudson Valley Reviving Plan - Comparable Revitalization Case Studies

import type { Language } from "@/lib/i18n/language-context";

export interface LocalizedCaseStudy {
  id: string;
  name: string;
  state: string;
  population: number;
  keyStrategy: Record<Language, string>;
  outcomes: Record<Language, string[]>;
  lessonsForHudsonValley: Record<Language, string>;
  sourceUrl: string;
}

/** Flat case study for components that expect plain strings */
export interface CaseStudy {
  id: string;
  name: string;
  state: string;
  population: number;
  keyStrategy: string;
  outcomes: string[];
  lessonsForHudsonValley: string;
  sourceUrl: string;
}

/** Resolve localized case studies to the given language (falls back to English) */
export function resolveCaseStudies(lang: Language): CaseStudy[] {
  return localizedCaseStudies.map((cs) => ({
    id: cs.id,
    name: cs.name,
    state: cs.state,
    population: cs.population,
    keyStrategy: cs.keyStrategy[lang] ?? cs.keyStrategy.en,
    outcomes: cs.outcomes[lang] ?? cs.outcomes.en,
    lessonsForHudsonValley:
      cs.lessonsForHudsonValley[lang] ?? cs.lessonsForHudsonValley.en,
    sourceUrl: cs.sourceUrl,
  }));
}

const localizedCaseStudies: LocalizedCaseStudy[] = [
  {
    id: "sheffield-uk",
    name: "Sheffield",
    state: "UK",
    population: 584853,
    keyStrategy: {
      en: "Post-steel creative industries hub (Cultural Industries Quarter)",
      "zh-TW": "後鋼鐵時代創意產業中心（文化產業特區）",
      es: "Centro de industrias creativas post-acero (Barrio de Industrias Culturales)",
    },
    outcomes: {
      en: [
        "Created 3,000+ creative sector jobs",
        "5,000 students in creative programs annually",
        "Attracted 40+ media companies downtown",
      ],
      "zh-TW": [
        "創造 3,000+ 創意產業工作機會",
        "每年 5,000 名學生參與創意課程",
        "吸引 40+ 家媒體公司進駐市中心",
      ],
      es: [
        "Creo mas de 3,000 empleos en el sector creativo",
        "5,000 estudiantes en programas creativos anualmente",
        "Atrajo mas de 40 empresas de medios al centro",
      ],
    },
    lessonsForHudsonValley: {
      en: "Sheffield's transformation from steel to creative economy shows how Hudson Valley can leverage its IBM/industrial legacy into tech and creative sectors.",
      "zh-TW":
        "Sheffield 從鋼鐵到創意經濟的轉型，展示了 Hudson Valley 如何利用其 IBM/工業遺產進入科技和創意產業。",
      es: "La transformacion de Sheffield del acero a la economia creativa muestra como el Hudson Valley puede aprovechar su legado industrial.",
    },
    sourceUrl: "https://www.sheffieldcityregion.org.uk/",
  },
  {
    id: "chattanooga-tn",
    name: "Chattanooga",
    state: "TN",
    population: 182799,
    keyStrategy: {
      en: "Gigabit internet infrastructure + waterfront revitalization",
      "zh-TW": "千兆網路基礎設施 + 濱水區振興",
      es: "Infraestructura de internet gigabit + revitalizacion del frente acuatico",
    },
    outcomes: {
      en: [
        "Nation's first city-wide gigabit internet",
        "Tech sector grew 30%+",
        "Waterfront draws 10M+ visitors annually",
      ],
      "zh-TW": [
        "全美首個全市千兆網路",
        "科技產業成長 30%+",
        "濱水區每年吸引 1,000 萬以上遊客",
      ],
      es: [
        "Primer internet gigabit a nivel de ciudad en la nacion",
        "El sector tecnologico crecio mas del 30%",
        "El frente acuatico atrae mas de 10M de visitantes anualmente",
      ],
    },
    lessonsForHudsonValley: {
      en: "Chattanooga's digital infrastructure investment attracted remote workers and tech companies—a direct parallel to Hudson Valley's post-COVID demographic shift opportunities.",
      "zh-TW":
        "Chattanooga 的數位基礎設施投資吸引了遠端工作者和科技公司——與 Hudson Valley 後 COVID 人口結構轉型的機會直接對應。",
      es: "La inversion en infraestructura digital de Chattanooga atrajo trabajadores remotos y empresas tecnologicas.",
    },
    sourceUrl: "https://www.chattanooga.gov/",
  },
  {
    id: "pittsburgh-pa",
    name: "Pittsburgh",
    state: "PA",
    population: 302971,
    keyStrategy: {
      en: "University-anchored tech ecosystem (Carnegie Mellon -> AI hub)",
      "zh-TW": "以大學為核心的科技生態系（Carnegie Mellon -> AI 中心）",
      es: "Ecosistema tecnologico anclado en universidades (Carnegie Mellon -> centro de IA)",
    },
    outcomes: {
      en: [
        "Transformed from steel to #2 US AI hub",
        "100+ tech companies headquartered downtown",
        "Population decline reversed since 2010",
      ],
      "zh-TW": [
        "從鋼鐵業轉型為美國第二大 AI 中心",
        "100+ 科技公司總部設在市中心",
        "2010 年以來人口下降趨勢逆轉",
      ],
      es: [
        "Transformada del acero al centro #2 de IA de EE.UU.",
        "Mas de 100 empresas tecnologicas con sede en el centro",
        "La disminucion de la poblacion se revirtio desde 2010",
      ],
    },
    lessonsForHudsonValley: {
      en: "Pittsburgh's anchor institution strategy mirrors Hudson Valley's opportunity to leverage Vassar, Bard, SUNY New Paltz, and IBM Quantum as technology and creative economy catalysts.",
      "zh-TW":
        "Pittsburgh 的核心機構策略，與 Hudson Valley 利用 Vassar、Bard、SUNY New Paltz 和 IBM Quantum 作為科技和創意經濟催化劑的機會如出一轍。",
      es: "La estrategia de instituciones ancla de Pittsburgh refleja la oportunidad del Hudson Valley.",
    },
    sourceUrl: "https://www.pittsburghpa.gov/",
  },
  {
    id: "providence-ri",
    name: "Providence",
    state: "RI",
    population: 189961,
    keyStrategy: {
      en: "Arts-driven revitalization (WaterFire, RISD integration)",
      "zh-TW": "藝術驅動振興（WaterFire、RISD 整合）",
      es: "Revitalizacion impulsada por el arte (WaterFire, integracion de RISD)",
    },
    outcomes: {
      en: [
        "$90M+ annual arts economic impact",
        "Downtown vacancy rate halved",
        "Named top 10 arts city nationally",
      ],
      "zh-TW": [
        "藝術年度經濟影響超過 $9,000 萬",
        "市中心空置率減半",
        "被評為全美十大藝術城市",
      ],
      es: [
        "Impacto economico de las artes de mas de $90M anuales",
        "La tasa de vacancia del centro se redujo a la mitad",
        "Nombrada entre las 10 mejores ciudades de arte a nivel nacional",
      ],
    },
    lessonsForHudsonValley: {
      en: "Providence shows how arts anchor institutions like RISD mirror Hudson Valley's Dia:Beacon, Bard, and Storm King potential to drive sustained economic transformation.",
      "zh-TW":
        "Providence 展示了像 RISD 這樣的藝術核心機構如何與 Hudson Valley 的 Dia:Beacon、Bard 和 Storm King 的潛力相呼應，推動持續的經濟轉型。",
      es: "Providence muestra como las instituciones de arte ancla reflejan el potencial de Dia:Beacon, Bard y Storm King del Hudson Valley.",
    },
    sourceUrl: "https://www.providenceri.gov/",
  },
  {
    id: "lowell-ma",
    name: "Lowell",
    state: "MA",
    population: 115997,
    keyStrategy: {
      en: "National Park + mill district adaptive reuse for tech startups",
      "zh-TW": "國家公園 + 工廠區適應性再利用轉型科技新創",
      es: "Parque Nacional + reutilizacion adaptiva de distrito de molinos para startups tecnologicas",
    },
    outcomes: {
      en: [
        "Lowell National Historical Park draws 500K visitors/year",
        "Mill buildings converted to tech incubators",
        "University of Massachusetts Lowell became economic anchor",
      ],
      "zh-TW": [
        "Lowell 國家歷史公園每年吸引 50 萬遊客",
        "工廠建築改建為科技孵化器",
        "麻省大學 Lowell 分校成為經濟核心",
      ],
      es: [
        "El Parque Historico Nacional Lowell atrae 500K visitantes/ano",
        "Edificios de molinos convertidos en incubadoras tecnologicas",
        "La Universidad de Massachusetts Lowell se convirtio en ancla economica",
      ],
    },
    lessonsForHudsonValley: {
      en: "Lowell's industrial heritage preservation strategy—turning 19th century mills into 21st century innovation spaces—directly applies to Newburgh, Kingston, and Poughkeepsie's historic mill buildings.",
      "zh-TW":
        "Lowell 的工業遺產保護策略——將 19 世紀工廠轉型為 21 世紀創新空間——直接適用於 Newburgh、Kingston 和 Poughkeepsie 的歷史工廠建築。",
      es: "La estrategia de preservacion del patrimonio industrial de Lowell se aplica directamente a los edificios historicos de Newburgh, Kingston y Poughkeepsie.",
    },
    sourceUrl: "https://www.lowellma.gov/",
  },
];
