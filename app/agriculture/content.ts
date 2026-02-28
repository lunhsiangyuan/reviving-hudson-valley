import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Agriculture & Food Systems",
    title: "Hudson Valley's Agricultural Heritage",
    desc: "With 2,280+ farms, $301M in annual agricultural sales, and a thriving craft beverage industry, Hudson Valley is one of New York's most productive and innovative food regions.",
  },
  statsSection: {
    title: "Agricultural Economy at a Glance",
    stats: [
      { label: "Active Farms", value: "2,280+", detail: "2022 agricultural census" },
      { label: "Annual Farm Sales", value: "$301M", detail: "+2% farms since 2017" },
      { label: "Agri-Tourism Growth", value: "+78%", detail: "Revenue 2012-2022" },
      { label: "Orange County", value: "NY's #1", detail: "Christmas tree producer" },
    ],
  },
  farmingSection: {
    title: "Farming & Food Production",
    desc: "From dairy to orchards, vegetables to vineyards, Hudson Valley's diverse agricultural landscape supports a thriving local food economy.",
    categories: [
      {
        title: "Fruits & Berries",
        desc: "Ulster County is New York's #2 fruit and berry producer. Apple orchards, blueberry farms, and strawberry fields dot the landscape.",
        icon: "Apple",
      },
      {
        title: "Dairy & Livestock",
        desc: "Family dairy farms produce award-winning artisan cheeses, yogurts, and fresh milk. Columbia and Dutchess counties are dairy heartlands.",
        icon: "Beef",
      },
      {
        title: "Vegetables & Greens",
        desc: "Year-round production through greenhouses and CSA programs. Orange County black dirt region produces world-class onions and root vegetables.",
        icon: "Sprout",
      },
      {
        title: "Craft Beverages",
        desc: "NYS law requires 70% locally-grown ingredients, fueling demand for Hudson Valley hops, grapes, and grains. 100+ wineries, breweries, distilleries, and cideries.",
        icon: "GlassWater",
      },
    ],
  },
  agriTourismSection: {
    title: "Agri-Tourism & Farm Experiences",
    desc: "Agri-tourism revenue grew 78% from 2012-2022 as city dwellers seek authentic farm experiences, farm-to-table dining, and seasonal events.",
    experiences: [
      { title: "Pick-Your-Own Farms", desc: "Apples, pumpkins, strawberries, and sunflowers. Fall harvest season draws hundreds of thousands of visitors." },
      { title: "Farm-to-Table Dining", desc: "Restaurants sourcing 80%+ of ingredients locally. Rhinebeck, Hudson, and New Paltz are national farm-to-table destinations." },
      { title: "Wine & Spirits Trails", desc: "Dutchess Wine Trail, Shawangunk Wine Trail, and Hudson Valley Spirits Trail connect dozens of craft producers." },
      { title: "Farmers Markets", desc: "60+ farmers markets across the region. Kingston, Rhinebeck, Cold Spring, and New Paltz markets are destinations in themselves." },
    ],
  },
  supportSection: {
    title: "Agricultural Support Organizations",
    desc: "A robust ecosystem of nonprofits, government programs, and financial institutions supports Hudson Valley's farming community.",
    orgs: [
      { name: "Hudson Valley Agribusiness Development Corp (HVADC)", role: "The region's only agricultural CDFI. Business technical assistance, farm lending, FeedHV food network.", website: "https://www.hvadc.org" },
      { name: "Scenic Hudson Foodshed Conservation", role: "Protecting prime farmland from development. 2,500+ acres under conservation easements.", website: "https://www.scenichudson.org" },
      { name: "Cornell Cooperative Extension", role: "Agricultural research, farmer education, and 4-H youth programs across all 9 counties.", website: "https://cce.cornell.edu" },
      { name: "USDA Rural Development NY", role: "Loans, grants, and technical assistance for rural businesses, housing, and agricultural cooperatives.", website: "https://www.rd.usda.gov/ny" },
    ],
  },
  challengesSection: {
    title: "Challenges & Opportunities",
    challenges: [
      { title: "Land Pressure", desc: "Development pressure threatens prime farmland. Land prices near NYC make farming economically challenging for young farmers." },
      { title: "Climate Adaptation", desc: "Shifting growing seasons require new crop varieties and irrigation investments. Extreme weather events increasing in frequency." },
      { title: "Farm Succession", desc: "Average farmer age is 57. Next generation needs land access, capital, and business training to continue farming traditions." },
    ],
    opportunities: [
      { title: "Local Food System Demand", desc: "COVID accelerated consumer preference for local food. Restaurant, institutional, and direct-to-consumer demand all growing." },
      { title: "AgriTech Integration", desc: "Proximity to NYC tech talent and IBM Quantum enables precision agriculture, supply chain optimization, and AI-driven farm management." },
      { title: "Carbon Market Access", desc: "Regenerative agriculture practices qualify farms for carbon credits, creating new revenue streams beyond traditional commodity pricing." },
    ],
  },
};

