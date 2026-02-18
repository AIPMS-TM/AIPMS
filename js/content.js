// =======================
// Contenuti multilingua
// =======================
const content = {
  it: {
    history: "Fondata nel 2016, AIPMS nasce per unire innovazione e progresso, promuovendo una visione futura in cui l’Intelligenza Artificiale opera come alleata dell’umanità, a servizio dello sviluppo, della conoscenza e del progresso collettivo.",
    message: "Il nostro sito è in costruzione. Torna presto a scoprirlo!",
    labLink: `<a href="lab.html">Vai a AIPMS™ Lab</a>`
  },
  en: {
    history: "Founded in 2016, AIPMS was created to unite innovation and progress, promoting a future vision where Artificial Intelligence operates as humanity’s ally, serving development, knowledge, and collective progress.",
    message: "Our website is under construction. Check back soon!",
    labLink: `<a href="lab.html">Go to AIPMS™ Lab</a>`
  },
  de: {
    history: "Gegründet 2016, wurde AIPMS geschaffen, um Innovation und Fortschritt zu vereinen und eine Zukunftsvision zu fördern, in der Künstliche Intelligenz als Verbündete der Menschheit dient.",
    message: "Unsere Website befindet sich im Aufbau. Schauen Sie bald wieder vorbei!",
    labLink: `<a href="lab.html">Zum AIPMS™ Lab</a>`
  }
};


// =======================
// Funzione per cambiare lingua
// =======================
//function setLang(lang) {
  //document.getElementById("history").textContent = content[lang].history;
  //document.getElementById("message").textContent = content[lang].message;

  // Aggiorna lo stato dei bottoni
 // document.querySelectorAll('.lang button').forEach(btn => btn.classList.remove('active'));
 // document.querySelector(`.lang button[onclick="setLang('${lang}')"]`).classList.add('active');
//}

// =======================
// Imposta lingua di default all'apertura
// =======================
//setLang("en");

function setLang(lang) {
  // Aggiorna testo
  document.getElementById("history").textContent = content[lang].history;
  document.getElementById("message").textContent = content[lang].message;

  // Aggiorna stato bottoni usando data-lang
  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) btn.classList.add('active');
  });
}

// Lingua di default
setLang("en");

// Aggiungi listener ai bottoni
document.querySelectorAll('.lang button').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});
