import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Case Studies",
    title: "Lessons from Comparable Regions",
    desc: "How other cities and regions have successfully revitalized, and what Hudson Valley can learn from their experiences.",
  },
  card: {
    populationLabel: "Population:",
    badge: "Case Study",
    keyStrategyLabel: "Key Strategy",
    outcomesLabel: "Outcomes",
    lessonsTitle: "Lessons for Hudson Valley",
    visitPrefix: "Visit",
    visitSuffix: "official site",
  },
  comparison: {
    title: "How Hudson Valley Compares",
    tableHeaders: {
      city: "City / Region",
      population: "Population",
      keyStrategy: "Key Strategy",
    },
    middletown: {
      name: "Hudson Valley, NY",
      population: "2,100,000+",
      strategy: "Arts + Technology + Agriculture + Healthcare + DRI infrastructure",
    },
  },
  advantages: {
    title: "Hudson Valley\u2019s Unique Advantages",
    items: [
      "World-class educational anchors (Vassar, Bard, SUNY New Paltz) -- a powerhouse of liberal arts and innovation",
      "IBM Quantum Computation Center -- the world's first, positioning the region as a quantum technology hub",
      "Iconic cultural institutions (Dia:Beacon, Storm King, Fisher Center) driving arts-led economic transformation",
      "Strong public investment ($40M+ DRI + $53.1M ESD grants) already in place across multiple cities",
      "2,280+ active farms and thriving agribusiness sector defining a unique farm-to-table identity",
    ],
  },
};

export type CaseStudiesContent = typeof en;

const zhTW: CaseStudiesContent = {
  header: {
    badge: "案例研究",
    title: "借鏡相近地區的經驗",
    desc: "其他城市和地區如何成功實現振興，以及 Hudson Valley 可以從中汲取的經驗。",
  },
  card: {
    populationLabel: "人口：",
    badge: "案例研究",
    keyStrategyLabel: "核心策略",
    outcomesLabel: "成果",
    lessonsTitle: "對 Hudson Valley 的啟示",
    visitPrefix: "造訪",
    visitSuffix: "官方網站",
  },
  comparison: {
    title: "Hudson Valley 的比較",
    tableHeaders: {
      city: "城市/地區",
      population: "人口",
      keyStrategy: "核心策略",
    },
    middletown: {
      name: "Hudson Valley, NY",
      population: "2,100,000+",
      strategy: "藝術 + 科技 + 農業 + 醫療 + DRI 基礎設施",
    },
  },
  advantages: {
    title: "Hudson Valley 的獨特優勢",
    items: [
      "世界級教育機構（Vassar、Bard、SUNY New Paltz）——文理與創新的重鎮",
      "IBM 量子計算中心——世界首座，使該地區成為量子科技中心",
      "標誌性文化機構（Dia:Beacon、Storm King、Fisher Center）驅動藝術導向的經濟轉型",
      "已到位的強大公共投資（$4,000 萬+ DRI + $5,310 萬 ESD 撥款）遍佈多個城市",
      "2,280+ 活躍農場和蓬勃的農業企業部門，定義獨特的農場到餐桌身份",
    ],
  },
};

const es: CaseStudiesContent = {
  header: {
    badge: "Casos de Estudio",
    title: "Lecciones de Regiones Comparables",
    desc: "Como otras ciudades y regiones se han revitalizado con exito y que puede aprender el Hudson Valley de sus experiencias.",
  },
  card: {
    populationLabel: "Poblacion:",
    badge: "Caso de Estudio",
    keyStrategyLabel: "Estrategia Clave",
    outcomesLabel: "Resultados",
    lessonsTitle: "Lecciones para Hudson Valley",
    visitPrefix: "Visitar",
    visitSuffix: "sitio oficial",
  },
  comparison: {
    title: "Como se Compara Hudson Valley",
    tableHeaders: {
      city: "Ciudad / Region",
      population: "Poblacion",
      keyStrategy: "Estrategia Clave",
    },
    middletown: {
      name: "Hudson Valley, NY",
      population: "2,100,000+",
      strategy: "Artes + Tecnologia + Agricultura + Salud + Infraestructura DRI",
    },
  },
  advantages: {
    title: "Ventajas Unicas del Hudson Valley",
    items: [
      "Anclas educativas de clase mundial (Vassar, Bard, SUNY New Paltz) -- una potencia de artes liberales e innovacion",
      "Centro de Computacion Cuantica de IBM -- el primero del mundo, posicionando la region como centro de tecnologia cuantica",
      "Instituciones culturales iconicas (Dia:Beacon, Storm King, Fisher Center) impulsando la transformacion economica",
      "Fuerte inversion publica ($40M+ DRI + $53.1M ESD) ya implementada en multiples ciudades",
      "Mas de 2,280 granjas activas y un prospero sector agroindustrial con identidad unica de granja a mesa",
    ],
  },
};

export const content: Record<Language, CaseStudiesContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
