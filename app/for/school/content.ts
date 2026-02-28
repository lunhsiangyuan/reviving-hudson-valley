import type { Language } from "@/lib/i18n/language-context";

const en = {
  hero: {
    badge: "Academic Partnerships",
    title: "Academic Partnership Opportunities",
    desc: "Hudson Valley is home to a growing academic ecosystem. Explore how your institution can partner with local colleges, medical schools, and research programs.",
  },
  partnerInstitutions: {
    title: "Partner Institutions",
    desc: "Hudson Valley's education ecosystem is anchored by leading institutions: Vassar College, Bard College, SUNY New Paltz, and the IBM Quantum Computation Center — spanning liberal arts, performing arts, public education, and cutting-edge technology research.",
    visitWebsite: "Visit Website",
  },
  exchangePrograms: {
    title: "Exchange Programs",
    desc: "Potential student and faculty exchange opportunities across partner institutions.",
    items: [
      {
        title: "Student Exchange",
        description:
          "Semester-long programs allowing students to experience diverse academic environments across partner institutions.",
      },
      {
        title: "Faculty Collaboration",
        description:
          "Joint research initiatives and visiting professor programs to foster cross-institutional knowledge sharing.",
      },
      {
        title: "Summer Intensives",
        description:
          "Short-term immersive programs in performing arts, biomedical sciences, and data analytics.",
      },
    ],
  },
  researchCollaboration: {
    title: "Research Collaboration",
    desc: "Cross-institutional research opportunities spanning multiple disciplines.",
    areas: [
      {
        area: "Biomedical Sciences",
        description:
          "Vassar College's neuroscience and biochemistry programs, combined with Vassar Brothers Medical Center's Northwell Health research network, create opportunities for cutting-edge translational research.",
      },
      {
        area: "Data Science & Computing",
        description:
          "Programs in data science, quantum computing, and biostatistics offer cross-disciplinary research in healthcare analytics and AI applications.",
      },
      {
        area: "Community Health",
        description:
          "Community health research leveraging WMCHealth's academic medical resources, Garnet Health's Orange County reach, and SUNY New Paltz's public health programs.",
      },
      {
        area: "Performing Arts",
        description:
          "Bard College's world-renowned Conservatory and Fisher Center for the Performing Arts offer unparalleled research opportunities in music, dance, and arts education.",
      },
    ],
  },
  regionalNetwork: {
    title: "Regional Academic Network",
    desc: "Hudson Valley\u2019s strategic location places it within reach of major universities and research institutions.",
  },
  healthcarePipeline: {
    title: "Healthcare Training Pipeline",
    desc: "A unique medical education pathway from classroom to clinical practice.",
    stages: [
      {
        name: "Vassar Brothers Medical Center",
        description:
          "Northwell Health's affiliate in Poughkeepsie serves as a major clinical training hub, partnering with regional universities for medical and nursing education pipelines.",
      },
      {
        name: "Clinical Rotations at WMCHealth",
        description:
          "Students complete clinical rotations at WMCHealth (Westchester Medical Center), a Level I Trauma Center and academic medical center providing real-world clinical experience across specialties.",
      },
      {
        name: "Local Practice",
        description:
          "Graduates are well-positioned to practice in the community, strengthening Hudson Valley\u2019s healthcare workforce and serving residents.",
      },
    ],
  },
  cta: {
    title: "Start a Partnership",
    desc: "Interested in academic collaboration? We\u2019d love to hear from your institution.",
    primaryButton: "Propose a Partnership",
    secondaryButton: "Contact Academic Affairs",
  },
};

export type SchoolContent = typeof en;

const zhTW: SchoolContent = {
  hero: {
    badge: "學術合作",
    title: "學術合作機會",
    desc: "Hudson Valley 擁有蓬勃發展的學術生態系統。探索您的機構如何與當地的大學、醫學院和研究計畫合作。",
  },
  partnerInstitutions: {
    title: "合作機構",
    desc: "Hudson Valley 的教育生態系統以頂尖機構為核心：Vassar College、Bard College、SUNY New Paltz 及 IBM 量子計算中心——涵蓋文理教育、表演藝術、公立高等教育與前沿科技研究。",
    visitWebsite: "造訪網站",
  },
  exchangePrograms: {
    title: "交流計畫",
    desc: "合作機構間潛在的學生和教師交流機會。",
    items: [
      {
        title: "學生交換",
        description:
          "學期制的計畫，讓學生體驗合作機構間多元的學術環境。",
      },
      {
        title: "教師合作",
        description:
          "聯合研究計畫和訪問教授專案，促進跨機構知識交流。",
      },
      {
        title: "暑期密集課程",
        description:
          "表演藝術、生物醫學科學和資料分析的短期沉浸式課程。",
      },
    ],
  },
  researchCollaboration: {
    title: "研究合作",
    desc: "跨越多個學科的跨機構研究機會。",
    areas: [
      {
        area: "生物醫學科學",
        description:
          "Vassar College 的神經科學與生物化學課程，結合 Vassar Brothers Medical Center（Northwell Health 聯盟）的醫學研究網絡，創造尖端轉化研究機會。",
      },
      {
        area: "資料科學與運算",
        description:
          "資料科學、量子運算和生物統計學的課程提供健康照護分析和 AI 應用的跨學科研究。",
      },
      {
        area: "社區健康",
        description:
          "結合 WMCHealth 的學術醫療資源、Garnet Health 在橙縣的服務範圍，以及 SUNY New Paltz 公共衛生課程的社區健康研究。",
      },
      {
        area: "表演藝術",
        description:
          "Bard College 享譽全球的音樂學院及 Fisher Center for the Performing Arts，提供音樂、舞蹈與藝術教育研究的無與倫比機會。",
      },
    ],
  },
  regionalNetwork: {
    title: "區域學術網絡",
    desc: "Hudson Valley 的戰略位置使其能夠觸及主要大學和研究機構。",
  },
  healthcarePipeline: {
    title: "醫療教育培訓體系",
    desc: "從課堂到臨床實踐的獨特醫學教育路徑。",
    stages: [
      {
        name: "Vassar Brothers Medical Center",
        description:
          "Northwell Health 在波啟浦夕（Poughkeepsie）的附屬醫院，是區域主要臨床教學中心，與各大學合作建立醫療及護理教育培訓體系。",
      },
      {
        name: "WMCHealth 臨床實習",
        description:
          "學生在 WMCHealth（Westchester Medical Center）進行臨床實習，該機構為 Level I 創傷中心及學術醫療中心，提供跨專科真實臨床經驗。",
      },
      {
        name: "在地執業",
        description:
          "畢業生具備在社區執業的良好條件，強化 Hudson Valley 的醫療人力並服務居民。",
      },
    ],
  },
  cta: {
    title: "開始合作",
    desc: "有興趣進行學術合作嗎？我們期待聽到您的機構的聲音。",
    primaryButton: "提案合作",
    secondaryButton: "聯絡學術事務",
  },
};

