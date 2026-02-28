import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Education",
    title: "Education & Academic Excellence",
    desc: "Four world-class institutions anchor Hudson Valley's academic corridor, driving innovation, arts, and research across the region.",
  },
  vassarCollege: {
    title: "Vassar College",
    badge: "Liberal Arts",
    desc: "One of the nation's top liberal arts colleges, Vassar drives research innovation and cultural programming across the Hudson Valley. With 2,400+ students in a 1,000-acre campus, Vassar is a major economic and intellectual anchor for Poughkeepsie.",
  },
  bardCollege: {
    title: "Bard College",
    badge: "Arts & Sciences",
    desc: "Bard's progressive interdisciplinary education combines the arts, humanities, and sciences in a uniquely creative environment. The Bard Conservatory and Fisher Center for the Performing Arts anchor a thriving arts economy across the region.",
  },
  sunyNewPaltz: {
    title: "SUNY New Paltz",
    badge: "Public University",
    desc: "As New York's top public university for teacher education and fine arts, SUNY New Paltz serves 8,000+ students and houses the SUNY New Paltz Venture Hub, recognized by ESD as a regional innovation hotspot in 2024.",
  },
  ibmQuantum: {
    title: "IBM Quantum Computation Center",
    badge: "Tech Innovation",
    desc: "Opened in 2019 in Poughkeepsie, the IBM Quantum Computation Center is the world's first quantum computing data center accessible via the cloud. This positions Hudson Valley as a global hub for quantum technology and IBM's most advanced research.",
  },
  sunyOrange: {
    title: "SUNY Orange",
    badge: "Community College",
    desc: "SUNY Orange serves Orange County with a wide range of associate degree and certificate programs. Its Hudson Valley campus provides accessible, affordable higher education and workforce training that supports local economic development.",
  },
  regional: {
    title: "Regional Academic Connections",
    cards: [
      {
        title: "West Point (U.S. Military Academy)",
        desc: "Located in Orange County, the U.S. Military Academy at West Point adds prestige to the region's educational landscape and creates opportunities for academic and community collaboration.",
      },
      {
        title: "NYC Ivy League Proximity",
        desc: "Hudson Valley's position just 90 minutes from New York City provides access to Columbia University, NYU, and other world-class institutions for research partnerships, guest lectures, and student exchange programs.",
      },
    ],
  },
};

export type EducationContent = typeof en;

const zhTW: EducationContent = {
  header: {
    badge: "教育",
    title: "教育與學術卓越",
    desc: "四所世界級機構錨定 Hudson Valley 的學術走廊，推動整個地區的創新、藝術與研究發展。",
  },
  vassarCollege: {
    title: "Vassar College",
    badge: "文理學院",
    desc: "作為全美頂尖文理學院之一，Vassar College 推動 Hudson Valley 的研究創新與文化項目。2,400 多名學生在佔地 1,000 英畝的校園中學習，Vassar 是 Poughkeepsie 重要的經濟與知識重鎮。",
  },
  bardCollege: {
    title: "Bard College",
    badge: "藝術與科學",
    desc: "Bard College 的進步跨學科教育在獨特的創意環境中融合藝術、人文與科學。Bard 音樂學院和 Fisher 表演藝術中心是整個地區蓬勃發展的藝術經濟核心。",
  },
  sunyNewPaltz: {
    title: "SUNY New Paltz",
    badge: "公立大學",
    desc: "作為紐約州師範教育與美術的頂尖公立大學，SUNY New Paltz 服務 8,000 多名學生，並設有 SUNY New Paltz Venture Hub 創業加速器，於 2024 年獲 ESD 認定為區域創新熱點。",
  },
  ibmQuantum: {
    title: "IBM 量子計算中心",
    badge: "科技創新",
    desc: "2019 年在 Poughkeepsie 正式啟用的 IBM 量子計算中心，是全球首座可透過雲端存取的量子計算數據中心。這使 Hudson Valley 成為量子技術的全球樞紐，也是 IBM 最先進研究的重心所在。",
  },
  sunyOrange: {
    title: "SUNY Orange",
    badge: "社區學院",
    desc: "SUNY Orange 為 Orange 郡提供廣泛的副學士學位和證書課程。其 Hudson Valley 校區提供可及且負擔得起的高等教育和勞動力培訓，支持當地經濟發展。",
  },
  regional: {
    title: "區域學術連結",
    cards: [
      {
        title: "West Point（美國軍事學院）",
        desc: "位於 Orange 郡的美國軍事學院 West Point 為該地區的教育版圖增添聲望，並創造學術與社區合作的機會。",
      },
      {
        title: "鄰近紐約市常春藤盟校",
        desc: "Hudson Valley 距紐約市僅 90 分鐘車程，可接觸 Columbia University、NYU 及其他世界級機構，進行研究合作、客座講座和學生交流計畫。",
      },
    ],
  },
};

