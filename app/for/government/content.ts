import type { Language } from "@/lib/i18n/language-context";

const en = {
  hero: {
    badge: "Government Report",
    title: "Revitalization Progress Report",
    desc: "A comprehensive overview of Hudson Valley's revitalization efforts, including DRI project completion, BOA planning, economic impact, and available funding programs.",
  },
  driSection: {
    title: "DRI Completion Summary",
    desc: "Downtown Revitalization Initiative -- all projects successfully completed.",
    projectsLabel: "Projects",
    totalInvestedLabel: "Total Invested",
    completionLabel: "Completion",
  },
  boaSection: {
    title: "Regional Planning Progress",
    desc: "NYS CEDS 2025-2029 and HVRC Strategic Plan guide comprehensive regional economic development.",
    timeline: [
      { year: "2023", event: "Hudson Valley CEDS 2025-2029 Initiated" },
      { year: "2024", event: "Poughkeepsie DRI Round 8 ($10M) Approved" },
      { year: "2025", event: "ESD $53.1M Regional Council Grants Awarded" },
      { year: "2026", event: "Metro-North Rail Infrastructure Upgrade Begins" },
      { year: "2027-29", event: "Regional Transformation & Implementation" },
    ],
  },
  impactSection: {
    title: "Economic Impact Dashboard",
    desc: "Key metrics showing the impact of revitalization efforts on Hudson Valley's economy.",
    metrics: [
      { label: "Regional Population", value: "2.1M+", detail: "9-county Hudson Valley" },
      { label: "Median Household Income", value: "$117,663", detail: "+2.3% YoY (2023)" },
      { label: "DRI Investment", value: "$40M+", detail: "Poughkeepsie, Peekskill, White Plains" },
      { label: "ESD Regional Grant", value: "$53.1M", detail: "53 projects, 7 counties (2025)" },
    ],
  },
  fundingSection: {
    title: "Funding & Grants",
    desc: "Available and completed funding programs for Hudson Valley's revitalization.",
    programs: [
      { name: "Downtown Revitalization Initiative (DRI)", amount: "$40M+", status: "Active", description: "Multiple Hudson Valley cities each receiving $10M for downtown transformation." },
      { name: "ESD Regional Council Initiative", amount: "$53.1M", status: "2025 Award", description: "Mid-Hudson's largest regional grant covering 53 projects across 7 counties." },
      { name: "FAST NY Shovel-Ready Program", amount: "$400M (statewide)", status: "Available", description: "Funding to prepare development-ready sites across New York State." },
      { name: "POWER UP Grant", amount: "$300M (statewide)", status: "Available (Nov 2025)", description: "New statewide economic development grant launched November 2025." },
      { name: "USDA Rural Development", amount: "Various", status: "Ongoing", description: "Federal programs supporting rural community development, housing, and agricultural business." },
    ],
  },
  reportsSection: {
    title: "Downloadable Reports",
    desc: "Access detailed reports for stakeholder review and distribution.",
    reports: [
      {
        title: "Personal Guide",
        description: "Resident-focused overview of Hudson Valley",
      },
      {
        title: "School Partnership Proposal",
        description: "Academic collaboration framework",
      },
      {
        title: "Government Progress Report",
        description: "Full DRI and BOA documentation",
      },
      {
        title: "Investor Deck",
        description: "Investment opportunity presentation",
      },
    ],
  },
  cta: {
    title: "Need More Information?",
    desc: "Request a detailed briefing or schedule a meeting with the planning team.",
    requestReport: "Request Detailed Report",
    scheduleBriefing: "Schedule Briefing",
  },
};

export type GovernmentContent = typeof en;

const zhTW: GovernmentContent = {
  hero: {
    badge: "政府報告",
    title: "都市更新進度報告",
    desc: "全面概述 Hudson Valley 的都市更新工作，包括 DRI 專案完成進度、BOA 規劃、經濟影響及可用資金計畫。",
  },
  driSection: {
    title: "DRI 完成摘要",
    desc: "Downtown Revitalization Initiative（市中心活化倡議）── 所有專案均已順利完成。",
    projectsLabel: "專案數",
    totalInvestedLabel: "總投資額",
    completionLabel: "完成率",
  },
  boaSection: {
    title: "區域規劃進度",
    desc: "NYS CEDS 2025-2029 及 HVRC 策略計畫引導全面性區域經濟發展。",
    timeline: [
      { year: "2023", event: "Hudson Valley CEDS 2025-2029 啟動" },
      { year: "2024", event: "Poughkeepsie DRI 第 8 輪（$10M）核准" },
      { year: "2025", event: "ESD $53.1M 區域理事會補助金頒發" },
      { year: "2026", event: "Metro-North 鐵路基礎設施升級啟動" },
      { year: "2027-29", event: "區域轉型與落實推進" },
    ],
  },
  impactSection: {
    title: "經濟影響儀表板",
    desc: "關鍵指標顯示都市更新對 Hudson Valley 經濟的影響。",
    metrics: [
      { label: "區域人口", value: "2.1M+", detail: "Hudson Valley 9 縣" },
      { label: "家庭中位收入", value: "$117,663", detail: "+2.3% 年增（2023）" },
      { label: "DRI 投資", value: "$40M+", detail: "Poughkeepsie、Peekskill、White Plains" },
      { label: "ESD 區域補助", value: "$53.1M", detail: "53 個專案，7 縣（2025）" },
    ],
  },
  fundingSection: {
    title: "資金與補助",
    desc: "Hudson Valley 都市更新的可用及已完成資金計畫。",
    programs: [
      { name: "Downtown Revitalization Initiative (DRI)", amount: "$40M+", status: "進行中", description: "Hudson Valley 多個城市各獲 $10M，用於市中心轉型。" },
      { name: "ESD 區域理事會倡議", amount: "$53.1M", status: "2025 年頒發", description: "Mid-Hudson 迄今最大區域補助，涵蓋 7 縣 53 個專案。" },
      { name: "FAST NY 地產開發準備計畫", amount: "$4 億（全州）", status: "可申請", description: "資助全紐約州開發就緒場址的準備工作。" },
      { name: "POWER UP 補助金", amount: "$3 億（全州）", status: "可申請（2025 年 11 月）", description: "2025 年 11 月推出的全州新經濟發展補助。" },
      { name: "USDA 農村發展計畫", amount: "不等", status: "持續進行", description: "聯邦計畫，支援農村社區發展、住宅及農業企業。" },
    ],
  },
  reportsSection: {
    title: "可下載報告",
    desc: "取得供利害關係人審閱與分發的詳細報告。",
    reports: [
      {
        title: "個人指南",
        description: "以居民為導向的 Hudson Valley 概覽",
      },
      {
        title: "學校合作提案",
        description: "學術合作架構",
      },
      {
        title: "政府進度報告",
        description: "完整 DRI 及 BOA 文件",
      },
      {
        title: "投資人簡報",
        description: "投資機會簡報",
      },
    ],
  },
  cta: {
    title: "需要更多資訊？",
    desc: "申請詳細簡報或安排與規劃團隊的會議。",
    requestReport: "索取詳細報告",
    scheduleBriefing: "預約簡報",
  },
};

