// Hudson Valley Reviving Plan - Master Reference List

import type { Language } from "@/lib/i18n/language-context";

export type ReferenceType = "government" | "news" | "academic" | "organization";

export interface LocalizedReference {
  id: string;
  title: string;
  url: string;
  type: ReferenceType;
  description: Record<Language, string>;
  dateAccessed: string;
}

/** Flat reference for components that expect plain strings */
export interface Reference {
  id: string;
  title: string;
  url: string;
  type: ReferenceType;
  description: string;
  dateAccessed: string;
}

const localizedReferences: LocalizedReference[] = [
  {
    id: "ny-dri-hudson-valley",
    title: "New York State Downtown Revitalization Initiative - Hudson Valley",
    url: "https://www.ny.gov/programs/downtown-revitalization-initiative",
    type: "government",
    description: {
      en: "Official NY State page for the Downtown Revitalization Initiative, documenting Hudson Valley cities' DRI awards and funded projects.",
      "zh-TW": "紐約州市中心振興倡議 (DRI) 的官方頁面，記錄 Hudson Valley 各城市獲得的 DRI 獎助和資助專案。",
      es: "Pagina oficial del Estado de Nueva York para la Iniciativa de Revitalizacion del Centro.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "esd-mid-hudson",
    title: "Empire State Development - Mid-Hudson Region",
    url: "https://esd.ny.gov/",
    type: "government",
    description: {
      en: "Empire State Development's Mid-Hudson regional economic development programs, including $53.1M in 2025 grants.",
      "zh-TW": "Empire State Development 的 Mid-Hudson 區域經濟發展計畫，包括 2025 年 $5,310 萬撥款。",
      es: "Programas de desarrollo economico regional Mid-Hudson de Empire State Development.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "census-hudson-valley",
    title: "U.S. Census Bureau - Hudson Valley Region",
    url: "https://www.census.gov/quickfacts/",
    type: "government",
    description: {
      en: "Census QuickFacts providing population, demographics, and economic data for Hudson Valley counties.",
      "zh-TW": "人口普查 QuickFacts，提供 Hudson Valley 各縣的人口、人口統計和經濟數據。",
      es: "Census QuickFacts proporcionando datos de poblacion y economia para los condados del Hudson Valley.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "wmchealth",
    title: "WMCHealth Network - Official Website",
    url: "https://www.wmchealth.org",
    type: "organization",
    description: {
      en: "Official website for WMCHealth Network, a 10-hospital healthcare system serving 3.5M+ people in Hudson Valley.",
      "zh-TW": "WMCHealth Network 官方網站，擁有 10 家醫院的醫療系統，服務 Hudson Valley 350 萬以上居民。",
      es: "Sitio web oficial de WMCHealth Network, un sistema de salud de 10 hospitales.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "northwell-vassar",
    title: "Northwell Health - Vassar Brothers Medical Center",
    url: "https://www.northwell.edu/",
    type: "organization",
    description: {
      en: "Northwell Health's acquisition of Vassar Brothers Medical Center, bringing advanced care to mid-Hudson Valley.",
      "zh-TW": "Northwell Health 收購 Vassar Brothers Medical Center，為 Mid-Hudson Valley 帶來先進醫療。",
      es: "La adquisicion de Vassar Brothers Medical Center por Northwell Health.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "suny-new-paltz",
    title: "SUNY New Paltz - Official Website",
    url: "https://www.newpaltz.edu",
    type: "academic",
    description: {
      en: "Official website for SUNY New Paltz, home of the Hudson Valley Venture Hub innovation hotspot.",
      "zh-TW": "SUNY New Paltz 官方網站，Hudson Valley Venture Hub 創新熱點所在地。",
      es: "Sitio web oficial de SUNY New Paltz, sede del Hudson Valley Venture Hub.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "scenic-hudson",
    title: "Scenic Hudson - Official Website",
    url: "https://www.scenichudson.org",
    type: "organization",
    description: {
      en: "Official website for Scenic Hudson, protecting 53,000+ acres and building 45+ parks since 1963.",
      "zh-TW": "Scenic Hudson 官方網站，自 1963 年起保護 53,000+ 英畝土地並建造 45+ 座公園。",
      es: "Sitio web oficial de Scenic Hudson, protegiendo mas de 53,000 acres desde 1963.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "pattern-for-progress",
    title: "Hudson Valley Pattern for Progress",
    url: "https://www.pattern-for-progress.org",
    type: "organization",
    description: {
      en: "Regional planning organization promoting equitable, sustainable solutions across Hudson Valley.",
      "zh-TW": "促進 Hudson Valley 公平、可持續解決方案的區域規劃組織。",
      es: "Organizacion de planificacion regional que promueve soluciones equitativas en el Hudson Valley.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "ibm-quantum",
    title: "IBM Quantum Computation Center",
    url: "https://www.ibm.com/quantum",
    type: "organization",
    description: {
      en: "IBM's Quantum Computation Center in Poughkeepsie, the world's first, operating 20+ quantum systems.",
      "zh-TW": "IBM 位於 Poughkeepsie 的量子計算中心，世界首座，運行 20+ 量子系統。",
      es: "Centro de Computacion Cuantica de IBM en Poughkeepsie, el primero del mundo.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "hvedc",
    title: "Hudson Valley Economic Development Corporation",
    url: "https://www.hvedc.com",
    type: "organization",
    description: {
      en: "Regional economic development organization promoting business attraction and growth in Hudson Valley.",
      "zh-TW": "促進 Hudson Valley 商業吸引力和成長的區域經濟發展組織。",
      es: "Organizacion de desarrollo economico regional que promueve la atraccion empresarial en el Hudson Valley.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "dia-beacon",
    title: "Dia:Beacon - Dia Art Foundation",
    url: "https://www.diaart.org",
    type: "organization",
    description: {
      en: "Dia:Beacon contemporary art museum, a transformative cultural institution that catalyzed Beacon's economic revival.",
      "zh-TW": "Dia:Beacon 當代藝術博物館，帶動 Beacon 經濟復甦的變革性文化機構。",
      es: "Museo de arte contemporaneo Dia:Beacon, una institucion cultural transformadora.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "hvadc",
    title: "Hudson Valley Agribusiness Development Corporation",
    url: "https://www.hvadc.org",
    type: "organization",
    description: {
      en: "The region's only CDFI focused on agriculture, supporting 2,280+ farms with technical assistance and lending.",
      "zh-TW": "該地區唯一專注農業的社區發展金融機構，為 2,280+ 農場提供技術援助和貸款。",
      es: "La unica CDFI de la region enfocada en agricultura, apoyando mas de 2,280 granjas.",
    },
    dateAccessed: "2026-02-28",
  },
  {
    id: "governor-ny",
    title: "Governor of New York State - Official Website",
    url: "https://www.governor.ny.gov/",
    type: "government",
    description: {
      en: "Official website for the Governor of New York, including DRI and infrastructure investment announcements.",
      "zh-TW": "紐約州州長官方網站，包括 DRI 和基礎設施投資公告。",
      es: "Sitio web oficial del Gobernador de Nueva York.",
    },
    dateAccessed: "2026-02-28",
  },
];

/** Resolve localized references to the given language (falls back to English) */
export function resolveReferences(lang: Language): Reference[] {
  return localizedReferences.map((r) => ({
    id: r.id,
    title: r.title,
    url: r.url,
    type: r.type,
    description: r.description[lang] ?? r.description.en,
    dateAccessed: r.dateAccessed,
  }));
}

/** Default English export for backward compatibility */
export const references: Reference[] = resolveReferences("en");
