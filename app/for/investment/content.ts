import type { Language } from "@/lib/i18n/language-context";

const en = {
  hero: {
    badge: "Investment Strategy",
    title: "Investment Opportunities in Hudson Valley",
    desc: "Discover a rapidly growing community with proven returns, strong public investment, and an expanding economic ecosystem. Hudson Valley offers compelling opportunities across multiple sectors.",
  },
  marketSection: {
    title: "Market Overview",
    desc: "Key indicators show consistent growth and investment momentum in Hudson Valley.",
    stats: [
      { label: "Median Household Income", value: "$117,663", detail: "+2.3% YoY (2023)" },
      { label: "Regional Population", value: "2.1M+", detail: "9-county region" },
      { label: "Public Investment", value: "$53.1M+", detail: "ESD 2025 Regional Grant" },
      { label: "DRI Projects", value: "7+ cities", detail: "$40M+ total investment" },
    ],
  },
  investmentCasesSection: {
    title: "Existing Investment Cases",
    desc: "These businesses and organizations have already invested in Hudson Valley's revival, establishing a proven track record of growth.",
    visitWebsite: "Visit Website",
    cases: [
      { name: "IBM Quantum Computation Center", sector: "Technology", description: "IBM's historic Poughkeepsie campus hosts the world's first Quantum Computation Center (2019) with 20+ quantum systems. Anchors regional tech identity." },
      { name: "WMCHealth Network", sector: "Healthcare", description: "$1B+ health system with 10 hospitals, 12,000+ employees. Received $100M state funding for 2025 modernization—region's largest single healthcare investment." },
      { name: "Dia:Beacon", sector: "Arts & Tourism", description: "300,000 sq ft contemporary art museum transformed Beacon's economy since 2003. Inspired $200M+ in follow-on investment along Main Street corridor." },
      { name: "Hudson Valley Venture Hub", sector: "Technology", description: "SUNY New Paltz startup accelerator generated $4.5M returns in year 1 with 20+ companies. ESD-designated Innovation Hotspot with $250K/year funding." },
      { name: "Millbrook Vineyards & Winery", sector: "Agriculture", description: "Pioneer Hudson Valley winery representing a $301M agriculture sector (2,280+ farms). Agri-tourism revenue grew 78% from 2012-2022." },
      { name: "Storm King Art Center", sector: "Arts & Tourism", description: "500-acre outdoor sculpture park draws 100K+ annual visitors to New Windsor, generating significant regional tourism revenue and hospitality demand." },
      { name: "ConnectHV", sector: "Technology", description: "Regional tech community platform with ~1,000 members, catalyzing the remote-work migration from NYC. Represents $157K average HV household income demographic." },
      { name: "Scenic Hudson", sector: "Environment", description: "Since 1963, protected 53,000+ acres and built 45+ parks. Environmental stewardship creates $100M+ in ecosystem services and supports $3B+ tourism economy." },
      { name: "Mohonk Mountain House", sector: "Tourism", description: "National Historic Landmark resort on Shawangunk Ridge—a century-old hospitality institution driving year-round tourism. Sky Top Tower a crown jewel of eco-tourism." },
    ],
  },
  opportunitySection: {
    title: "Opportunity Sectors",
    desc: "Key sectors with the highest growth potential for new investment.",
    sectors: [
      { title: "Healthcare & Biotech", description: "WMCHealth + Northwell/Vassar Brothers create 25,000+ healthcare jobs. IBM Quantum Computing positions region for biotech and clinical AI applications." },
      { title: "AgriTech & Food", description: "$301M agriculture sector with 2,280+ farms. 78% agri-tourism growth (2012-2022) and craft beverage boom (wineries, distilleries, ciderworks) signal premium food economy." },
      { title: "Arts & Cultural Tourism", description: "Dia:Beacon, Storm King, Bard Fisher Center attract 1M+ annual visitors. Arts-driven revitalization (Beacon, Hudson, Peekskill) creates hospitality and retail opportunities." },
      { title: "Quantum & Deep Tech", description: "IBM Quantum Center operates 20+ systems executing 2B+ quantum circuits/day. First-mover opportunity for quantum software, sensing, and workforce development." },
      { title: "Real Estate & Housing", description: "Critical housing shortage (9,000+ fewer units vs pre-COVID). Westchester median $700K+ with demand far outstripping supply across all 9 counties." },
      { title: "Remote Work Infrastructure", description: "NYC-to-HV migration drives demand for co-working, broadband, fiber, transit-oriented development. Metro-North upgrade targeting <90 min NYC-Poughkeepsie." },
    ],
  },
  strategicSection: {
    title: "Strategic Advantages",
    desc: "Why Hudson Valley is uniquely positioned for investment success.",
    advantages: [
      { title: "60-150 Miles from NYC", description: "Metro-North Hudson Line direct to Grand Central. Governor Hochul's rail proposal targets NYC-Poughkeepsie <90 minutes, unlocking full commuter-suburb economics." },
      { title: "IBM Quantum Anchor", description: "World's first Quantum Computation Center in Poughkeepsie establishes deep tech credibility. First-mover advantage for quantum-adjacent businesses." },
      { title: "Arts & Culture Critical Mass", description: "Dia:Beacon + Storm King + Bard + Hudson Valley arts scene creates self-reinforcing cultural tourism economy that attracts high-income demographics." },
      { title: "Agricultural Heritage + Tourism", description: "$301M farm economy, 2,280+ farms, 78% agri-tourism growth. NYS requires 70% local ingredients—creating supply chain demand for craft beverages." },
    ],
  },
  roiSection: {
    title: "ROI Analysis",
    desc: "Hudson Valley delivers compounding returns across multiple asset classes.",
    homeValue: {
      title: "Home Value Appreciation (Sullivan County)",
      year2019: "2019",
      price2019: "~$200K",
      year2025: "2025",
      price2025: "$400K+",
      appreciation: "+100%",
      appreciationDetail: "Sullivan County home values doubled in 6 years",
    },
    publicPrivate: {
      title: "2025 Public Investment Leverage",
      items: [
        { label: "ESD Regional Council Grants", value: "$53.1M" },
        { label: "DRI (Multiple Cities)", value: "$40M+" },
        { label: "WMCHealth State Funding", value: "$100M" },
        { label: "Leveraged Private Investment", value: "$216.9M" },
      ],
      total: "$410M+",
      totalLabel: "Total documented 2025 investment",
    },
  },
  cta: {
    title: "Ready to Invest?",
    desc: "Schedule a consultation or download our investor deck to learn more about opportunities in Hudson Valley.",
    scheduleConsultation: "Schedule Investment Consultation",
    downloadDeck: "Download Investor Deck",
  },
};

