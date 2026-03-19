const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = navMenu.querySelectorAll('a');
const langButtons = document.querySelectorAll('.lang-btn');
const previewText = document.getElementById('previewText');
const projectForm = document.getElementById('projectForm');
const copyInquiry = document.getElementById('copyInquiry');

menuToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const translations = {
  en: {
    brandTag: 'Artist-led creative company',
    navServices: 'Services', navWork: 'Work', navTeam: 'Creative Team', navAbout: 'About', navContact: 'Contact', navCta: 'Start a Project',
    heroEyebrow: 'Artist-led creative direction',
    heroTitle: 'Branding, visuals, rollout, and digital presence with real creative direction.',
    heroLead: 'We help artists, founders, and culture-driven brands build identity, shape perception, and launch with clarity.',
    heroPrimary: 'View Work', heroSecondary: 'Start a Project',
    proof1: 'Artist-Led', proof2: 'Multi-Disciplinary', proof3: 'Premium Direction', proof4: 'Culture-Rooted',
    float1Label: 'Core Focus', float1Title: 'Identity + Visual Direction + Rollout', float1Text: 'A premium front door for artists, campaigns, and culture-led brands.',
    stat1Kicker: 'Built by creatives', stat1Text: 'Not a corporation trying to study creativity from the outside.',
    stat2Kicker: 'Sharper positioning', stat2Text: 'Identity, visuals, music, and rollout aligned under one premium system.',
    stat3Kicker: 'Global-ready', stat3Text: 'English, Spanish, and Japanese support for a broader creative reach.',
    stat4Kicker: 'Ready to scale', stat4Text: 'Structured to support artists, campaigns, merch, visuals, and future partners.',
    aboutEyebrow: 'About', aboutTitle: 'A creative company built from living the work.',
    aboutText1: 'JP Re-Brand is a premium artist-led company focused on branding, visual direction, music-centered creative, rollout strategy, and digital presence.',
    aboutText2: 'We do more than make things look polished. We help shape how your project is seen, felt, and remembered so the presentation matches the level of your vision.',
    aboutText3: 'The goal is simple: create a brand world that feels elevated, functional, and unmistakably yours.',
    servicesEyebrow: 'Services', servicesTitle: 'Focused offers. No clutter. No overlap.', servicesLead: 'Each service bucket solves a real part of your brand or launch ecosystem.',
    service1Title: 'Brand Identity', service1Text: 'Logos, visual systems, tone, and foundational direction that give your brand real shape.',
    service2Title: 'Creative Direction', service2Text: 'Visual and conceptual leadership for campaigns, releases, brand refreshes, and content ecosystems.',
    service3Title: 'Visual Content', service3Text: 'Cover art, promo graphics, social visuals, ad assets, and marketing pieces with consistency.',
    service4Title: 'Music Production', service4Text: 'Creative development, sonic direction, and artist-facing support for projects that need cohesive energy.',
    service5Title: 'Marketing & Rollout', service5Text: 'Campaign planning, launch structure, asset mapping, and audience-facing content flow.',
    service6Title: 'Web & Digital Assets', service6Text: 'Responsive sites and polished digital experiences that support trust, growth, and conversion.',
    workEyebrow: 'Featured work', workTitle: 'Real images. Better showcase. Stronger premium feel.', workLead: 'Your uploaded visuals are now used with more intention so the site feels closer to a true launch.',
    portfolio1Kicker: 'Catalog legacy', portfolio1Title: 'Artist identity and release presentation', portfolio1Text: 'Use this area to frame bigger projects, artist eras, campaign systems, and visual storytelling.',
    portfolio2Kicker: 'Single artwork', portfolio2Title: 'Cover art and streaming rollout', portfolio2Text: 'Perfect for singles, launch sets, distribution visuals, and music-centered branding.',
    portfolio3Kicker: 'Creative visuals', portfolio3Title: 'Campaign-ready graphic storytelling', portfolio3Text: 'Highlight custom art, posters, merch graphics, or promo content that needs impact.',
    portfolio4Kicker: 'Brand campaigns', portfolio4Title: 'Visual identity made to sell the vision', portfolio4Text: 'Use this for rebrands, launch packages, ad creatives, lookbooks, or presentation decks.',
    portfolio5Kicker: 'Music visuals', portfolio5Title: 'Release assets with character', portfolio5Text: 'Show how the image, mood, and message all align before the song even plays.',
    portfolio6Kicker: 'Collaboration', portfolio6Title: 'Behind-the-scenes strategy and content planning', portfolio6Text: 'Position the business as a working creative partner, not just a logo shop.',
    teamEyebrow: 'Creative Team', teamTitle: 'Click on a team member to view their full profile, portfolio, and connect with them.',
    teamMember1Name: 'Los Monos del Wicho', teamMember1Role: 'Art Creator / Graphic Designer', teamMember1Bio: 'Visual artist specializing in urban art, album covers, and brand identity design with a unique Chicano street art aesthetic.', teamMember1Tag1: 'Visual Design', teamMember1Tag2: 'Branding',
    teamMember2Name: 'Jae-P', teamMember2Role: 'Founder / CEO / Executive Producer', teamMember2Bio: 'RIAA Gold & Platinum recording artist, music publisher, mentor, and visual director with 20+ years in the industry.', teamMember2Tag1: 'Music', teamMember2Tag2: 'Publishing', teamMember2Tag3: 'Mentor',
    viewProfile: 'View Profile',
    founderEyebrow: 'Founder perspective', founderTitle: 'Built from experience, not theory.', founderText1: 'This is not surface-level branding. This is creative work shaped by real artistic experience, storytelling instinct, and the discipline to present projects at a higher level.', founderText2: 'The difference is not just visual. It is emotional, strategic, and cultural. That is what gives the brand its weight.',
    contactEyebrow: 'Contact', contactTitle: 'Let’s build something that actually represents you.', contactLead: 'Use the project form below. It creates a ready-to-send inquiry you can paste into email fast, even before your final backend is connected.',
    fieldName: 'Name', fieldEmail: 'Email', fieldProjectType: 'Project Type', fieldBudget: 'Budget Range', fieldTimeline: 'Timeline', fieldDetails: 'Project Details',
    optionBranding: 'Branding', optionMusic: 'Music Release', optionVisuals: 'Visual Content', optionWebsite: 'Website', optionFull: 'Full Creative Rollout',
    formPrimary: 'Generate Inquiry', formSecondary: 'Copy Summary', previewLabel: 'Inquiry Preview', previewText: 'Fill out the form and your project inquiry summary will appear here.',
    metaEmailLabel: 'Email', metaLocationLabel: 'Base', metaLocation: 'California, USA', metaLanguageLabel: 'Languages', metaLanguages: 'English / Español / 日本語',
    footerText: 'Artist-led creative direction for brands, releases, visuals, and digital presence.'
  },
  es: {
    brandTag: 'Compañía creativa dirigida por un artista',
    navServices: 'Servicios', navWork: 'Trabajo', navTeam: 'Equipo Creativo', navAbout: 'Nosotros', navContact: 'Contacto', navCta: 'Iniciar Proyecto',
    heroEyebrow: 'Dirección creativa dirigida por un artista',
    heroTitle: 'Branding, visuales, lanzamiento y presencia digital con dirección creativa real.',
    heroLead: 'Ayudamos a artistas, fundadores y marcas con cultura a construir identidad, proyectar su visión y lanzar con claridad.',
    heroPrimary: 'Ver Trabajo', heroSecondary: 'Iniciar Proyecto',
    proof1: 'Dirigido por artista', proof2: 'Multidisciplinario', proof3: 'Dirección premium', proof4: 'Raíces culturales',
    float1Label: 'Enfoque central', float1Title: 'Identidad + Dirección Visual + Lanzamiento', float1Text: 'Una puerta premium para artistas, campañas y marcas con cultura.',
    stat1Kicker: 'Hecho por creativos', stat1Text: 'No somos una corporación tratando de estudiar la creatividad desde afuera.',
    stat2Kicker: 'Posicionamiento más claro', stat2Text: 'Identidad, visuales, música y rollout alineados dentro de un mismo sistema premium.',
    stat3Kicker: 'Listo para lo global', stat3Text: 'Soporte en inglés, español y japonés para una presencia creativa más amplia.',
    stat4Kicker: 'Listo para crecer', stat4Text: 'Estructurado para apoyar artistas, campañas, merch, visuales y futuros aliados.',
    aboutEyebrow: 'Nosotros', aboutTitle: 'Una compañía creativa nacida de vivir el trabajo.',
    aboutText1: 'JP Re-Brand es una compañía premium dirigida por un artista, enfocada en branding, dirección visual, creatividad musical, estrategia de lanzamiento y presencia digital.',
    aboutText2: 'No solo hacemos que algo se vea bien. Ayudamos a definir cómo se ve, se siente y se recuerda tu proyecto para que la presentación esté al nivel de tu visión.',
    aboutText3: 'La meta es simple: crear un universo de marca elevado, funcional y claramente tuyo.',
    servicesEyebrow: 'Servicios', servicesTitle: 'Ofertas enfocadas. Sin ruido. Sin duplicaciones.', servicesLead: 'Cada bloque de servicio resuelve una parte real de tu marca o de tu lanzamiento.',
    service1Title: 'Identidad de Marca', service1Text: 'Logos, sistemas visuales, tono y dirección base que le dan forma real a tu marca.',
    service2Title: 'Dirección Creativa', service2Text: 'Liderazgo visual y conceptual para campañas, lanzamientos, rebrandings y ecosistemas de contenido.',
    service3Title: 'Contenido Visual', service3Text: 'Portadas, promo graphics, visuales para redes, anuncios y piezas de marketing con consistencia.',
    service4Title: 'Producción Musical', service4Text: 'Desarrollo creativo, dirección sonora y apoyo para proyectos que necesitan una energía coherente.',
    service5Title: 'Marketing y Rollout', service5Text: 'Planeación de campañas, estructura de lanzamiento, mapeo de assets y flujo de contenido para la audiencia.',
    service6Title: 'Web y Assets Digitales', service6Text: 'Sitios responsivos y experiencias digitales pulidas que generan confianza, crecimiento y conversión.',
    workEyebrow: 'Trabajo destacado', workTitle: 'Imágenes reales. Mejor vitrina. Sensación más premium.', workLead: 'Tus visuales ahora se usan con más intención para que el sitio se sienta más cerca de un lanzamiento real.',
    portfolio1Kicker: 'Legado de catálogo', portfolio1Title: 'Identidad del artista y presentación del lanzamiento', portfolio1Text: 'Usa esta área para proyectos grandes, eras del artista, sistemas de campaña y narrativa visual.',
    portfolio2Kicker: 'Arte de sencillo', portfolio2Title: 'Portada y rollout para streaming', portfolio2Text: 'Ideal para sencillos, lanzamientos, visuales de distribución y branding musical.',
    portfolio3Kicker: 'Visuales creativos', portfolio3Title: 'Narrativa gráfica lista para campaña', portfolio3Text: 'Destaca arte personalizado, posters, gráficos de merch o promo con impacto.',
    portfolio4Kicker: 'Campañas de marca', portfolio4Title: 'Identidad visual que vende la visión', portfolio4Text: 'Úsalo para rebrands, launch packages, anuncios, lookbooks o decks de presentación.',
    portfolio5Kicker: 'Visuales musicales', portfolio5Title: 'Assets de lanzamiento con carácter', portfolio5Text: 'Muestra cómo imagen, atmósfera y mensaje se alinean antes de que suene la canción.',
    portfolio6Kicker: 'Colaboración', portfolio6Title: 'Estrategia detrás de cámaras y planeación de contenido', portfolio6Text: 'Posiciona el negocio como socio creativo real, no solo como una tienda de logos.',
    teamEyebrow: 'Equipo Creativo', teamTitle: 'Haz clic en un integrante para ver su perfil completo, portafolio y conectar con él.',
    teamMember1Name: 'Los Monos del Wicho', teamMember1Role: 'Creador de Arte / Diseñador Gráfico', teamMember1Bio: 'Artista visual especializado en arte urbano, portadas y diseño de identidad de marca con una estética chicana callejera única.', teamMember1Tag1: 'Diseño Visual', teamMember1Tag2: 'Branding',
    teamMember2Name: 'Jae-P', teamMember2Role: 'Fundador / CEO / Productor Ejecutivo', teamMember2Bio: 'Artista con certificaciones RIAA Gold & Platinum, publisher, mentor y director visual con más de 20 años en la industria.', teamMember2Tag1: 'Música', teamMember2Tag2: 'Publishing', teamMember2Tag3: 'Mentor',
    viewProfile: 'Ver Perfil',
    founderEyebrow: 'Perspectiva del fundador', founderTitle: 'Construido desde la experiencia, no desde la teoría.', founderText1: 'Esto no es branding superficial. Es trabajo creativo moldeado por experiencia artística real, instinto narrativo y disciplina para presentar proyectos a otro nivel.', founderText2: 'La diferencia no es solo visual. También es emocional, estratégica y cultural. Ahí está el peso de la marca.',
    contactEyebrow: 'Contacto', contactTitle: 'Vamos a construir algo que de verdad te represente.', contactLead: 'Usa el formulario de proyecto. Te genera una consulta lista para enviar por correo, incluso antes de conectar el backend final.',
    fieldName: 'Nombre', fieldEmail: 'Correo', fieldProjectType: 'Tipo de Proyecto', fieldBudget: 'Rango de Presupuesto', fieldTimeline: 'Tiempo', fieldDetails: 'Detalles del Proyecto',
    optionBranding: 'Branding', optionMusic: 'Lanzamiento Musical', optionVisuals: 'Contenido Visual', optionWebsite: 'Sitio Web', optionFull: 'Rollout Creativo Completo',
    formPrimary: 'Generar Consulta', formSecondary: 'Copiar Resumen', previewLabel: 'Vista previa', previewText: 'Llena el formulario y aquí aparecerá el resumen de tu proyecto.',
    metaEmailLabel: 'Correo', metaLocationLabel: 'Base', metaLocation: 'California, EE. UU.', metaLanguageLabel: 'Idiomas', metaLanguages: 'English / Español / 日本語',
    footerText: 'Dirección creativa dirigida por un artista para marcas, lanzamientos, visuales y presencia digital.'
  },
  ja: {
    brandTag: 'アーティスト主導のクリエイティブ会社',
    navServices: 'サービス', navWork: '実績', navTeam: 'クリエイティブチーム', navAbout: '概要', navContact: 'お問い合わせ', navCta: 'プロジェクト開始',
    heroEyebrow: 'アーティスト主導のクリエイティブディレクション',
    heroTitle: 'ブランディング、ビジュアル、ローンチ、デジタル展開を本物のクリエイティブディレクションで。',
    heroLead: 'アーティスト、創業者、カルチャー主導のブランドが、明確な方向性でアイデンティティを築き、存在感を高め、ローンチできるよう支援します。',
    heroPrimary: '実績を見る', heroSecondary: '相談する',
    proof1: 'アーティスト主導', proof2: '多分野対応', proof3: 'プレミアム演出', proof4: 'カルチャー起点',
    float1Label: '中核フォーカス', float1Title: 'アイデンティティ + ビジュアルディレクション + ローンチ', float1Text: 'アーティストやカルチャー系ブランドのためのプレミアムな入口。',
    stat1Kicker: 'クリエイターが構築', stat1Text: '外側から創造性を研究する企業ではありません。',
    stat2Kicker: '明確なポジショニング', stat2Text: 'アイデンティティ、ビジュアル、音楽、展開を一つの上質なシステムに統合。',
    stat3Kicker: 'グローバル対応', stat3Text: '英語・スペイン語・日本語に対応し、より広いクリエイティブ展開を実現。',
    stat4Kicker: '拡張準備完了', stat4Text: 'アーティスト、キャンペーン、マーチ、ビジュアル、将来のパートナーに対応できる設計。',
    aboutEyebrow: '概要', aboutTitle: '現場を生きてきたからこそ作れるクリエイティブ会社。',
    aboutText1: 'JP Re-Brand は、ブランディング、ビジュアルディレクション、音楽中心のクリエイティブ、ローンチ戦略、デジタル展開に特化したプレミアムなアーティスト主導会社です。',
    aboutText2: '見た目を整えるだけではありません。あなたのプロジェクトがどう見られ、どう感じられ、どう記憶されるかを設計します。',
    aboutText3: '目標はシンプルです。上質で機能的、そしてあなたらしさが明確なブランド世界を作ること。',
    servicesEyebrow: 'サービス', servicesTitle: '焦点の定まった提供内容。重複なし。無駄なし。', servicesLead: '各サービスはブランドやローンチに必要な機能を明確に担います。',
    service1Title: 'ブランドアイデンティティ', service1Text: 'ロゴ、ビジュアルシステム、トーン、基礎設計でブランドに明確な形を与えます。',
    service2Title: 'クリエイティブディレクション', service2Text: 'キャンペーン、リリース、リブランディング、コンテンツ全体のビジュアルと概念を主導します。',
    service3Title: 'ビジュアルコンテンツ', service3Text: 'ジャケット、プロモ素材、SNSビジュアル、広告素材を一貫したトーンで制作します。',
    service4Title: '音楽制作', service4Text: '創造開発、サウンド方向性、アーティスト向けサポートで作品全体の一体感を作ります。',
    service5Title: 'マーケティング & ローンチ', service5Text: 'キャンペーン設計、公開計画、素材整理、オーディエンス向けの流れを構築します。',
    service6Title: 'Web & デジタル資産', service6Text: '信頼・成長・反応につながる洗練されたレスポンシブサイトを作ります。',
    workEyebrow: '注目実績', workTitle: '実画像を活かした、より強いプレミアム感。', workLead: 'アップロードされたビジュアルを意図的に配置し、実際のローンチに近い印象へ高めました。',
    portfolio1Kicker: 'カタログの価値', portfolio1Title: 'アーティストの世界観とリリース演出', portfolio1Text: '大きな案件、時代ごとの表現、キャンペーン設計、ビジュアルストーリーの見せ場に最適です。',
    portfolio2Kicker: 'シングルアート', portfolio2Title: 'カバーアートと配信展開', portfolio2Text: 'シングル、配信ビジュアル、ローンチ用素材、音楽中心のブランディングに最適。',
    portfolio3Kicker: 'クリエイティブビジュアル', portfolio3Title: 'キャンペーン向けグラフィックストーリー', portfolio3Text: 'カスタムアート、ポスター、マーチグラフィック、プロモ素材を強く見せられます。',
    portfolio4Kicker: 'ブランドキャンペーン', portfolio4Title: 'ビジョンを売るためのビジュアル設計', portfolio4Text: 'リブランディング、ローンチパッケージ、広告、ルックブック、提案資料に使えます。',
    portfolio5Kicker: '音楽ビジュアル', portfolio5Title: '個性のあるリリース素材', portfolio5Text: '曲が流れる前から、イメージ・空気感・メッセージが伝わる状態を作ります。',
    portfolio6Kicker: 'コラボレーション', portfolio6Title: '舞台裏の戦略とコンテンツ設計', portfolio6Text: '単なるロゴ制作ではなく、実働するクリエイティブパートナーとして見せます。',
    teamEyebrow: 'クリエイティブチーム', teamTitle: 'メンバーをクリックすると、プロフィール、作品、連携情報を確認できます。',
    teamMember1Name: 'Los Monos del Wicho', teamMember1Role: 'アートクリエイター / グラフィックデザイナー', teamMember1Bio: 'アーバンアート、ジャケット制作、ブランドアイデンティティに強い、チカーノ・ストリート感覚を持つビジュアルアーティスト。', teamMember1Tag1: 'ビジュアルデザイン', teamMember1Tag2: 'ブランディング',
    teamMember2Name: 'Jae-P', teamMember2Role: '創設者 / CEO / エグゼクティブプロデューサー', teamMember2Bio: 'RIAA Gold & Platinum 実績を持つレコーディングアーティスト、音楽出版者、メンター、ビジュアルディレクター。業界経験20年以上。', teamMember2Tag1: '音楽', teamMember2Tag2: '出版', teamMember2Tag3: 'メンター',
    viewProfile: 'プロフィールを見る',
    founderEyebrow: '創設者の視点', founderTitle: '理論ではなく、経験から作られたブランド。', founderText1: 'これは表面的なブランディングではありません。実際のアーティスト経験、物語を作る感覚、そして作品を高いレベルで見せる規律から生まれた仕事です。', founderText2: '違いは見た目だけではありません。感情、戦略、カルチャー、そのすべてがブランドの重みになります。',
    contactEyebrow: 'お問い合わせ', contactTitle: 'あなたを本当に表すものを一緒に作りましょう。', contactLead: '下のフォームで、すぐ送れる問い合わせ文を生成できます。最終的なバックエンド接続前でも使えます。',
    fieldName: '名前', fieldEmail: 'メール', fieldProjectType: 'プロジェクト種別', fieldBudget: '予算帯', fieldTimeline: 'スケジュール', fieldDetails: '詳細',
    optionBranding: 'ブランディング', optionMusic: '音楽リリース', optionVisuals: 'ビジュアル制作', optionWebsite: 'Webサイト', optionFull: 'フルクリエイティブ展開',
    formPrimary: '問い合わせ生成', formSecondary: '要約をコピー', previewLabel: 'プレビュー', previewText: 'フォームを入力すると、ここに問い合わせ内容が表示されます。',
    metaEmailLabel: 'メール', metaLocationLabel: '拠点', metaLocation: 'カリフォルニア, USA', metaLanguageLabel: '言語', metaLanguages: 'English / Español / 日本語',
    footerText: 'ブランド、リリース、ビジュアル、デジタル展開のためのアーティスト主導クリエイティブディレクション。'
  }
};

