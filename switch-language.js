const translations = {
  fr: {
    "title-intro": "À propos de moi",
    "intro-text": "Développeur autodidacte en devenir. J’ai 17 ans mais je maîtrise déjà l’architecture microservices.",
    "title-skills": "Compétences",
    "skills-list": `
       <li>Java, Spring Boot, Hibernate, .NET</li>
       <li>Docker, Git, Swagger, Jasper</li>
	  <li>PostgreSQL, Redis, JDBC</li>
       <li>HTML, CSS, Angular</li>
    `,
    "title-projects": "Projets",
    "projects-list": `
  <li>🛒 <a href="https://github.com/Hennadiii/Online-Store-562team" target="_blank" class="text-blue-600 underline">Boutique en ligne</a> – projet en équipe en architecture microservices</li>
  <li>💬 <a href="https://github.com/MaksymZelinskyi/my_social_media" target="_blank" class="text-blue-600 underline">Réseau social</a> – Spring Boot + Angular (appelez-moi fullstack)</li>
  <li>🔐 <a href="https://github.com/MaksymZelinskyi/jwt-demo" target="_blank" class="text-blue-600 underline">API sécurisée avec JWT Auth</a> - Ici j'ai appris à mettre en place la sécurité JWT</li>
  <li>💳 <a href="https://github.com/MaksymZelinskyi/cash-register_spring" target="_blank" class="text-blue-600 underline">Caisse en MVC</a> – deux versions : Java Servlets + JDBC ; Spring Boot + Hibernate</li>
    `,
    "title-extracurriculars": "🧩 Activités extra-scolaires",
    "extracurriculars-list": `
      <li>🌐 Contribution au site web d’une collectivité ukrainienne – création d’un système de rapports automatiques</li>
      <li>📈 Entraînement régulier en DSA sur LeetCode – plus de 60 problèmes résolus</li>
      <li>🏆 Participation au concours “Les Trophées NSI” – convertisseur texte-image en Python (projet en binôme)</li>
      <li>🏋️ Pratique quotidienne de calisthénics – persévérance et discipline grâce à la barre de traction</li>
    `,
"title-references": "📇 Références",
    "references-list": `
      <li>📧 zelinskyimaksym07@gmail.com</li>
      <li>📞 +33 7 67 45 85 10</li>
      <li>📍 Narbonne, France</li>
      <li>🔗 <a href=\"https://www.linkedin.com/in/maksym-zelinskyi-7943a2312/\" target=\"_blank\" class=\"text-blue-600 underline\">LinkedIn</a></li>
    `
  },

  en: {
    "title-intro": "About Me",
    "intro-text": "Self-taught aspiring software engineer. 17 years old but I master microservices architecture.",
    "title-skills": "Skills",
    "skills-list": `
       <li>Java, Spring Boot, Hibernate, .NET</li>
       <li>Docker, Git, Swagger, Jasper</li>
	  <li>PostgreSQL, Redis, JDBC</li>
       <li>HTML, CSS, Angular</li>
    `,
    "title-projects": "Projects",
    "projects-list": `
  <li>🛒 <a href="https://github.com/Hennadiii/Online-Store-562team" target="_blank" class="text-blue-600 underline">Online Store</a> – team project using microservices architecture</li>
<li>💬 <a href="https://github.com/MaksymZelinskyi/my_social-media" target="_blank" class="text-blue-600 underline">Social Network</a> – Spring Boot + Angular (call me fullstack)</li>
<li>🔐 <a href="https://github.com/MaksymZelinskyi/jwt-demo" target="_blank" class="text-blue-600 underline">JWT-secured API</a> - Here I learned how to implement JWT security</li>
<li>💳 <a href="https://github.com/MaksymZelinskyi/cash-register_spring" target="_blank" class="text-blue-600 underline">Cash Register (MVC)</a> – two versions: Java Servlets + JDBC; Spring Boot + Hibernate</li>

`,
    "title-extracurriculars": "🧩 Extracurriculars", 
    "extracurriculars-list": `
      <li>🌐 Contributing to the website of a Ukrainian territorial community – developed an automatic reporting system</li>
      <li>📈 Consistent DSA practice on LeetCode – solved over 60 problems</li>
      <li>🏆 Participated in “Les Trophées NSI” – built a text-image converter in Python with a teammate</li>
      <li>🏋️ Daily calisthenics practice – building persistence and discipline on the pull-up bar</li>
    `,
"title-references": "📇 References",
    "references-list": `
      <li>📧 zelinskyimaksym07@gmail.com</li>
      <li>📞 +33 7 67 45 85 10</li>
      <li>📍 Narbonne, France</li>
      <li>🔗 <a href=\"https://www.linkedin.com/in/maksym-zelinskyi-7943a2312/\" target=\"_blank\" class=\"text-blue-600 underline\">LinkedIn</a></li>
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
