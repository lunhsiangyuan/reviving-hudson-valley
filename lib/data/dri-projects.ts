// Hudson Valley Reviving Plan - DRI (Downtown Revitalization Initiative) Projects

import type { Language } from "@/lib/i18n/language-context";

export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface LocalizedDRIProject {
  id: string;
  name: string;
  cost: number;
  status: ProjectStatus;
  description: Record<Language, string>;
  imageAlt: string;
  sourceUrl: string;
}

/** Flat project for components that expect plain strings */
export interface DRIProject {
  id: string;
  name: string;
  cost: number;
  status: ProjectStatus;
  description: string;
  imageAlt: string;
  sourceUrl: string;
}

export const DRI_TOTAL_INVESTMENT = 40_000_000 as const;

const localizedDriProjects: LocalizedDRIProject[] = [
  {
    id: "poughkeepsie-downtown-hub",
    name: "Poughkeepsie Downtown Hub",
    cost: 3_200_000,
    status: "in-progress",
    description: {
      en: "Mixed-use waterfront development connecting Poughkeepsie's Amtrak/Metro-North station to a revitalized downtown core. Includes pedestrian improvements and retail activation along Main Street.",
      "zh-TW":
        "連接 Poughkeepsie 鐵路站與振興市中心核心的混合用途濱水開發計畫。包括 Main Street 沿線的行人改善和零售活化。",
      es: "Desarrollo de uso mixto en el frente acuatico conectando la estacion Amtrak/Metro-North de Poughkeepsie con un centro revitalizado.",
    },
    imageAlt: "Poughkeepsie downtown hub development",
    sourceUrl: "https://www.governor.ny.gov/",
  },
  {
    id: "beacon-main-street",
    name: "Beacon Main Street Revitalization",
    cost: 2_800_000,
    status: "completed",
    description: {
      en: "Comprehensive streetscape improvements along Beacon's iconic Main Street, enhancing walkability, public art installations, and supporting the thriving arts and restaurant scene.",
      "zh-TW":
        "沿 Beacon 標誌性 Main Street 的全面街景改善，提升步行友善性，設置公共藝術裝置，支持蓬勃的藝術與餐廳生態。",
      es: "Mejoras integrales del paisaje urbano a lo largo de la iconica Main Street de Beacon.",
    },
    imageAlt: "Beacon Main Street streetscape",
    sourceUrl: "https://www.pattern-for-progress.org/",
  },
  {
    id: "kingston-innovation-district",
    name: "Kingston Tech & Innovation District",
    cost: 5_500_000,
    status: "in-progress",
    description: {
      en: "Transforming Kingston's historic Midtown into a hub for technology startups, co-working spaces, and creative industries. Leverages IBM's legacy and SUNY Ulster's talent pipeline.",
      "zh-TW":
        "將 Kingston 歷史悠久的 Midtown 轉型為科技新創、共同工作空間和創意產業的中心。利用 IBM 的遺產和 SUNY Ulster 的人才管道。",
      es: "Transformando el historico Midtown de Kingston en un centro para startups tecnologicas y espacios de coworking.",
    },
    imageAlt: "Kingston innovation district",
    sourceUrl: "https://www.hvedc.com/",
  },
  {
    id: "newburgh-waterfront",
    name: "Newburgh Waterfront Revival",
    cost: 8_500_000,
    status: "in-progress",
    description: {
      en: "Ambitious redevelopment of Newburgh's historic waterfront, reversing 60 years of urban renewal damage. Creating mixed-income housing, public river access, and small business incubator spaces.",
      "zh-TW":
        "雄心勃勃地重建 Newburgh 歷史悠久的濱水區，扭轉 60 年城市改造造成的破壞。建造混合收入住宅、公共河岸通道和小型企業孵化空間。",
      es: "Ambicioso redesarrollo del historico frente acuatico de Newburgh, revirtiendo 60 anos de dano por renovacion urbana.",
    },
    imageAlt: "Newburgh waterfront development",
    sourceUrl: "https://www.pattern-for-progress.org/",
  },
  {
    id: "peekskill-arts-district",
    name: "Peekskill Arts & Cultural District",
    cost: 4_200_000,
    status: "planned",
    description: {
      en: "Building on Peekskill's emerging arts community, this project creates affordable artist live/work spaces, public gallery infrastructure, and cultural programming for the revitalized downtown.",
      "zh-TW":
        "以 Peekskill 新興藝術社群為基礎，創建負擔得起的藝術家生活/工作空間、公共藝廊基礎設施和振興市中心的文化節目。",
      es: "Basandose en la comunidad artistica emergente de Peekskill, este proyecto crea espacios asequibles para artistas.",
    },
    imageAlt: "Peekskill arts district",
    sourceUrl: "https://esd.ny.gov/",
  },
  {
    id: "hudson-valley-rail-trail",
    name: "Hudson Valley Rail Trail Extension",
    cost: 3_800_000,
    status: "in-progress",
    description: {
      en: "Extending the multi-use Hudson Valley Rail Trail to connect Kingston, Highland, and Poughkeepsie across the Hudson River bridge, creating a 40-mile active transportation corridor.",
      "zh-TW":
        "延伸多功能 Hudson Valley Rail Trail，跨越 Hudson River 橋樑連接 Kingston、Highland 和 Poughkeepsie，打造 40 英里主動交通走廊。",
      es: "Extendiendo el Hudson Valley Rail Trail para conectar Kingston, Highland y Poughkeepsie a traves del puente del rio Hudson.",
    },
    imageAlt: "Hudson Valley Rail Trail",
    sourceUrl: "https://www.scenichudson.org/",
  },
  {
    id: "white-plains-downtown",
    name: "White Plains Downtown Transformation",
    cost: 10_000_000,
    status: "in-progress",
    description: {
      en: "Comprehensive downtown revitalization with DRI Round 7 funding. Focuses on transit-oriented development around White Plains Metro-North station, affordable housing, and retail activation.",
      "zh-TW":
        "使用 DRI 第 7 輪資金進行全面的市中心振興。聚焦於 White Plains Metro-North 站周邊的交通導向開發、平價住房和零售活化。",
      es: "Revitalizacion integral del centro con fondos DRI Ronda 7, enfocada en desarrollo orientado al transito.",
    },
    imageAlt: "White Plains downtown transformation",
    sourceUrl: "https://www.governor.ny.gov/",
  },
  {
    id: "mid-hudson-green-infrastructure",
    name: "Mid-Hudson Green Infrastructure Network",
    cost: 2_000_000,
    status: "planned",
    description: {
      en: "Regional green infrastructure initiative addressing stormwater management, urban heat islands, and climate resilience across Kingston, Poughkeepsie, and Newburgh city centers.",
      "zh-TW":
        "解決 Kingston、Poughkeepsie 和 Newburgh 市中心雨水管理、城市熱島和氣候韌性的區域綠色基礎設施計畫。",
      es: "Iniciativa regional de infraestructura verde abordando la gestion de aguas pluviales y la resiliencia climatica.",
    },
    imageAlt: "Mid-Hudson green infrastructure",
    sourceUrl: "https://www.scenichudson.org/",
  },
];

/** Resolve localized DRI projects to the given language (falls back to English) */
export function resolveDRIProjects(lang: Language): DRIProject[] {
  return localizedDriProjects.map((p) => ({
    id: p.id,
    name: p.name,
    cost: p.cost,
    status: p.status,
    description: p.description[lang] ?? p.description.en,
    imageAlt: p.imageAlt,
    sourceUrl: p.sourceUrl,
  }));
}

/** Default English export for backward compatibility */
export const driProjects: DRIProject[] = resolveDRIProjects("en");