export type AgricultureContent = typeof en;

const zhTW: AgricultureContent = {
  header: {
    badge: "農業與食物系統",
    title: "Hudson Valley 的農業遺產",
    desc: "擁有 2,280+ 座農場、每年 $3.01 億農業銷售額，以及蓬勃發展的精釀飲料產業，Hudson Valley 是紐約州最具生產力和創新性的食物產區之一。",
  },
  statsSection: {
    title: "農業經濟概覽",
    stats: [
      { label: "活躍農場", value: "2,280+", detail: "2022 年農業普查" },
      { label: "年農業銷售額", value: "$3.01億", detail: "自 2017 年農場數 +2%" },
      { label: "農業觀光成長", value: "+78%", detail: "2012-2022 年收入" },
      { label: "Orange County", value: "紐約州第一", detail: "聖誕樹產地" },
    ],
  },
  farmingSection: {
    title: "農業與食品生產",
    desc: "從乳品到果園，蔬菜到葡萄園，Hudson Valley 多元化的農業景觀支撐著蓬勃的在地食物經濟。",
    categories: [
      { title: "水果與漿果", desc: "Ulster County 是紐約州第二大水果和漿果產地。蘋果園、藍莓農場和草莓田遍佈整個地區。", icon: "Apple" },
      { title: "乳品與畜牧", desc: "家庭乳品農場出品獲獎的工藝起司、優格和新鮮牛奶。Columbia 和 Dutchess 縣是乳業核心區。", icon: "Beef" },
      { title: "蔬菜與葉菜", desc: "透過溫室和 CSA 計畫全年生產。Orange County 黑土地區出產世界一流的洋蔥和根莖類蔬菜。", icon: "Sprout" },
      { title: "精釀飲料", desc: "紐約州法規要求 70% 在地種植原料，推動對 Hudson Valley 啤酒花、葡萄和穀物的需求。100+ 座酒莊、啤酒廠、蒸餾廠和蘋果酒廠。", icon: "GlassWater" },
    ],
  },
  agriTourismSection: {
    title: "農業觀光與農場體驗",
    desc: "隨著城市居民尋求真實的農場體驗、農場餐桌用餐和季節性活動，農業觀光收入 2012-2022 年間增長 78%。",
    experiences: [
      { title: "自採農場", desc: "蘋果、南瓜、草莓和向日葵。秋季收穫季節吸引數十萬遊客。" },
      { title: "農場到餐桌用餐", desc: "餐廳 80%+ 食材在地採購。Rhinebeck、Hudson 和 New Paltz 是全國知名的農場餐桌目的地。" },
      { title: "葡萄酒與烈酒路線", desc: "Dutchess Wine Trail、Shawangunk Wine Trail 和 Hudson Valley Spirits Trail 串聯數十家精釀生產商。" },
      { title: "農夫市場", desc: "全區 60+ 個農夫市場。Kingston、Rhinebeck、Cold Spring 和 New Paltz 的市場本身就是目的地。" },
    ],
  },
  supportSection: {
    title: "農業支援組織",
    desc: "強健的非營利組織、政府計畫和金融機構生態系統支持 Hudson Valley 的農業社群。",
    orgs: [
      { name: "Hudson Valley Agribusiness Development Corp (HVADC)", role: "該地區唯一的農業 CDFI。商業技術援助、農場貸款、FeedHV 食物網路。", website: "https://www.hvadc.org" },
      { name: "Scenic Hudson 食物系統保護", role: "保護優質農地免受開發。2,500+ 英畝受地役權保護。", website: "https://www.scenichudson.org" },
      { name: "Cornell 合作推廣", role: "農業研究、農民教育和 9 個縣的 4-H 青少年計畫。", website: "https://cce.cornell.edu" },
      { name: "USDA 農村發展 NY", role: "為農村企業、住房和農業合作社提供貸款、補助和技術援助。", website: "https://www.rd.usda.gov/ny" },
    ],
  },
  challengesSection: {
    title: "挑戰與機會",
    challenges: [
      { title: "土地壓力", desc: "開發壓力威脅優質農地。接近紐約市使土地價格對年輕農民的農業經營產生挑戰。" },
      { title: "氣候適應", desc: "生長季節變化需要新作物品種和灌溉投資。極端天氣事件頻率增加。" },
      { title: "農場傳承", desc: "農民平均年齡 57 歲。下一代需要土地使用、資本和商業培訓才能繼續農業傳統。" },
    ],
    opportunities: [
      { title: "在地食物系統需求", desc: "COVID 加速了消費者對在地食物的偏好。餐廳、機構和直接對消費者的需求均在成長。" },
      { title: "農業科技整合", desc: "鄰近紐約市科技人才和 IBM 量子計算，可實現精確農業、供應鏈優化和 AI 農場管理。" },
      { title: "碳市場准入", desc: "再生農業實踐使農場有資格獲得碳信用，在傳統大宗商品定價之外創造新收入來源。" },
    ],
  },
};