export type InvestmentContent = typeof en;

const zhTW: InvestmentContent = {
  hero: {
    badge: "投資策略",
    title: "Hudson Valley 投資機會",
    desc: "探索一個快速成長的社區，擁有已驗證的回報、強勁的公共投資及持續擴展的經濟生態系統。Hudson Valley 在多個領域提供引人注目的投資機會。",
  },
  marketSection: {
    title: "市場概覽",
    desc: "關鍵指標顯示 Hudson Valley 持續成長與投資動能。",
    stats: [
      { label: "家庭中位收入", value: "$117,663", detail: "+2.3% 年增（2023）" },
      { label: "區域人口", value: "2.1M+", detail: "9 縣轄區" },
      { label: "公共投資", value: "$53.1M+", detail: "ESD 2025 區域補助金" },
      { label: "DRI 專案", value: "7 個以上城市", detail: "$40M+ 總投資" },
    ],
  },
  investmentCasesSection: {
    title: "現有投資案例",
    desc: "這些企業和組織已投資 Hudson Valley 的復興，建立了成長的良好紀錄。",
    visitWebsite: "造訪網站",
    cases: [
      { name: "IBM Quantum Computation Center", sector: "Technology", description: "IBM 歷史悠久的 Poughkeepsie 園區設有全球首座量子計算中心（2019），擁有 20 套以上量子系統，奠定區域深科技地位。" },
      { name: "WMCHealth Network", sector: "Healthcare", description: "超過 $10 億的醫療系統，擁有 10 家醫院、12,000 名以上員工。2025 年現代化計畫獲州政府 $1 億資助，為區域最大單筆醫療投資。" },
      { name: "Dia:Beacon", sector: "Arts & Tourism", description: "30 萬平方英尺當代藝術博物館自 2003 年起改變 Beacon 的經濟面貌，帶動 Main Street 走廊超過 $2 億的後續投資。" },
      { name: "Hudson Valley Venture Hub", sector: "Technology", description: "SUNY New Paltz 新創加速器首年即帶來 $450 萬回報，孵化 20 家以上企業，獲 ESD 指定為創新熱區，每年獲 $25 萬資助。" },
      { name: "Millbrook Vineyards & Winery", sector: "Agriculture", description: "Hudson Valley 先驅酒莊，代表規模 $3.01 億的農業產業（2,280 多個農場）。農業觀光收入 2012 至 2022 年增長 78%。" },
      { name: "Storm King Art Center", sector: "Arts & Tourism", description: "500 英畝戶外雕塑公園每年吸引逾 10 萬名遊客至 New Windsor，為區域旅遊業及酒店業創造可觀收益。" },
      { name: "ConnectHV", sector: "Technology", description: "區域科技社群平台，擁有約 1,000 名成員，推動 NYC 遠距工作移民潮，代表平均家庭收入 $15.7 萬的 HV 人口結構。" },
      { name: "Scenic Hudson", sector: "Environment", description: "自 1963 年起保護超過 53,000 英畝土地，建立 45 座以上公園，環境管理創造逾 $1 億生態系服務價值，支撐逾 $30 億旅遊經濟。" },
      { name: "Mohonk Mountain House", sector: "Tourism", description: "坐落於 Shawangunk Ridge 的國家歷史地標度假村，百年酒店業機構，全年驅動旅遊；天頂塔（Sky Top Tower）為生態旅遊的明珠。" },
    ],
  },
  opportunitySection: {
    title: "機會產業",
    desc: "具有最高成長潛力的新投資關鍵產業。",
    sectors: [
      { title: "醫療保健與生技", description: "WMCHealth + Northwell/Vassar Brothers 創造逾 25,000 個醫療就業機會，IBM 量子計算更為區域生技及臨床 AI 應用奠定基礎。" },
      { title: "農業科技與食品", description: "$3.01 億農業產業，擁有 2,280 多個農場。農業觀光成長 78%（2012-2022），精釀飲品熱潮（酒莊、蒸餾廠、蘋果酒廠）標誌優質食品經濟崛起。" },
      { title: "藝術與文化旅遊", description: "Dia:Beacon、Storm King、巴德費雪中心每年吸引逾 100 萬遊客，藝術驅動的城鎮復興（Beacon、Hudson、Peekskill）創造酒店與零售商機。" },
      { title: "量子與深科技", description: "IBM 量子中心運行 20 套以上系統，每日執行超過 20 億次量子電路。量子軟體、感測及人才培育的先佔優勢。" },
      { title: "不動產與住宅", description: "嚴峻住宅短缺（比 COVID 前減少 9,000 套以上）。Westchester 中位房價逾 $70 萬，9 縣全境供不應求。" },
      { title: "遠距工作基礎設施", description: "NYC 人口移入 HV 帶動共同工作空間、寬頻光纖及大眾運輸導向開發需求。Metro-North 升級目標 NYC-Poughkeepsie 不到 90 分鐘。" },
    ],
  },
  strategicSection: {
    title: "策略優勢",
    desc: "為何 Hudson Valley 在投資方面具有獨特定位。",
    advantages: [
      { title: "距 NYC 60-150 英里", description: "Metro-North 哈德遜線直達大中央車站。Hochul 州長的鐵路方案目標 NYC-Poughkeepsie 不到 90 分鐘，開啟完整通勤郊區經濟效益。" },
      { title: "IBM 量子計算錨點", description: "全球首座量子計算中心落腳 Poughkeepsie，建立深科技公信力，為量子相關企業提供先佔優勢。" },
      { title: "藝術與文化臨界量", description: "Dia:Beacon + Storm King + 巴德大學 + Hudson Valley 藝術圈形成自我強化的文化旅遊經濟，吸引高收入人口聚集。" },
      { title: "農業遺產與觀光", description: "$3.01 億農業經濟，2,280 多個農場，農業觀光成長 78%。紐約州規定飲品需含 70% 在地原料，為精釀飲品產業創造供應鏈需求。" },
    ],
  },
  roiSection: {
    title: "投資報酬率分析",
    desc: "Hudson Valley 在多種資產類別上提供複合成長回報。",
    homeValue: {
      title: "房產增值（Sullivan County）",
      year2019: "2019",
      price2019: "~$200K",
      year2025: "2025",
      price2025: "$400K+",
      appreciation: "+100%",
      appreciationDetail: "Sullivan County 房價 6 年翻倍",
    },
    publicPrivate: {
      title: "2025 年公共投資槓桿",
      items: [
        { label: "ESD 區域理事會補助金", value: "$53.1M" },
        { label: "DRI（多個城市）", value: "$40M+" },
        { label: "WMCHealth 州政府資助", value: "$100M" },
        { label: "槓桿民間投資", value: "$216.9M" },
      ],
      total: "$410M+",
      totalLabel: "2025 年已記錄總投資",
    },
  },
  cta: {
    title: "準備好投資了嗎？",
    desc: "預約諮詢或下載我們的投資簡報，了解更多 Hudson Valley 的投資機會。",
    scheduleConsultation: "預約投資諮詢",
    downloadDeck: "下載投資簡報",
  },
};

