import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Tourism & Cultural Destinations",
    title: "Experience Hudson Valley",
    desc: "From world-class contemporary art to presidential history, from mountain trails to river walks — Hudson Valley offers an unparalleled range of cultural and natural experiences just 60-150 miles from New York City.",
  },
  highlightsSection: {
    title: "Iconic Destinations",
    destinations: [
      {
        name: "Dia:Beacon",
        location: "Beacon, NY",
        desc: "Nearly 300,000 sq ft of contemporary art in a converted 1929 Nabisco printing factory. One of the largest contemporary art museums in the world.",
        highlight: "3M+ visitors since 2003",
        href: "https://www.diaart.org",
      },
      {
        name: "Storm King Art Center",
        location: "New Windsor, NY",
        desc: "500 acres of outdoor sculpture with works by Calder, Serra, Noguchi, and 100+ other artists set against the Hudson Valley's rolling hills and forests.",
        highlight: "500-acre outdoor museum",
        href: "https://www.stormking.org",
      },
      {
        name: "Walkway Over the Hudson",
        location: "Poughkeepsie, NY",
        desc: "The world's longest elevated pedestrian bridge — 1.28 miles, 212 feet above the Hudson River. 500,000+ annual visitors.",
        highlight: "World's longest pedestrian bridge",
        href: "https://walkway.org",
      },
      {
        name: "FDR Presidential Library",
        location: "Hyde Park, NY",
        desc: "The nation's first presidential library, on the Roosevelt family estate. Home to Eleanor Roosevelt's Val-Kill cottage.",
        highlight: "First presidential library (1941)",
        href: "https://www.fdrlibrary.org",
      },
      {
        name: "Mohonk Mountain House",
        location: "New Paltz, NY",
        desc: "A National Historic Landmark Victorian castle resort on Shawangunk Ridge. 85 miles of hiking trails, Sky Top Tower, and the famous Mohonk Preserve.",
        highlight: "National Historic Landmark since 1869",
        href: "https://www.mohonk.com",
      },
      {
        name: "Olana State Historic Site",
        location: "Hudson, NY",
        desc: "The Persian-style mansion of Hudson River School painter Frederic Church, set on 250 acres with panoramic Hudson River views.",
        highlight: "Hudson River School masterpiece",
        href: "https://www.olana.org",
      },
    ],
  },
  naturalSection: {
    title: "Natural Landscapes & Outdoor Activities",
    activities: [
      { title: "Catskill Mountains", desc: "35+ peaks over 3,500 ft. World-class hiking, skiing, rock climbing, and fly fishing. Kaaterskill Falls is New York's highest waterfall.", icon: "Mountain" },
      { title: "Hudson River Access", desc: "Kayaking, sailing, and scenic cruises along 150 miles of the Hudson River. Scenic Hudson's 45+ parks provide public waterfront access.", icon: "Waves" },
      { title: "Rail Trails", desc: "40+ miles of multi-use rail trails connecting cities. Hudson Valley Rail Trail, Wallkill Valley Rail Trail, and more.", icon: "Bike" },
      { title: "Shawangunk Ridge", desc: "World-famous rock climbing at the Gunks. Mohonk Preserve protects 8,000+ acres of ridgeline wilderness.", icon: "MapPin" },
    ],
  },
  culturalSection: {
    title: "Arts, History & Culture",
    items: [
      { title: "Hudson River School", desc: "Birthplace of America's first major art movement. Thomas Cole's Cedar Grove and Frederic Church's Olana anchor the Hudson River Skywalk." },
      { title: "West Point Military Academy", desc: "Founded 1802, the nation's oldest military academy. Stunning Gothic architecture and Hudson River scenery." },
      { title: "Historic Rhinebeck Aerodrome", desc: "The world's oldest flying airshow museum, with vintage WWI-era aircraft performing weekly shows." },
      { title: "Clearwater Sloop", desc: "Pete Seeger's environmental education sailing vessel, symbol of the Hudson River cleanup movement." },
      { title: "Beacon Arts District", desc: "Beacon's Main Street has transformed into a 1-mile stretch of galleries, studios, and restaurants since Dia:Beacon opened in 2003." },
      { title: "Hudson Warren Street", desc: "Hudson's Warren Street is lined with antique shops, art galleries, and acclaimed restaurants, drawing NYC weekenders year-round." },
    ],
  },
  seasonalSection: {
    title: "Seasonal Highlights",
    seasons: [
      { season: "Spring", events: ["Maple syrup season (Feb-Mar)", "Spring wildflowers and waterfall season", "Opening of farm-to-table restaurants", "Rhinebeck Farmers Market opens"] },
      { season: "Summer", events: ["Clearwater Great Hudson River Revival", "Storm King opens outdoor sculptures", "Pick-your-own strawberries and blueberries", "Hudson Valley Shakespeare Festival"] },
      { season: "Fall", events: ["Peak foliage (mid-Oct)", "Apple picking and cider season", "Pumpkin festivals throughout the region", "Millbrook Winery harvest events"] },
      { season: "Winter", events: ["Belleayre Mountain skiing", "Holiday markets in Kingston and Beacon", "Ice climbing at Catskill waterfalls", "FDR library special exhibitions"] },
    ],
  },
};

