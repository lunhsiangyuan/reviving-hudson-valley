// Hudson Valley Reviving Plan - Revitalization Timeline

import type { Language } from "@/lib/i18n/language-context";

export type TimelineCategory =
  | "infrastructure"
  | "education"
  | "healthcare"
  | "business"
  | "government"
  | "tourism"
  | "environment";

export interface LocalizedTimelineEvent {
  year: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: TimelineCategory;
}

/** Flat event for components that expect plain strings */
export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: string;
}

/** Resolve localized events to the given language (falls back to English) */
export function resolveEvents(lang: Language): TimelineEvent[] {
  return timelineEvents.map((e) => ({
    year: e.year,
    title: e.title[lang] ?? e.title.en,
    description: e.description[lang] ?? e.description.en,
    category: e.category,
  }));
}

/** Translated category labels */
export const categoryLabels: Record<TimelineCategory, Record<Language, string>> = {
  infrastructure: { en: "Infrastructure", "zh-TW": "基礎建設", es: "Infraestructura" },
  education: { en: "Education", "zh-TW": "教育", es: "Educacion" },
  healthcare: { en: "Healthcare", "zh-TW": "醫療", es: "Salud" },
  business: { en: "Business", "zh-TW": "商業", es: "Negocios" },
  government: { en: "Government", "zh-TW": "政府", es: "Gobierno" },
  tourism: { en: "Tourism", "zh-TW": "觀光", es: "Turismo" },
  environment: { en: "Environment", "zh-TW": "環境", es: "Medio Ambiente" },
};