const profileData = {
  wicho: {
    en: {
      name: 'Los Monos del Wicho',
      role: 'Art Creator / Graphic Designer',
      text: 'Visual artist specializing in urban art, album covers, custom logos, illustrated identity work, and Chicano-rooted street aesthetics. Best used for bold campaign visuals, merch concepts, cover art, and culture-first branding.',
      tags: ['Visual Design', 'Branding', 'Album Covers', 'Street Aesthetic']
    },
    es: {
      name: 'Los Monos del Wicho',
      role: 'Creador de Arte / Diseñador Gráfico',
      text: 'Artista visual especializado en arte urbano, portadas, logos personalizados, identidad ilustrada y estética callejera chicana. Ideal para visuales con fuerza, merch, cover art y branding con cultura.',
      tags: ['Diseño Visual', 'Branding', 'Portadas', 'Estética Callejera']
    },
    ja: {
      name: 'Los Monos del Wicho',
      role: 'アートクリエイター / グラフィックデザイナー',
      text: 'アーバンアート、ジャケット、カスタムロゴ、イラスト主体のアイデンティティ、チカーノ・ストリート美学に強いビジュアルアーティスト。強いビジュアル、マーチ、カバーアート、カルチャー重視のブランド表現に最適です。',
      tags: ['ビジュアル', 'ブランディング', 'ジャケット', 'ストリート感']
    },
    image: 'assets/team-losmonos.jpg',
    gallery: ['assets/portfolio-art1.jpg','assets/portfolio-art2.jpg','assets/hot-cortez-soon.png']
  },
  jaep: {
    en: {
      name: 'Jae-P',
      role: 'Founder / CEO / Executive Producer',
      text: 'RIAA Gold & Platinum recording artist, music publisher, mentor, and visual director with 20+ years of industry experience. Best positioned for artist development, executive creative direction, rollout strategy, and music-centered brand leadership.',
      tags: ['Music', 'Publishing', 'Mentor', 'Creative Direction']
    },
    es: {
      name: 'Jae-P',
      role: 'Fundador / CEO / Productor Ejecutivo',
      text: 'Artista con certificaciones RIAA Gold & Platinum, publisher, mentor y director visual con más de 20 años de experiencia. Ideal para desarrollo de artistas, dirección ejecutiva creativa, estrategia de rollout y liderazgo de marca centrado en la música.',
      tags: ['Música', 'Publishing', 'Mentor', 'Dirección Creativa']
    },
    ja: {
      name: 'Jae-P',
      role: '創設者 / CEO / エグゼクティブプロデューサー',
      text: 'RIAA Gold & Platinum 実績を持つレコーディングアーティスト、音楽出版者、メンター、ビジュアルディレクター。20年以上の経験を活かし、アーティスト育成、上位のクリエイティブディレクション、ローンチ戦略、音楽中心のブランド設計を担います。',
      tags: ['音楽', '出版', 'メンター', 'ディレクション']
    },
    image: 'assets/team-jaep.jpg',
    gallery: ['assets/album-esperanza.jpg','assets/album-atrevete.jpg','assets/perdoname-ama.jpg']
  }
};

