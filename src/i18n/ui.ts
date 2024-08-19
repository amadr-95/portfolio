export const languages = {
	en: {
		code: "en",
		name: "English",
	},
	es: {
		code: "es",
		name: "Español",
	},
	de: {
		code: "de",
		name: "Deutsch",
	},
};

export const defaultLang = "en";

export const showDefaultLang = false;

export const ui = {
	en: {
		"layout.title": "Amador's Portfolio - Software Engineer",
		"layout.description":
			"Software engineer experienced in multiple programming languages and frameworks, with a strong focus on delivering high-quality, efficient code.",
		"navbar.experience": "Experience",
		"navbar.projects": "Projects",
		"navbar.about-me": "About me",
		"hero.badge": "Working at Zalando",
		"hero.greet": "Hey, I'm",
		"hero.rol": "Software Engineer",
		"hero.description":
			"Software engineer experienced in multiple programming languages and frameworks, with a strong focus on delivering high-quality, efficient code.",
		"hero.contact": "Contact me",
		"hero.resume": "Download CV",
		"index.experience": "Work Experience",
		"index.projects": "Projects",
		"index.about": "About me",
		exp: [
			{
				date: "August 2024 - Present",
				title: "Software Engineer",
				company: "Zalando",
				description:
					"Develop, test and secure card payment transactions in the Zalando platform. Working with Java, Spring Boot, AWS, and Kubernetes.",
				latest: true,
			},
			{
				date: "March 2023 - July 2023",
				title: "Java Developer",
				company: "Viafirma",
				description:
					"Design and develop RESTFul API services using Java Spring Framework (Spring Boot, Spring Security, Spring Data JPA/Hibernate). Skills in handling SQL relational databases like PostgreSQL and MySQL, as well as using Git and GitHub. Testing with JUnit and Mockito.",
			},
			{
				date: "May 2019 - March 2021",
				title: "Production Engineer",
				company: "Saica Group",
				description:
					"Responsible for the Saica Group security project in Spain and Portugal. LOTO procedures. Lean, 5S, analysis, changeover times, etc. Supervision of preventive maintenance, risk assessments, and non-conformity management.",
			},
			{
				date: "February 2018 - June 2018",
				title: "Intern Engineer",
				company: "Idener",
				description:
					"Machine learning projects using Python as main programming language, among others.",
			},
		],
		"exp.latest": "Latest",
		projects: [
			{
				title: "Library - Books management system",
				description:
					"Library management system where users can perform different actions based on their role, from CRUD operations on books to search for and borrow them. It also includes an automatic email sender for users who have overdue books. Built from scratch using Java, Jakarta EE, JPA, MySQL and Bootstrap.",
				github: "https://github.com/amadr-95/library-app",
				image: "/images/projects/library-project.webp",
				tags: ["JAVA", "MYSQL", "BOOTSTRAP"],
			},
			{
				title: "Swagger API - User accounts",
				description:
					"API that offers comprehensive documentation and easy-to-use endpoints for user accounts. Built for educational purposes using Java and Spring Boot, with a PostgreSQL database.",
				github: "https://github.com/amadr-95/swagger-account-api",
				image: "/images/projects/swagger-project.webp",
				tags: ["JAVA", "SPRING", "POSTGRE"],
			},
		],
		"about.bio": `<p>
			My name is Amador, I studied Robotic Engineering and worked for 2 years
			as a production engineer. I decided I wanted a change and transitioned
			to the programming world. <strong>
				It has been one of my best decisions</strong
			>.</p>
		    <p>
			    Among my successes, I highlight that during my Higher Degree studies, I
			    helped my classmates learn about <strong>
				Java's Spring Framework</strong
		    	>. I love testing, believe in its importance, and enjoy sharing my
			    knowledge about it.
		    </p>
		    <p>
			    I stay up to date in the development community. In my spare time I
			    enjoy working out, playing boardgames and learning new programming
			    languages; <strong>
				because besides being my job, I consider it as a hobby</strong
		    	>.
		    </p>`,
		"footer.about": "About me",
		"footer.contact": "Contact",
	},
	es: {
		"layout.title": "Portfolio de Amador - Ingeniero de Software",
		"layout.description":
			"Ingeniero de software con experiencia en múltiples lenguajes de programación y frameworks, con un fuerte enfoque en el desarrollo de código eficiente y de calidad.",
		"navbar.experience": "Experiencia",
		"navbar.projects": "Proyectos",
		"navbar.about-me": "Sobre",
		"hero.badge": "Trabajando en Zalando",
		"hero.greet": "Hey, soy",
		"hero.rol": "Ingeniero de Software",
		"hero.description":
			"Ingeniero de software con experiencia en múltiples lenguajes de programación y frameworks, con un fuerte enfoque en el desarrollo de código eficiente y de calidad.",
		"hero.contact": "Contáctame",
		"hero.resume": "Descargar CV",
		"index.experience": "Experiencia",
		"index.projects": "Proyectos",
		"index.about": "Sobre mí",
		exp: [
			{
				date: "Agosto 2024 - Presente",
				title: "Ingeniero de Software",
				company: "Zalando",
				description:
					"Desarrollar, testear y asegurar las transacciones de pago con tarjeta en la plataforma Zalando. Trabajando con Java, Spring Boot, AWS y Kubernetes.",
				latest: true,
			},
			{
				date: "Marzo 2023 - Julio 2023",
				title: "Desarrollador Java",
				company: "Viafirma",
				description:
					"Diseño y desarrollo de servicios de API RESTful utilizando el Framework Java Spring (Spring Boot, Spring Security, Spring Data JPA/Hibernate). Habilidades en el manejo de bases de datos relacionales SQL como PostgreSQL y MySQL, así como el uso de Git y GitHub. Pruebas con JUnit y Mockito.",
			},
			{
				date: "Mayo 2019 - Marzo 2021",
				title: "Ingeniero de Producción",
				company: "Grupo Saica",
				description:
					"Responsable del proyecto de seguridad del Grupo Saica en España y Portugal. Procedimientos LOTO. Lean, 5S, análisis, tiempos de cambio, etc. Supervisión del mantenimiento preventivo, evaluaciones de riesgos y gestión de no conformidades.",
			},
			{
				date: "Febrero 2018 - Junio 2018",
				title: "Ingeniero en Prácticas",
				company: "Idener",
				description:
					"Proyectos de aprendizaje automático utilizando Python como lenguaje de programación principal, entre otros.",
			},
		],
		"exp.latest": "Último",
		projects: [
			{
				title: "Library - Sistema de gestión para libros",
				description:
					"Sistema de gestión de bibliotecas donde los usuarios pueden realizar diferentes acciones según su rol, desde operaciones CRUD en libros hasta buscarlos y pedirlos prestados. Envío automático de emails para usuarios con libros vencidos. Desarrollado desde cero con Java, Jakarta EE, JPA, MySQL y Bootstrap.",
				github: "https://github.com/amadr-95/library-app",
				image: "/images/projects/library-project.webp",
				tags: ["JAVA", "MYSQL", "BOOTSTRAP"],
			},
			{
				title: "Swagger API - Cuentas de usuario",
				description:
					"API que ofrece documentación completa y endpoints fáciles de usar para cuentas de usuario. Desarrollada con fines educativos utilizando Java y Spring Boot, con una base de datos PostgreSQL.",
				github: "https://github.com/amadr-95/swagger-account-api",
				image: "/images/projects/swagger-project.webp",
				tags: ["JAVA", "SPRING", "POSTGRE"],
			},
		],
		"about.bio": `<p>
            Mi nombre es Amador, estudié Ingeniería Robótica y trabajé durante 2 años
            como ingeniero de producción. Decidí que quería un cambio y me pasé al
            mundo de la programación. <strong>
                Ha sido una de mis mejores decisiones</strong
            >.</p>
            <p>
                Entre mis éxitos, destaco que durante mis estudios de Grado Superior, 
                ayudé a mis compañeros a aprender sobre el <strong>
                Framework Spring de Java</strong
            >. Me encanta el testing, creo en su importancia y disfruto compartiendo 
            mi conocimiento al respecto.
            </p>
            <p>
                Me mantengo al día en la comunidad de desarrollo. En mi tiempo libre 
                disfruto haciendo ejercicio, jugando a juegos de mesa y aprendiendo 
                nuevos lenguajes de programación; <strong>
                porque además de ser mi trabajo, lo considero un hobby</strong
            >.
            </p>`,
		"footer.about": "Sobre mí",
		"footer.contact": "Contáctame",
	},
	de: {
		"layout.title": "Amadors Portfolio - Software-Ingenieur",
		"layout.description":
			"Software-Ingenieur mit Erfahrung in mehreren Programmiersprachen und Frameworks, mit starkem Fokus auf die Bereitstellung von hochwertigem und effizientem Code.",
		"navbar.experience": "Erfahrung",
		"navbar.projects": "Projekte",
		"navbar.about-me": "Über mich",
		"hero.badge": "Arbeitet bei Zalando",
		"hero.greet": "Hey, ich bin",
		"hero.rol": "Software-Ingenieur",
		"hero.description":
			"Software-Ingenieur mit Erfahrung in mehreren Programmiersprachen und Frameworks, mit starkem Fokus auf die Bereitstellung von hochwertigem und effizientem Code.",
		"hero.contact": "Kontaktiere mich",
		"hero.resume": "CV herunterladen",
		"index.experience": "Berufserfahrung",
		"index.projects": "Projekte",
		"index.about": "Über mich",
		exp: [
			{
				date: "August 2024 - Heute",
				title: "Software-Ingenieur",
				company: "Zalando",
				description:
					"Entwickeln, testen und sichern Sie Kartenzahlungstransaktionen auf der Zalando-Plattform. Arbeiten mit Java, Spring Boot, AWS und Kubernetes.",
				latest: true,
			},
			{
				date: "März 2023 - Juli 2023",
				title: "Java Entwickler",
				company: "Viafirma",
				description:
					"Entwurf und Entwicklung von RESTFul API-Diensten mit dem Java Spring Framework (Spring Boot, Spring Security, Spring Data JPA/Hibernate). Kenntnisse im Umgang mit relationalen SQL-Datenbanken wie PostgreSQL und MySQL sowie der Verwendung von Git und GitHub. Tests mit JUnit und Mockito.",
			},
			{
				date: "Mai 2019 - März 2021",
				title: "Produktionsingenieur",
				company: "Saica Group",
				description:
					"Verantwortlich für das Sicherheitsprojekt der Saica Group in Spanien und Portugal. LOTO-Verfahren. Lean, 5S, Analyse, Rüstzeiten, etc. Aufsicht über die vorbeugende Wartung, Risikobewertungen und das Management von Nichtkonformitäten.",
			},
			{
				date: "Februar 2018 - Juni 2018",
				title: "Praktikant Ingenieur",
				company: "Idener",
				description:
					"Maschinelles Lernen Projekte mit Python als Hauptprogrammiersprache, unter anderem.",
			},
		],
		"exp.latest": "Neueste",
		projects: [
			{
				title: "Bibliothek - Buchverwaltungssystem",
				description:
					"Bibliotheksverwaltungssystem, in dem Benutzer je nach ihrer Rolle verschiedene Aktionen ausführen können, von CRUD-Operationen an Büchern bis hin zur Suche und Ausleihe. Es umfasst auch einen automatischen E-Mail-Sender für Benutzer mit überfälligen Büchern. Von Grund auf neu entwickelt mit Java, Jakarta EE, JPA, MySQL und Bootstrap.",
				github: "https://github.com/amadr-95/library-app",
				image: "/images/projects/library-project.webp",
				tags: ["JAVA", "MYSQL", "BOOTSTRAP"],
			},
			{
				title: "Swagger API - Benutzerkonten",
				description:
					"API, die umfassende Dokumentation und benutzerfreundliche Endpunkte für Benutzerkonten bietet. Zu Bildungszwecken entwickelt mit Java und Spring Boot sowie einer PostgreSQL-Datenbank.",
				github: "https://github.com/amadr-95/swagger-account-api",
				image: "/images/projects/swagger-project.webp",
				tags: ["JAVA", "SPRING", "POSTGRE"],
			},
		],
		"about.bio": `<p>
        Mein Name ist Amador, ich habe Robotik-Ingenieurwesen studiert und zwei Jahre
        als Produktionsingenieur gearbeitet. Ich entschied, dass ich eine Veränderung wollte und bin in die Programmierwelt gewechselt. <strong>
            Es war eine meiner besten Entscheidungen</strong
        >.</p>
        <p>
            Zu meinen Erfolgen gehört, dass ich während meines Studiums für den höheren Abschluss meinen Kommilitonen beim Lernen über das <strong>
            Spring Framework von Java</strong
            > geholfen habe. Ich liebe das Testen, glaube an seine Bedeutung und teile gerne mein
            Wissen darüber.
        </p>
        <p>
            Ich halte mich in der Entwicklergemeinschaft auf dem Laufenden. In meiner Freizeit
            mache ich gerne Sport, spiele Brettspiele und lerne neue Programmiersprachen; <strong>
            denn neben meiner Arbeit betrachte ich es als Hobby</strong
            >.
        </p>`,
		"footer.about": "Über mich",
		"footer.contact": "Kontakt",
	},
} as const;