const es: SchoolContent = {
  hero: {
    badge: "Alianzas Académicas",
    title: "Oportunidades de Alianzas Académicas",
    desc: "Hudson Valley alberga un ecosistema académico en crecimiento. Explore cómo su institución puede asociarse con universidades locales, escuelas de medicina y programas de investigación.",
  },
  partnerInstitutions: {
    title: "Instituciones Asociadas",
    desc: "El ecosistema educativo de Hudson Valley está anclado por instituciones líderes: Vassar College, Bard College, SUNY New Paltz y el Centro de Computación Cuántica de IBM — abarcando artes liberales, artes escénicas, educación pública e investigación tecnológica de vanguardia.",
    visitWebsite: "Visitar Sitio Web",
  },
  exchangePrograms: {
    title: "Programas de Intercambio",
    desc: "Oportunidades potenciales de intercambio estudiantil y docente entre instituciones asociadas.",
    items: [
      {
        title: "Intercambio Estudiantil",
        description:
          "Programas semestrales que permiten a los estudiantes experimentar diversos entornos académicos en las instituciones asociadas.",
      },
      {
        title: "Colaboración Docente",
        description:
          "Iniciativas de investigación conjunta y programas de profesores visitantes para fomentar el intercambio de conocimiento interinstitucional.",
      },
      {
        title: "Intensivos de Verano",
        description:
          "Programas inmersivos de corta duración en artes escénicas, ciencias biomédicas y análisis de datos.",
      },
    ],
  },
  researchCollaboration: {
    title: "Colaboración en Investigación",
    desc: "Oportunidades de investigación interinstitucional que abarcan múltiples disciplinas.",
    areas: [
      {
        area: "Ciencias Biomédicas",
        description:
          "Los programas de neurociencia y bioquímica de Vassar College, combinados con la red de investigación de Northwell Health en Vassar Brothers Medical Center, crean oportunidades para investigación traslacional de vanguardia.",
      },
      {
        area: "Ciencia de Datos y Computación",
        description:
          "Programas en ciencia de datos, computación cuántica y bioestadística ofrecen investigación interdisciplinaria en análisis de salud y aplicaciones de IA.",
      },
      {
        area: "Salud Comunitaria",
        description:
          "Investigación en salud comunitaria aprovechando los recursos médicos académicos de WMCHealth, el alcance de Garnet Health en el condado de Orange y los programas de salud pública de SUNY New Paltz.",
      },
      {
        area: "Artes Escénicas",
        description:
          "El Conservatorio de renombre mundial de Bard College y el Fisher Center for the Performing Arts ofrecen oportunidades de investigación incomparables en música, danza y educación artística.",
      },
    ],
  },
  regionalNetwork: {
    title: "Red Académica Regional",
    desc: "La ubicación estratégica de Hudson Valley lo coloca al alcance de las principales universidades e instituciones de investigación.",
  },
  healthcarePipeline: {
    title: "Cadena de Formación en Salud",
    desc: "Una vía única de educación médica desde el aula hasta la práctica clínica.",
    stages: [
      {
        name: "Vassar Brothers Medical Center",
        description:
          "El afiliado de Northwell Health en Poughkeepsie sirve como importante centro de formación clínica, colaborando con universidades regionales en programas de educación médica y de enfermería.",
      },
      {
        name: "Rotaciones Clínicas en WMCHealth",
        description:
          "Los estudiantes completan rotaciones clínicas en WMCHealth (Westchester Medical Center), un Centro de Trauma Nivel I y centro médico académico que brinda experiencia clínica real en múltiples especialidades.",
      },
      {
        name: "Práctica Local",
        description:
          "Los graduados están bien posicionados para ejercer en la comunidad, fortaleciendo la fuerza laboral de salud de Hudson Valley y sirviendo a los residentes.",
      },
    ],
  },
  cta: {
    title: "Inicia una Alianza",
    desc: "¿Interesado en la colaboración académica? Nos encantaría escuchar a su institución.",
    primaryButton: "Proponer una Alianza",
    secondaryButton: "Contactar Asuntos Académicos",
  },
};

export const content: Record<Language, SchoolContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
