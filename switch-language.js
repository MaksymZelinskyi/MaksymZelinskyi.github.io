const translations = {
  fr: {
    "title-intro": "À propos de moi",
    "intro-text": "Développeur autodidacte en devenir. J’ai 17 ans mais je maîtrise déjà l’architecture microservices.",
    "title-skills": "Compétences",
    "skills-list": `
       <li>Java, Spring Boot, Hibernate, .NET</li>
       <li>Docker, Git, Swagger, Jasper</li>
	  <liPostgreSQL, Redis, JDBC</li>
       <li>HTML, CSS, Angular</li>
    `,
    "title-projects": "Projets",
    "projects-list": `
      <li>🛒 Boutique en ligne – projet en équipe en architecture microservices</li>
      <li>💬 Réseau social – Spring Boot + Angular (appelez-moi fullstack)</li>
      <li>🔐 API sécurisée avec authentification JWT</li>
      <li>💳 Caisse en MVC – deux versions : Java Servlets + JDBC ; Spring Boot + Hibernate</li>
    `,
    "title-extracurriculars": "🧩 Activités extra-scolaires",
    "extracurriculars-list": `
      <li>🌐 Contribution au site web d’une collectivité ukrainienne – création d’un système de rapports automatiques</li>
      <li>📈 Entraînement régulier en DSA sur LeetCode – plus de 60 problèmes résolus</li>
      <li>🏆 Participation au concours “Les Trophées NSI” – convertisseur texte-image en Python (projet en binôme)</li>
      <li>🏋️ Pratique quotidienne de calisthénics – persévérance et discipline grâce à la barre de traction</li>
    `
  },

  en: {
    "title-intro": "About Me",
    "intro-text": "Self-taught aspiring software engineer. 17 years old but I master microservices architecture.",
    "title-skills": "Skills",
    "skills-list": `
       <li>Java, Spring Boot, Hibernate, .NET</li>
       <li>Docker, Git, Swagger, Jasper</li>
	  <liPostgreSQL, Redis, JDBC</li>
       <li>HTML, CSS, Angular</li>
    `,
    "title-projects": "Projects",
    "projects-list": `
      <li>🛒Online Store - team project with a microservices architecture</li>
      <li>💬 Social Network - Spring Boot + Angular (call me a fullstack developer)</li>
      <li>🔐 API secured with JWT Auth</li>
      <li>💳 Cash Register MVC - two versions: Java Servlets + JDBC; Spring Boot + Hibernate</li>
    `,
    "title-extracurriculars": "🧩 Extracurriculars", 
    "extracurriculars-list": `
      <li>🌐 Contributing to the website of a Ukrainian territorial community – developed an automatic reporting system</li>
      <li>📈 Consistent DSA practice on LeetCode – solved over 60 problems</li>
      <li>🏆 Participated in “Les Trophées NSI” – built a text-image converter in Python with a teammate</li>
      <li>🏋️ Daily calisthenics practice – building persistence and discipline on the pull-up bar</li>
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
