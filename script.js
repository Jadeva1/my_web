(() => {
  "use strict";

  const translations = {
    es: {
      skip:"Saltar al contenido", navAbout:"Sobre mí", navProjects:"Proyectos", navExperience:"Experiencia", navSkills:"Competencias", navContact:"Contacto",
      heroEyebrow:"FÍSICA · SOFTWARE · DATOS", heroTitle:'Convirtiendo problemas complejos en <span class="gradient-text">soluciones computacionales.</span>',
      heroLead:"Soy Raúl Adeva Alía, graduado en Ciencias Físicas con interés en programación, análisis de datos, inteligencia artificial y computación científica.",
      heroCTA:"Explorar proyectos", heroContact:"Contactar", visualCaption:"Curiosidad científica, enfoque computacional", scroll:"DESLIZA PARA EXPLORAR",
      aboutEyebrow:"01 / PERFIL", aboutTitle:'Una base científica.<br><span class="muted">Una mentalidad computacional.</span>',
      aboutP1:"Graduado en Ciencias Físicas por la Universidad Complutense de Madrid, con formación en matemáticas, programación y análisis de datos. He trabajado con herramientas de programación y simulación en contextos científicos y de investigación.",
      aboutP2:"Me interesa desarrollar soluciones de software, analizar datos y aplicar métodos computacionales a problemas complejos. Me caracterizan el pensamiento analítico, la resolución de problemas y la disposición para aprender nuevas tecnologías.",
      fact1Title:"Investigación",fact1Text:"Análisis científico y simulación.",fact2Title:"Programación",fact2Text:"Herramientas para explorar y procesar datos.",fact3Title:"Aprendizaje",fact3Text:"Adaptación a nuevos conceptos y tecnologías.",fact4Title:"Comunicación",fact4Text:"Experiencia explicando conceptos técnicos.",
      projectsEyebrow:"02 / TRABAJO SELECCIONADO",projectsTitle:"Proyectos e investigación",projectsIntro:"Una selección de experiencias académicas y científicas. Los detalles se limitan a la información confirmada en mi CV.",
      projectResearch:"TFG · INVESTIGACIÓN",projectInternship:"PRÁCTICAS · CSIC",projectAcademic:"PROYECTO ACADÉMICO",p1Title:"Espectroscopía de vientos galácticos",
      p1Text:"Trabajo Fin de Grado centrado en el análisis de datos espectroscópicos y el estudio de vientos galácticos en una galaxia cercana. Calificación: 9,6/10.",
      tagScientific:"Análisis científico",p2Title:"Tomografía por Emisión de Positrones (PET)",p2Text:"Experiencia de prácticas en el Consejo Superior de Investigaciones Científicas, con análisis e interpretación de datos y uso de simuladores de escáner PET.",
      tagSimulation:"Simulación",tagData:"Análisis de datos",metaResearch:"Investigación",p3Title:"C4P — Computación cuántica",
      p3Text:"Análisis de algoritmos de computación cuántica y fundamentos de superposición y entrelazamiento. Programación con Qiskit y Python, utilizando IBM Cloud.",metaQuantum:"Computación cuántica",
      projectNote:"Nota: no se muestran repositorios ni enlaces de proyecto hasta añadir URLs verificadas.",
      experienceEyebrow:"03 / TRAYECTORIA",experienceTitle:"Experiencia profesional",present:"Actualidad",
      job1Title:"Profesor de Matemáticas y Física · Preparador EVAU",job1Text:"Explicación y adaptación de conceptos técnicos a diferentes niveles de conocimiento.",
      job2Title:"Prácticas de investigación — PET",job2Text:"Análisis e interpretación de datos en un entorno de investigación y uso de simuladores de escáner PET.",
      job3Title:"Personal de Información y Seguridad",job3Org:"Arzobispado de Toledo · Exposición de obras de arte",job3Text:"Control de accesos, gestión de incidencias y garantía de la seguridad del recinto.",
      skillsEyebrow:"04 / CAJA DE HERRAMIENTAS",skillsTitle:"Competencias técnicas",skill1Title:"Programación",skill1Text:"Lenguajes y herramientas para desarrollo y análisis.",
      skill2Title:"Datos y análisis",skill2Text:"Tratamiento, exploración e interpretación de datos.",skill3Title:"IA y computación científica",skill3Text:"Machine Learning, simulación y modelización.",
      skill4Title:"Computación cuántica",skill4Text:"Fundamentos y programación de circuitos y algoritmos cuánticos.",tagModeling:"Modelización",
      softTitle:"Competencias profesionales",soft1:"Trabajo en equipo",soft2:"Comunicación",soft3:"Pensamiento analítico",soft4:"Resolución de problemas",soft5:"Proactividad",soft6:"Aprendizaje continuo",
      educationEyebrow:"05 / FORMACIÓN",educationTitle:"Formación e idiomas",edu1Title:"Grado en Ciencias Físicas",completed:"Finalizado",edu2Title:"Curso de Programación en Python",
      edu3Title:"Fundamentos de seguridad y criptología",edu3Text:"Formación complementaria, en proceso de certificación.",languagesTitle:"Idiomas",otherTitle:"Información adicional",
      otherText:"Carnet de conducir B · Vehículo propio · Disponibilidad inmediata",contactEyebrow:"06 / SIGUIENTE PASO",contactTitle:"¿Hablamos de tecnología?",
      contactText:"Estoy interesado en oportunidades relacionadas con programación, análisis de datos, software e innovación tecnológica.",
      socialPlaceholder:"Añade tus enlaces de LinkedIn y GitHub en config.js para mostrarlos aquí.",footerText:"Diseñado y construido con cuidado.",backTop:"Volver arriba ↑"
    },
    en: {
      skip:"Skip to content",navAbout:"About",navProjects:"Projects",navExperience:"Experience",navSkills:"Skills",navContact:"Contact",
      heroEyebrow:"PHYSICS · SOFTWARE · DATA",heroTitle:'Turning complex problems into <span class="gradient-text">computational solutions.</span>',
      heroLead:"I'm Raúl Adeva Alía, a Physics graduate interested in programming, data analysis, artificial intelligence and scientific computing.",
      heroCTA:"Explore projects",heroContact:"Get in touch",visualCaption:"Scientific curiosity, computational mindset",scroll:"SCROLL TO EXPLORE",
      aboutEyebrow:"01 / PROFILE",aboutTitle:'A scientific foundation.<br><span class="muted">A computational mindset.</span>',
      aboutP1:"Physics graduate from Complutense University of Madrid, with a background in mathematics, programming and data analysis. I have used programming and simulation tools in scientific and research contexts.",
      aboutP2:"I'm interested in developing software solutions, analysing data and applying computational methods to complex problems. My strengths include analytical thinking, problem-solving and a willingness to learn new technologies.",
      fact1Title:"Research",fact1Text:"Scientific analysis and simulation.",fact2Title:"Programming",fact2Text:"Tools to explore and process data.",fact3Title:"Learning",fact3Text:"Adapting to new concepts and technologies.",fact4Title:"Communication",fact4Text:"Experience explaining technical concepts.",
      projectsEyebrow:"02 / SELECTED WORK",projectsTitle:"Projects & research",projectsIntro:"A selection of academic and scientific experience. Details are limited to information confirmed in my CV.",
      projectResearch:"THESIS · RESEARCH",projectInternship:"INTERNSHIP · CSIC",projectAcademic:"ACADEMIC PROJECT",p1Title:"Spectroscopy of galactic winds",
      p1Text:"Bachelor's thesis focused on spectroscopic data analysis and the study of galactic winds in a nearby galaxy. Grade: 9.6/10.",
      tagScientific:"Scientific analysis",p2Title:"Positron Emission Tomography (PET)",p2Text:"Research internship at the Spanish National Research Council (CSIC), involving data analysis and interpretation and the use of PET scanner simulators.",
      tagSimulation:"Simulation",tagData:"Data analysis",metaResearch:"Research",p3Title:"C4P — Quantum computing",
      p3Text:"Analysis of quantum computing algorithms and the fundamentals of superposition and entanglement. Programming with Qiskit and Python using IBM Cloud.",metaQuantum:"Quantum computing",
      projectNote:"Note: project repositories and links are not displayed until verified URLs are added.",
      experienceEyebrow:"03 / CAREER",experienceTitle:"Professional experience",present:"Present",
      job1Title:"Mathematics & Physics Tutor · University Entrance Exam Preparation",job1Text:"Explaining and adapting technical concepts to different levels of understanding.",
      job2Title:"Research internship — PET",job2Text:"Data analysis and interpretation in a research environment, using PET scanner simulators.",
      job3Title:"Information and Security Staff",job3Org:"Archbishopric of Toledo · Art exhibition",job3Text:"Access control, incident management and maintaining venue security.",
      skillsEyebrow:"04 / TOOLKIT",skillsTitle:"Technical skills",skill1Title:"Programming",skill1Text:"Languages and tools for development and analysis.",
      skill2Title:"Data & analysis",skill2Text:"Data processing, exploration and interpretation.",skill3Title:"AI & scientific computing",skill3Text:"Machine learning, simulation and modelling.",
      skill4Title:"Quantum computing",skill4Text:"Fundamentals and programming of quantum circuits and algorithms.",tagModeling:"Modelling",
      softTitle:"Professional skills",soft1:"Teamwork",soft2:"Communication",soft3:"Analytical thinking",soft4:"Problem-solving",soft5:"Proactivity",soft6:"Continuous learning",
      educationEyebrow:"05 / EDUCATION",educationTitle:"Education & languages",edu1Title:"BSc in Physics",completed:"Completed",edu2Title:"Python Programming Course",
      edu3Title:"Security and cryptology fundamentals",edu3Text:"Additional training; certification in progress.",languagesTitle:"Languages",otherTitle:"Additional information",
      otherText:"Category B driving licence · Own vehicle · Available immediately",contactEyebrow:"06 / NEXT STEP",contactTitle:"Let's talk technology",
      contactText:"I'm interested in opportunities related to programming, data analysis, software and technological innovation.",
      socialPlaceholder:"Add your LinkedIn and GitHub URLs in config.js to display them here.",footerText:"Designed and built with care.",backTop:"Back to top ↑"
    }
  };

  let language = "es";
  const languageButton = document.getElementById("language-toggle");

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[language][key]) element.innerHTML = translations[language][key];
    });
    languageButton.textContent = language === "es" ? "EN" : "ES";
    languageButton.setAttribute("aria-label", language === "es" ? "Change language to English" : "Cambiar idioma a español");
    document.title = language === "es" ? "Raúl Adeva Alía — Portfolio" : "Raúl Adeva Alía — Portfolio";
  }

  languageButton.addEventListener("click", () => applyLanguage(language === "es" ? "en" : "es"));

  const socialContainer = document.getElementById("social-links");
  const config = window.PORTFOLIO_CONFIG || {};
  const socialLinks = [
    { key: "linkedin", label: "LinkedIn", url: config.linkedin, icon: "in" },
    { key: "github", label: "GitHub", url: config.github, icon: "⌘" }
  ];
  const validHttpUrl = (value) => {
    try {
      const parsed = new URL(value);
      return parsed.protocol === "https:" && (parsed.hostname === "linkedin.com" || parsed.hostname.endsWith(".linkedin.com") || parsed.hostname === "github.com" || parsed.hostname.endsWith(".github.com"));
    } catch (_) { return false; }
  };

  const configuredLinks = socialLinks.filter((link) => typeof link.url === "string" && validHttpUrl(link.url));
  if (configuredLinks.length) {
    socialContainer.replaceChildren();
    configuredLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.className = "social-link";
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      const icon = document.createElement("span");
      icon.className = "social-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = link.icon;
      const label = document.createElement("span");
      label.textContent = link.label;
      const arrow = document.createElement("span");
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";
      anchor.append(icon, label, arrow);
      socialContainer.append(anchor);
    });
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