export type TourismContent = typeof en;

const zhTW: TourismContent = {
  header: {
    badge: "觀光與文化目的地",
    title: "體驗 Hudson Valley",
    desc: "從世界級當代藝術到總統歷史，從山地步道到河畔漫步—Hudson Valley 提供距紐約市僅 60-150 英里的無與倫比的文化和自然體驗。",
  },
  highlightsSection: {
    title: "標誌性目的地",
    destinations: [
      { name: "Dia:Beacon", location: "Beacon, NY", desc: "在改建的 1929 年 Nabisco 印刷工廠中，近 30 萬平方呎的當代藝術。是世界最大的當代藝術博物館之一。", highlight: "自 2003 年 300 萬以上遊客", href: "https://www.diaart.org" },
      { name: "Storm King Art Center", location: "New Windsor, NY", desc: "500 英畝的戶外雕塑，有 Calder、Serra、Noguchi 和 100 多位其他藝術家的作品，背景是 Hudson Valley 的連綿丘陵和森林。", highlight: "500 英畝戶外博物館", href: "https://www.stormking.org" },
      { name: "Walkway Over the Hudson", location: "Poughkeepsie, NY", desc: "世界最長的高架行人橋—1.28 英里，在 Hudson River 上方 212 英尺。每年 50 萬以上遊客。", highlight: "世界最長行人橋", href: "https://walkway.org" },
      { name: "FDR 總統圖書館", location: "Hyde Park, NY", desc: "美國第一座總統圖書館，位於羅斯福家族莊園。Eleanor Roosevelt 的 Val-Kill 小屋也在此。", highlight: "第一座總統圖書館（1941年）", href: "https://www.fdrlibrary.org" },
      { name: "Mohonk Mountain House", location: "New Paltz, NY", desc: "Shawangunk 山脊上的國家歷史地標維多利亞式城堡度假村。85 英里登山步道、Sky Top 觀景塔和著名的 Mohonk 保護區。", highlight: "國家歷史地標，自 1869 年起", href: "https://www.mohonk.com" },
      { name: "Olana 州立歷史遺址", location: "Hudson, NY", desc: "Hudson River School 畫家 Frederic Church 的波斯風格莊園，坐落於 250 英畝土地上，俯瞰 Hudson River 全景。", highlight: "Hudson River School 傑作", href: "https://www.olana.org" },
    ],
  },
  naturalSection: {
    title: "自然景觀與戶外活動",
    activities: [
      { title: "Catskill Mountains", desc: "35+ 座海拔 3,500 英尺以上的山峰。世界級登山、滑雪、攀岩和飛蠅釣魚。Kaaterskill Falls 是紐約州最高瀑布。", icon: "Mountain" },
      { title: "Hudson River 親水", desc: "沿 150 英里 Hudson River 的獨木舟、帆船和觀景遊輪。Scenic Hudson 的 45+ 座公園提供公共濱水通道。", icon: "Waves" },
      { title: "鐵路步道", desc: "40+ 英里連接各城市的多功能鐵路步道。Hudson Valley Rail Trail、Wallkill Valley Rail Trail 等。", icon: "Bike" },
      { title: "Shawangunk 山脊", desc: "世界著名的 Gunks 攀岩。Mohonk 保護區保護 8,000+ 英畝山脊荒野。", icon: "MapPin" },
    ],
  },
  culturalSection: {
    title: "藝術、歷史與文化",
    items: [
      { title: "Hudson River School", desc: "美國第一個重要藝術運動的發源地。Thomas Cole 的 Cedar Grove 和 Frederic Church 的 Olana 是 Hudson River Skywalk 的錨點。" },
      { title: "West Point 軍事學院", desc: "1802 年創立，是美國最古老的軍事學院。壯觀的哥特式建築和 Hudson River 景色。" },
      { title: "Historic Rhinebeck Aerodrome", desc: "世界最古老的飛行展覽博物館，有一戰時期老式飛機每週表演。" },
      { title: "Clearwater 帆船", desc: "Pete Seeger 的環境教育帆船，Hudson River 清理運動的象徵。" },
      { title: "Beacon 藝術區", desc: "自 Dia:Beacon 2003 年開幕以來，Beacon 的 Main Street 已轉型為 1 英里長的藝廊、工作室和餐廳走廊。" },
      { title: "Hudson Warren Street", desc: "Hudson 的 Warren Street 全年吸引紐約市週末遊客，沿街排列著古董店、藝廊和知名餐廳。" },
    ],
  },
  seasonalSection: {
    title: "四季亮點",
    seasons: [
      { season: "春", events: ["楓糖漿季節（2-3月）", "春季野花和瀑布季節", "農場餐桌餐廳開業", "Rhinebeck 農夫市場開市"] },
      { season: "夏", events: ["Clearwater Hudson River Revival 音樂節", "Storm King 戶外雕塑開放", "自採草莓和藍莓", "Hudson Valley 莎士比亞節"] },
      { season: "秋", events: ["楓葉顛峰期（10月中旬）", "摘蘋果和蘋果酒季節", "全區南瓜節", "Millbrook Winery 收穫活動"] },
      { season: "冬", events: ["Belleayre Mountain 滑雪", "Kingston 和 Beacon 節日市集", "Catskill 瀑布冰攀", "FDR 圖書館特別展覽"] },
    ],
  },
};

