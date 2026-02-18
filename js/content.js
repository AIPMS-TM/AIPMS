const content = {
  it: {
    history: "Fondata nel 2016, AIPMS nasce per unire innovazione e progresso, promuovendo una visione futura in cui l’Intelligenza Artificiale opera come alleata dell’umanità, a servizio dello sviluppo, della conoscenza e del progresso collettivo.",
    message: "Il nostro sito è in costruzione. Torna presto a scoprirlo!"
  },
  en: {
    history: "Founded in 2016, AIPMS was created to unite innovation and progress, promoting a future vision in which Artificial Intelligence acts as an ally of humanity, serving development, knowledge, and collective progress.",
    message: "Our website is under construction. Check back soon!"
  },
  de: {
    history: "Gegründet 2016, wurde AIPMS geschaffen, um Innovation und Fortschritt zu vereinen, mit einer Vision für die Zukunft, in der Künstliche Intelligenz als Verbündete der Menschheit dient, zur Förderung von Entwicklung, Wissen und kollektiven Fortschritt.",
    message: "Unsere Website befindet sich im Aufbau. Schauen Sie bald wieder vorbei!"
  }
};

function setLang(lang) {
  document.getElementById("history").textContent = content[lang].history;
  document.getElementById("message").textContent = content[lang].message;
}

setLang("it"); // lingua di default