let currentLang = localStorage.getItem('jp-rebrand-lang') || 'en';

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('jp-rebrand-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  updatePreview();
}

langButtons.forEach(btn => btn.addEventListener('click', () => applyTranslations(btn.dataset.lang)));
applyTranslations(currentLang);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function getFieldValue(id) {
  return document.getElementById(id)?.value?.trim() || '';
}

function updatePreview() {
  const fallback = translations[currentLang].previewText;
  const name = getFieldValue('name');
  const email = getFieldValue('email');
  const type = getFieldValue('projectType');
  const budget = getFieldValue('budget');
  const timeline = getFieldValue('timeline');
  const details = getFieldValue('details');

  if (!name && !email && !details && !timeline) {
    previewText.textContent = fallback;
    return;
  }

  const labels = {
    en: { hello: 'Project Inquiry', name: 'Name', email: 'Email', type: 'Project Type', budget: 'Budget', timeline: 'Timeline', details: 'Details' },
    es: { hello: 'Consulta de Proyecto', name: 'Nombre', email: 'Correo', type: 'Tipo de Proyecto', budget: 'Presupuesto', timeline: 'Tiempo', details: 'Detalles' },
    ja: { hello: 'プロジェクト問い合わせ', name: '名前', email: 'メール', type: '種別', budget: '予算', timeline: '時期', details: '詳細' }
  }[currentLang];

  previewText.textContent = `${labels.hello}\n\n${labels.name}: ${name || '-'}\n${labels.email}: ${email || '-'}\n${labels.type}: ${type || '-'}\n${labels.budget}: ${budget || '-'}\n${labels.timeline}: ${timeline || '-'}\n\n${labels.details}:\n${details || '-'}`;
}

