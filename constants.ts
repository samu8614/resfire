
import { WorkPackage, TeamMember, Partner, Language } from './types';

export const PUBLICATIONS = [
  {
    id: 'special-issue-link',
    authors: 'Regos A (Ed.)',
    year: '2026',
    title: 'Special Issue: Nature-Based Solutions to Extreme Wildfire',
    journal: 'Fire (MDPI) Collection',
    doi: 'Collection Link',
    url: 'https://www.mdpi.com/journal/fire/special_issues/Nature_Based_Solutions_Extreme_Wildfire'
  },
  {
    id: 'regos-2026-editorial',
    authors: 'Regos A',
    year: '2026',
    title: 'Editorial for the Special Issue: Nature-Based Solutions to Extreme',
    journal: 'Fire 9(1), 47',
    doi: '10.3390/fire9010047',
    url: 'https://doi.org/10.3390/fire9010047'
  },
  {
    id: 'regos-2026-roadmap',
    authors: 'Regos A',
    year: '2026',
    title: 'A Roadmap for Nature-Based Solutions to Extreme Wildfires',
    journal: 'iScience, 29(1):114364',
    doi: '10.1016/j.isci.2025.114364',
    url: 'https://doi.org/10.1016/j.isci.2025.114364'
  },
  {
    id: 'pais-2025-fire',
    authors: 'Pais S, Campos J, Aquilué N, Brotons Ll, Honrado J.P, Fernandes PM & Regos A',
    year: '2025',
    title: 'The role of fire as a restoration tool for biodiversity and fire regimes in abandoned mountain areas of southern Europe',
    journal: 'Fire Ecology 21: 65',
    doi: '10.1186/s42408-025-00422-y',
    url: 'https://doi.org/10.1186/s42408-025-00422-y'
  },
  {
    id: 'novo-2025-machine',
    authors: 'Novo A, Regos A, Fernández C',
    year: '2025',
    title: 'Machine Learning-Based Predictions of Soil Burn Severity using Spectral and LiDAR Remote Sensing Data',
    journal: 'Forest Ecology and Management. 596:123094',
    doi: '10.1016/j.foreco.2025.123094',
    url: 'https://doi.org/10.1016/j.foreco.2025.123094'
  },
  {
    id: 'plumanns-2025-pathways',
    authors: 'Plumanns-Pouton E, Bakx TRM, Buitenwerf R, Espelta JM, Moreira F, Regos A, Selwyn M & Brotons L.',
    year: '2025',
    title: 'Pathways to restoring fire regimes through rewilding',
    journal: 'Current Biology. 35(13), R670-R686',
    doi: '10.1016/j.cub.2025.04.026',
    url: 'https://doi.org/10.1016/j.cub.2025.04.026'
  },
  {
    id: 'oliveres-2025-path',
    authors: 'Oliveres J, Castellnou M, Castellarnau X, Rosas-Casals M, Brotons L & Duane A',
    year: '2025',
    title: 'The path to strategic fire management planning in the Aran, Pyrenees',
    journal: 'Fire Ecology',
    doi: '10.1186/s42408-024-00348-x',
    url: 'https://doi.org/10.1186/s42408-024-00348-x'
  }
];

export const CONFERENCES = [
  {
    id: 'conf-regos-2025-pt',
    authors: 'Regos A*',
    year: '2025',
    title: 'O uso do fogo como solução baseada na naturaleza: os grandes incêndios florestais em paisagens rurais abandonadas',
    event: 'Ponencia invitada na Conferência “Floresta e Fogos: que futuro?',
    date: '3 de outubro de 2025',
    location: 'Ponte de Lima (Portugal)'
  },
  {
    id: 'conf-regos-2025-gl',
    authors: 'Regos A*',
    year: '2025',
    title: 'Paisaxe, fogo e biodiversidade na reserva da biosfera Gerês-Xurés: pasado, presente e futuro',
    event: 'Ponencia invitada nas Xornadas “Expansión e homoxeneización do espazo forestal: receita para un desastre?” Consello da Cultura Galega',
    date: '20 de octubre de 2025',
    location: 'Santiago de Compostela'
  }
];

