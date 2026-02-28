// Hudson Valley Reviving Plan - Organizations Data (i18n)

import type { Language } from "@/lib/i18n/language-context";

export type OrganizationType =
  | "healthcare"
  | "education"
  | "media"
  | "government"
  | "cultural"
  | "technology";

// --- Healthcare domain interfaces (resolved / non-localized) ---

export interface ServiceDetail {
  name: string;
  description: string;
  conditions?: string[];
}

export interface Physician {
  name: string;
  title: string;
  specialty: string[];
  languages?: string[];
  credentials?: string;
}

export interface WellnessProgram {
  name: string;
  description: string;
  effectiveness?: string;
}

export interface HealthcareInfo {
  ceo?: { name: string; credentials: string; background: string };
  services: ServiceDetail[];
  physicians: Physician[];
  insurance: string[];
  hours?: Record<string, string>;
  telehealth?: boolean;
  programs?: WellnessProgram[];
  socialMedia?: Record<string, string>;
  appointmentUrl?: string;
  patientPortalUrl?: string;
  donateUrl?: string;
}

// --- Education domain interfaces (resolved / non-localized) ---

export interface Campus {
  name: string;
  address: string;
  acres?: number;
  description?: string;
}

export interface ProgramDetail {
  name: string;
  degree: string;
  level: string;
  credits?: number;
  description?: string;
}

export interface FacultyMember {
  name: string;
  title: string;
  department?: string;
  credentials?: string;
}

export interface EducationInfo {
  founded?: number;
  accreditation?: string;
  accreditingBody?: string;
  campuses?: Campus[];
  programs: ProgramDetail[];
  tuition?: { amount: number; period: string; notes?: string };
  enrollment?: { total?: number; newStudents?: number; retentionRate?: string };
  faculty?: FacultyMember[];
  leadership?: { name: string; title: string; credentials?: string }[];
  graduationRate?: string;
  satAverage?: number;
  nicheRating?: string;
  studentCountries?: number;
  boardingAvailable?: boolean;
  admissionRequirements?: string[];
}

// --- Core Organization interface (resolved / non-localized) ---

export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
  address?: string;
  phone?: string;
  website: string;
  description: string;
  sourceUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  additionalInfo?: HealthcareInfo | EducationInfo | Record<string, unknown>;
}

// --- Helper type guards ---

export function isHealthcareInfo(
  info: Organization["additionalInfo"]
): info is HealthcareInfo {
  return !!info && "physicians" in info && "services" in info;
}

export function isEducationInfo(
  info: Organization["additionalInfo"]
): info is EducationInfo {
  return !!info && "programs" in info && Array.isArray((info as EducationInfo).programs) && (info as EducationInfo).programs.length > 0 && typeof (info as EducationInfo).programs[0] === "object" && "degree" in (info as EducationInfo).programs[0];
}

// ============================================================
// Localized interfaces (internal, for the i18n data store)
// ============================================================

interface LocalizedServiceDetail {
  name: string;
  description: Record<Language, string>;
  conditions?: string[];
}

interface LocalizedWellnessProgram {
  name: string;
  description: Record<Language, string>;
  effectiveness?: Record<Language, string>;
}

interface LocalizedHealthcareInfo {
  ceo?: { name: string; credentials: string; background: Record<Language, string> };
  services: LocalizedServiceDetail[];
  physicians: Physician[];
  insurance: string[];
  hours?: Record<string, string>;
  telehealth?: boolean;
  programs?: LocalizedWellnessProgram[];
  socialMedia?: Record<string, string>;
  appointmentUrl?: string;
  patientPortalUrl?: string;
  donateUrl?: string;
}

interface LocalizedCampus {
  name: string;
  address: string;
  acres?: number;
  description?: Record<Language, string>;
}

interface LocalizedProgramDetail {
  name: string;
  degree: string;
  level: string;
  credits?: number;
  description?: Record<Language, string>;
}

