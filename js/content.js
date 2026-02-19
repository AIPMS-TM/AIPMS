// =======================
// Contenuti multilingua
// =======================
const content = {
  it: {
    history: "Fondata nel 2018, AIPMS nasce per unire innovazione e progresso, promuovendo una visione futura in cui l’Intelligenza Artificiale opera come alleata dell’umanità, a servizio dello sviluppo, della conoscenza e del progresso collettivo.",
    message: "Il nostro sito è in costruzione. Torna presto a scoprirlo!",
    labLinkText: "Vai a AIPMS Lab"
  },
  en: {
    history: "Founded in 2018, AIPMS was created to unite innovation and progress, promoting a future vision where Artificial Intelligence operates as humanity’s ally, serving development, knowledge, and collective progress.",
    message: "Our website is under construction. Check back soon!",
    labLinkText: "Go to AIPMS Lab"
  },
  de: {
    history: "Gegründet 2018, wurde AIPMS geschaffen, um Innovation und Fortschritt zu vereinen und eine Zukunftsvision zu fördern, in der Künstliche Intelligenz als Verbündete der Menschheit dient.",
    message: "Unsere Website befindet sich im Aufbau. Schauen Sie bald wieder vorbei!",
    labLinkText: "Zum AIPMS Lab"
  }
};

// =======================
// Funzione per cambiare lingua
// =======================
function setLang(lang) {
  // Aggiorna testi
  document.getElementById("history").textContent = content[lang].history;
  document.getElementById("message").textContent = content[lang].message;

  // Aggiorna link Lab
  const labLinkEl = document.getElementById("lab-link");
  labLinkEl.innerHTML = ""; // pulisce link precedente

  const a = document.createElement("a");
  a.href = "lab.html"; // sempre lo stesso file
  a.textContent = content[lang].labLinkText;

  // GA: aggiungi tracciamento senza rompere il link
  a.classList.add("track-lab");
  a.dataset.lang = lang;

  labLinkEl.appendChild(a);

  // Aggiorna bottoni lingua
  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) btn.classList.add('active');
  });
}

// =======================
// Lingua di default
// =======================
setLang("it");

// =======================
// Listener per bottoni lingua
// =======================
document.querySelectorAll('.lang button').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});