const es: TourismContent = {
  header: {
    badge: "Turismo y Destinos Culturales",
    title: "Experimenta Hudson Valley",
    desc: "Desde arte contemporaneo de clase mundial hasta historia presidencial, desde senderos de montana hasta paseos fluviales—Hudson Valley ofrece experiencias culturales y naturales sin igual a solo 60-150 millas de Nueva York.",
  },
  highlightsSection: {
    title: "Destinos Iconicos",
    destinations: [
      { name: "Dia:Beacon", location: "Beacon, NY", desc: "Casi 300,000 pies cuadrados de arte contemporaneo en una fabrica de impresion Nabisco de 1929 convertida.", highlight: "3M+ visitantes desde 2003", href: "https://www.diaart.org" },
      { name: "Storm King Art Center", location: "New Windsor, NY", desc: "500 acres de escultura al aire libre con obras de Calder, Serra, Noguchi y mas de 100 artistas en el paisaje de Hudson Valley.", highlight: "Museo al aire libre de 500 acres", href: "https://www.stormking.org" },
      { name: "Walkway Over the Hudson", location: "Poughkeepsie, NY", desc: "El puente peatonal elevado mas largo del mundo—1.28 millas, 212 pies sobre el rio Hudson. 500,000+ visitantes anuales.", highlight: "El puente peatonal mas largo del mundo", href: "https://walkway.org" },
      { name: "Biblioteca Presidencial FDR", location: "Hyde Park, NY", desc: "La primera biblioteca presidencial de la nacion, en la finca de la familia Roosevelt.", highlight: "Primera biblioteca presidencial (1941)", href: "https://www.fdrlibrary.org" },
      { name: "Mohonk Mountain House", location: "New Paltz, NY", desc: "Un resort castillo victoriano Monumento Historico Nacional en Shawangunk Ridge con 85 millas de senderos.", highlight: "Monumento Historico Nacional desde 1869", href: "https://www.mohonk.com" },
      { name: "Olana State Historic Site", location: "Hudson, NY", desc: "La mansion persa del pintor de la Escuela del Rio Hudson Frederic Church, con vistas panoramicas al rio Hudson.", highlight: "Obra maestra de la Escuela del Rio Hudson", href: "https://www.olana.org" },
    ],
  },
  naturalSection: {
    title: "Paisajes Naturales y Actividades al Aire Libre",
    activities: [
      { title: "Catskill Mountains", desc: "35+ picos por encima de 3,500 pies. Senderismo, esqui, escalada en roca y pesca con mosca de clase mundial.", icon: "Mountain" },
      { title: "Acceso al Rio Hudson", desc: "Kayak, vela y cruceros escenicos a lo largo de 150 millas del rio Hudson. Los 45+ parques de Scenic Hudson brindan acceso publico a la orilla.", icon: "Waves" },
      { title: "Senderos de Via Verde", desc: "40+ millas de senderos multiuso conectando ciudades. Hudson Valley Rail Trail, Wallkill Valley Rail Trail y mas.", icon: "Bike" },
      { title: "Shawangunk Ridge", desc: "Escalada en roca de fama mundial en los Gunks. Mohonk Preserve protege mas de 8,000 acres de cresteria silvestre.", icon: "MapPin" },
    ],
  },
  culturalSection: {
    title: "Artes, Historia y Cultura",
    items: [
      { title: "Escuela del Rio Hudson", desc: "Cuna del primer movimiento artistico importante de America. Cedar Grove de Thomas Cole y Olana de Frederic Church son anclas del Hudson River Skywalk." },
      { title: "Academia Militar de West Point", desc: "Fundada en 1802, la academia militar mas antigua de la nacion. Impresionante arquitectura gotica y vistas al rio Hudson." },
      { title: "Historic Rhinebeck Aerodrome", desc: "El museo de exhibicion aerea en vuelo mas antiguo del mundo, con aviones vintage de la Primera Guerra Mundial." },
      { title: "Velero Clearwater", desc: "El buque de educacion ambiental de Pete Seeger, simbolo del movimiento de limpieza del rio Hudson." },
      { title: "Distrito Artistico de Beacon", desc: "Desde que Dia:Beacon abrio en 2003, Main Street de Beacon se ha transformado en 1 milla de galerias, estudios y restaurantes." },
      { title: "Warren Street de Hudson", desc: "Warren Street de Hudson esta llena de tiendas de antiguedades, galerias de arte y restaurantes aclamados." },
    ],
  },
  seasonalSection: {
    title: "Destacados Estacionales",
    seasons: [
      { season: "Primavera", events: ["Temporada de jarabe de arce (Feb-Mar)", "Flores silvestres primaverales y cascadas", "Apertura de restaurantes de campo a mesa", "Abre el Mercado de Agricultores de Rhinebeck"] },
      { season: "Verano", events: ["Clearwater Great Hudson River Revival", "Storm King abre esculturas al aire libre", "Autorecogida de fresas y arandanos", "Festival de Shakespeare de Hudson Valley"] },
      { season: "Otono", events: ["Follaje maximo (mediados de oct)", "Temporada de manzanas y sidra", "Festivales de calabaza en toda la region", "Eventos de cosecha en Millbrook Winery"] },
      { season: "Invierno", events: ["Esqui en Belleayre Mountain", "Mercados navidenos en Kingston y Beacon", "Escalada en hielo en cascadas Catskill", "Exposiciones especiales en biblioteca FDR"] },
    ],
  },
};

export const content: Record<Language, TourismContent> = { en, "zh-TW": zhTW, es };
