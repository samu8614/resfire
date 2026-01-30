
import { WorkPackage, TeamMember } from './types';

export const WORK_PACKAGES: WorkPackage[] = [
  {
    id: 'WP1',
    icon: 'fa-satellite',
    color: 'bg-emerald-600',
    content: {
      en: {
        title: 'Data Collection & Risk Prediction',
        description: 'Developing high-resolution satellite imagery models and IoT sensor networks to predict ignition risks in real-time.',
        tasks: ['Historical fire data analysis', 'Installation of thermal IoT nodes', 'AI model training for risk mapping']
      },
      es: {
        title: 'Recogida de Datos y Predicción de Riesgos',
        description: 'Desarrollo de modelos de imágenes satelitales de alta resolución y redes de sensores IoT para predecir riesgos de ignición en tiempo real.',
        tasks: ['Análisis de datos históricos de incendios', 'Instalación de nodos IoT térmicos', 'Entrenamiento de modelos de IA para mapas de riesgo']
      },
      pt: {
        title: 'Coleta de Dados e Predição de Riscos',
        description: 'Desenvolvimento de modelos de imagens de satélite de alta resolução e redes de sensores IoT para prever riscos de ignição em tempo real.',
        tasks: ['Análise de dados históricos de incêndios', 'Instalação de nós IoT térmicos', 'Treinamento de modelos de IA para mapeamento de risco']
      }
    }
  },
  {
    id: 'WP2',
    icon: 'fa-tree',
    color: 'bg-green-700',
    content: {
      en: {
        title: 'Sustainable Forest Management',
        description: 'Implementing adaptive silviculture techniques to reduce fuel accumulation and create biological firebreaks.',
        tasks: ['Strategic biomass thinning', 'Native species reforestation', 'Controlled grazing integration']
      },
      es: {
        title: 'Gestión Forestal Sostenible',
        description: 'Implementación de técnicas de silvicultura adaptativa para reducir la acumulación de combustible y crear cortafuegos biológicos.',
        tasks: ['Clareo estratégico de biomasa', 'Reforestación con especies nativas', 'Integración de pastoreo controlado']
      },
      pt: {
        title: 'Gestão Florestal Sustentável',
        description: 'Implementação de técnicas de silvicultura adaptativa para reduzir a acumulação de combustível e criar aceiros biológicos.',
        tasks: ['Desbaste estratégico de biomassa', 'Reflorestação com espécies nativas', 'Integração de pastoreio controlado']
      }
    }
  },
  {
    id: 'WP3',
    icon: 'fa-drone',
    color: 'bg-orange-600',
    content: {
      en: {
        title: 'Technological Suppression Tools',
        description: 'Enhancing the efficiency of early response teams with autonomous drone swarms and precision chemical retardants.',
        tasks: ['Drone fleet optimization', 'Eco-friendly retardant testing', 'Mobile response coordination apps']
      },
      es: {
        title: 'Herramientas Tecnológicas de Supresión',
        description: 'Mejora de la eficiencia de los equipos de respuesta temprana con enjambres de drones autónomos y retardantes químicos de precisión.',
        tasks: ['Optimización de flotas de drones', 'Pruebas de retardantes ecológicos', 'Apps de coordinación de respuesta móvil']
      },
      pt: {
        title: 'Ferramentas Tecnológicas de Supressão',
        description: 'Melhoria da eficiência das equipas de resposta rápida com enxames de drones autónomos e retardadores químicos de precisão.',
        tasks: ['Otimização de frotas de drones', 'Testes de retardadores ecológicos', 'Aplicações de coordenação de resposta móvel']
      }
    }
  },
  {
    id: 'WP4',
    icon: 'fa-users',
    color: 'bg-blue-600',
    content: {
      en: {
        title: 'Community Awareness & Policy',
        description: 'Engaging local populations in fire-smart behavior and advising policy makers on wildland-urban interface (WUI) regulations.',
        tasks: ['Citizen science workshops', 'Legislative policy drafting', 'Crisis communication protocols']
      },
      es: {
        title: 'Concienciación Comunitaria y Política',
        description: 'Involucrar a las poblaciones locales en comportamientos inteligentes frente al fuego y asesorar a los legisladores sobre regulaciones de la interfaz urbano-forestal (WUI).',
        tasks: ['Talleres de ciencia ciudadana', 'Redacción de políticas legislativas', 'Protocolos de comunicación de crisis']
      },
      pt: {
        title: 'Consciencialização Comunitária e Política',
        description: 'Envolver as populações locais em comportamentos inteligentes perante o fogo e aconselhar os legisladores sobre regulamentações da interface urbano-florestal (WUI).',
        tasks: ['Workshops de ciência cidadã', 'Redação de políticas legislativas', 'Protocolos de comunicação de crisis']
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
      pt: { role: 'Diretora do Projeto', description: 'Especialista em ecologia florestal com 20 anos de experiência em modelagem do comportamento do fogo.' }
    }
  },
  {
    id: 'm2',
    name: 'Dr. Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    content: {
      en: { role: 'AI Lead Researcher', description: 'Specialized in deep learning and satellite computer vision for environmental protection.' },
      es: { role: 'Investigador Principal de IA', description: 'Especializado en aprendizaje profundo y visión artificial satelital para la protección ambiental.' },
      pt: { role: 'Investigador Principal de IA', description: 'Especializado em deep learning e visão computacional por satélite para proteção ambiental.' }
    }
  },
  {
    id: 'm3',
    name: 'Ing. Sofia Mendes',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    content: {
      en: { role: 'IoT Infrastructure Specialist', description: 'Designing low-power sensor networks for extreme forest conditions.' },
      es: { role: 'Especialista en Infraestructura IoT', description: 'Diseño de redes de sensores de bajo consumo para condiciones forestales extremas.' },
      pt: { role: 'Especialista em Infraestrutura IoT', description: 'Projeto de redes de sensores de baixo consumo para condições florestais extremas.' }
    }
  },
  {
    id: 'm4',
    name: 'Julian Carter',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    content: {
      en: { role: 'Community Liaison', description: 'Connecting scientific findings with local fire departments and rural communities.' },
      es: { role: 'Enlace Comunitario', description: 'Conectando hallazgos científicos con departamentos de bomberos locales y comunidades rurales.' },
      pt: { role: 'Ligação Comunitária', description: 'Ligando descobertas científicas a departamentos de bombeiros locais e comunidades rurais.' }
    }
  }
];

