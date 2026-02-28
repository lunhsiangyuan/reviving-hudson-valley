// Hudson Valley Reviving Plan - Demographics & Key Statistics
import type { Language } from "@/lib/i18n/language-context";

export interface LocalizedDemographicStat {
  id: string;
  label: Record<Language, string>;
  value: string | number;
  unit?: string;
  description: Record<Language, string>;
  sourceUrl: string;
}

export interface DemographicStat {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  sourceUrl: string;
}

export interface LocalizedDemographicProfile {
  city: string;
  county: string;
  state: string;
  zip: string;
  area: string;
  stats: LocalizedDemographicStat[];
}

export interface DemographicProfile {
  city: string;
  county: string;
  state: string;
  zip: string;
  area: string;
  stats: DemographicStat[];
}

const localizedDemographics: LocalizedDemographicProfile = {
  city: "Hudson Valley",
  county: "9-County Region",
  state: "New York",
  zip: "12401",
  area: "3,600 sq mi",
  stats: [
    {
      id: "population",
      label: { en: "Population", "zh-TW": "人口", es: "Poblacion" },
      value: "2.1M+",
      description: {
        en: "Total population across 9 counties in the Hudson Valley region.",
        "zh-TW": "Hudson Valley 地區 9 個縣的總人口數。",
        es: "Poblacion total en los 9 condados de la region Hudson Valley.",
      },
      sourceUrl: "https://www.census.gov/quickfacts/",
    },
    {
      id: "counties",
      label: { en: "Counties", "zh-TW": "縣份數", es: "Condados" },
      value: 9,
      description: {
        en: "Nine counties from Westchester to Columbia along the Hudson River.",
        "zh-TW": "沿 Hudson River 從 Westchester 到 Columbia 的 9 個縣。",
        es: "Nueve condados a lo largo del rio Hudson desde Westchester hasta Columbia.",
      },
      sourceUrl: "https://www.pattern-for-progress.org/",
    },
    {
      id: "median-income",
      label: { en: "Median Household Income", "zh-TW": "家庭收入中位數", es: "Ingreso Familiar Mediano" },
      value: "$117,663",
      description: {
        en: "Median household income across the Hudson Valley region (2023).",
        "zh-TW": "Hudson Valley 地區家庭收入中位數（2023年）。",
        es: "Ingreso familiar mediano en la region Hudson Valley (2023).",
      },
      sourceUrl: "https://www.census.gov/quickfacts/",
    },
    {
      id: "dri-investment",
      label: { en: "DRI Investment", "zh-TW": "振興計畫投資", es: "Inversion DRI" },
      value: 40_000_000,
      unit: "USD",
      description: {
        en: "Total DRI grants awarded to Hudson Valley cities including Poughkeepsie, Peekskill, and White Plains.",
        "zh-TW": "Hudson Valley 各城市獲得的 DRI 振興計畫撥款總額。",
        es: "Total de subvenciones DRI otorgadas a ciudades del Hudson Valley.",
      },
      sourceUrl: "https://www.governor.ny.gov/",
    },
    {
      id: "esd-grant",
      label: { en: "ESD Regional Grant 2025", "zh-TW": "2025年 ESD 區域撥款", es: "Subvencion Regional ESD 2025" },
      value: 53_100_000,
      unit: "USD",
      description: {
        en: "Empire State Development awarded $53.1M to Mid-Hudson in 2025 supporting 53 projects.",
        "zh-TW": "2025 年 Empire State Development 為 Mid-Hudson 撥款 $5,310 萬，支持 53 個計畫。",
        es: "ESD otorgo $53.1M al Mid-Hudson en 2025 apoyando 53 proyectos.",
      },
      sourceUrl: "https://esd.ny.gov/",
    },
    {
      id: "farms",
      label: { en: "Active Farms", "zh-TW": "活躍農場", es: "Granjas Activas" },
      value: 2280,
      description: {
        en: "Number of active farms across the Hudson Valley (2022 agricultural census).",
        "zh-TW": "Hudson Valley 活躍農場數量（2022 年農業普查）。",
        es: "Numero de granjas activas en el Hudson Valley (censo agricola 2022).",
      },
      sourceUrl: "https://www.hvadc.org/",
    },
    {
      id: "scenic-protected",
      label: { en: "Protected Acres", "zh-TW": "保護土地面積", es: "Acres Protegidos" },
      value: "53,000+",
      description: {
        en: "Acres protected by Scenic Hudson through parks, land conservation and farmland preservation.",
        "zh-TW": "Scenic Hudson 透過公園、土地保護與農地保育所保護的英畝數。",
        es: "Acres protegidos por Scenic Hudson mediante parques y conservacion de tierras.",
      },
      sourceUrl: "https://www.scenichudson.org/",
    },
  ],
};

export function resolveDemographicProfile(lang: Language): DemographicProfile {
  return {
    city: localizedDemographics.city,
    county: localizedDemographics.county,
    state: localizedDemographics.state,
    zip: localizedDemographics.zip,
    area: localizedDemographics.area,
    stats: localizedDemographics.stats.map((s) => ({
      id: s.id,
      label: s.label[lang] ?? s.label.en,
      value: s.value,
      unit: s.unit,
      description: s.description[lang] ?? s.description.en,
      sourceUrl: s.sourceUrl,
    })),
  };
}

/** Resolve localized stats to the given language (falls back to English) */
export function resolveDemographicStats(lang: Language): DemographicStat[] {
  return localizedDemographics.stats.map((s) => ({
    id: s.id,
    label: s.label[lang] ?? s.label.en,
    value: s.value,
    unit: s.unit,
    description: s.description[lang] ?? s.description.en,
    sourceUrl: s.sourceUrl,
  }));
}

export const demographicProfile = localizedDemographics;

/** Default English export for backward compatibility */
export const demographics: DemographicProfile = resolveDemographicProfile("en");
