// =======================
// Contenuti multilingua
// =======================
const content = {
  ru: {
    history: "Основанная в 2016 году, AIPMS была создана для объединения инноваций и прогресса, продвигая видение будущего, в котором искусственный интеллект выступает союзником человечества, служа развитию, знаниям и коллективному прогрессу.",
    message: "Наш сайт находится в разработке. Скоро возвращайтесь!",
    labLink: `<a href="lab.html">Перейти в AIPMS™ Lab</a>`
  },
  ar: {
    history: "تأسست AIPMS في عام 2016 بهدف توحيد الابتكار والتقدم، وتعزيز رؤية مستقبلية يعمل فيها الذكاء الاصطناعي كحليف للإنسانية في خدمة التطور والمعرفة والتقدم الجماعي.",
    message: "موقعنا قيد الإنشاء. عد قريبًا!",
    labLink: `<a href="lab.html">الانتقال إلى مختبر AIPMS™</a>`
  },
  zh: {
    history: "AIPMS 成立于 2016 年，旨在融合创新与进步，推动一种未来愿景，即人工智能作为人类的盟友，服务于发展、知识与集体进步。",
    message: "我们的网站正在建设中。敬请期待！",
    labLink: `<a href="lab.html">进入 AIPMS™ 实验室</a>`
  }
};

// =======================
// Funzione per cambiare lingua
// =======================
function setLang(lang) {

  // Gestione direzione testo (RTL per arabo)
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }

  // Aggiorna testo
  document.getElementById("history").textContent = content[lang].history;
  document.getElementById("message").textContent = content[lang].message;

  // Aggiorna link
  document.getElementById("lab-link").innerHTML = content[lang].labLink;

  // Aggiorna stato bottoni
  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) btn.classList.add('active');
  });
}

// =======================
// Lingua di default
// =======================
setLang("ru");

// =======================
// Listener per click sui bottoni lingua
// =======================
document.querySelectorAll('.lang button').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});
