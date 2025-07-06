 const translations = {
      fr: {
  "title-intro": "À propos de moi",
  "intro-text": "Développeur autodidacte en devenir. J’ai 17 ans mais je maîtrise déjà l’architecture microservices.",
  "title-skills": "Compétences",
  "skills-list": `
    <li>Java, Spring Boot, Hibernate</li>
    <li>Docker, Git, Swagger</li>
    <li>HTML, CSS, Angular</li>
  `,
  "title-projects": "Projets",
  "projects-list": `
    <li>🛒 Boutique en ligne – projet en équipe en architecture microservices</li>
    <li>💬 Réseau social – Spring Boot + Angular (appelez-moi fullstack)</li>
    <li>🔐 API sécurisée avec authentification JWT</li>
    <li>💳 Caisse en MVC – deux versions : Java Servlets + JDBC ; Spring Boot + Hibernate</li>
  `
},

      en: {
        "title-intro": "About Me",
        "intro-text": "Self-taugth aspiring software engineer. 17 years old but I master microservices architecure.",
        "title-skills": "Skills",
        "skills-list": `
          <li>Java, Spring Boot, Hibernate</li>
          <li>Docker, Git, Swagger</li>
          <li>HTML, CSS, Angular</li>
        `,
        "title-projects": "Projects",
        "projects-list": `
          <li>🛒Online Store - team project with a microservices architecture</li>
          <li>💬  Social Network - Spring Boot + Angular(call me a fullstack developer)</li>
          <li>🔐 API secured with JWT Auth</li>
          <li>💳 Cash Register MVC - two versions: Java Servlets + JDBC; Spring Boot + Hibernate</li>
        `
      }
    };


document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.startsWith("fr") ? "fr" : "en";
  setLanguage(userLang);
}); 


function setLanguage(lang) {
	for(const id in translations[lang]) {
		const element = document.getElementById(id);
		if(element) {
			element.innerHTML = translations[lang][id];
		}
	}
}