export const NEWS_ARTICLES = [
  {
    date: '2024-05-15',
    tag: 'AI Research',
    content: {
      en: { title: 'New Satellite Model Achieves 92% Accuracy', desc: 'Our team in Lisbon published a breakthrough paper on pre-ignition heat signatures.' },
      es: { title: 'Nuevo Modelo Satelital con 92% de Precisión', desc: 'Nuestro equipo en Lisboa publicó un artículo revolucionario sobre firmas térmicas pre-ignición.' },
      pt: { title: 'Novo Modelo de Satélite com 92% de Precisão', desc: 'A nossa equipa em Lisboa publicou um artigo revolucionário sobre assinaturas de calor pré-ignição.' }
    }
  },
  {
    date: '2024-04-02',
    tag: 'Ecology',
    content: {
      en: { title: 'Pilot Reforestation in Canada', desc: 'Over 5,000 fire-resistant saplings planted as part of WP2 field trials.' },
      es: { title: 'Reforestación Piloto en Canadá', desc: 'Más de 5,000 brotes resistentes al fuego plantados como parte de las pruebas del WP2.' },
      pt: { title: 'Reflorestação Piloto no Canadá', desc: 'Mais de 5.000 rebentos resistentes ao fogo plantados como parte dos testes de campo do WP2.' }
    }
  },
  {
    date: '2024-02-28',
    tag: 'Community',
    content: {
      en: { title: 'Mobile App Beta Launch', desc: 'Local fire departments are now testing our real-time coordination tool.' },
      es: { title: 'Lanzamiento Beta de la App Móvil', desc: 'Los departamentos de bomberos locales ya prueban nuestra herramienta de coordinación.' },
      pt: { title: 'Lançamento Beta da App Móvel', desc: 'Os departamentos de bombeiros locais estão agora a testar a nossa ferramenta de coordenação.' }
    }
  }
];