export const timelineEvents: LocalizedTimelineEvent[] = [
  {
    year: 1909,
    title: {
      en: "Hudson Valley Railroad Heritage Established",
      "zh-TW": "Hudson Valley 鐵路遺產奠定",
      es: "Patrimonio Ferroviario del Hudson Valley Establecido",
    },
    description: {
      en: "The Hudson Line becomes a critical commuter corridor connecting NYC to the Hudson Valley, establishing the foundation for regional economic growth.",
      "zh-TW": "Hudson Line 成為連接紐約市和 Hudson Valley 的重要通勤走廊，奠定了區域經濟增長的基礎。",
      es: "La Linea Hudson se convierte en un corredor de transporte critico conectando NYC con el Hudson Valley.",
    },
    category: "infrastructure",
  },
  {
    year: 1963,
    title: {
      en: "Scenic Hudson Founded to Save Storm King Mountain",
      "zh-TW": "Scenic Hudson 成立以保護 Storm King Mountain",
      es: "Scenic Hudson Fundada para Salvar Storm King Mountain",
    },
    description: {
      en: "Scenic Hudson is established to fight the proposed Con Edison power plant on Storm King Mountain, launching the modern environmental movement and setting precedent for citizen advocacy.",
      "zh-TW": "為對抗 Con Edison 在 Storm King Mountain 建設電廠的計畫，Scenic Hudson 成立，啟動現代環保運動，為公民倡導樹立先例。",
      es: "Scenic Hudson se establece para luchar contra la planta de energia propuesta por Con Edison en Storm King Mountain.",
    },
    category: "environment",
  },
  {
    year: 1969,
    title: {
      en: "Catskill Center Founded for Conservation",
      "zh-TW": "Catskill 保護中心成立",
      es: "Centro Catskill Fundado para la Conservacion",
    },
    description: {
      en: "The Catskill Center for Conservation and Development is established, beginning decades of land protection and sustainable development advocacy in the Catskill-Delaware watershed.",
      "zh-TW": "Catskill 保護與發展中心成立，開始了幾十年的土地保護和 Catskill-Delaware 流域可持續發展倡導工作。",
      es: "El Centro Catskill para la Conservacion y el Desarrollo se establece, iniciando decadas de proteccion de tierras.",
    },
    category: "environment",
  },
  {
    year: 1985,
    title: {
      en: "GE PCB Cleanup Negotiations Begin",
      "zh-TW": "GE PCB 清理談判開始",
      es: "Comienzan Negociaciones de Limpieza de PCB de GE",
    },
    description: {
      en: "EPA begins regulatory action to address General Electric's PCB contamination of the Hudson River, launching a decades-long cleanup process and environmental restoration effort.",
      "zh-TW": "EPA 開始採取監管行動，應對通用電氣對 Hudson River 的 PCB 污染，啟動長達數十年的清理和環境修復工作。",
      es: "La EPA inicia acciones regulatorias para abordar la contaminacion por PCB de General Electric en el rio Hudson.",
    },
    category: "environment",
  },
  {
    year: 1993,
    title: {
      en: "IBM Downsizing Transforms Regional Economy",
      "zh-TW": "IBM 裁員轉變區域經濟",
      es: "La Reduccion de IBM Transforma la Economia Regional",
    },
    description: {
      en: "IBM's major workforce reduction at its Poughkeepsie facility signals a shift from single-employer dependence. The region begins diversifying toward healthcare, education, and creative industries.",
      "zh-TW": "IBM 在 Poughkeepsie 大幅裁員，標誌著該地區從依賴單一雇主轉型。該地區開始向醫療、教育和創意產業多元化發展。",
      es: "La reduccion masiva de personal de IBM en Poughkeepsie senala un cambio de la dependencia de un solo empleador.",
    },
    category: "business",
  },
  {
    year: 2003,
    title: {
      en: "Dia:Beacon Opens, Catalyzing Arts Economy",
      "zh-TW": "Dia:Beacon 開幕，催化藝術經濟",
      es: "Dia:Beacon Abre, Catalizando la Economia Artistica",
    },
    description: {
      en: "Dia Art Foundation opens Dia:Beacon in a converted Nabisco factory. The 300,000 sq ft museum revitalizes Beacon and demonstrates how cultural investment drives urban transformation.",
      "zh-TW": "Dia 藝術基金會在改建的 Nabisco 工廠開設 Dia:Beacon。這座 30 萬平方呎的博物館振興了 Beacon，展示了文化投資如何驅動城市轉型。",
      es: "La Fundacion Dia Art abre Dia:Beacon en una fabrica Nabisco convertida.",
    },
    category: "tourism",
  },
  {
    year: 2009,
    title: {
      en: "Walkway Over the Hudson Opens",
      "zh-TW": "Walkway Over the Hudson 開放",
      es: "Walkway Over the Hudson Abre",
    },
    description: {
      en: "The world's longest elevated pedestrian bridge opens in Poughkeepsie, converting a derelict railroad bridge into a 1.28-mile scenic walkway, drawing 500,000+ visitors annually.",
      "zh-TW": "世界最長的高架行人橋在 Poughkeepsie 開放，將廢棄鐵路橋轉型為 1.28 英里的景觀步道，每年吸引 50 萬以上遊客。",
      es: "El puente peatonal elevado mas largo del mundo abre en Poughkeepsie.",
    },
    category: "tourism",
  },
  {
    year: 2015,
    title: {
      en: "GE Hudson River PCB Cleanup Phase 2 Completed",
      "zh-TW": "GE Hudson River PCB 清理第二期完成",
      es: "Fase 2 de Limpieza de PCB del Rio Hudson Completada",
    },
    description: {
      en: "General Electric completes Phase 2 dredging of 2.5 million cubic yards of PCB-contaminated sediment from the upper Hudson River at a cost of $1.7 billion.",
      "zh-TW": "通用電氣完成 Phase 2 疏浚工程，從上游 Hudson River 清除 250 萬立方碼 PCB 污染沉積物，耗資 17 億美元。",
      es: "General Electric completa el dragado de Fase 2 de 2.5 millones de yardas cubicas de sedimento contaminado con PCB.",
    },
    category: "environment",
  },
  {
    year: 2016,
    title: {
      en: "DRI Program Launched for Hudson Valley Cities",
      "zh-TW": "DRI 計畫在 Hudson Valley 各城市啟動",
      es: "Programa DRI Lanzado para Ciudades del Hudson Valley",
    },
    description: {
      en: "New York State launches the Downtown Revitalization Initiative, with Hudson Valley cities beginning to receive $10M grants for comprehensive downtown transformation.",
      "zh-TW": "紐約州啟動市中心振興計畫，Hudson Valley 各城市開始獲得 $1,000 萬的全面市中心轉型補助。",
      es: "El Estado de Nueva York lanza la Iniciativa de Revitalizacion del Centro.",
    },
    category: "government",
  },
  {
    year: 2019,
    title: {
      en: "IBM Opens World's First Quantum Computation Center",
      "zh-TW": "IBM 開設世界首座量子計算中心",
      es: "IBM Abre el Primer Centro de Computacion Cuantica del Mundo",
    },
    description: {
      en: "IBM opens the world's first Quantum Computation Center in Poughkeepsie, housing 20+ quantum systems and executing over 2 billion quantum circuits daily. Positions Hudson Valley as quantum technology hub.",
      "zh-TW": "IBM 在 Poughkeepsie 開設世界首座量子計算中心，擁有 20+ 量子系統，每日執行超過 20 億量子電路。使 Hudson Valley 成為量子技術中心。",
      es: "IBM abre el primer Centro de Computacion Cuantica del mundo en Poughkeepsie.",
    },
    category: "business",
  },
  {
    year: 2020,
    title: {
      en: "COVID Remote Work Boom Transforms Valley Demographics",
      "zh-TW": "COVID 遠端工作潮轉變 Valley 人口結構",
      es: "El Auge del Trabajo Remoto por COVID Transforma la Demografia del Valle",
    },
    description: {
      en: "COVID-19 accelerates remote work migration from NYC to Hudson Valley. Population of Beacon, Kingston, and Hudson surges; home prices spike 40%+ as the 'Donut Effect' reshapes regional economy.",
      "zh-TW": "COVID-19 加速從紐約市向 Hudson Valley 的遠端工作移民潮。Beacon、Kingston 和 Hudson 的人口激增；「甜甜圈效應」重塑區域經濟，房價上漲 40% 以上。",
      es: "COVID-19 acelera la migracion de trabajo remoto desde NYC al Hudson Valley.",
    },
    category: "business",
  },
  {
    year: 2023,
    title: {
      en: "Northwell Acquires Vassar Brothers, Strengthening Healthcare",
      "zh-TW": "Northwell 收購 Vassar Brothers，強化醫療體系",
      es: "Northwell Adquiere Vassar Brothers, Fortaleciendo la Atencion Medica",
    },
    description: {
      en: "Northwell Health acquires Vassar Brothers Medical Center in Poughkeepsie, integrating it into a $22.6B healthcare network and expanding advanced cancer care across the mid-Hudson Valley.",
      "zh-TW": "Northwell Health 收購 Poughkeepsie 的 Vassar Brothers Medical Center，將其納入 $226 億醫療網絡，擴展 Mid-Hudson Valley 的先進癌症護理。",
      es: "Northwell Health adquiere Vassar Brothers Medical Center en Poughkeepsie.",
    },
    category: "healthcare",
  },
  {
    year: 2024,
    title: {
      en: "SUNY New Paltz Venture Hub Named ESD Innovation Hotspot",
      "zh-TW": "SUNY New Paltz Venture Hub 被評為 ESD 創新熱點",
      es: "SUNY New Paltz Venture Hub Nombrado Punto Caliente de Innovacion ESD",
    },
    description: {
      en: "Hudson Valley Venture Hub at SUNY New Paltz is designated an ESD Innovation Hotspot, receiving $250K annually after its first year generated $4.5M in investment returns for 20+ startups.",
      "zh-TW": "SUNY New Paltz 的 Hudson Valley Venture Hub 被指定為 ESD 創新熱點，每年獲得 $25 萬資助，其第一年已為 20+ 家新創產生 $450 萬投資回報。",
      es: "El Hudson Valley Venture Hub en SUNY New Paltz es designado Punto Caliente de Innovacion ESD.",
    },
    category: "education",
  },
  {
    year: 2025,
    title: {
      en: "Governor Hochul Proposes Major Rail Infrastructure Investment",
      "zh-TW": "州長 Hochul 提議重大鐵路基礎設施投資",
      es: "La Gobernadora Hochul Propone Inversion en Infraestructura Ferroviaria",
    },
    description: {
      en: "Governor Hochul proposes significant upgrades to the Metro-North Hudson Line, targeting NYC to Poughkeepsie travel time under 90 minutes and evaluating Penn Station connectivity.",
      "zh-TW": "州長 Hochul 提議對 Metro-North Hudson Line 進行重大升級，目標將紐約市到 Poughkeepsie 的旅行時間縮短到 90 分鐘以內，並評估連接 Penn Station 的可行性。",
      es: "La Gobernadora Hochul propone mejoras significativas a la Linea Hudson de Metro-North.",
    },
    category: "infrastructure",
  },
  {
    year: 2029,
    title: {
      en: "Mid-Hudson Transformation Target Year",
      "zh-TW": "Mid-Hudson 轉型目標年",
      es: "Ano Objetivo de Transformacion del Mid-Hudson",
    },
    description: {
      en: "Target year for completion of major DRI projects and regional economic development initiatives, aiming to establish Hudson Valley as a model for post-industrial urban revival with equity and sustainability.",
      "zh-TW": "主要 DRI 專案和區域經濟發展計畫的目標完成年。旨在確立 Hudson Valley 作為兼顧公平與可持續性的後工業城市復興典範。",
      es: "Ano objetivo para la finalizacion de los principales proyectos DRI e iniciativas de desarrollo economico regional.",
    },
    category: "government",
  },
];