const es: GovernmentContent = {
  hero: {
    badge: "Informe Gubernamental",
    title: "Informe de Progreso de Revitalización",
    desc: "Una visión integral de los esfuerzos de revitalización de Hudson Valley, incluyendo la finalización de proyectos DRI, planificación BOA, impacto económico y programas de financiamiento disponibles.",
  },
  driSection: {
    title: "Resumen de Finalización DRI",
    desc: "Downtown Revitalization Initiative -- todos los proyectos completados exitosamente.",
    projectsLabel: "Proyectos",
    totalInvestedLabel: "Total Invertido",
    completionLabel: "Completado",
  },
  boaSection: {
    title: "Progreso de Planificación Regional",
    desc: "El CEDS 2025-2029 de NYS y el Plan Estratégico de HVRC guían el desarrollo económico regional integral.",
    timeline: [
      { year: "2023", event: "CEDS 2025-2029 de Hudson Valley Iniciado" },
      { year: "2024", event: "DRI Ronda 8 de Poughkeepsie ($10M) Aprobada" },
      { year: "2025", event: "Subvenciones Regionales ESD de $53.1M Otorgadas" },
      { year: "2026", event: "Inicio de Mejora de Infraestructura Ferroviaria Metro-North" },
      { year: "2027-29", event: "Transformación e Implementación Regional" },
    ],
  },
  impactSection: {
    title: "Panel de Impacto Económico",
    desc: "Indicadores clave que muestran el impacto de los esfuerzos de revitalización en la economía de Hudson Valley.",
    metrics: [
      { label: "Población Regional", value: "2.1M+", detail: "9 condados de Hudson Valley" },
      { label: "Ingreso Familiar Mediano", value: "$117,663", detail: "+2.3% interanual (2023)" },
      { label: "Inversión DRI", value: "$40M+", detail: "Poughkeepsie, Peekskill, White Plains" },
      { label: "Subvención Regional ESD", value: "$53.1M", detail: "53 proyectos, 7 condados (2025)" },
    ],
  },
  fundingSection: {
    title: "Financiamiento y Subvenciones",
    desc: "Programas de financiamiento disponibles y completados para la revitalización de Hudson Valley.",
    programs: [
      { name: "Downtown Revitalization Initiative (DRI)", amount: "$40M+", status: "Activo", description: "Múltiples ciudades de Hudson Valley reciben $10M cada una para transformación del centro urbano." },
      { name: "Iniciativa del Consejo Regional ESD", amount: "$53.1M", status: "Premio 2025", description: "La mayor subvención regional de Mid-Hudson, con 53 proyectos en 7 condados." },
      { name: "Programa FAST NY de Sitios Listos", amount: "$400M (estatal)", status: "Disponible", description: "Fondos para preparar sitios de desarrollo en todo el Estado de Nueva York." },
      { name: "Subvención POWER UP", amount: "$300M (estatal)", status: "Disponible (nov. 2025)", description: "Nueva subvención estatal de desarrollo económico lanzada en noviembre de 2025." },
      { name: "Desarrollo Rural USDA", amount: "Varios", status: "En curso", description: "Programas federales de apoyo al desarrollo comunitario rural, vivienda y negocios agrícolas." },
    ],
  },
  reportsSection: {
    title: "Informes Descargables",
    desc: "Acceda a informes detallados para revisión y distribución a partes interesadas.",
    reports: [
      {
        title: "Guía Personal",
        description: "Resumen de Hudson Valley orientado a residentes",
      },
      {
        title: "Propuesta de Alianza Escolar",
        description: "Marco de colaboración académica",
      },
      {
        title: "Informe de Progreso Gubernamental",
        description: "Documentación completa de DRI y BOA",
      },
      {
        title: "Presentación para Inversionistas",
        description: "Presentación de oportunidades de inversión",
      },
    ],
  },
  cta: {
    title: "¿Necesita Más Información?",
    desc: "Solicite un informe detallado o programe una reunión con el equipo de planificación.",
    requestReport: "Solicitar Informe Detallado",
    scheduleBriefing: "Programar Sesión Informativa",
  },
};

export const content: Record<Language, GovernmentContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