export const TRANSLATIONS = {
  en: {
    nav: { home: 'Home', abstract: 'Abstract', workPackages: 'Work Packages', team: 'Team', contact: 'Contact', language: 'Language' },
    home: {
      hero_sub: 'Resilient Forest Management',
      hero_title: 'Protecting Forests For The Future',
      hero_desc: 'Resfire combines cutting-edge AI technology, sustainable ecology, and local wisdom to drastically reduce wildfire occurrence and impact.',
      cta_primary: 'Discover Research',
      cta_secondary: 'Our Strategy',
      feat1_title: 'Preventive Action',
      feat1_desc: 'Early detection through thermal satellite imaging and sensor mesh networks reduces ignition spread by up to 70%.',
      feat2_title: 'Eco-Management',
      feat2_desc: 'Promoting sustainable fuel loads and resilient ecosystem biodiversity creates natural fire suppression buffers.',
      feat3_title: 'Rapid Tech',
      feat3_desc: 'Deploying specialized autonomous suppression systems to difficult-to-reach terrains during the critical first hour.',
      news_title: 'Latest Research',
      news_btn: 'View All Updates'
    },
    abstract: {
      title: 'Project Abstract',
      p1: 'Climate change has fundamentally altered the wildfire regime globally. In Mediterranean and boreal regions, traditional fire suppression is no longer sufficient. The Resfire Project represents a paradigm shift from reactive suppression to proactive, resilient landscapes.',
      challenge_title: 'The Challenge',
      challenge_desc: 'Rising temperatures and prolonged droughts have created "mega-fires" that exceed human suppression capacity. Fuel accumulation due to rural abandonment has made forests highly volatile.',
      solution_title: 'Our Solution',
      solution_desc: 'Integrating deep learning for predictive fire-weather modeling, IoT sensor nodes for micro-climate monitoring, and adaptive forest management to restore mosaic landscapes.',
      p2: 'Our research spans three years and five pilot sites across Europe and North America. By collaborating with local fire services, forestry experts, and tech innovators, we are building a holistic framework that treats the forest as a living, dynamic system that can be managed for resilience.',
    },
    work_packages: {
      title: 'Work Packages',
      subtitle: 'The project is organized into four core strategic pillars, each focusing on a critical aspect of wildfire reduction.',
      milestones: 'Key Milestones'
    },
    team: {
      title: 'Our Expert Team',
      subtitle: 'A multidisciplinary group of researchers, engineers, and conservationists working together to protect our ecosystems.'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions about our research or want to collaborate? Our team is ready to connect with researchers, policy makers, and technology partners.',
      hub: 'Innovation Hub',
      address: 'Forestry Science Dept, Building A, University of Resilience, EU',
      email: 'General Inquiries',
      press: 'Press & Media',
      quote: '"Our mission is to ensure that no community stands alone against the flames. Science and technology are our greatest shields."',
      director: '— Dr. Elena Vance, Project Director',
      form_first: 'First Name',
      form_last: 'Last Name',
      form_email: 'Email Address',
      form_org: 'Organization',
      form_msg: 'Message',
      form_btn: 'Send Message',
    },
    assistant: {
      welcome: 'Hello! I am the Resfire Assistant. How can I help you today with wildfire prevention or project information?',
      placeholder: 'Ask about fire safety...',
      loading: 'Analyzing knowledge base...',
    }
  },
  es: {
    nav: { home: 'Inicio', abstract: 'Resumen', workPackages: 'Paquetes', team: 'Equipo', contact: 'Contacto', language: 'Idioma' },
    home: {
      hero_sub: 'Gestión Forestal Resiliente',
      hero_title: 'Protegiendo los Bosques Para El Futuro',
      hero_desc: 'Resfire combina tecnología de IA de vanguardia, ecología sostenible y sabiduría local para reducir drásticamente la aparición e impacto de los incendios forestales.',
      cta_primary: 'Descubrir Investigación',
      cta_secondary: 'Nuestra Estrategia',
      feat1_title: 'Acción Preventiva',
      feat1_desc: 'La detección temprana a través de imágenes térmicas por satélite y redes de sensores reduce la propagación de incendios hasta en un 70%.',
      feat2_title: 'Eco-Gestión',
      feat2_desc: 'Promover cargas de combustible sostenibles y biodiversidad resiliente crea barreras naturales de supresión.',
      feat3_title: 'Tecnología Rápida',
      feat3_desc: 'Despliegue de sistemas de supresión autónomos especializados en terrenos de difícil acceso durante la primera hora crítica.',
      news_title: 'Últimas Investigaciones',
      news_btn: 'Ver todas las actualizaciones'
    },
    abstract: {
      title: 'Resumen del Proyecto',
      p1: 'El cambio climático ha alterado fundamentalmente el régimen de incendios forestales a nivel mundial. En las regiones mediterráneas y boreales, la supresión tradicional ya no es suficiente. El Proyecto Resfire representa un cambio de paradigma hacia paisajes proactivos y resilientes.',
      challenge_title: 'El Desafío',
      challenge_desc: 'El aumento de las temperaturas y las sequías prolongadas han creado "mega-incendios" que superan la capacidad humana. La acumulación de combustible por el abandono rural ha vuelto los bosques altamente volátiles.',
      solution_title: 'Nuestra Solución',
      solution_desc: 'Integración de aprendizaje profundo para modelos predictivos, nodos de sensores IoT para monitoreo microclimático y gestión forestal adaptativa.',
      p2: 'Nuestra investigación abarca tres años y cinco sitios piloto en Europa y América del Norte. Colaborando con servicios de bomberos y expertos forestales, construimos un marco holístico que trata el bosque como un sistema vivo.',
    },
    work_packages: {
      title: 'Paquetes de Trabajo',
      subtitle: 'El proyecto se organiza en cuatro pilares estratégicos básicos, cada uno centrado en un aspecto crítico de la reducción de incendios.',
      milestones: 'Hitos Clave'
    },
    team: {
      title: 'Nuestro Equipo de Expertos',
      subtitle: 'Un grupo multidisciplinar de investigadores, ingenieros y conservacionistas trabajando juntos para proteger nuestros ecosistemas.'
    },
    contact: {
      title: 'Contacta con Nosotros',
      subtitle: '¿Tienes preguntas sobre nuestra investigación o quieres colaborar? Nuestro equipo está listo para conectar con investigadores y socios tecnológicos.',
      hub: 'Centro de Innovación',
      address: 'Depto. de Ciencias Forestales, Edificio A, Universidad de la Resiliencia, UE',
      email: 'Consultas Generales',
      press: 'Prensa y Medios',
      quote: '"Nuestra misión es asegurar que ninguna comunidad esté sola ante las llamas. La ciencia y la tecnología son nuestros mayores escudos."',
      director: '— Dra. Elena Vance, Directora del Proyecto',
      form_first: 'Nombre',
      form_last: 'Apellidos',
      form_email: 'Correo Electrónico',
      form_org: 'Organización',
      form_msg: 'Mensaje',
      form_btn: 'Enviar Mensaje',
    },
    assistant: {
      welcome: '¡Hola! Soy el asistente de Resfire. ¿Cómo puedo ayudarte hoy con la prevención de incendios o información del proyecto?',
      placeholder: 'Pregunta sobre seguridad contra incendios...',
      loading: 'Analizando base de conocimientos...',
    }
  },
  pt: {
    nav: { home: 'Início', abstract: 'Resumo', workPackages: 'Pacotes', team: 'Equipa', contact: 'Contacto', language: 'Idioma' },
    home: {
      hero_sub: 'Gestão Florestal Resiliente',
      hero_title: 'Protegendo as Florestas Para O Futuro',
      hero_desc: 'Resfire combina tecnologia de IA de ponta, ecologia sustentável e sabedoria local para reduzir drasticamente a ocorrência e o impacto de incêndios florestais.',
      cta_primary: 'Descobrir Investigação',
      cta_secondary: 'Nossa Estratégia',
      feat1_title: 'Ação Preventiva',
      feat1_desc: 'A deteção precoce através de imagens térmicas de satélite e redes de sensores reduz a propagação de incêndios em até 70%.',
      feat2_title: 'Eco-Gestão',
      feat2_desc: 'Promover cargas de combustível sustentáveis e biodiversidade resiliente cria barreiras naturais de supressão.',
      feat3_title: 'Tecnologia Rápida',
      feat3_desc: 'Implementação de sistemas de supressão autónomos especializados em terrenos de difícil acesso durante a primeira hora crítica.',
      news_title: 'Últimas Pesquisas',
      news_btn: 'Ver todas as atualizações'
    },
    abstract: {
      title: 'Resumo do Projeto',
      p1: 'As alterações climáticas alteraram fundamentalmente o regime de incêndios florestais a nível mundial. Nas regiões mediterrânicas e boreais, a supressão tradicional já não é suficiente. O Projeto Resfire representa uma mudança de paradigma para paisagens proativas e resilientes.',
      challenge_title: 'O Desafio',
      challenge_desc: 'O aumento das temperaturas e as secas prolongadas criaram "mega-incêndios" que excedem a capacidade humana. A acumulação de combustível devido ao abandono rural tornou as florestas altamente voláteis.',
      solution_title: 'Nossa Solução',
      solution_desc: 'Integração de aprendizagem profunda para modelos preditivos, nós de sensores IoT para monitorização microclimática e gestão florestal adaptativa.',
      p2: 'Nossa investigação abrange três anos e cinco locais-piloto na Europa e América do Norte. Colaborando com serviços de bomberos e especialistas florestais, construímos uma estrutura holística.',
    },
    work_packages: {
      title: 'Pacotes de Trabalho',
      subtitle: 'O projeto está organizado em quatro pilares estratégicos fundamentais, cada um focado num aspeto crítico da redução de incêndios.',
      milestones: 'Principais Marcos'
    },
    team: {
      title: 'Nossa Equipa de Especialistas',
      subtitle: 'Um grupo multidisciplinar de investigadores, engenheiros e conservacionistas trabalhando juntos para proteger nossos ecossistemas.'
    },
    contact: {
      title: 'Entre em Contacto',
      subtitle: 'Tem dúvidas sobre a nossa investigação ou quer colaborar? A nossa equipa está pronta para ligar-se a investigadores e parceiros tecnológicos.',
      hub: 'Centro de Inovação',
      address: 'Depto. de Ciencias Forestales, Edificio A, Universidad da Resiliência, UE',
      email: 'Inquéritos Gerais',
      press: 'Imprensa e Media',
      quote: '"A nossa missão é garantir que nenhuma comunidade esteja sozinha perante as chamas. A ciência e a tecnologia são os nossos maiores escudos."',
      director: '— Dra. Elena Vance, Diretora do Projeto',
      form_first: 'Nome',
      form_last: 'Apelido',
      form_email: 'Endereço de E-mail',
      form_org: 'Organização',
      form_msg: 'Mensagem',
      form_btn: 'Enviar Mensagem',
    },
    assistant: {
      welcome: 'Olá! Sou o assistente da Resfire. Como posso ajudá-lo hoje com a prevenção de incêndios ou informações sobre o projeto?',
      placeholder: 'Pergunte sobre segurança contra incendios...',
      loading: 'Analisando base de conhecimentos...',
    }
  }
};
