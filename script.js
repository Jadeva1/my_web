(() => {
  "use strict";

  const translations = {
    es: {
      skip:"Saltar al contenido", navAbout:"Sobre mí", navProjects:"Proyectos", navExperience:"Experiencia", navSkills:"Competencias", navContact:"Contacto",
      heroEyebrow:"FÍSICA · SOFTWARE · INVESTIGACIÓN", heroTitle:'Convirtiendo problemas complejos en <span class="gradient-text">soluciones computacionales.</span>',
      heroLead:"Soy José Raúl Adeva Alía, físico con perfil computacional. Combino investigación científica, programación, análisis de datos y desarrollo web para abordar problemas desde distintas perspectivas.",
      heroCTA:"Explorar proyectos", heroContact:"Contactar", visualCaption:"Curiosidad científica, enfoque computacional", scroll:"DESLIZA PARA EXPLORAR",
      aboutEyebrow:"01 / PERFIL", aboutTitle:'Una base científica.<br><span class="muted">Una mentalidad computacional.</span>',
      aboutP1:"Mi formación en Ciencias Físicas en la Universidad Complutense de Madrid me dio una base sólida en matemáticas y modelización. Durante mis prácticas en el CSIC trabajé con simulación y datos PET, y en mi TFG he aplicado herramientas computacionales a la espectroscopía galáctica.",
      aboutP2:"Me gusta moverme entre la física y la programación: entender un problema, encontrar una forma de estudiarlo y construir herramientas para analizarlo. Fuera de la investigación, doy clases de Matemáticas y Física y sigo ampliando mis conocimientos de diseño y desarrollo web con HTML, CSS y JavaScript.",
      fact1Title:"Física e investigación",fact1Text:"Desde la espectroscopía galáctica hasta la simulación PET.",fact2Title:"Software y datos",fact2Text:"Programación, análisis y herramientas para investigar.",fact3Title:"Tecnologías emergentes",fact3Text:"Inteligencia artificial y computación cuántica.",fact4Title:"Docencia",fact4Text:"Explicar Matemáticas y Física de forma clara.",
      projectsEyebrow:"02 / TRABAJO SELECCIONADO",projectsTitle:"Proyectos e investigación",projectsIntro:"Investigación, programación y experimentación: proyectos donde la física y las herramientas computacionales se encuentran.",
      projectResearch:"TFG · INVESTIGACIÓN",projectInternship:"PRÁCTICAS · CSIC",projectAcademic:"PROYECTO ACADÉMICO",p1Title:"Espectroscopía de vientos galácticos",
      p1Text:"Trabajo Fin de Grado sobre NGC 4750 en el contexto de MEGARA/MEGADES. Incluye análisis espectroscópico, tratamiento de cubos IFU y estudio de componentes estelares y emisión ionizada. Calificación: 9,6/10.",
      tagScientific:"Análisis científico",p2Title:"Tomografía por Emisión de Positrones (PET)",p2Text:"Prácticas de investigación en el CSIC centradas en simulación de detectores PET, generación y análisis de datos de eventos y estudio de espectros de energía.",
      tagSimulation:"Simulación",tagData:"Análisis de datos",metaResearch:"Investigación",p3Title:"C4P — Computación cuántica",
      p3Text:"Proyecto académico sobre algoritmos cuánticos y fundamentos de superposición y entrelazamiento. Programación en circuitos cuánticos con Qiskit y ejecución mediante IBM Cloud.",metaQuantum:"Computación cuántica",
      
      experienceEyebrow:"03 / TRAYECTORIA",experienceTitle:"Experiencia profesional",present:"Actualidad",
      job1Title:"Profesor de Matemáticas y Física · Preparador EVAU",job1Text:"Explicación y adaptación de conceptos técnicos a diferentes niveles de conocimiento.",
      job2Title:"Prácticas de investigación — PET",job2Text:"Análisis e interpretación de datos en un entorno de investigación y uso de simuladores de escáner PET.",
      job3Title:"Personal de Información y Seguridad",job3Org:"Arzobispado de Toledo · Exposición de obras de arte",job3Text:"Control de accesos, gestión de incidencias y garantía de la seguridad del recinto.",
      skillsEyebrow:"04 / CAJA DE HERRAMIENTAS",skillsTitle:"Competencias técnicas",skill1Title:"Programación",skill1Text:"Lenguajes para programación, automatización y análisis.",
      skill2Title:"Datos y análisis",skill2Text:"Procesamiento, exploración e interpretación de datos.",skill3Title:"IA y computación científica",skill3Text:"Modelización, análisis científico y técnicas de aprendizaje automático.",
      skill4Title:"Computación cuántica",skill4Text:"Fundamentos de algoritmos y programación de circuitos cuánticos.",tagModeling:"Modelización",
      skill5Title:"Desarrollo web",skill5Text:"Diseño y construcción de páginas web adaptables.",skill6Title:"Física y matemáticas",skill6Text:"Base científica aplicada a modelización, análisis y resolución de problemas.",softTitle:"Competencias profesionales",soft1:"Trabajo en equipo",soft2:"Comunicación",soft3:"Pensamiento analítico",soft4:"Resolución de problemas",soft5:"Proactividad",soft6:"Aprendizaje continuo",
      educationEyebrow:"05 / FORMACIÓN",educationTitle:"Formación e idiomas",edu1Title:"Grado en Ciencias Físicas",completed:"Finalizado",edu2Title:"Curso de Programación en Python",
      edu3Title:"Fundamentos de seguridad y criptología",edu3Text:"Formación complementaria, en proceso de certificación.",languagesTitle:"Idiomas",otherTitle:"Información adicional",
      otherText:"Carnet de conducir B · Vehículo propio · Disponibilidad inmediata",contactEyebrow:"06 / SIGUIENTE PASO",contactTitle:"¿Hablamos de tecnología?",
      contactText:"Estoy interesado en oportunidades relacionadas con programación, análisis de datos, software, investigación e innovación tecnológica.",

    },
    en: {
      skip:"Skip to content",navAbout:"About",navProjects:"Projects",navExperience:"Experience",navSkills:"Skills",navContact:"Contact",
      heroEyebrow:"PHYSICS · SOFTWARE · RESEARCH",heroTitle:'Turning complex problems into <span class="gradient-text">computational solutions.</span>',
      heroLead:"I'm José Raúl Adeva Alía, a physicist with a computational background. I combine scientific research, programming, data analysis and web development to approach problems from different perspectives.",
      heroCTA:"Explore projects",heroContact:"Get in touch",visualCaption:"Scientific curiosity, computational mindset",scroll:"SCROLL TO EXPLORE",
      aboutEyebrow:"01 / PROFILE",aboutTitle:'A scientific foundation.<br><span class="muted">A computational mindset.</span>',
      aboutP1:"My Physics degree at Complutense University of Madrid gave me a strong foundation in mathematics and modelling. During my CSIC internship I worked with PET simulation and data, and my thesis applies computational tools to galactic spectroscopy.",
      aboutP2:"I enjoy moving between physics and programming: understanding a problem, finding a way to investigate it and building tools to analyse it. Outside research, I teach Mathematics and Physics and continue developing my web design and development skills with HTML, CSS and JavaScript.",
      fact1Title:"Physics & research",fact1Text:"From galactic spectroscopy to PET simulation.",fact2Title:"Software & data",fact2Text:"Programming, analysis and research tools.",fact3Title:"Emerging technologies",fact3Text:"Artificial intelligence and quantum computing.",fact4Title:"Teaching",fact4Text:"Making Mathematics and Physics easier to understand.",
      projectsEyebrow:"02 / SELECTED WORK",projectsTitle:"Projects & research",projectsIntro:"Research, programming and experimentation: projects where physics and computational tools meet.",
      projectResearch:"THESIS · RESEARCH",projectInternship:"INTERNSHIP · CSIC",projectAcademic:"ACADEMIC PROJECT",p1Title:"Spectroscopy of galactic winds",
      p1Text:"Bachelor's thesis on NGC 4750 in the context of MEGARA/MEGADES. It involves spectroscopic analysis, IFU cube processing and the study of stellar components and ionised emission. Grade: 9.6/10.",
      tagScientific:"Scientific analysis",p2Title:"Positron Emission Tomography (PET)",p2Text:"Research internship at CSIC focused on PET detector simulation, event-data generation and analysis, and energy-spectrum studies.",
      tagSimulation:"Simulation",tagData:"Data analysis",metaResearch:"Research",p3Title:"C4P — Quantum computing",
      p3Text:"Academic project on quantum algorithms and the fundamentals of superposition and entanglement. Programming quantum circuits with Qiskit and running them through IBM Cloud.",metaQuantum:"Quantum computing",
      
      experienceEyebrow:"03 / CAREER",experienceTitle:"Professional experience",present:"Present",
      job1Title:"Mathematics & Physics Tutor · University Entrance Exam Preparation",job1Text:"Explaining and adapting technical concepts to different levels of understanding.",
      job2Title:"Research internship — PET",job2Text:"Data analysis and interpretation in a research environment, using PET scanner simulators.",
      job3Title:"Information and Security Staff",job3Org:"Archbishopric of Toledo · Art exhibition",job3Text:"Access control, incident management and maintaining venue security.",
      skillsEyebrow:"04 / TOOLKIT",skillsTitle:"Technical skills",skill1Title:"Programming",skill1Text:"Languages for programming, automation and analysis.",
      skill2Title:"Data & analysis",skill2Text:"Data processing, exploration and interpretation.",skill3Title:"AI & scientific computing",skill3Text:"Scientific analysis, modelling and machine-learning techniques.",
      skill4Title:"Quantum computing",skill4Text:"Quantum algorithm fundamentals and quantum circuit programming.",tagModeling:"Modelling",
      skill5Title:"Web development",skill5Text:"Designing and building responsive websites.",skill6Title:"Physics & mathematics",skill6Text:"Scientific foundations applied to modelling, analysis and problem-solving.",softTitle:"Professional skills",soft1:"Teamwork",soft2:"Communication",soft3:"Analytical thinking",soft4:"Problem-solving",soft5:"Proactivity",soft6:"Continuous learning",
      educationEyebrow:"05 / EDUCATION",educationTitle:"Education & languages",edu1Title:"BSc in Physics",completed:"Completed",edu2Title:"Python Programming Course",
      edu3Title:"Security and cryptology fundamentals",edu3Text:"Additional training; certification in progress.",languagesTitle:"Languages",otherTitle:"Additional information",
      otherText:"Category B driving licence · Own vehicle · Available immediately",contactEyebrow:"06 / NEXT STEP",contactTitle:"Let's talk technology",
      contactText:"I'm interested in opportunities related to programming, data analysis, software, research and technological innovation.",

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
    document.title = "José Raúl Adeva Alía — Portfolio";
  }

  languageButton.addEventListener("click", () => applyLanguage(language === "es" ? "en" : "es"));

  const socialContainer = document.getElementById("social-links");
  const config = window.PORTFOLIO_CONFIG || {};
  const socialLinks = [
    { label: "LinkedIn", url: config.linkedin, icon: "in", type: "profile" },
    { label: "GitHub", url: config.github, icon: "⌘", type: "profile" },
    { label: config.email || "Email", url: config.email ? `mailto:${config.email}` : "", icon: "@", type: "email" }
  ];
  const validProfileUrl = (value) => {
    try {
      const parsed = new URL(value);
      return parsed.protocol === "https:" && (parsed.hostname === "linkedin.com" || parsed.hostname.endsWith(".linkedin.com") || parsed.hostname === "github.com" || parsed.hostname.endsWith(".github.com"));
    } catch (_) { return false; }
  };
  const configuredLinks = socialLinks.filter((link) => link.type === "email"
    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email || "")
    : typeof link.url === "string" && validProfileUrl(link.url));
  if (configuredLinks.length) {
    socialContainer.replaceChildren();
    configuredLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.className = "social-link";
      anchor.href = link.url;
      if (link.type === "profile") {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
      const icon = document.createElement("span");
      icon.className = "social-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = link.icon;
      const label = document.createElement("span");
      label.textContent = link.type === "email" ? config.email : link.label;
      const arrow = document.createElement("span");
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = link.type === "email" ? "↗" : "↗";
      anchor.append(icon, label, arrow);
      socialContainer.append(anchor);
    });
  }


  // A playful, client-side Easter egg (not a security mechanism).
  const eggDialog = document.getElementById("egg-dialog");
  const eggMessage = document.getElementById("egg-message");
  const eggCodeWrap = document.getElementById("egg-code-wrap");
  const eggPasswordForm = document.getElementById("egg-password-form");
  const eggPassword = document.getElementById("egg-password");
  const eggError = document.getElementById("egg-error");
  const codeTrigger = document.querySelector(".egg-code-trigger");
  const hintTrigger = document.querySelector(".hero-galaxy-caption span:first-child");

  if (eggDialog && codeTrigger && hintTrigger) {
    codeTrigger.addEventListener("click", () => {
      eggMessage.textContent = "¡Has encontrado una anomalía! Los astrónomos no deberían dejar secretos a la vista… pero aquí estamos.";
      eggCodeWrap.hidden = false;
      eggPasswordForm.hidden = true;
      eggError.hidden = true;
      eggDialog.showModal();
    });
    hintTrigger.setAttribute("role", "button");
    hintTrigger.setAttribute("tabindex", "0");
    hintTrigger.setAttribute("aria-label", "Abrir el acceso secreto");
    hintTrigger.classList.add("egg-trigger");
    const openPassword = () => {
      eggMessage.textContent = "Acceso restringido. Solo personal con curiosidad cósmica puede continuar.";
      eggCodeWrap.hidden = true;
      eggPasswordForm.hidden = false;
      eggError.hidden = true;
      eggDialog.showModal();
      window.setTimeout(() => eggPassword.focus(), 50);
    };
    hintTrigger.addEventListener("click", openPassword);
    hintTrigger.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openPassword(); } });
    document.getElementById("egg-code")?.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText("BIGBANG42"); eggMessage.textContent = "Código copiado. ¡Que comience la misión!"; }
      catch { eggMessage.textContent = "Tu código es BIGBANG42. Apúntalo antes de cerrar esta ventana."; }
    });
    eggPasswordForm.addEventListener("submit", event => {
      event.preventDefault();
      if (eggPassword.value.trim().toUpperCase() === "BIGBANG42") {
        const target = new URL("easter-egg.html", window.location.href);
        window.open(target.href, "_blank", "noopener,noreferrer");
        eggDialog.close();
      } else { eggError.hidden = false; eggPassword.select(); }
    });
  }


  // A playful, client-side Easter egg. This is a game, not an authentication system.
  const secretCode = "BIGBANGBANANA";
  const revealButton = document.getElementById("reveal-secret");
  const openButton = document.getElementById("open-secret");
  const toast = document.getElementById("secret-toast");
  const modal = document.getElementById("secret-modal");
  const secretInput = document.getElementById("secret-input");
  const secretError = document.getElementById("secret-error");
  const secretTranslations = {
    es: { found:"SEÑAL ANÓMALA DETECTADA", clue:"Has encontrado el código de acceso. Guárdalo, explorador:", hint:"Ahora pulsa MEGARA para desbloquear la sorpresa.", copy:"Copiar código", copied:"¡Copiado!", restricted:"ACCESO RESTRINGIDO · ÁREA MEGARA", title:"¿Traes autorización, astronauta?", description:"Introduce el código que has encontrado por la galaxia.", label:"Código de acceso", error:"Código incorrecto. Estoy ligeramente decepcionado contigo.", submit:"Iniciar protocolo secreto ↗", security:"Pista: Busca en las estrellas." },
    en: { found:"ANOMALOUS SIGNAL DETECTED", clue:"You found the access code. Keep it safe, space explorer:", hint:"Now click MEGARA to unlock the surprise.", copy:"Copy code", copied:"Copied!", restricted:"RESTRICTED ACCESS · MEGARA AREA", title:"Got clearance, astronaut?", description:"Enter the code you found somewhere in the galaxy.", label:"Access code", error:"Wrong code. In the english versión we have a security raccoon, and he is deeply disappointed.", submit:"Launch secret protocol ↗", security:"Note: Look out for the stars." }
  };
  function updateSecretLanguage() {
    document.querySelectorAll("[data-secret-i18n]").forEach((el) => {
      const key = el.dataset.secretI18n;
      if (secretTranslations[language] && secretTranslations[language][key]) el.textContent = secretTranslations[language][key];
    });
  }
  function showSecretToast() {
    toast.hidden = false;
    updateSecretLanguage();
  }
  function openSecretModal() {
    modal.hidden = false;
    secretError.hidden = true;
    secretInput.value = "";
    updateSecretLanguage();
    window.setTimeout(() => secretInput.focus(), 0);
  }
  function closeSecretModal() {
    modal.hidden = true;
    openButton.focus();
  }
  revealButton.addEventListener("click", showSecretToast);
  document.getElementById("close-secret-toast").addEventListener("click", () => { toast.hidden = true; });
  document.getElementById("copy-secret").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(secretCode);
      document.getElementById("copy-secret").textContent = secretTranslations[language].copied;
    } catch (_) {
      document.getElementById("secret-code").focus?.();
    }
  });
  openButton.addEventListener("click", openSecretModal);
  document.getElementById("close-secret-modal").addEventListener("click", closeSecretModal);
  modal.querySelector("[data-close-secret]").addEventListener("click", closeSecretModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeSecretModal();
  });
  document.getElementById("secret-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (secretInput.value.trim().toUpperCase().replace(/\s+/g, "") !== secretCode) {
      secretError.hidden = false;
      secretInput.select();
      return;
    }
    const page = new URL("easter-egg.html", window.location.href);
    page.searchParams.set("lang", language);
    const newTab = window.open(page.href, "_blank");
    if (!newTab) {
      secretError.textContent = language === "es" ? "El navegador ha bloqueado la pestaña. Permite las ventanas emergentes e inténtalo otra vez." : "Your browser blocked the new tab. Allow pop-ups and try again.";
      secretError.hidden = false;
      return;
    }
    newTab.opener = null;
    modal.hidden = true;
  });

})();