interface LocalizedEducationInfo {
  founded?: number;
  accreditation?: string;
  accreditingBody?: string;
  campuses?: LocalizedCampus[];
  programs: LocalizedProgramDetail[];
  tuition?: { amount: number; period: string; notes?: Record<Language, string> };
  enrollment?: { total?: number; newStudents?: number; retentionRate?: string };
  faculty?: FacultyMember[];
  leadership?: { name: string; title: string; credentials?: string }[];
  graduationRate?: string;
  satAverage?: number;
  nicheRating?: string;
  studentCountries?: number;
  boardingAvailable?: boolean;
  admissionRequirements?: Record<Language, string[]>;
}

interface LocalizedOrganization {
  id: string;
  name: string;
  type: OrganizationType;
  address?: string;
  phone?: string;
  website: string;
  description: Record<Language, string>;
  sourceUrl: string;
  coordinates?: { lat: number; lng: number };
  additionalInfo?: LocalizedHealthcareInfo | LocalizedEducationInfo | Record<string, unknown>;
}

// --- Localized type guards (internal) ---

function isLocalizedHealthcareInfo(
  info: LocalizedOrganization["additionalInfo"]
): info is LocalizedHealthcareInfo {
  return !!info && "physicians" in info && "services" in info;
}

function isLocalizedEducationInfo(
  info: LocalizedOrganization["additionalInfo"]
): info is LocalizedEducationInfo {
  return (
    !!info &&
    "programs" in info &&
    Array.isArray((info as LocalizedEducationInfo).programs) &&
    (info as LocalizedEducationInfo).programs.length > 0 &&
    typeof (info as LocalizedEducationInfo).programs[0] === "object" &&
    "degree" in (info as LocalizedEducationInfo).programs[0]
  );
}

// ============================================================
// Resolve helpers
// ============================================================

function resolveText(rec: Record<Language, string>, lang: Language): string {
  return rec[lang] ?? rec.en;
}

function resolveTextArray(rec: Record<Language, string[]>, lang: Language): string[] {
  return rec[lang] ?? rec.en;
}

function resolveHealthcareInfo(
  info: LocalizedHealthcareInfo,
  lang: Language
): HealthcareInfo {
  return {
    ...info,
    ceo: info.ceo
      ? {
          name: info.ceo.name,
          credentials: info.ceo.credentials,
          background: resolveText(info.ceo.background, lang),
        }
      : undefined,
    services: info.services.map((s) => ({
      name: s.name,
      description: resolveText(s.description, lang),
      ...(s.conditions ? { conditions: s.conditions } : {}),
    })),
    programs: info.programs
      ? info.programs.map((p) => ({
          name: p.name,
          description: resolveText(p.description, lang),
          ...(p.effectiveness
            ? { effectiveness: resolveText(p.effectiveness, lang) }
            : {}),
        }))
      : undefined,
  };
}

function resolveEducationInfo(
  info: LocalizedEducationInfo,
  lang: Language
): EducationInfo {
  return {
    ...info,
    campuses: info.campuses
      ? info.campuses.map((c) => ({
          name: c.name,
          address: c.address,
          ...(c.acres !== undefined ? { acres: c.acres } : {}),
          ...(c.description
            ? { description: resolveText(c.description, lang) }
            : {}),
        }))
      : undefined,
    programs: info.programs.map((p) => ({
      name: p.name,
      degree: p.degree,
      level: p.level,
      ...(p.credits !== undefined ? { credits: p.credits } : {}),
      ...(p.description
        ? { description: resolveText(p.description, lang) }
        : {}),
    })),
    tuition: info.tuition
      ? {
          amount: info.tuition.amount,
          period: info.tuition.period,
          ...(info.tuition.notes
            ? { notes: resolveText(info.tuition.notes, lang) }
            : {}),
        }
      : undefined,
    admissionRequirements: info.admissionRequirements
      ? resolveTextArray(info.admissionRequirements, lang)
      : undefined,
  };
}

