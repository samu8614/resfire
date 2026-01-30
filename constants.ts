
import { WorkPackage, TeamMember } from './types';

export const WORK_PACKAGES: WorkPackage[] = [
  {
    id: '01',
    icon: 'fa-microchip',
    color: 'bg-orange-600',
    content: {
      en: {
        title: 'Neural Risk Detection',
        description: 'Implementing deep learning models that process multispectral satellite data to identify "pre-ignition" heat signatures before smoke is even visible.',
        tasks: ['AI Training', 'Satellite Integration', 'Live Heatmaps']
      },
      es: {
        title: 'Detección Neuronal de Riesgos',
        description: 'Implementación de modelos de aprendizaje profundo que procesan datos satelitales multiespectrales para identificar firmas de calor "pre-ignición" antes de que el humo sea visible.',
        tasks: ['Entrenamiento de IA', 'Integración Satelital', 'Mapas de Calor en Vivo']
      },
      pt: {
        title: 'Deteção Neuronal de Riscos',
        description: 'Implementação de modelos de aprendizagem profunda que processam dados de satélite multiespectrais para identificar assinaturas de calor antes do fumo ser visível.',
        tasks: ['Treino de IA', 'Integração de Satélite', 'Mapas de Calor']
      }
    }
  },
  {
    id: '02',
    icon: 'fa-seedling',
    color: 'bg-emerald-600',
    content: {
      en: {
        title: 'Biodiversity Resilience',
        description: 'Restoring mosaic landscapes using fire-resistant native species to create natural biological barriers that slow down fire progression.',
        tasks: ['Seed Engineering', 'Mosaic Planting', 'Soil Recovery']
      },
      es: {
        title: 'Resiliencia de la Biodiversidad',
        description: 'Restauración de paisajes en mosaico utilizando especies nativas resistentes al fuego para crear barreras biológicas naturales que frenen la progresión del fuego.',
        tasks: ['Ingeniería de Semillas', 'Plantación en Mosaico', 'Recuperación de Suelo']
      },
      pt: {
        title: 'Resiliência da Biodiversidade',
        description: 'Restauração de paisagens em mosaico utilizando espécies nativas resistentes ao fogo para criar barreiras biológicas naturais.',
        tasks: ['Engenharia de Sementes', 'Plantação em Mosaico', 'Recuperação de Solo']
      }
    }
  },
  {
    id: '03',
    icon: 'fa-drone-ops',
    color: 'bg-blue-600',
    content: {
      en: {
        title: 'Autonomous Swarm Response',
        description: 'Coordinating swarms of autonomous drones for high-precision delivery of eco-friendly retardants in difficult-to-reach terrains.',
        tasks: ['Swarm Logic', 'Precision Delivery', 'Terrain Mapping']
      },
      es: {
        title: 'Respuesta de Enjambres Autónomos',
        description: 'Coordinación de enjambres de drones autónomos para la entrega de alta precisión de retardantes ecológicos en terrenos de difícil acceso.',
        tasks: ['Lógica de Enjambre', 'Entrega de Precisión', 'Mapeo de Terreno']
      },
      pt: {
        title: 'Resposta de Enxames Autónomos',
        description: 'Coordenação de enxames de drones autónomos para a entrega de alta precisão de retardadores ecológicos.',
        tasks: ['Lógica de Enxame', 'Entrega de Precisión', 'Mapeamento']
      }
    }
  },
  {
    id: '04',
    icon: 'fa-handshake-angle',
    color: 'bg-stone-700',
    content: {
      en: {
        title: 'Socio-Legal Framework',
        description: 'Collaborating with policy makers and local communities to update Wildland-Urban Interface (WUI) laws and crisis protocols.',
        tasks: ['Policy Drafting', 'Local Workshops', 'Crisis Apps']
      },
      es: {
        title: 'Marco Socio-Legal',
        description: 'Colaboración con legisladores y comunidades locales para actualizar las leyes de Interfaz Urbano-Forestal (WUI) y protocolos de crisis.',
        tasks: ['Redacción de Políticas', 'Talleres Locales', 'Apps de Crisis']
      },
      pt: {
        title: 'Estrutura Sócio-Legal',
        description: 'Colaboração com decisores políticos e comunidades locais para atualizar as leis de Interface Urbano-Florestal (WUI).',
        tasks: ['Redação de Políticas', 'Workshops Locais', 'Apps de Crise']
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
  }
];

export const TRANSLATIONS = {
  en: {
    nav: { home: 'Home', abstract: 'Abstract', workPackages: 'Work Packages', team: 'Team', contact: 'Contact', language: 'Language' },
    home: {
      hero_sub: 'Proactive & Sustainable Management',
      hero_title: 'THE RESFIRE PROJECT',
      hero_desc_p1: 'The RESFIRE project aims to contribute to the development of proactive and sustainable fire management strategies that not only mitigate the risks of destructive wildfires but also foster the health and resilience of Mediterranean ecosystems and their biodiversity.',
      hero_desc_p2: 'The emphasis is on recognizing the ecological importance of fire and integrating this understanding into effective nature-based solutions for fire-prone ecosystems. Thus, the overarching goal of the project is to advance the understanding, management, and restoration of fire regimes in humanized Mediterranean landscapes.',
      hero_desc_p3: 'This restoration of fire regimes can be achieved by relaxing fire suppression in these systems so that fire in non-adverse meteorological conditions can recover its positive impact. The project seeks to develop a nuanced perspective that acknowledges the ecological role of fire as a natural disturbance.',
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
      subtitle: 'The project is organized into four core strategic pillars, each focusing on a critical aspect of wildfire reduction.',
      milestones: 'Operational Areas'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have questions about our research or want to collaborate? Our team is ready to connect.',
      hub: 'Innovation Hub',
      address: 'Forestry Science Dept, Building A, University of Resilience, EU',
      quote: '"Science and technology are our greatest shields against the changing climate."',
      director: '— Dr. Elena Vance, Project Director',
      form_first: 'First Name',
      form_last: 'Last Name',
      form_email: 'Email',
      form_msg: 'Message',
      form_btn: 'Submit Inquiry',
    },
    assistant: {
      welcome: 'Hello! I am the Resfire Assistant. How can I help you today with wildfire prevention or project information?',
      placeholder: 'Ask about fire safety...',
      loading: 'Analyzing knowledge base...',
    }
  },
  es: {
    nav: { home: 'Inicio', abstract: 'Abstract', workPackages: 'Work Packages', team: 'Equipo', contact: 'Contacto', language: 'Idioma' },
    home: {
      hero_sub: 'Gestión Proactiva y Sostenible',
      hero_title: 'EL PROYECTO RESFIRE',
      hero_desc_p1: 'El proyecto RESFIRE tiene como objetivo contribuir al desarrollo de estrategias de gestión del fuego proactivas y sostenibles que no solo mitiguen los riesgos de incendios forestales destructivos, sino que también fomenten la salud y la resiliencia de los ecosistemas mediterráneos y su biodiversidad.',
      hero_desc_p2: 'El énfasis se pone en reconocer la importancia ecológica del fuego e integrar esta comprensión en soluciones efectivas basadas en la naturaleza para ecosistemas propensos al fuego. El objetivo es avanzar en la gestión y restauración de los regímenes de fuego en paisajes humanizados.',
      hero_desc_p3: 'Esta restauración se logra relajando la supresión de incendios para que el fuego, en condiciones meteorológicas no adversas, recupere su impacto positivo. Buscamos una perspectiva matizada que reconozca el papel ecológico del fuego como una perturbación natural.',
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
      subtitle: 'El proyecto se organiza en cuatro pilares fundamentales, cada uno enfocado en un aspecto crítico de la reducción de incendios.',
      milestones: 'Áreas Operativas'
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes preguntas sobre nuestra investigación? Nuestro equipo está listo para colaborar.',
      hub: 'Sede de Innovación',
      address: 'Depto. de Ciencias Forestales, Edificio A, Universidad de la Resiliencia, UE',
      quote: '"La ciencia y la tecnología son nuestros mayores escudos frente al cambio climático."',
      director: '— Dra. Elena Vance, Directora del Proyecto',
      form_first: 'Nombre',
      form_last: 'Apellidos',
      form_email: 'Email',
      form_msg: 'Mensaje',
      form_btn: 'Enviar Consulta',
    },
    assistant: {
      welcome: '¡Hola! Soy el asistente de Resfire. ¿Cómo puedo ayudarte hoy con la prevención de incendios o información del proyecto?',
      placeholder: 'Pregunta sobre seguridad...',
      loading: 'Analizando base de conocimientos...',
    }
  },
  pt: {
    nav: { home: 'Início', abstract: 'Abstract', workPackages: 'Pacotes', team: 'Equipa', contact: 'Contacto', language: 'Idioma' },
    home: {
      hero_sub: 'Gestão Proativa e Sustentável',
      hero_title: 'O PROJETO RESFIRE',
      hero_desc_p1: 'O projeto RESFIRE visa contribuir para o desenvolvimento de estratégias de gestão de incêndios proativas e sustentáveis que não só mitiguem os riscos de incêndios florestais destrutivos, mas também promovam a saúde e a resiliência dos ecossistemas mediterrânicos.',
      hero_desc_p2: 'A ênfase é colocada no reconhecimento da importância ecológica do fogo e na integração desta compreensão em soluções baseadas na natureza. O objetivo global é avançar na restauração dos regimes de fogo em paisagens humanizadas.',
      hero_desc_p3: 'Esta restauração pode ser alcançada relaxando a supressão de incêndios para que o fogo, em condições meteorológicas não adversas, recupere o seu impacto positivo. O projeto procura reconhecer o papel ecológico do fogo como uma perturbação natural.',
      cta_primary: 'Resumo Científico',
      cta_secondary: 'Plano de Ação',
    },
    abstract: {
      title: 'Resumo do Projeto',
      p1: 'As alterações climáticas alteraram o regime de incêndios. O Resfire representa uma mudança para paisagens proativas e resilientes.',
      challenge_title: 'O Desafio',
      challenge_desc: 'O aumento das temperaturas criou "mega-incêndios" que excedem a capacidade humana de supressão.',
      solution_title: 'A Solução',
      solution_desc: 'Integração de aprendizagem profunda, sensores IoT e gestão florestal adaptativa.',
      p2: 'Nossa missão é tratar a floresta como um sistema dinâmico gerido pela ciência.',
    },
    work_packages: {
      title: 'Estratégia',
      subtitle: 'O projeto está organizado em quatro pilares estratégicos fundamentais.',
      milestones: 'Áreas Operacionais'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Tem dúvidas sobre a nossa investigação? A nossa equipa está pronta para colaborar.',
      hub: 'Centro de Inovação',
      address: 'Depto. de Ciencias Forestales, Edifício A, Universidade da Resiliência, UE',
      quote: '"A ciência e a tecnologia são os nossos maiores escudos."',
      director: '— Dra. Elena Vance, Diretora do Projeto',
      form_first: 'Nome',
      form_last: 'Apelido',
      form_email: 'E-mail',
      form_msg: 'Mensagem',
      form_btn: 'Enviar',
    },
    assistant: {
      welcome: 'Olá! Sou o assistente da Resfire. Como posso ajudá-lo hoje?',
      placeholder: 'Pergunte sobre segurança...',
      loading: 'Analisando...',
    }
  }
};
