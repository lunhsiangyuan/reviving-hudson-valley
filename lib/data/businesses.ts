// Hudson Valley Reviving Plan - Local Businesses Data

import type { Language } from "@/lib/i18n/language-context";

export type BusinessType =
  | "restaurant"
  | "shop"
  | "media"
  | "brewery"
  | "bakery"
  | "cafe"
  | "department-store"
  | "art"
  | "winery"
  | "farm"
  | "outdoor-recreation";

export interface LocalizedBusiness {
  id: string;
  name: string;
  type: BusinessType;
  address?: string;
  description: Record<Language, string>;
  specialties: Record<Language, string[]>;
  website?: string;
  sourceUrl: string;
}

/** Flat business for components that expect plain strings */
export interface Business {
  id: string;
  name: string;
  type: BusinessType;
  address?: string;
  description: string;
  specialties: string[];
  website?: string;
  sourceUrl: string;
}

/** Resolve localized businesses to the given language (falls back to English) */
export function resolveBusinesses(lang: Language): Business[] {
  return localizedBusinesses.map((b) => ({
    ...b,
    description: b.description[lang] ?? b.description.en,
    specialties: b.specialties[lang] ?? b.specialties.en,
  }));
}

export const localizedBusinesses: LocalizedBusiness[] = [
  {
    id: "dia-beacon-gift",
    name: "Dia:Beacon Art Shop",
    type: "art",
    address: "3 Beekman St, Beacon, NY 12508",
    website: "https://www.diaart.org",
    description: {
      en: "The museum shop at Dia:Beacon featuring artist publications, limited editions, and curated gifts. Part of the art institution that transformed Beacon's economy.",
      "zh-TW":
        "Dia:Beacon 博物館商店，提供藝術家出版品、限量版作品和策展禮品。是帶動 Beacon 經濟轉型的藝術機構的一部分。",
      es: "La tienda del museo Dia:Beacon con publicaciones de artistas, ediciones limitadas y regalos curados.",
    },
    specialties: {
      en: ["Contemporary art books", "Limited edition prints", "Artist merchandise"],
      "zh-TW": ["當代藝術書籍", "限量版版畫", "藝術家周邊"],
      es: ["Libros de arte contemporaneo", "Impresiones de edicion limitada", "Merchandising de artistas"],
    },
    sourceUrl: "https://www.diaart.org",
  },
  {
    id: "hudson-brewing",
    name: "Hudson Brewing Company",
    type: "brewery",
    address: "99 N 7th St, Hudson, NY 12534",
    website: "https://hudsonbrewingco.com",
    description: {
      en: "Craft brewery in the heart of Hudson, using Hudson Valley ingredients. Part of the region's thriving craft beverage scene where state law requires 70% NY-grown ingredients.",
      "zh-TW":
        "位於 Hudson 市中心的精釀啤酒廠，使用 Hudson Valley 在地食材。是該地區繁榮的精釀飲料業的一部分，州法規定 70% 原料須來自紐約州。",
      es: "Cerveceria artesanal en el corazon de Hudson, utilizando ingredientes del Hudson Valley.",
    },
    specialties: {
      en: ["Hudson Valley hops IPAs", "Local grain lagers", "Seasonal farmhouse ales"],
      "zh-TW": ["Hudson Valley 啤酒花 IPA", "在地穀物拉格", "季節農莊啤酒"],
      es: ["IPAs con lupulo del Hudson Valley", "Lagers de grano local", "Ales de granja estacionales"],
    },
    sourceUrl: "https://hudsonbrewingco.com",
  },
  {
    id: "beacon-pantry",
    name: "Beacon Pantry",
    type: "cafe",
    address: "176 Main St, Beacon, NY 12508",
    website: "https://www.beaconpantry.com",
    description: {
      en: "A beloved local market and cafe on Beacon's vibrant Main Street, featuring local and artisanal products. Embodies the farm-to-table movement that defines Hudson Valley's food culture.",
      "zh-TW":
        "位於 Beacon 活力四射的 Main Street 上深受喜愛的在地市場與咖啡館，提供在地工藝產品。體現了定義 Hudson Valley 飲食文化的農場到餐桌運動。",
      es: "Un querido mercado local y cafe en la vibrante Main Street de Beacon, con productos locales y artesanales.",
    },
    specialties: {
      en: ["Local artisan products", "Farm-fresh sandwiches", "Hudson Valley cheeses"],
      "zh-TW": ["在地工藝產品", "農場新鮮三明治", "Hudson Valley 起司"],
      es: ["Productos artesanales locales", "Sandwiches frescos de granja", "Quesos del Hudson Valley"],
    },
    sourceUrl: "https://www.beaconpantry.com",
  },
  {
    id: "stonykill-farm",
    name: "Stonykill Farm",
    type: "farm",
    address: "Stonykill Rd, Wappingers Falls, NY 12590",
    website: "https://www.stonykill.com",
    description: {
      en: "A historic working farm in the Hudson Valley offering educational programs, farm-to-table experiences, and agritourism. Representative of the region's thriving agricultural heritage.",
      "zh-TW":
        "Hudson Valley 歷史悠久的農場，提供教育課程、農場餐桌體驗和農業觀光。代表該地區蓬勃的農業遺產。",
      es: "Una granja historica en el Hudson Valley que ofrece programas educativos, experiencias de la granja a la mesa y agroturismo.",
    },
    specialties: {
      en: ["Educational farm tours", "Pick-your-own produce", "Farm events"],
      "zh-TW": ["農場教育導覽", "自採農產品", "農場活動"],
      es: ["Tours educativos de granja", "Cosecha propia", "Eventos en la granja"],
    },
    sourceUrl: "https://www.stonykill.com",
  },
  {
    id: "rhinebeck-farmers-market",
    name: "Rhinebeck Farmers Market",
    type: "restaurant",
    address: "61 E Market St, Rhinebeck, NY 12572",
    website: "https://rhinebeckfarmersmarket.com",
    description: {
      en: "One of Hudson Valley's premier farmers markets, connecting local farms directly with consumers. Features 60+ vendors offering seasonal produce, artisan goods, and prepared foods.",
      "zh-TW":
        "Hudson Valley 頂尖的農夫市場之一，直接連結在地農場與消費者。設有 60 多個攤位，提供當季農產品、工藝品和即食食品。",
      es: "Uno de los mejores mercados de productores del Hudson Valley, conectando granjas locales directamente con los consumidores.",
    },
    specialties: {
      en: ["Local seasonal produce", "Artisan breads & pastries", "Farm-fresh dairy"],
      "zh-TW": ["在地當季農產", "工藝麵包糕點", "農場新鮮乳製品"],
      es: ["Productos de temporada locales", "Panes y pasteles artesanales", "Lacteos frescos de granja"],
    },
    sourceUrl: "https://rhinebeckfarmersmarket.com",
  },
  {
    id: "millbrook-winery",
    name: "Millbrook Vineyards & Winery",
    type: "winery",
    address: "26 Wing Rd, Millbrook, NY 12545",
    website: "https://www.millbrookwine.com",
    description: {
      en: "One of New York's premier wineries in the Dutchess County countryside. Pioneer of Hudson Valley viticulture, producing award-winning Chardonnay and Tocai Friulano using estate-grown grapes.",
      "zh-TW":
        "位於 Dutchess County 鄉間的紐約頂尖酒莊之一。Hudson Valley 葡萄栽培的先驅，使用莊園種植的葡萄釀造獲獎的 Chardonnay 和 Tocai Friulano。",
      es: "Una de las principales bodegas de Nueva York en el campo de Dutchess County.",
    },
    specialties: {
      en: ["Estate Chardonnay", "Tocai Friulano", "Wine tasting tours"],
      "zh-TW": ["莊園夏多內", "托卡伊弗里烏拉諾", "品酒導覽"],
      es: ["Chardonnay de la finca", "Tocai Friulano", "Tours de cata de vinos"],
    },
    sourceUrl: "https://www.millbrookwine.com",
  },
  {
    id: "mohonk-mountain",
    name: "Mohonk Mountain House",
    type: "outdoor-recreation",
    address: "1000 Mountain Rest Rd, New Paltz, NY 12561",
    website: "https://www.mohonk.com",
    description: {
      en: "A National Historic Landmark Victorian castle resort on Shawangunk Ridge, offering 85 miles of hiking trails, Sky Top Tower, and the famous Mohonk Preserve. A crown jewel of Hudson Valley eco-tourism.",
      "zh-TW":
        "坐落於 Shawangunk 山脊的美國歷史地標維多利亞式城堡度假村，提供 85 英里登山步道、Sky Top 觀景塔和著名的 Mohonk 保護區。是 Hudson Valley 生態旅遊的明珠。",
      es: "Un resort de castillo victoriano, Monumento Historico Nacional, en Shawangunk Ridge, con 85 millas de senderos.",
    },
    specialties: {
      en: ["Hiking & nature trails", "Victorian spa retreat", "Sky Top Tower views"],
      "zh-TW": ["登山自然步道", "維多利亞式水療度假", "Sky Top 觀景塔"],
      es: ["Senderismo y senderos naturales", "Retiro de spa victoriano", "Vistas de Sky Top Tower"],
    },
    sourceUrl: "https://www.mohonk.com",
  },
  {
    id: "storm-king",
    name: "Storm King Art Center",
    type: "art",
    address: "1 Museum Rd, New Windsor, NY 12553",
    website: "https://www.stormking.org",
    description: {
      en: "A world-renowned outdoor sculpture park spanning 500 acres in the Hudson Valley. Features monumental works by 100+ artists integrated into rolling hills, meadows, and woodlands.",
      "zh-TW":
        "世界知名的戶外雕塑公園，佔地 500 英畝，遍佈 Hudson Valley 丘陵、草地和林地，設有 100 多位藝術家的大型作品。",
      es: "Un parque de esculturas al aire libre de renombre mundial de 500 acres en el Hudson Valley.",
    },
    specialties: {
      en: ["Monumental outdoor sculptures", "Art & nature walks", "Special exhibitions"],
      "zh-TW": ["大型戶外雕塑", "藝術自然漫步", "特別展覽"],
      es: ["Esculturas monumentales al aire libre", "Paseos de arte y naturaleza", "Exposiciones especiales"],
    },
    sourceUrl: "https://www.stormking.org",
  },
  {
    id: "walking-walls-kingston",
    name: "Kingston's Walking Walls",
    type: "art",
    address: "Kingston, NY 12401",
    website: "https://kingstonloops.com",
    description: {
      en: "Kingston's vibrant public mural program featuring large-scale murals by international and local artists. Part of Kingston's creative economy revival transforming the historic Uptown and Midtown districts.",
      "zh-TW":
        "Kingston 充滿活力的公共壁畫計畫，展示國際和本地藝術家的大型壁畫。是 Kingston 創意經濟復甦的一部分，正在改造歷史悠久的 Uptown 和 Midtown 地區。",
      es: "El vibrante programa de murales publicos de Kingston con murales a gran escala de artistas internacionales y locales.",
    },
    specialties: {
      en: ["International murals", "Art walking tours", "Community art events"],
      "zh-TW": ["國際壁畫", "藝術步行導覽", "社區藝術活動"],
      es: ["Murales internacionales", "Tours de arte a pie", "Eventos de arte comunitario"],
    },
    sourceUrl: "https://kingstonloops.com",
  },
];