['name','email','projectType','budget','timeline','details'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', updatePreview);
  document.getElementById(id)?.addEventListener('change', updatePreview);
});

projectForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  updatePreview();
  const subjectMap = {
    en: 'JP Re-Brand Project Inquiry',
    es: 'Consulta de Proyecto JP Re-Brand',
    ja: 'JP Re-Brand プロジェクト問い合わせ'
  };
  const mailto = `mailto:hello@jprebrand.com?subject=${encodeURIComponent(subjectMap[currentLang])}&body=${encodeURIComponent(previewText.textContent)}`;
  window.location.href = mailto;
});

copyInquiry?.addEventListener('click', async () => {
  updatePreview();
  try {
    await navigator.clipboard.writeText(previewText.textContent);
    copyInquiry.textContent = currentLang === 'es' ? 'Copiado' : currentLang === 'ja' ? 'コピー完了' : 'Copied';
    setTimeout(() => copyInquiry.textContent = translations[currentLang].formSecondary, 1200);
  } catch {
    copyInquiry.textContent = currentLang === 'es' ? 'No se pudo copiar' : currentLang === 'ja' ? 'コピー失敗' : 'Copy failed';
    setTimeout(() => copyInquiry.textContent = translations[currentLang].formSecondary, 1200);
  }
});