export const PODCASTS = [
  {
    id: 'podcast-1',
    title: 'Soluciones basadas en la naturaleza para los incendios extremos',
    platform: 'YouTube',
    videoId: 'YJdK2HwAq9U',
    date: '2025'
  }
];

export const NEWS = [
  {
    id: 'news-faro-vigo-2025',
    source: 'Faro de Vigo',
    date: '10/03/2025',
    title: '«El fuego bien gestionado puede ser clave para prevenir incendios extremos»',
    url: 'https://www.farodevigo.es/galicia/2025/03/10/adrian-regos-fuego-gestionado-clave-prevenir-incendios-115112216.html',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PARTNERS: Partner[] = [
  {
    id: 'mbg',
    name: 'Misión Biológica de Galicia',
    url: 'https://mbg.csic.es/es/',
    description: {
      en: 'The Misión Biológica de Galicia has an excellent research record in the study of the responses of landscapes and the key ecosystem services provided such as carbon or water provisioning to main drivers such as wildfires, accounting for much of the information needed in the development of landscape dynamic models in complex socio-ecological contexts.',
      es: 'La Misión Biológica de Galicia cuenta con una excelente trayectoria investigadora en el estudio de las respuestas de los paisajes y los servicios ecosistémicos clave, como la provisión de carbono o agua, frente a factores como los incendios forestales, aportando gran parte de la información necesaria para el desarrollo de modelos dinámicos del paisaje en contextos socioecológicos complejos.',
      pt: 'A Missão Biológica da Galiza tem um excelente historial de investigação no estudo das respostas das paisagens e dos principais serviços ecossistémicos prestados, como o aprovisionamento de carbono ou de água, aos principais factores como os incêndios florestais, fornecendo grande parte da informação necessária para o desenvolvimento de modelos de dinâmica da paisagem em contextos socioecológicos complexos.',
      gl: 'A Misión Biolóxica de Galicia conta cunha excelente traxectoria investigadora no estudo das respostas das paisaxes e dos servizos ecosistémicos clave, como a provisión de carbono ou auga, fronte a factores como os incendios forestais, achegando gran parte da información necesaria para o desenvolvemento de modelos dinámicos da paisaxe en contextos socioecolóxicos complexos.',
      ca: 'La Missió Biològica de Galícia compta amb una excel·lent trajectòria investigadora en l\'estudi de les respostes dels paisatges i els serveis ecosistèmics clau, com la provisió de carboni o aigua, davant de factors com els incendis forestals, aportant gran part de la informació necessària per al desenvolupament de models dinàmics del paisatge en contextos socioecològics complexos.'
    },
    logo: 'logo-mbg.jpg'
  },
  {
    id: 'creaf',
    name: 'CREAF',
    url: 'https://www.creaf.cat/es',
    description: {
      en: 'The Centre for Ecological Research and Forestry Applications as gained experience in establishing links between landscape dynamics, in terms of composition and configuration of major landscape components and their derived biodiversity responses. This has been possible thanks to developing a spatially explicit landscape model (SELM), aimed at simulating forest dynamics under different fire regimes.',
      es: 'El Centro de Investigación Ecológica y Aplicaciones Forestales ha adquirido experiencia en el establecimiento de vínculos entre la dinámica del paisaje, en términos de composición y configuración de sus componentes principales, y las respuestas de la biodiversidad derivadas. Esto ha sido posible gracias al desarrollo de un modelo de paisaje espacialmente explícito (SELM), destinado a simular la dinámica forestal bajo diferentes regímenes de fuego.',
      pt: 'O Centro de Investigação Ecológica e Aplicações Florestais adquiriu experiência no estabelecimento de ligações entre a dinâmica da paisagem, em termos de composição e configuração dos principais componentes da paisagem e as suas respostas de biodiversidade derivadas. Isto foi possível graças ao desenvolvimento de um modelo de paisagem espacialmente explícito (SELM), destinado a simular a dinâmica florestal sob diferentes regimes de fogo.',
      gl: 'O Centro de Investigación Ecolóxica e Aplicacións Forestais adquiriu experiencia no establecemento de vínculos entre a dinámica da paisaxe, en termos de composición e configuración dos seus compoñentes principais, e as respostas da biodiversidade derivadas. Isto foi posible grazas ao desenvolvemento dun modelo de paisaxe espacialmente explícito (SELM), destinado a simular a dinámica forestal baixo diferentes réximes de lume.',
      ca: 'El Centre de Recerca Ecològica i Aplicacions Forestals ha adquirit experiència en l\'establiment d\'enllaços entre la dinàmica del paisatge, en termes de composició i configuració dels seus components principals, i les respostes de la biodiversitat derivades. Això ha estat possible gràcies al desenvolupament d\'un model de paisatge espacialment explícit (SELM), destinat a simular la dinàmica forestal sota diferents règims de foc.'
    },
    logo: 'CREAF-SO-logo.webp'
  }
];

export const WORK_PACKAGES: WorkPackage[] = [
  {
    id: 'WP1',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1600',
    content: {
      en: {
        title: 'WP1. Understanding and quantifying human control on fire regimes in Mediterranean landscapes',
        description: 'Analyzing the historical and current influence of human activities on fire patterns to better predict future risks.',
        tasks: ['Data Quantification', 'Human Impact Analysis', 'Regime Mapping']
      },
      es: {
        title: 'WP1. Comprender y cuantificar el control humano sobre los regímenes de incendios en paisajes mediterráneos',
        description: 'Analizar la influencia histórica y actual de las actividades humanas en los patrones de fuego para predecir mejor los riesgos futuros.',
        tasks: ['Cuantificación de Datos', 'Análisis de Impacto Humano', 'Mapeo de Regímenes']
      },
      pt: {
        title: 'WP1. Compreender e quantificar o controlo humano sobre os regimes de fogo em paisagens mediterrânicas',
        description: 'Analisar a influência histórica e atual das actividades humanas nos padrões de fogo para prever melhor os riscos futuros.',
        tasks: ['Quantificação de Datos', 'Análise de Impacto Humano', 'Mapeamento de Regimes']
      },
      gl: {
        title: 'WP1. Comprender e cuantificar o control humano sobre os réximes de incendios en paisaxes mediterráneas',
        description: 'Analizar a influencia histórica e actual das actividades humanas nos patróns de lume para predicir mellor os riscos futuros.',
        tasks: ['Cuantificación de Datos', 'Análise de Impacto Humano', 'Mapeo de Réximes']
      },
      ca: {
        title: 'WP1. Comprendre i quantificar el control humà sobre els règimes d\'incendis en paisatges mediterranis',
        description: 'Analitzar la influència històrica i actual de les activitats humanes en els patrons de foc per predir millor els riscos futurs.',
        tasks: ['Quantificació de Dades', 'Anàlisi d\'Impacte Humà', 'Mapatge de Règims']
      }
    }
  },
  {
    id: 'WP2',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600',
    content: {
      en: {
        title: 'WP2. Identifying the role of ecological processes behind biodiversity responses to fire in the restoration of ecological fire regimes',
        description: 'Studying how different species and ecosystems react to fire to restore natural balance and resilience.',
        tasks: ['Ecological Processes', 'Biodiversity Monitoring', 'Restoration Science']
      },
      es: {
        title: 'WP2. Identificar el papel de los procesos ecológicos detrás de las respuestas de la biodiversidad al fuego en la restauración de regímenes de fuego ecológicos',
        description: 'Estudiar cómo reaccionan las diferentes especies y ecosistemas al fuego para restaurar el equilibrio natural.',
        tasks: ['Procesos Ecológicos', 'Monitoreo de Biodiversidad', 'Ciencia de Restauración']
      },
      pt: {
        title: 'WP2. Identificar o papel dos procesos ecológicos por trás das respostas da biodiversidade ao fogo na restauração de regimes de fogo ecológicos',
        description: 'Estudar como diferentes espécies e ecossistemas reagem ao fogo para restaurar el equilibrio natural.',
        tasks: ['Processos Ecológicos', 'Monitorização da Biodiversidade', 'Ciência da Restauração']
      },
      gl: {
        title: 'WP2. Identificar o papel dos procesos ecolóxicos detrás das respostas da biodiversidade ao lume na restauración de réximes de lume ecolóxicos',
        description: 'Estudar como reaccionan as diferentes especies e ecosistemas ao lume para restaurar o equilibrio natural e a resiliencia.',
        tasks: ['Procesos Ecolóxicos', 'Monitoreo de Biodiversidade', 'Ciencia de Restauración']
      },
      ca: {
        title: 'WP2. Identificar el paper dels processos ecològics darrere de les respostes de la biodiversitat al foc en la restauració de règims de foc ecològics',
        description: 'Estudiar com reaccionen les diferents espècies i ecosistemes al foc per restaurar l\'equilibri natural i la resiliència.',
        tasks: ['Processos Ecològics', 'Monitoratge de Biodiversitat', 'Ciència de Restauració']
      }
    }
  },
  {
    id: 'WP3',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1600',
    content: {
      en: {
        title: 'WP3. Using the Nature Futures Framework (NFF) to guide the future potential of ecological fire regimes as NbS to extreme wildfires',
        description: 'Applying global frameworks to develop nature-based solutions that transform fire from a threat into a management tool.',
        tasks: ['NFF Framework', 'Nature-based Solutions', 'Strategic Planning']
      },
      es: {
        title: 'WP3. Uso del Nature Futures Framework (NFF) para guiar el potencial futuro de los regímenes de fuego ecológicos como NbS ante incendios extremos',
        description: 'Aplicar marcos globales para desarrollar soluciones basadas en la naturaleza que transformen el fuego en una herramienta de gestión.',
        tasks: ['Marco NFF', 'Soluciones Basadas en Naturaleza', 'Planificación Estratégica']
      },
      pt: {
        title: 'WP3. Utilização do Nature Futures Framework (NFF) para guiar o potencial futuro dos regimes de fogo ecológicos como NbS perante incêndios extremos',
        description: 'Aplicar estruturas globais para desenvolver soluções baseadas na naturaleza que transformem o fogo numa ferramenta de gestão.',
        tasks: ['Estrutura NFF', 'Soluções Baseadas na Natureza', 'Planeamento Estratégico']
      },
      gl: {
        title: 'WP3. Uso do Nature Futures Framework (NFF) para guiar o potencial futuro dos réximes de lume ecolóxicos como NbS ante incendios extremos',
        description: 'Aplicar marcos globais para desenvolver solucións baseadas na natureza que transformen o lume dunha ameaza nunha ferramenta de xestión.',
        tasks: ['Marco NFF', 'Solucións Baseadas na Natureza', 'Planificación Estratéxica']
      },
      ca: {
        title: 'WP3. Ús del Nature Futures Framework (NFF) per guiar el potencial futur dels règims de foc ecològics com a NbS davant d\'incendis extrems',
        description: 'Aplicar marcs globals per desenvolupar solucions basades en la natura que transformin el foc d\'una amenaça en una eina de gestió.',
        tasks: ['Marc NFF', 'Solucions Basades en la Natura', 'Planificació Estratègica']
      }
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Dr. Elena Vance',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    content: {
      en: { role: 'Project Director', description: 'Expert in forest ecology with 20 years of experience in fire behavior modeling.' },
      es: { role: 'Directora del Proyecto', description: 'Experta en ecología forestal con 20 años de experiencia en modelado del comportamiento del fuego.' },
      pt: { role: 'Directora do Projeto', description: 'Especialista em ecologia florestal com 20 anos de experiência em modelagem do comportamento do fogo.' },
      gl: { role: 'Directora do Proxecto', description: 'Experta en ecoloxía forestal con 20 anos de experiencia en modelado do comportamento do lume.' },
      ca: { role: 'Directora del Projecte', description: 'Experta en ecologia forestal amb 20 anys d\'experiència en modelatge del comportament del foc.' }
    }
  }
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: { abstract: 'Abstract', workPackages: 'Work Packages', outputs: 'Outputs', team: 'Team', contact: 'Contact', language: 'Language' },
    home: {
      hero_sub: 'Proactive & Sustainable Management',
      hero_title: 'THE RESFIRE PROJECT',
      hero_desc_p1: 'The RESFIRE project aims to contribute to the development of proactive and sustainable fire management strategies that not only mitigate the risks of destructive wildfires but also foster the health and resilience of Mediterranean ecosystems and their biodiversity.',
      hero_desc_p2: 'The emphasis is on recognizing the ecological importance of fire and integrating this understanding into effective nature-based solutions for fire-prone ecosystems.',
      hero_desc_p3: 'This restoration of fire regimes can be achieved by relaxing fire suppression in these systems so that fire in non-adverse meteorological conditions can recover its positive impact.',
      cta_primary: 'Scientific Abstract',
      cta_secondary: 'View Roadmap',
    },
    abstract: {
      title: 'Project Abstract',
      p1: 'Climate change has fundamentally altered the wildfire regime globally. The Resfire Project represents a paradigm shift from reactive suppression to proactive, resilient landscapes using data-driven intelligence.',
      challenge_title: 'The Challenge',
      challenge_desc: 'Rising temperatures have created "mega-fires" that exceed human suppression capacity. Fuel accumulation due to rural abandonment has made forests highly volatile.',
      solution_title: 'Our Solution',
      solution_desc: 'Integrating deep learning for predictive modeling, IoT sensor nodes for monitoring, and adaptive forest management to restore mosaic landscapes.',
      p2: 'Our mission is to treat the forest as a living, dynamic system that can be managed for long-term resilience through science.',
    },
    work_packages: {
      title: 'Strategy',
      subtitle: 'The project is organized into three strategic work packages designed to restore resilient fire regimes.',
      milestones: 'Focus Areas'
    },
    outputs: {
      title: 'Project Outputs',
      subtitle: 'Discover our scientific contributions, media presence, and latest news.',
      publications: 'Scientific Publications',
      podcasts: 'Podcasts & Media',
      news: 'News',
      view_all: 'Explore category'
    },
    team: {
      title: 'The Team',
      subtitle: 'Resfire is a collaborative effort between leading research institutions in Galicia and Catalonia.',
      partners: 'Consortium Partners'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have questions about our research or want to collaborate? Our team is ready to connect.',
      hub: 'Innovation Hub',
      address: 'Forestry Science Dept, Building A, University of Resilience, EU',
    },
    assistant: {
      welcome: 'Hello! I am the Resfire Assistant. How can I help you today with wildfire prevention or project information?',
      placeholder: 'Ask about fire safety...',
      loading: 'Analyzing knowledge base...',
    }
  },
  es: {
    nav: { abstract: 'Abstract', workPackages: 'Work Packages', outputs: 'Outputs', team: 'Equipo', contact: 'Contacto', language: 'Idioma' },
    home: {
      hero_sub: 'Gestión Proactiva y Sostenible',
      hero_title: 'EL PROYECTO RESFIRE',
      hero_desc_p1: 'El proyecto RESFIRE tiene como objetivo contribuir al desarrollo de estrategias de gestión del fuego proactivas y sostenibles que no solo mitiguen los riesgos de incendios forestales destructivos, sino que también fomenten la salud y la resiliencia de los ecosistemas mediterráneos y su biodiversidad.',
      hero_desc_p2: 'El énfasis se pone en reconocer la importancia ecológica del fuego e integrar esta comprensión en soluciones efectivas basadas en la naturaleza.',
      hero_desc_p3: 'Esta restauración se logra relajando la supresión de incendios para que el fuego, en condiciones meteorológicas no adversas, recupere su impacto positivo.',
      cta_primary: 'Resumen Científico',
      cta_secondary: 'Hoja de Ruta',
    },
    abstract: {
      title: 'Resumen del Proyecto',
      p1: 'El cambio climático ha alterado radicalmente el régimen de incendios. Resfire representa un cambio de paradigma: de la supresión reactiva a la creación de paisajes proactivos y resilientes.',
      challenge_title: 'El Desafío',
      challenge_desc: 'El aumento de temperaturas ha creado "mega-incendios" que superan la capacidad humana de extinción. La acumulación de biomasa es una bomba de relojería.',
      solution_title: 'La Solución',
      solution_desc: 'Integración de aprendizaje profundo para modelos predictivos, sensores IoT para monitoreo y gestión forestal adaptativa.',
      p2: 'Nuestra misión es tratar el bosque como un sistema vivo y dinámico que puede ser gestionado mediante la ciencia para su resiliencia a largo plazo.',
    },
    work_packages: {
      title: 'Estrategia',
      subtitle: 'El proyecto se organiza en tres paquetes de trabajo estratégicos diseñados para restaurar regímenes de fuego resilientes.',
      milestones: 'Áreas de Enfoque'
    },
    outputs: {
      title: 'Resultados',
      subtitle: 'Descubre nuestras contribuciones científicas, presencia en medios y últimas noticias.',
      publications: 'Publicaciones Científicas',
      podcasts: 'Podcasts y Videos',
      news: 'Noticias',
      view_all: 'Explorar categoría'
    },
    team: {
      title: 'El Equipo',
      subtitle: 'Resfire es un esfuerzo colaborativo entre instituciones de investigación líderes en Galicia y Cataluña.',
      partners: 'Socios del Consorcio'
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes preguntas sobre nuestra investigación? Nuestro equipo está listo para colaborar.',
      hub: 'Sede de Innovación',
      address: 'Depto. de Ciencias Forestales, Edificio A, Universidad de la Resiliencia, UE',
    },
    assistant: {
      welcome: '¡Hola! Soy el asistente de Resfire. ¿Cómo puedo ayudarte hoy con la prevención de incendios o información del proyecto?',
      placeholder: 'Pregunta sobre seguridad...',
      loading: 'Analizando base de conocimientos...',
    }
  },
  pt: {
    nav: { abstract: 'Abstract', workPackages: 'Pacotes', outputs: 'Outputs', team: 'Equipa', contact: 'Contacto', language: 'Idioma' },
    home: {
      hero_sub: 'Gestão Proativa e Sustentável',
      hero_title: 'O PROJETO RESFIRE',
      hero_desc_p1: 'O proyecto RESFIRE visa contribuir para o desenvolvimento de estratégias de gestão de incêndios proativas e sustentáveis.',
      hero_desc_p2: 'A ênfase é colocada no reconhecimento da importância ecológica do fogo e na integração desta compreensão em soluções baseadas na naturaleza.',
      hero_desc_p3: 'Esta restauração pode ser alcançada relaxando a supressão de incêndios para que o fogo recupere o seu impacto positivo.',
      cta_primary: 'Resumo Científico',
      cta_secondary: 'Plano de Ação',
    },
    abstract: {
      title: 'Resumo do Proyecto',
      p1: 'As alterações climáticas alteraram o regime de incêndios. O Resfire representa uma mudança para paisagens proativas e resilientes.',
      challenge_title: 'O Desafio',
      challenge_desc: 'O aumento das temperaturas criou "mega-incêndios" que excedem a capacidade humana de supressão.',
      solution_title: 'A Solução',
      solution_desc: 'Integração de aprendizagem profunda, sensores IoT e gestão florestal adaptativa.',
      p2: 'Nossa missão é tratar a floresta como um sistema dinâmico gerido pela ciência.',
    },
    work_packages: {
      title: 'Estrategia',
      subtitle: 'O projeto está organizado em três pacotes de trabalho estratégicos concebidos para restaurar regimes de fogo resilientes.',
      milestones: 'Áreas de Foco'
    },
    outputs: {
      title: 'Resultados',
      subtitle: 'Descubra nossas contribuições científicas, presença na mídia e últimas noticias.',
      publications: 'Publicações Científicas',
      podcasts: 'Podcasts e Vídeos',
      news: 'Noticias',
      view_all: 'Explorar categoria'
    },
    team: {
      title: 'A Equipa',
      subtitle: 'Resfire é um esforço colaborativo entre instituições de investigação líderes na Galiza e na Catalunha.',
      partners: 'Parceiros do Consórcio'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Tem dúvidas sobre a nossa investigação? A nossa equipa está pronta para colaborar.',
      hub: 'Centro de Inovação',
      address: 'Depto. de Ciencias Forestales, Edifício A, Universidade da Resiliência, UE',
    },
    assistant: {
      welcome: 'Olá! Sou o assistente da Resfire. Como posso ajudá-lo hoje?',
      placeholder: 'Pergunte sobre segurança...',
      loading: 'Analisando...',
    }
  },
  gl: {
    nav: { abstract: 'Abstract', workPackages: 'Work Packages', outputs: 'Outputs', team: 'Equipo', contact: 'Contacto', language: 'Idioma' },
    home: {
      hero_sub: 'Xestión Proactiva e Sostible',
      hero_title: 'O PROXECTO RESFIRE',
      hero_desc_p1: 'O proxecto RESFIRE ten como obxectivo contribuír ao desenvolvemento de estratexias de xestión do lume proactivas e sostibles que non só mitiguen os riscos de incendios forestais destrutivos, senón que tamén fomenten a saúde e a resiliencia dos ecosistemas mediterráneos e a súa biodiversidade.',
      hero_desc_p2: 'Ponse a énfase en recoñecer a importancia ecolóxica do lume e integrar este coñecemento en solucións efectivas baseadas na natureza para ecosistemas propensos ao lume.',
      hero_desc_p3: 'Esta restauración dos réximes de lume pode acadarse relaxando a supresión de incendios nestes sistemas para que o lume, en condicións meteorolóxicas non adversas, recupere o seu impacto positivo.',
      cta_primary: 'Resumo Científico',
      cta_secondary: 'Folla de Ruta',
    },
    abstract: {
      title: 'Resumo do Proxecto',
      p1: 'O cambio climático alterou fundamentalmente o réxime de incendios forestais a nivel mundial. O Proxecto Resfire representa un cambio de paradigma dende a supresión reactiva cara a paisaxes proactivas e resilientes usando intelixencia baseada en datos.',
      challenge_title: 'O Desafío',
      challenge_desc: 'O aumento das temperaturas creou "mega-incendios" que superan a capacidade humana de supresión. A acumulación de combustible polo abandono rural fixo que os bosques sexan altamente volátiles.',
      solution_title: 'A Nosa Solución',
      solution_desc: 'Integración de aprendizaxe profundo para modelos preditivos, nodos de sensores IoT para o seguimento e xestión forestal adaptativa para restaurar paisaxes en mosaico.',
      p2: 'A nosa misión é tratar o bosque como un sistema vivo e dinámico que pode ser xestionado para acadar resiliencia a longo prazo a través da ciencia.',
    },
    work_packages: {
      title: 'Estratexia',
      subtitle: 'O proxecto organízase en tres paquetes de traballo estratéxicos deseñados para restaurar réximes de lume resilientes.',
      milestones: 'Áreas de Enfoque'
    },
    outputs: {
      title: 'Resultados',
      subtitle: 'Descubre as nosas contribucións científicas, presenza en medios e últimas noticias.',
      publications: 'Publicacións Científicas',
      podcasts: 'Podcasts e Medios',
      news: 'Noticias',
      view_all: 'Explorar categoría'
    },
    team: {
      title: 'O Equipo',
      subtitle: 'Resfire é un efrozo colaborativo entre institucións de investigación líderes en Galicia e Cataluña.',
      partners: 'Socios do Consorcio'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Tes preguntas sobre a nosa investigación ou queres colaborar? O noso equipo está listo para conectar.',
      hub: 'Hub de Innovación',
      address: 'Depto. de Ciencias Forestais, Edificio A, Universidade da Resiliencia, UE',
    },
    assistant: {
      welcome: 'Ola! Son o asistente de Resfire. En que podo axudarche hoxe coa prevención de incendios ou información do proxecto?',
      placeholder: 'Pregunta sobre seguridade...',
      loading: 'Analizando base de coñecemento...',
    }
  },
  ca: {
    nav: { abstract: 'Abstract', workPackages: 'Work Packages', outputs: 'Outputs', team: 'Equip', contact: 'Contacte', language: 'Idioma' },
    home: {
      hero_sub: 'Gestió Proactiva i Sostenible',
      hero_title: 'EL PROJECTE RESFIRE',
      hero_desc_p1: 'El projecte RESFIRE té com a objectiu contribuir al desenvolupament d\'estratègies de gestió del foc proactives i sostenibles que no només mitiguin els riscos d\'incendis forestals destructius, sinó que també fomentin la salut i la resiliència dels ecosistemes mediterranis i la seva biodiversitat.',
      hero_desc_p2: 'L\'èmfasi es posa en reconèixer l\'importància ecològica del foc i integrar aquesta comprensió en solucions efectives basades en la natura per a ecosistemes propensos al foc.',
      hero_desc_p3: 'Aquesta restauració dels règims de foc es pot aconseguir relaxant la supressió d\'incendis en aquests sistemes perquè el foc, en condicions meteorològiques no adversas, recuperi el seu impacte positiu.',
      cta_primary: 'Resum Científic',
      cta_secondary: 'Full de Ruta',
    },
    abstract: {
      title: 'Resum del Projecte',
      p1: 'El canvi climàtic ha alterat fonamentalment el règim d\'incendis forestals a nivell mundial. El Projecte Resfire representa un canvi de paradigma des de la supressió reactiva cap a paisatges proactius i resilients utilitzant intel·ligència basada en dades.',
      challenge_title: 'El Desafiament',
      challenge_desc: 'L\'augment de les temperatures ha creat "mega-incendis" que superen la capacitat humana de supressió. L\'acumulació de combustible degut a l\'abandonament rural ha fet que els boscos siguin altament volàtils.',
      solution_title: 'La Nostra Solució',
      solution_desc: 'Integració d\'aprenentatge profund per a models predictivos, nodes de sensors IoT per al seguiment i gestió forestal adaptativa per restaurar paisatges en mosaic.',
      p2: 'La nostra missió és tractar el bosc com un sistema viu i dinàmic que pot ser gestionat per a la resiliència a llarg termini a través de la ciència.',
    },
    work_packages: {
      title: 'Estratègia',
      subtitle: 'El projecte s\'organitza en tres paquets de treball estratègics dissenyats per restaurar règims de foc resilients.',
      milestones: 'Àrees d\'Enfoque'
    },
    outputs: {
      title: 'Resultats del Projecte',
      subtitle: 'Descobreix les nostres contribucions científiques, presència en mitjans i darreres notícies.',
      publications: 'Publicacions Científiques',
      podcasts: 'Podcasts i Mitjans',
      news: 'Notícies',
      view_all: 'Explorar categoria'
    },
    team: {
      title: 'L\'Equip',
      subtitle: 'Resfire és un esforç col·laboratiu entre institucions de recerca líders a Galícia i Catalunya.',
      partners: 'Socis del Consorci'
    },
    contact: {
      title: 'Contacte',
      subtitle: 'Tens preguntes sobre la nostra recerca o vols col·laborar? El nostre equip està a punt per connectar.',
      hub: 'Hub d\'Innovació',
      address: 'Depto. de Ciències Forestals, Edifici A, Universitat de la Resiliència, UE',
    },
    assistant: {
      welcome: 'Hola! Soc l\'assistent de Resfire. En què et puc ajudar avui amb la prevenció d\'incendis o informació del projecte?',
      placeholder: 'Pregunta sobre seguretat...',
      loading: 'Analitzant base de coneixement...',
    }
  }
};