function resolveAdditionalInfo(
  info: LocalizedOrganization["additionalInfo"],
  type: OrganizationType,
  lang: Language
): Organization["additionalInfo"] {
  if (!info) return undefined;
  if (type === "healthcare" && isLocalizedHealthcareInfo(info)) {
    return resolveHealthcareInfo(info, lang);
  }
  if (type === "education" && isLocalizedEducationInfo(info)) {
    return resolveEducationInfo(info, lang);
  }
  return info as Record<string, unknown>;
}

// ============================================================
// Localized Organization Data
// ============================================================

const localizedOrganizations: LocalizedOrganization[] = [
  // ==================== HEALTHCARE ====================
  {
    id: "wmchealth",
    name: "WMCHealth Network",
    type: "healthcare",
    address: "100 Woods Rd, Valhalla, NY 10595",
    phone: "(914) 493-7000",
    website: "https://www.wmchealth.org",
    description: {
      en: "WMCHealth is a 10-hospital healthcare network serving 3.5+ million people across the Hudson Valley and Catskill regions. With 1,900 beds and 12,000+ employees, it is the region's largest healthcare employer.",
      "zh-TW":
        "WMCHealth 是一個擁有 10 家醫院的醫療網絡，服務 Hudson Valley 和 Catskill 地區 350 萬以上的居民。擁有 1,900 張床位和 12,000 多名員工，是該地區最大的醫療雇主。",
      es: "WMCHealth es una red de 10 hospitales que sirve a mas de 3.5 millones de personas en las regiones de Hudson Valley y Catskill.",
    },
    sourceUrl: "https://www.wmchealth.org",
    coordinates: { lat: 41.082, lng: -73.764 },
  },
  {
    id: "vassar-brothers",
    name: "Vassar Brothers Medical Center",
    type: "healthcare",
    address: "45 Reade Pl, Poughkeepsie, NY 12601",
    phone: "(845) 454-8500",
    website: "https://www.northwell.edu/find-care/locations/vassar-brothers-medical-center",
    description: {
      en: "365-bed hospital in Poughkeepsie, acquired by Northwell Health (part of a $22.6B system) in 2024, bringing advanced cancer care and cardiac services to the mid-Hudson Valley.",
      "zh-TW":
        "位於 Poughkeepsie 的 365 床醫院，2024 年被 Northwell Health（$226 億醫療系統）收購，為 Mid-Hudson Valley 帶來先進癌症和心臟服務。",
      es: "Hospital de 365 camas en Poughkeepsie, adquirido por Northwell Health en 2024.",
    },
    sourceUrl: "https://www.northwell.edu/",
    coordinates: { lat: 41.7063, lng: -73.9267 },
  },

  // ==================== EDUCATION ====================
  {
    id: "suny-new-paltz",
    name: "SUNY New Paltz",
    type: "education",
    address: "1 Hawk Dr, New Paltz, NY 12561",
    phone: "(845) 257-7869",
    website: "https://www.newpaltz.edu",
    description: {
      en: "A premier public liberal arts college with 7,900+ students. Home to the Hudson Valley Venture Hub, supporting 20+ startups with $4.5M+ investment returns in its first year. Designated ESD Innovation Hotspot.",
      "zh-TW":
        "擁有 7,900 多名學生的頂尖公立文理學院。設有 Hudson Valley Venture Hub 創業加速器，第一年支援 20+ 新創，產生 $450 萬投資回報，被 ESD 指定為創新熱點。",
      es: "Una destacada universidad de artes liberales publicas con mas de 7,900 estudiantes.",
    },
    sourceUrl: "https://www.newpaltz.edu",
    coordinates: { lat: 41.7484, lng: -74.0858 },
  },
  {
    id: "vassar-college",
    name: "Vassar College",
    type: "education",
    address: "124 Raymond Ave, Poughkeepsie, NY 12604",
    phone: "(845) 437-7000",
    website: "https://www.vassar.edu",
    description: {
      en: "A renowned liberal arts college founded in 1861, with 2,400+ students. Known for producing influential artists, scientists, and civic leaders. 1,000-acre campus in Poughkeepsie.",
      "zh-TW":
        "1861 年創立的著名文理學院，擁有 2,400 多名學生。以培養有影響力的藝術家、科學家和公民領袖著稱。校園坐落於 Poughkeepsie 1,000 英畝土地上。",
      es: "Una reconocida universidad de artes liberales fundada en 1861 con mas de 2,400 estudiantes.",
    },
    sourceUrl: "https://www.vassar.edu",
    coordinates: { lat: 41.6898, lng: -73.8978 },
  },
  {
    id: "bard-college",
    name: "Bard College",
    type: "education",
    address: "30 Campus Rd, Annandale-on-Hudson, NY 12504",
    phone: "(845) 758-6822",
    website: "https://www.bard.edu",
    description: {
      en: "A distinguished liberal arts college on the Hudson River, known for arts, humanities, and civic engagement. Fisher Center for the Performing Arts is a world-class venue.",
      "zh-TW":
        "坐落於 Hudson River 畔的傑出文理學院，以藝術、人文和公民參與著稱。Fisher 表演藝術中心是世界級演出場館。",
      es: "Una distinguida universidad de artes liberales a orillas del rio Hudson.",
    },
    sourceUrl: "https://www.bard.edu",
    coordinates: { lat: 42.0268, lng: -73.9068 },
  },

  // ==================== CULTURAL ====================
  {
    id: "scenic-hudson",
    name: "Scenic Hudson",
    type: "cultural",
    address: "One Civic Center Plaza, Suite 200, Poughkeepsie, NY 12601",
    phone: "(845) 473-4440",
    website: "https://www.scenichudson.org",
    description: {
      en: "Since 1963, Scenic Hudson has protected 53,000+ acres and built 45+ parks. A leading environmental nonprofit fighting PCB pollution and preserving the Hudson River valley's natural beauty.",
      "zh-TW":
        "自 1963 年起，Scenic Hudson 已保護 53,000+ 英畝土地並建造 45+ 座公園。是打擊 PCB 污染、保護 Hudson River 流域自然美景的領先環保非營利組織。",
      es: "Desde 1963, Scenic Hudson ha protegido mas de 53,000 acres y construido mas de 45 parques.",
    },
    sourceUrl: "https://www.scenichudson.org",
    coordinates: { lat: 41.7078, lng: -73.932 },
  },
  {
    id: "dia-beacon",
    name: "Dia:Beacon",
    type: "cultural",
    address: "3 Beekman St, Beacon, NY 12508",
    phone: "(845) 440-0100",
    website: "https://www.diaart.org/visit/visit-our-locations-sites/dia-beacon-riggio-galleries-beacon-new-york",
    description: {
      en: "A transformative contemporary art museum in a 300,000 sq ft former Nabisco factory. Opened in 2003, it catalyzed Beacon's economic revival and inspired urban revitalization across the Hudson Valley.",
      "zh-TW":
        "一個改建自 30 萬平方呎 Nabisco 工廠的當代藝術博物館。2003 年開幕後，帶動了 Beacon 的經濟復甦，激勵了整個 Hudson Valley 的城市振興運動。",
      es: "Un transformador museo de arte contemporaneo en una antigua fabrica de Nabisco de 300,000 pies cuadrados.",
    },
    sourceUrl: "https://www.diaart.org",
    coordinates: { lat: 41.5051, lng: -73.9712 },
  },

  // ==================== GOVERNMENT ====================
  {
    id: "pattern-for-progress",
    name: "Hudson Valley Pattern for Progress",
    type: "government",
    address: "3 Washington Center, Newburgh, NY 12550",
    phone: "(845) 565-4900",
    website: "https://www.pattern-for-progress.org",
    description: {
      en: "A regional planning organization promoting equitable, sustainable solutions to improve quality of life across Hudson Valley. Conducts research on housing, economic development, health, and government efficiency.",
      "zh-TW":
        "促進公平、可持續解決方案以改善 Hudson Valley 生活品質的區域規劃組織。對住房、經濟發展、健康和政府效能進行研究。",
      es: "Una organizacion de planificacion regional que promueve soluciones equitativas y sostenibles para mejorar la calidad de vida en Hudson Valley.",
    },
    sourceUrl: "https://www.pattern-for-progress.org",
    coordinates: { lat: 41.5034, lng: -74.0104 },
  },
  {
    id: "hvedc",
    name: "Hudson Valley Economic Development Corporation",
    type: "government",
    address: "Hudson Valley, NY",
    website: "https://www.hvedc.com",
    description: {
      en: "Promotes economic development and business attraction in the Hudson Valley region, providing site selection, business planning, and regional marketing services.",
      "zh-TW":
        "促進 Hudson Valley 地區的經濟發展和企業吸引，提供選址、商業規劃和區域行銷服務。",
      es: "Promueve el desarrollo economico y la atraccion empresarial en la region del Hudson Valley.",
    },
    sourceUrl: "https://www.hvedc.com",
  },
  {
    id: "hvadc",
    name: "Hudson Valley Agribusiness Development Corporation",
    type: "government",
    address: "215 Canal St, Ellenville, NY 12428",
    phone: "(845) 647-1239",
    website: "https://www.hvadc.org",
    description: {
      en: "The region's only CDFI focused on agriculture. Provides one-on-one business technical assistance, agricultural lending, and the FeedHV community food network to 2,280+ farms.",
      "zh-TW":
        "該地區唯一專注農業的社區發展金融機構。為 2,280+ 農場提供一對一商業技術援助、農業貸款和 FeedHV 社區食物網路。",
      es: "La unica CDFI de la region enfocada en agricultura, apoyando mas de 2,280 granjas.",
    },
    sourceUrl: "https://www.hvadc.org",
    coordinates: { lat: 41.7179, lng: -74.3877 },
  },
  {
    id: "mhvfcu",
    name: "Mid-Hudson Valley Federal Credit Union",
    type: "government",
    website: "https://www.mhvfcu.com",
    description: {
      en: "Forbes 2024 #1 Best-In-State Credit Union in New York. Supports community development through 109+ financial education workshops annually, focusing on education, community development, health, and human services.",
      "zh-TW":
        "Forbes 2024 年紐約州第一名信用合作社。每年舉辦 109+ 場金融教育研討會，聚焦教育、社區發展、健康和人文社會服務。",
      es: "La #1 cooperativa de credito de Nueva York segun Forbes 2024.",
    },
    sourceUrl: "https://www.mhvfcu.com",
  },

  // ==================== TECHNOLOGY ====================
  {
    id: "ibm-poughkeepsie",
    name: "IBM Quantum Computation Center",
    type: "technology",
    address: "294 Route 9D, Poughkeepsie, NY 12601",
    website: "https://www.ibm.com/quantum",
    description: {
      en: "IBM's historic Poughkeepsie campus, home to the world's first Quantum Computation Center (2019). Operates 20+ quantum systems executing over 2 billion quantum circuits daily.",
      "zh-TW":
        "IBM 歷史悠久的 Poughkeepsie 園區，是世界首座量子計算中心（2019 年）的所在地。運行 20+ 量子系統，每日執行超過 20 億量子電路。",
      es: "El campus historico de IBM en Poughkeepsie, sede del primer Centro de Computacion Cuantica del mundo (2019).",
    },
    sourceUrl: "https://www.ibm.com/quantum",
    coordinates: { lat: 41.6959, lng: -73.9348 },
  },
];

// ============================================================
// Public resolve function
// ============================================================

export function resolveOrganizations(lang: Language): Organization[] {
  return localizedOrganizations.map((org) => ({
    ...org,
    description: resolveText(org.description, lang),
    additionalInfo: org.additionalInfo
      ? resolveAdditionalInfo(org.additionalInfo, org.type, lang)
      : undefined,
  }));
}

// Re-export the original array name for backward compatibility (English default)
export const organizations: Organization[] = resolveOrganizations("en");