const es: AgricultureContent = {
  header: {
    badge: "Agricultura y Sistemas Alimentarios",
    title: "El Patrimonio Agricola de Hudson Valley",
    desc: "Con mas de 2,280 granjas, $301M en ventas agricolas anuales y una prospera industria de bebidas artesanales, Hudson Valley es una de las regiones alimentarias mas productivas e innovadoras de Nueva York.",
  },
  statsSection: {
    title: "La Economia Agricola en Resumen",
    stats: [
      { label: "Granjas Activas", value: "2,280+", detail: "Censo agricola 2022" },
      { label: "Ventas Agricolas Anuales", value: "$301M", detail: "+2% granjas desde 2017" },
      { label: "Crecimiento Agroturismo", value: "+78%", detail: "Ingresos 2012-2022" },
      { label: "Condado Orange", value: "#1 en NY", detail: "Productor de arboles de Navidad" },
    ],
  },
  farmingSection: {
    title: "Agricultura y Produccion Alimentaria",
    desc: "Desde lacteos hasta huertos, verduras hasta vinedos, el diverso panorama agricola del Hudson Valley apoya una prospera economia alimentaria local.",
    categories: [
      { title: "Frutas y Bayas", desc: "Ulster County es el segundo mayor productor de frutas y bayas de Nueva York. Huertos de manzanas, granjas de arandanos y campos de fresas.", icon: "Apple" },
      { title: "Lacteos y Ganaderia", desc: "Granjas lecheras familiares producen quesos artesanales premiados, yogures y leche fresca. Los condados Columbia y Dutchess son el corazon lacteo.", icon: "Beef" },
      { title: "Verduras y Hortalizas", desc: "Produccion durante todo el ano mediante invernaderos y programas CSA. La region de tierra negra del Condado Orange produce cebollas y tuberculos de clase mundial.", icon: "Sprout" },
      { title: "Bebidas Artesanales", desc: "La ley de NY exige el 70% de ingredientes cultivados localmente, impulsando la demanda de lupulo, uvas y granos del Hudson Valley. Mas de 100 bodegas, cervecerias, destilerias y siderias.", icon: "GlassWater" },
    ],
  },
  agriTourismSection: {
    title: "Agroturismo y Experiencias en Granja",
    desc: "Los ingresos del agroturismo crecieron un 78% de 2012 a 2022 a medida que los habitantes de la ciudad buscan experiencias autenticas en granjas, gastronomia de campo a mesa y eventos de temporada.",
    experiences: [
      { title: "Granjas de Autocosecha", desc: "Manzanas, calabazas, fresas y girasoles. La temporada de cosecha otoñal atrae a cientos de miles de visitantes." },
      { title: "Gastronomia de Campo a Mesa", desc: "Restaurantes que obtienen el 80%+ de sus ingredientes localmente. Rhinebeck, Hudson y New Paltz son destinos nacionales de gastronomia local." },
      { title: "Rutas de Vino y Licores", desc: "Dutchess Wine Trail, Shawangunk Wine Trail y Hudson Valley Spirits Trail conectan decenas de productores artesanales." },
      { title: "Mercados de Agricultores", desc: "Mas de 60 mercados de agricultores en toda la region. Los mercados de Kingston, Rhinebeck, Cold Spring y New Paltz son destinos por si mismos." },
    ],
  },
  supportSection: {
    title: "Organizaciones de Apoyo Agricola",
    desc: "Un solido ecosistema de organizaciones sin fines de lucro, programas gubernamentales e instituciones financieras apoya a la comunidad agricola del Hudson Valley.",
    orgs: [
      { name: "Hudson Valley Agribusiness Development Corp (HVADC)", role: "La unica CDFI agricola de la region. Asistencia tecnica empresarial, prestamos agricolas, red alimentaria FeedHV.", website: "https://www.hvadc.org" },
      { name: "Conservacion Alimentaria Scenic Hudson", role: "Protegiendo tierras agricolas de primer nivel del desarrollo. Mas de 2,500 acres bajo servidumbres de conservacion.", website: "https://www.scenichudson.org" },
      { name: "Cornell Cooperative Extension", role: "Investigacion agricola, educacion para agricultores y programas juveniles 4-H en los 9 condados.", website: "https://cce.cornell.edu" },
      { name: "USDA Rural Development NY", role: "Prestamos, subvenciones y asistencia tecnica para empresas rurales, vivienda y cooperativas agricolas.", website: "https://www.rd.usda.gov/ny" },
    ],
  },
  challengesSection: {
    title: "Desafios y Oportunidades",
    challenges: [
      { title: "Presion sobre la Tierra", desc: "La presion del desarrollo amenaza las tierras agricolas de primera calidad. Los precios de la tierra cerca de NYC dificultan la agricultura economicamente para los agricultores jovenes." },
      { title: "Adaptacion Climatica", desc: "Los cambios en las estaciones de cultivo requieren nuevas variedades de cultivos e inversiones en riego. Aumento en la frecuencia de eventos climaticos extremos." },
      { title: "Sucesion Agricola", desc: "La edad promedio del agricultor es 57 anos. La proxima generacion necesita acceso a tierras, capital y capacitacion empresarial." },
    ],
    opportunities: [
      { title: "Demanda del Sistema Alimentario Local", desc: "COVID acelero la preferencia del consumidor por alimentos locales. La demanda de restaurantes, institucional y directa al consumidor esta creciendo." },
      { title: "Integracion AgriTech", desc: "La proximidad al talento tecnologico de NYC e IBM Quantum permite agricultura de precision, optimizacion de cadena de suministro y gestion de granjas con IA." },
      { title: "Acceso al Mercado de Carbono", desc: "Las practicas de agricultura regenerativa califican a las granjas para creditos de carbono, creando nuevas fuentes de ingresos." },
    ],
  },
};

export const content: Record<Language, AgricultureContent> = { en, "zh-TW": zhTW, es };
