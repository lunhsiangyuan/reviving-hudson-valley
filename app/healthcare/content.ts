import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Healthcare",
    title: "Healthcare & Wellness",
    desc: "A robust healthcare ecosystem anchored by WMCHealth, Northwell Health, and Garnet Health — bringing Level I trauma care, academic medicine, and community health to Hudson Valley residents.",
  },
  wmchealth: {
    title: "WMCHealth Network",
    desc: "WMCHealth, anchored by Westchester Medical Center in Valhalla, is Hudson Valley's premier academic medical center and the region's only Level I Trauma Center. With 895 beds and 9 hospitals across the network, WMCHealth serves over 3 million people across the Mid-Hudson region.",
    tabs: {
      overview: "Overview",
      services: "Services",
      coverage: "Coverage",
      contact: "Contact",
    },
    overviewLabels: {
      address: "Address",
      phone: "Phone",
      level: "Trauma Level",
      description: "Description",
    },
    coverageIntro:
      "WMCHealth Network spans 9 hospitals and serves the following counties:",
    coverageAreas: [
      "Westchester County",
      "Rockland County",
      "Putnam County",
      "Orange County",
      "Dutchess County",
      "Ulster County",
      "Sullivan County",
    ],
    keyStats: [
      "Only Level I Trauma Center in Hudson Valley",
      "895 beds at flagship Westchester Medical Center",
      "9 hospitals across the network",
      "3+ million patients served annually",
    ],
    contactTitle: "Contact & Patient Services",
    patientPortalLabel: "Patient Portal",
    programsTitle: "Signature Programs",
  },
  vassar: {
    title: "Vassar Brothers Medical Center (Northwell Health)",
    p1: "Vassar Brothers Medical Center, a Northwell Health affiliate in Poughkeepsie, is the leading community hospital in Dutchess County. Following Northwell's 2023 acquisition, the hospital now connects patients to the largest health system in New York State, with access to 21 hospitals and 800+ ambulatory locations.",
    p2: "The Northwell affiliation brings advanced oncology, cardiac surgery, and neurosciences programs to the mid-Hudson Valley — reducing the need for patients to travel to New York City for specialized care.",
  },
  garnet: {
    title: "Garnet Health & Regional Healthcare",
    communityHealth: {
      title: "Community Health Resources",
      items: [
        "WMCHealth: Level I Trauma Center serving all of Hudson Valley",
        "Vassar Brothers Medical Center: Northwell Health affiliate, leading Dutchess County hospital",
        "Garnet Health Medical Center: 383-bed hospital serving Orange and Sullivan counties",
        "Growing network of specialty and primary care providers across 7 counties",
      ],
    },
  },
};

export type HealthcareContent = typeof en;

const zhTW: HealthcareContent = {
  header: {
    badge: "醫療保健",
    title: "醫療保健與健康",
    desc: "以 WMCHealth、Northwell Health 和 Garnet Health 為核心的完善醫療生態系統，為 Hudson Valley 居民提供第一級創傷中心、學術醫學和社區健康服務。",
  },
  wmchealth: {
    title: "WMCHealth Network",
    desc: "WMCHealth 以位於 Valhalla 的 Westchester Medical Center 為核心，是 Hudson Valley 最頂尖的學術醫療中心，也是該地區唯一的第一級創傷中心。旗下擁有 895 張床位，整個網絡涵蓋 9 家醫院，服務 Mid-Hudson 地區超過 300 萬名居民。",
    tabs: {
      overview: "概覽",
      services: "服務項目",
      coverage: "服務範圍",
      contact: "聯繫方式",
    },
    overviewLabels: {
      address: "地址",
      phone: "電話",
      level: "創傷等級",
      description: "簡介",
    },
    coverageIntro: "WMCHealth Network 涵蓋 9 家醫院，服務以下縣市：",
    coverageAreas: [
      "Westchester 縣",
      "Rockland 縣",
      "Putnam 縣",
      "Orange 縣",
      "Dutchess 縣",
      "Ulster 縣",
      "Sullivan 縣",
    ],
    keyStats: [
      "Hudson Valley 唯一的第一級創傷中心",
      "旗艦 Westchester Medical Center 擁有 895 張床位",
      "網絡涵蓋 9 家醫院",
      "每年服務逾 300 萬名病患",
    ],
    contactTitle: "聯繫與病患服務",
    patientPortalLabel: "病患入口網站",
    programsTitle: "特色醫療計畫",
  },
  vassar: {
    title: "Vassar Brothers Medical Center（Northwell Health）",
    p1: "Vassar Brothers Medical Center 是 Northwell Health 在 Poughkeepsie 的附屬醫院，為 Dutchess 縣最重要的社區醫院。2023 年被 Northwell 收購後，病患現可接入紐約州最大的醫療系統，享有 21 家醫院和 800 多個門診據點的資源。",
    p2: "Northwell 的加入為 Mid-Hudson Valley 帶來了先進的腫瘤學、心臟外科和神經科學計畫，讓病患無需前往紐約市即可獲得專科醫療服務。",
  },
  garnet: {
    title: "Garnet Health 與區域醫療保健",
    communityHealth: {
      title: "社區健康資源",
      items: [
        "WMCHealth：服務整個 Hudson Valley 的第一級創傷中心",
        "Vassar Brothers Medical Center：Northwell Health 附屬醫院，Dutchess 縣最重要的醫院",
        "Garnet Health Medical Center：383 床醫院，服務 Orange 和 Sullivan 縣",
        "跨越 7 個縣的專科與基層醫療服務網絡持續擴展",
      ],
    },
  },
};