const modal = document.getElementById('teamModal');
const modalName = document.getElementById('teamModalName');
const modalTitle = document.getElementById('teamModalTitle');
const modalRole = document.getElementById('teamModalRole');
const modalText = document.getElementById('teamModalText');
const modalImage = document.getElementById('teamModalImage');
const modalTags = document.getElementById('teamModalTags');
const modalGallery = document.getElementById('teamModalGallery');
const closeBtn = document.getElementById('teamModalClose');

function openProfile(key) {
  const profile = profileData[key];
  if (!profile) return;
  const localized = profile[currentLang];
  modalName.textContent = localized.name;
  modalTitle.textContent = localized.role;
  modalRole.textContent = localized.role;
  modalText.textContent = localized.text;
  modalImage.src = profile.image;
  modalImage.alt = localized.name;
  modalTags.innerHTML = localized.tags.map(tag => `<li>${tag}</li>`).join('');
  modalGallery.innerHTML = profile.gallery.map(src => `<img src="${src}" alt="${localized.name} work sample">`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProfile() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('click', () => openProfile(card.dataset.member));
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProfile(card.dataset.member);
    }
  });
});
closeBtn?.addEventListener('click', closeProfile);
modal?.addEventListener('click', (e) => {
  if (e.target.dataset.close === 'true') closeProfile();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeProfile();
});
