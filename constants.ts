
import { WorkPackage, TeamMember } from './types';

export const WORK_PACKAGES: any[] = [
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
        description: 'Analisar a influência histórica e atual das atividades humanas nos padrões de fogo para prever melhor os riscos futuros.',
        tasks: ['Quantificação de Dados', 'Análise de Impacto Humano', 'Mapeamento de Regimes']
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
        title: 'WP2. Identificar o papel dos processos ecológicos por trás das respostas da biodiversidade ao fogo na restauração de regimes de fogo ecológicos',
        description: 'Estudar como diferentes espécies e ecossistemas reagem ao fogo para restaurar o equilíbrio natural.',
        tasks: ['Processos Ecológicos', 'Monitorização da Biodiversidade', 'Ciência da Restauração']
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
        description: 'Aplicar estruturas globais para desenvolver soluções baseadas na natureza que transformem o fogo numa ferramenta de gestão.',
        tasks: ['Estrutura NFF', 'Soluções Baseadas na Natureza', 'Planeamento Estratégico']
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
      subtitle: 'The project is organized into three strategic work packages designed to restore resilient fire regimes.',
      milestones: 'Focus Areas'
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
      subtitle: 'El proyecto se organiza en tres paquetes de trabajo estratégicos diseñados para restaurar regímenes de fuego resilientes.',
      milestones: 'Áreas de Enfoque'
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
      solution_title: 'La Solución',
      solution_desc: 'Integração de aprendizagem profunda, sensores IoT e gestão florestal adaptativa.',
      p2: 'Nossa missão é tratar a floresta como um sistema dinâmico gerido pela ciência.',
    },
    work_packages: {
      title: 'Estratégia',
      subtitle: 'O projeto está organizado em três pacotes de trabalho estratégicos concebidos para restaurar regimes de fogo resilientes.',
      milestones: 'Áreas de Foco'
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