const es: EducationContent = {
  header: {
    badge: "Educación",
    title: "Educación y Excelencia Académica",
    desc: "Cuatro instituciones de clase mundial anclan el corredor académico de Hudson Valley, impulsando la innovación, las artes y la investigación en toda la región.",
  },
  vassarCollege: {
    title: "Vassar College",
    badge: "Artes Liberales",
    desc: "Una de las mejores universidades de artes liberales del país, Vassar impulsa la innovación en investigación y la programación cultural en todo el Hudson Valley. Con más de 2,400 estudiantes en un campus de 1,000 acres, Vassar es un ancla económica e intelectual fundamental para Poughkeepsie.",
  },
  bardCollege: {
    title: "Bard College",
    badge: "Artes y Ciencias",
    desc: "La educación interdisciplinaria progresiva de Bard combina las artes, las humanidades y las ciencias en un entorno creativo único. El Conservatorio de Bard y el Fisher Center for the Performing Arts son el núcleo de una próspera economía artística en toda la región.",
  },
  sunyNewPaltz: {
    title: "SUNY New Paltz",
    badge: "Universidad Pública",
    desc: "Como la mejor universidad pública de Nueva York para la formación docente y las bellas artes, SUNY New Paltz atiende a más de 8,000 estudiantes y alberga el SUNY New Paltz Venture Hub, reconocido por ESD como un punto de innovación regional en 2024.",
  },
  ibmQuantum: {
    title: "Centro de Computación Cuántica de IBM",
    badge: "Innovación Tecnológica",
    desc: "Inaugurado en 2019 en Poughkeepsie, el Centro de Computación Cuántica de IBM es el primer centro de datos de computación cuántica del mundo accesible a través de la nube. Esto posiciona a Hudson Valley como un hub global para la tecnología cuántica y la investigación más avanzada de IBM.",
  },
  sunyOrange: {
    title: "SUNY Orange",
    badge: "Colegio Comunitario",
    desc: "SUNY Orange sirve al Condado de Orange con una amplia gama de programas de grado asociado y certificados. Su campus en Hudson Valley proporciona educación superior accesible y asequible y capacitación laboral que apoya el desarrollo económico local.",
  },
  regional: {
    title: "Conexiones Académicas Regionales",
    cards: [
      {
        title: "West Point (Academia Militar de EE.UU.)",
        desc: "Ubicada en el Condado de Orange, la Academia Militar de Estados Unidos en West Point añade prestigio al panorama educativo de la región y crea oportunidades para la colaboración académica y comunitaria.",
      },
      {
        title: "Proximidad a la Ivy League de NYC",
        desc: "La posición de Hudson Valley a solo 90 minutos de la Ciudad de Nueva York proporciona acceso a Columbia University, NYU y otras instituciones de clase mundial para asociaciones de investigación, conferencias invitadas y programas de intercambio estudiantil.",
      },
    ],
  },
};

export const content: Record<Language, EducationContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