const es: InvestmentContent = {
  hero: {
    badge: "Estrategia de Inversión",
    title: "Oportunidades de Inversión en Hudson Valley",
    desc: "Descubra una comunidad en rápido crecimiento con retornos comprobados, fuerte inversión pública y un ecosistema económico en expansión. Hudson Valley ofrece oportunidades atractivas en múltiples sectores.",
  },
  marketSection: {
    title: "Panorama del Mercado",
    desc: "Los indicadores clave muestran crecimiento consistente e impulso de inversión en Hudson Valley.",
    stats: [
      { label: "Ingreso Familiar Mediano", value: "$117,663", detail: "+2.3% interanual (2023)" },
      { label: "Población Regional", value: "2.1M+", detail: "Región de 9 condados" },
      { label: "Inversión Pública", value: "$53.1M+", detail: "Subvención Regional ESD 2025" },
      { label: "Proyectos DRI", value: "7+ ciudades", detail: "$40M+ inversión total" },
    ],
  },
  investmentCasesSection: {
    title: "Casos de Inversión Existentes",
    desc: "Estas empresas y organizaciones ya han invertido en la revitalización de Hudson Valley, estableciendo un historial comprobado de crecimiento.",
    visitWebsite: "Visitar Sitio Web",
    cases: [
      { name: "IBM Quantum Computation Center", sector: "Technology", description: "El histórico campus de IBM en Poughkeepsie alberga el primer Centro de Computación Cuántica del mundo (2019) con más de 20 sistemas cuánticos. Ancla la identidad tecnológica de la región." },
      { name: "WMCHealth Network", sector: "Healthcare", description: "Sistema de salud de más de $1,000M con 10 hospitales y más de 12,000 empleados. Recibió $100M en fondos estatales para modernización 2025—la mayor inversión sanitaria única de la región." },
      { name: "Dia:Beacon", sector: "Arts & Tourism", description: "Museo de arte contemporáneo de 300,000 pies cuadrados que transformó la economía de Beacon desde 2003. Inspiró más de $200M en inversión posterior en el corredor de Main Street." },
      { name: "Hudson Valley Venture Hub", sector: "Technology", description: "Acelerador de startups de SUNY New Paltz que generó $4.5M en retornos en el año 1 con más de 20 empresas. Innovation Hotspot designado por ESD con $250K/año de financiamiento." },
      { name: "Millbrook Vineyards & Winery", sector: "Agriculture", description: "Bodega pionera de Hudson Valley que representa un sector agrícola de $301M (más de 2,280 granjas). Los ingresos de agroturismo crecieron 78% de 2012 a 2022." },
      { name: "Storm King Art Center", sector: "Arts & Tourism", description: "Parque de esculturas al aire libre de 500 acres que atrae más de 100K visitantes anuales a New Windsor, generando importantes ingresos turísticos y demanda de hospitalidad." },
      { name: "ConnectHV", sector: "Technology", description: "Plataforma de comunidad tecnológica regional con ~1,000 miembros, catalizando la migración de trabajo remoto desde NYC. Representa el segmento demográfico con ingreso familiar promedio de $157K." },
      { name: "Scenic Hudson", sector: "Environment", description: "Desde 1963, protegió más de 53,000 acres y construyó más de 45 parques. La administración ambiental crea más de $100M en servicios ecosistémicos y apoya una economía turística de más de $3,000M." },
      { name: "Mohonk Mountain House", sector: "Tourism", description: "Resort Landmark Histórico Nacional en Shawangunk Ridge—institución de hospitalidad centenaria que impulsa el turismo durante todo el año. La Sky Top Tower es la joya del ecoturismo." },
    ],
  },
  opportunitySection: {
    title: "Sectores de Oportunidad",
    desc: "Sectores clave con el mayor potencial de crecimiento para nueva inversión.",
    sectors: [
      { title: "Salud y Biotecnología", description: "WMCHealth + Northwell/Vassar Brothers crean más de 25,000 empleos en salud. IBM Quantum Computing posiciona la región para aplicaciones de biotecnología e IA clínica." },
      { title: "AgroTech y Alimentos", description: "Sector agrícola de $301M con más de 2,280 granjas. Crecimiento del 78% en agroturismo (2012-2022) y auge de bebidas artesanales (bodegas, destilerías, sidrerías) señalan una economía alimentaria premium." },
      { title: "Arte y Turismo Cultural", description: "Dia:Beacon, Storm King, Bard Fisher Center atraen más de 1M de visitantes anuales. La revitalización impulsada por las artes (Beacon, Hudson, Peekskill) crea oportunidades de hospitalidad y comercio." },
      { title: "Quantum y Deep Tech", description: "El Centro Cuántico de IBM opera más de 20 sistemas ejecutando más de 2,000M de circuitos cuánticos/día. Oportunidad de primer movimiento en software cuántico, sensores y desarrollo de fuerza laboral." },
      { title: "Bienes Raíces y Vivienda", description: "Escasez crítica de vivienda (más de 9,000 unidades menos vs pre-COVID). Precio mediano en Westchester superior a $700K con demanda que supera ampliamente la oferta en los 9 condados." },
      { title: "Infraestructura de Trabajo Remoto", description: "La migración NYC-a-HV impulsa la demanda de coworking, banda ancha, fibra y desarrollo orientado al transporte. Mejora de Metro-North con objetivo de <90 min NYC-Poughkeepsie." },
    ],
  },
  strategicSection: {
    title: "Ventajas Estratégicas",
    desc: "Por qué Hudson Valley tiene una posición única para el éxito en inversiones.",
    advantages: [
      { title: "60-150 Millas de NYC", description: "Metro-North Hudson Line directo a Grand Central. La propuesta ferroviaria del Gobernador Hochul apunta a NYC-Poughkeepsie en <90 minutos, desbloqueando plena economía suburbana de commuters." },
      { title: "IBM Quantum como Ancla", description: "El primer Centro de Computación Cuántica del mundo en Poughkeepsie establece credibilidad en tecnología profunda. Ventaja de primer movimiento para negocios adyacentes al quantum." },
      { title: "Masa Crítica de Arte y Cultura", description: "Dia:Beacon + Storm King + Bard + escena artística de Hudson Valley crea una economía de turismo cultural autorreinforçante que atrae demografía de altos ingresos." },
      { title: "Herencia Agrícola + Turismo", description: "Economía agrícola de $301M, más de 2,280 granjas, 78% de crecimiento en agroturismo. NYS exige 70% de ingredientes locales—creando demanda en la cadena de suministro de bebidas artesanales." },
    ],
  },
  roiSection: {
    title: "Análisis de ROI",
    desc: "Hudson Valley ofrece retornos compuestos en múltiples clases de activos.",
    homeValue: {
      title: "Apreciación del Valor Inmobiliario (Condado de Sullivan)",
      year2019: "2019",
      price2019: "~$200K",
      year2025: "2025",
      price2025: "$400K+",
      appreciation: "+100%",
      appreciationDetail: "El valor de las viviendas en Sullivan County se duplicó en 6 años",
    },
    publicPrivate: {
      title: "Apalancamiento de Inversión Pública 2025",
      items: [
        { label: "Subvenciones del Consejo Regional ESD", value: "$53.1M" },
        { label: "DRI (Múltiples Ciudades)", value: "$40M+" },
        { label: "Fondos Estatales WMCHealth", value: "$100M" },
        { label: "Inversión Privada Apalancada", value: "$216.9M" },
      ],
      total: "$410M+",
      totalLabel: "Inversión total documentada 2025",
    },
  },
  cta: {
    title: "¿Listo para Invertir?",
    desc: "Programe una consulta o descargue nuestra presentación para inversionistas para conocer más sobre las oportunidades en Hudson Valley.",
    scheduleConsultation: "Programar Consulta de Inversión",
    downloadDeck: "Descargar Presentación para Inversionistas",
  },
};

export const content: Record<Language, InvestmentContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