const es: HealthcareContent = {
  header: {
    badge: "Salud",
    title: "Salud y Bienestar",
    desc: "Un solido ecosistema de salud anclado por WMCHealth, Northwell Health y Garnet Health, brindando atencion de trauma Nivel I, medicina academica y salud comunitaria a los residentes del Hudson Valley.",
  },
  wmchealth: {
    title: "WMCHealth Network",
    desc: "WMCHealth, con sede en el Westchester Medical Center en Valhalla, es el principal centro medico academico del Hudson Valley y el unico Centro de Trauma Nivel I de la region. Con 895 camas y 9 hospitales en la red, WMCHealth atiende a mas de 3 millones de personas en la region Mid-Hudson.",
    tabs: {
      overview: "Resumen",
      services: "Servicios",
      coverage: "Cobertura",
      contact: "Contacto",
    },
    overviewLabels: {
      address: "Direccion",
      phone: "Telefono",
      level: "Nivel de Trauma",
      description: "Descripcion",
    },
    coverageIntro:
      "WMCHealth Network abarca 9 hospitales y sirve a los siguientes condados:",
    coverageAreas: [
      "Condado de Westchester",
      "Condado de Rockland",
      "Condado de Putnam",
      "Condado de Orange",
      "Condado de Dutchess",
      "Condado de Ulster",
      "Condado de Sullivan",
    ],
    keyStats: [
      "Unico Centro de Trauma Nivel I en Hudson Valley",
      "895 camas en el Westchester Medical Center principal",
      "9 hospitales en la red",
      "Mas de 3 millones de pacientes atendidos anualmente",
    ],
    contactTitle: "Contacto y Servicios al Paciente",
    patientPortalLabel: "Portal del Paciente",
    programsTitle: "Programas Insignia",
  },
  vassar: {
    title: "Vassar Brothers Medical Center (Northwell Health)",
    p1: "Vassar Brothers Medical Center, un afiliado de Northwell Health en Poughkeepsie, es el principal hospital comunitario del condado de Dutchess. Tras la adquisicion de Northwell en 2023, el hospital ahora conecta a los pacientes con el sistema de salud mas grande del Estado de Nueva York, con acceso a 21 hospitales y mas de 800 ubicaciones ambulatorias.",
    p2: "La afiliacion con Northwell trae programas avanzados de oncologia, cirugia cardiaca y neurociencias al mid-Hudson Valley, reduciendo la necesidad de que los pacientes viajen a la ciudad de Nueva York para recibir atencion especializada.",
  },
  garnet: {
    title: "Garnet Health y Atencion Medica Regional",
    communityHealth: {
      title: "Recursos de Salud Comunitaria",
      items: [
        "WMCHealth: Centro de Trauma Nivel I que sirve a todo Hudson Valley",
        "Vassar Brothers Medical Center: afiliado de Northwell Health, hospital lider en el condado de Dutchess",
        "Garnet Health Medical Center: hospital de 383 camas que sirve a los condados de Orange y Sullivan",
        "Red creciente de proveedores de atencion primaria y especializada en 7 condados",
      ],
    },
  },
};

export const content: Record<Language, HealthcareContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
