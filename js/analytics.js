// Carica Google Analytics dinamicamente
const GA_ID = "G-KYE302LRPP"; // <-- metti il tuo ID da google analytics creato con CHDocumenti

// Script principale GA
const script1 = document.createElement("script");
script1.async = true;
script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
document.head.appendChild(script1);

// Configurazione GA
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', GA_ID);

// -----------------------------
// EVENTI PERSONALIZZATI
// -----------------------------

// 1️⃣ Traccia click su pulsanti con classe .track-contact
document.addEventListener("click", function(e) {
  if (e.target.closest(".track-contact")) {
    gtag('event', 'click_contatto', {
      event_category: 'engagement',
      event_label: 'pulsante_contatti'
    });
  }
});

// 2️⃣ Traccia click su email
document.addEventListener("click", function(e) {
  if (e.target.closest("a[href^='mailto:']")) {
    gtag('event', 'click_email', {
      event_category: 'engagement',
      event_label: 'email'
    });
  }
});

// 3️⃣ Traccia scroll al 50%
let scrollTracked = false;

window.addEventListener("scroll", function() {
  if (!scrollTracked) {
    const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
    if (scrollPercent > 0.5) {
      gtag('event', 'scroll_50_percent', {
        event_category: 'engagement',
        event_label: 'scroll'
      });
      scrollTracked = true;
    }
  }
});
