const careerStartYear = 2024;
const yearsOfExperience = new Date().getFullYear() - careerStartYear;

export const languages = {
    en: {
        code: "en",
        name: "English",
    },
    es: {
        code: "es",
        name: "Español",
    },
};

export const defaultLang = "en";

export const showDefaultLang = false;

export const ui = {
    en: {
        "layout.title": "Amador's Portfolio - Software Engineer",
        "layout.description":
            `Software engineer with ${yearsOfExperience}+ years of experience in backend development, ` +
            "specialized in building efficient, maintainable, and production-grade solutions.",
        "navbar.experience": "Experience",
        "navbar.projects": "Projects",
        "navbar.about-me": "About me",
        "hero.badge": "Working at Zalando",
        "hero.greet": "Hey, I'm",
        "hero.rol": "Software Engineer",
        "hero.description": `
          Building efficient, maintainable backend solutions. 
          I am a Software Engineer with ${yearsOfExperience}+ years of experience shipping production-grade code using <strong>Java</strong>,
           <strong>Spring Boot</strong>, and <strong>AWS</strong>.
       `,
        "hero.contact": "Contact me",
        "hero.resume": "Download CV",
        "index.experience": "Work Experience",
        "index.projects": "Projects",
        "index.about": "About me",
        exp: [
            {
                date: "August 2024 - Present",
                title: "Software Engineer",
                company: "Zalando Payments GmbH | Dortmund, Germany",
                description:
                    "Architecting high-volume payment systems for Europe's leading fashion retailer. " +
                    "Specializing in Java, Spring Boot, and AWS to deliver secure, scalable, and reliable financial infrastructure.",
                latest: true,
            },
            {
                date: "March 2023 - July 2023",
                title: "Java Developer",
                company: "Viafirma | Seville, Spain",
                description:
                    "Designed and developed RESTful API services using Java and the Spring ecosystem. " +
                    "Managed SQL relational databases (PostgreSQL, MySQL) and implemented testing strategies using JUnit and Mockito.",
            },
            {
                date: "May 2019 - March 2021",
                title: "Production Engineer",
                company: "Saica Group | Seville, Spain",
                description:
                    "Led safety and efficiency projects across Spain and Portugal. " +
                    "Implemented Lean methodologies, 5S, and process analysis to optimize production workflows and risk management.",
            },
            {
                date: "February 2018 - June 2018",
                title: "Intern Engineer",
                company: "Idener | Seville, Spain",
                description:
                    "Developed machine learning models and data processing scripts using Python to support R&D engineering projects.",
            },
        ],
        "exp.latest": "Latest",
        projects: [
            {
                title: "Linkshade - A powerful URL shortening service",
                description:
                    "A fast and secure URL shortening service that goes beyond simple redirection. " +
                    "Linkshade allows users to create custom aliases, track real-time click analytics, and handle bulk operations. " +
                    "Securely architected with OAuth 2.0 (Google/GitHub), intelligent rate limiting, and containerized deployment.",
                github: "https://github.com/amadr-95/linkshade",
                link: "https://linksha.de",
                image: "/images/projects/linkshade.png",
                tags: ["JAVA", "SPRING", "POSTGRE", "BOOTSTRAP"],
            },
        ],
        "about.bio": `<p>
          My name is Amador. With a background in Robotics Engineering and 2 years
          of experience in industrial production, I decided to transition
          into software engineering, driven by a passion for logic and problem-solving. <strong>
             It has been the best decision I have ever made</strong
          >.</p>
           <p>
              I started my software career in Spain before relocating to Germany to join 
              one of the <strong>largest companies in Europe</strong>. 
              I contribute to the development and maintenance of a high-volume payments platform that powers
               <strong>millions of transactions</strong>.
           </p>
           <p>
              I stay up to date in the development community. In my spare time, I
              enjoy working out, playing board games, and exploring new technologies;
             because for me, <strong>programming is both a profession and a hobby</strong
              >.
           </p>`,
        "footer.about": "About me",
        "footer.contact": "Contact",
    },
    es: {
        "layout.title": "Portfolio de Amador - Ingeniero de Software",
        "layout.description":
            `Ingeniero de software con más de ${yearsOfExperience} años de experiencia en desarrollo backend, ` +
            "especializado en construir soluciones eficientes, mantenibles y listas para producción.",
        "navbar.experience": "Experiencia",
        "navbar.projects": "Proyectos",
        "navbar.about-me": "Sobre mí",
        "hero.badge": "Trabajando en Zalando",
        "hero.greet": "Hola, soy",
        "hero.rol": "Ingeniero de Software",
        "hero.description": `
          Ingeniero de Software con más de ${yearsOfExperience} años de experiencia creando soluciones backend eficientes y mantenibles y llevando código a producción con <strong>Java</strong>,
           <strong>Spring Boot</strong> y <strong>AWS</strong>.
   `,
        "hero.contact": "Contáctame",
        "hero.resume": "Descargar CV",
        "index.experience": "Experiencia Laboral",
        "index.projects": "Proyectos",
        "index.about": "Sobre mí",
        exp: [
            {
                date: "Agosto 2024 - Presente",
                title: "Software Engineer",
                company: "Zalando Payments GmbH | Dortmund, Alemania",
                description:
                    "Diseño de arquitectura de sistemas de pagos de alto volumen para el sector retail líder en Europa. " +
                    "Especializado en Java, Spring Boot y AWS para entregar infraestructura financiera segura, escalable y fiable.",
                latest: true,
            },
            {
                date: "Marzo 2023 - Julio 2023",
                title: "Java Developer",
                company: "Viafirma | Sevilla, España",
                description:
                    "Diseño y desarrollo de servicios API RESTful utilizando Java y el ecosistema Spring. " +
                    "Gestión de bases de datos relacionales (PostgreSQL, MySQL) e implementación de estrategias de testing con JUnit y Mockito.",
            },
            {
                date: "Mayo 2019 - Marzo 2021",
                title: "Production Engineer",
                company: "Saica Group | Sevilla, España",
                description:
                    "Liderazgo de proyectos de seguridad y eficiencia en España y Portugal. " +
                    "Implementación de metodologías Lean, 5S y análisis de procesos para optimizar flujos de producción y gestión de riesgos.",
            },
            {
                date: "Febrero 2018 - Junio 2018",
                title: "Intern Engineer",
                company: "Idener | Sevilla, España",
                description:
                    "Desarrollo de modelos de Machine Learning y scripts de procesamiento de datos con Python para soporte en proyectos de I+D.",
            },
        ],
        "exp.latest": "Actual",
        projects: [
            {
                title: "Linkshade - Potente acortador de URLs",
                description:
                    "Un servicio de acortamiento de URLs rápido y seguro que va más allá de la simple redirección. " +
                    "Linkshade permite crear alias personalizados, ver analíticas de clics en tiempo real y gestionar operaciones masivas. " +
                    "Arquitectura segura con OAuth 2.0 (Google/GitHub), rate limiting inteligente y despliegue contenerizado.",
                github: "https://github.com/amadr-95/linkshade",
                link: "https://linksha.de",
                image: "/images/projects/linkshade.png",
                tags: ["JAVA", "SPRING", "POSTGRE", "BOOTSTRAP"],
            },
        ],
        "about.bio": `<p>
      Me llamo Amador. Con formación en Ingeniería Robótica y 2 años
      de experiencia en producción industrial, decidí transicionar
      hacia la ingeniería de software, impulsado por mi pasión por la lógica y la resolución de problemas. <strong>
         Ha sido la mejor decisión que he tomado jamás</strong
      >.</p>
       <p>
          Comencé mi carrera como desarrollador en España antes de mudarme a Alemania para unirme a 
          una de las <strong>empresas más grandes de Europa</strong>. 
          Contribuyo al desarrollo y mantenimiento de una plataforma de pagos de alto volumen que procesa <strong>millones de transacciones</strong>.
       </p>
       <p>
          Me mantengo al día en la comunidad de desarrollo. En mi tiempo libre,
          disfruto entrenando, jugando a juegos de mesa y explorando nuevas tecnologías;
         porque para mí, <strong>programar es tanto una profesión como un hobby</strong
          >.
       </p>`,
        "footer.about": "Sobre mí",
        "footer.contact": "Contacto",
    },
} as const;
