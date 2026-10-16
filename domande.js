// Le 30 domande del Gran Tour d'Italia.
// Per cambiarne una basta modificare il testo qui sotto e ricaricare la pagina.
//
// tipo:  "multipla" (4 opzioni) · "vf" (vero/falso) · "numero" (vince chi si avvicina di più)
//        "indizi" (indovina con 3 indizi) · "ordina" (mettere in ordine)
// modo:  "singola" = risponde la squadra di turno · "entrambe" = rispondono tutte e due
// corretta: posizione della risposta giusta nelle opzioni, contando da 0
// difficile: true = se indovinate la vincita vale il doppio

window.TAPPE = {
  nord: "Il Nord",
  centro: "Il Centro",
  sud: "Il Sud e le Isole",
  finale: "La Finale"
};

window.DOMANDE = [
  // ───────────── IL NORD ─────────────
  {
    tappa: "nord", regione: "Valle d'Aosta", categoria: "Geografia",
    tipo: "multipla", modo: "singola",
    testo: "La Valle d'Aosta confina con due Stati esteri. Quali?",
    opzioni: ["Francia e Svizzera", "Svizzera e Austria", "Francia e Principato di Monaco", "Austria e Slovenia"],
    corretta: 0,
    curiosita: "È la regione più piccola e meno popolosa d'Italia, ed è bilingue: il francese è lingua ufficiale accanto all'italiano."
  },
  {
    tappa: "nord", regione: "Piemonte", categoria: "Storia",
    tipo: "multipla", modo: "singola",
    testo: "Quale città fu la prima capitale del Regno d'Italia, nel 1861?",
    opzioni: ["Firenze", "Torino", "Milano", "Roma"],
    corretta: 1,
    curiosita: "Torino fu capitale dal 1861 al 1865. Poi toccò a Firenze fino al 1871, e solo dopo a Roma."
  },
  {
    tappa: "nord", regione: "Lombardia", categoria: "Arte e cultura",
    tipo: "numero", modo: "entrambe",
    testo: "In che anno è stato inaugurato il Teatro alla Scala di Milano?",
    valore: 1778, risposta: "1778",
    curiosita: "Aprì il 3 agosto 1778 con un'opera di Antonio Salieri. Fu costruito dopo che un incendio aveva distrutto il vecchio teatro di corte."
  },
  {
    tappa: "nord", regione: "Trentino-Alto Adige", categoria: "Lingue e tradizioni",
    tipo: "vf", modo: "singola",
    testo: "In Alto Adige la maggior parte degli abitanti ha come lingua madre il tedesco.",
    opzioni: ["Vero", "Falso"],
    corretta: 0,
    curiosita: "Circa due abitanti su tre parlano tedesco. In alcune valli si parla anche il ladino, una lingua antichissima di origine latina."
  },
  {
    tappa: "nord", regione: "Veneto", categoria: "Arte",
    tipo: "multipla", modo: "singola",
    testo: "Chi ha affrescato la Cappella degli Scrovegni a Padova?",
    opzioni: ["Cimabue", "Andrea Mantegna", "Giotto", "Tiziano"],
    corretta: 2,
    curiosita: "Giotto la dipinse all'inizio del Trecento. Dal 2021 gli affreschi trecenteschi di Padova sono Patrimonio UNESCO."
  },
  {
    tappa: "nord", regione: "Friuli-Venezia Giulia", categoria: "Geografia",
    tipo: "indizi", modo: "singola", difficile: true,
    testo: "Indovinate la città con questi tre indizi.",
    indizi: [
      "Sul mare c'è un castello bianco costruito per Massimiliano d'Asburgo.",
      "Qui soffia la bora, un vento che può superare i 150 km orari.",
      "Ha la piazza più grande d'Europa affacciata sul mare."
    ],
    risposta: "Trieste",
    curiosita: "Il castello è Miramare e la piazza è Piazza Unità d'Italia. Trieste è tornata definitivamente all'Italia solo nel 1954."
  },
  {
    tappa: "nord", regione: "Liguria", categoria: "Cucina",
    tipo: "multipla", modo: "singola",
    testo: "Quale di questi ingredienti NON fa parte del pesto alla genovese tradizionale?",
    opzioni: ["Pinoli", "Pecorino", "Aglio", "Burro"],
    corretta: 3,
    curiosita: "Per tradizione il pesto si fa nel mortaio di marmo, con un pestello di legno. Da qui il nome: pestare."
  },
  {
    tappa: "nord", regione: "Emilia-Romagna", categoria: "Storia",
    tipo: "numero", modo: "entrambe",
    testo: "In che anno è nata l'Università di Bologna, la più antica del mondo occidentale?",
    valore: 1088, risposta: "1088",
    curiosita: "La data del 1088 fu fissata nell'Ottocento da una commissione di studiosi guidata dal poeta Giosuè Carducci."
  },
  {
    tappa: "nord", regione: "Lombardia", categoria: "Geografia",
    tipo: "multipla", modo: "singola",
    testo: "Qual è il lago più grande d'Italia?",
    opzioni: ["Lago Maggiore", "Lago di Como", "Lago Trasimeno", "Lago di Garda"],
    corretta: 3,
    curiosita: "Il Garda è il più esteso, ma il più profondo è il Lago di Como: in alcuni punti supera i 400 metri."
  },
  {
    tappa: "nord", regione: "Emilia-Romagna", categoria: "Personaggi",
    tipo: "multipla", modo: "singola",
    testo: "In quale città è nato Enzo Ferrari, il fondatore della casa automobilistica?",
    opzioni: ["Maranello", "Bologna", "Modena", "Parma"],
    corretta: 2,
    curiosita: "Nacque a Modena nel 1898. La Ferrari ha sede a Maranello, a una ventina di chilometri."
  },

  // ───────────── IL CENTRO ─────────────
  {
    tappa: "centro", regione: "Toscana", categoria: "Arte",
    tipo: "multipla", modo: "singola",
    testo: "Chi ha scolpito il David conservato alla Galleria dell'Accademia di Firenze?",
    opzioni: ["Donatello", "Michelangelo", "Gian Lorenzo Bernini", "Benvenuto Cellini"],
    corretta: 1,
    curiosita: "Michelangelo lo finì nel 1504, a 29 anni, da un unico blocco di marmo che altri scultori avevano lasciato a metà."
  },
  {
    tappa: "centro", regione: "Toscana", categoria: "Cucina",
    tipo: "vf", modo: "singola",
    testo: "Il pane toscano tradizionale si fa senza sale.",
    opzioni: ["Vero", "Falso"],
    corretta: 0,
    curiosita: "Si chiama pane «sciocco». Una delle spiegazioni più raccontate: nel Medioevo il sale costava troppo per le tasse."
  },
  {
    tappa: "centro", regione: "Umbria", categoria: "Personaggi",
    tipo: "multipla", modo: "singola",
    testo: "In quale città umbra è nato San Francesco, patrono d'Italia?",
    opzioni: ["Perugia", "Gubbio", "Spoleto", "Assisi"],
    corretta: 3,
    curiosita: "Dal 1939 è patrono d'Italia insieme a Santa Caterina da Siena."
  },
  {
    tappa: "centro", regione: "Lazio", categoria: "Storia",
    tipo: "numero", modo: "entrambe",
    testo: "Secondo la tradizione, in che anno avanti Cristo è stata fondata Roma?",
    valore: 753, risposta: "753 a.C.",
    curiosita: "Il giorno è il 21 aprile: ancora oggi a Roma si festeggia il «Natale di Roma»."
  },
  {
    tappa: "centro", regione: "Marche", categoria: "Personaggi",
    tipo: "multipla", modo: "singola", difficile: true,
    testo: "Quale di questi personaggi NON è nato nelle Marche?",
    opzioni: ["Giacomo Leopardi", "Raffaello", "Gioachino Rossini", "Giuseppe Verdi"],
    corretta: 3,
    curiosita: "Verdi è emiliano, nato vicino a Busseto. Leopardi è di Recanati, Raffaello di Urbino, Rossini di Pesaro. E le Marche sono l'unica regione con il nome al plurale."
  },
  {
    tappa: "centro", regione: "Lazio", categoria: "Geografia",
    tipo: "vf", modo: "singola",
    testo: "Il comune di Roma è più grande di Milano, Napoli e Torino messe insieme.",
    opzioni: ["Vero", "Falso"],
    corretta: 0,
    curiosita: "Roma misura quasi 1.300 km², le altre tre insieme circa 430. Ed è l'unica città al mondo che ha dentro di sé un altro Stato: il Vaticano."
  },
  {
    tappa: "centro", regione: "Abruzzo", categoria: "Geografia",
    tipo: "multipla", modo: "singola", difficile: true,
    testo: "Qual è la vetta più alta di tutti gli Appennini?",
    opzioni: ["Monte Amaro (Majella)", "Corno Grande (Gran Sasso)", "Monte Vettore", "Monte Cimone"],
    corretta: 1,
    curiosita: "Il Corno Grande arriva a 2.912 metri. Sotto la cima c'è il Calderone, per anni considerato il ghiacciaio più a sud d'Europa."
  },
  {
    tappa: "centro", regione: "Molise", categoria: "Storia",
    tipo: "multipla", modo: "singola",
    testo: "Fino al 1963 il Molise formava un'unica regione insieme a…",
    opzioni: ["Campania", "Puglia", "Abruzzo", "Lazio"],
    corretta: 2,
    curiosita: "La regione si chiamava «Abruzzi e Molise». Il Molise è la seconda regione più piccola d'Italia, dopo la Valle d'Aosta."
  },
  {
    tappa: "centro", regione: "Centro Italia", categoria: "Geografia",
    tipo: "ordina", modo: "singola", difficile: true,
    testo: "Mettete queste città in ordine da nord a sud.",
    mostra: ["Perugia", "Roma", "Firenze", "Siena"],
    risposta: "Firenze → Siena → Perugia → Roma",
    curiosita: "Siena e Perugia sono quasi alla stessa altezza: Siena è più a nord di una ventina di chilometri."
  },

  // ───────────── IL SUD E LE ISOLE ─────────────
  {
    tappa: "sud", regione: "Campania", categoria: "Cucina",
    tipo: "multipla", modo: "singola",
    testo: "In onore di quale regina fu chiamata la pizza Margherita?",
    opzioni: ["Maria Carolina d'Asburgo", "Margherita di Savoia", "Elena del Montenegro", "Maria José del Belgio"],
    corretta: 1,
    curiosita: "Secondo la tradizione, nel 1889 il pizzaiolo Raffaele Esposito la preparò con i colori della bandiera: pomodoro, mozzarella e basilico."
  },
  {
    tappa: "sud", regione: "Campania", categoria: "Storia",
    tipo: "numero", modo: "entrambe",
    testo: "In che anno dopo Cristo l'eruzione del Vesuvio ha sepolto Pompei?",
    valore: 79, risposta: "79 d.C.",
    curiosita: "Sappiamo com'è andata grazie a due lettere di Plinio il Giovane, che vide l'eruzione dall'altra parte del golfo. Suo zio, Plinio il Vecchio, morì nei soccorsi."
  },
  {
    tappa: "sud", regione: "Puglia", categoria: "Arte e tradizioni",
    tipo: "multipla", modo: "singola",
    testo: "Come si chiamano le tipiche case con il tetto a cono di Alberobello?",
    opzioni: ["Sassi", "Trulli", "Nuraghi", "Dammusi"],
    corretta: 1,
    curiosita: "Sono Patrimonio UNESCO dal 1996. Le altre tre risposte esistono davvero: i Sassi sono a Matera, i nuraghi in Sardegna, i dammusi a Pantelleria."
  },
  {
    tappa: "sud", regione: "Sicilia", categoria: "Geografia",
    tipo: "multipla", modo: "singola",
    testo: "Qual è il vulcano attivo più alto d'Europa?",
    opzioni: ["Vesuvio", "Stromboli", "Etna", "Vulcano"],
    corretta: 2,
    curiosita: "L'Etna supera i 3.300 metri, ma la sua altezza cambia con le eruzioni. Dal 2013 è Patrimonio UNESCO."
  },
  {
    tappa: "sud", regione: "Basilicata", categoria: "Storia e cultura",
    tipo: "vf", modo: "singola",
    testo: "Matera è stata Capitale europea della cultura nel 2019.",
    opzioni: ["Vero", "Falso"],
    corretta: 0,
    curiosita: "Negli anni Cinquanta i Sassi erano chiamati «vergogna nazionale» e furono svuotati. Oggi sono Patrimonio UNESCO e set di tanti film."
  },
  {
    tappa: "sud", regione: "Sicilia", categoria: "Cucina",
    tipo: "vf", modo: "singola",
    testo: "A Palermo si dice «arancina», al femminile.",
    opzioni: ["Vero", "Falso"],
    corretta: 0,
    curiosita: "A Palermo è arancina, a Catania arancino. L'Accademia della Crusca ha detto che sono giuste tutte e due."
  },
  {
    tappa: "sud", regione: "Calabria", categoria: "Arte",
    tipo: "multipla", modo: "singola",
    testo: "In quale città si trovano oggi i Bronzi di Riace?",
    opzioni: ["Catanzaro", "Crotone", "Reggio Calabria", "Napoli"],
    corretta: 2,
    curiosita: "Li trovò in mare un sub in vacanza, il 16 agosto 1972. Sono statue greche di circa 2.500 anni fa."
  },
  {
    tappa: "sud", regione: "Sardegna", categoria: "Storia",
    tipo: "multipla", modo: "singola",
    testo: "Come si chiamano le antiche torri di pietra a forma di cono tipiche della Sardegna?",
    opzioni: ["Menhir", "Trulli", "Nuraghi", "Torri saracene"],
    corretta: 2,
    curiosita: "In Sardegna ce ne sono più di 7.000. Il più famoso, Su Nuraxi di Barumini, è Patrimonio UNESCO dal 1997."
  },
  {
    tappa: "sud", regione: "Sicilia", categoria: "Storia",
    tipo: "numero", modo: "entrambe",
    testo: "In che anno Garibaldi e i Mille sbarcarono a Marsala?",
    valore: 1860, risposta: "1860",
    curiosita: "Erano poco più di mille volontari, partiti da Quarto, vicino a Genova. Sbarcarono l'11 maggio 1860."
  },
  {
    tappa: "sud", regione: "Sardegna e isole", categoria: "Geografia",
    tipo: "ordina", modo: "singola", difficile: true,
    testo: "Mettete queste isole in ordine di grandezza, dalla più grande alla più piccola.",
    mostra: ["Corsica", "Sicilia", "Cipro", "Sardegna"],
    risposta: "Sicilia → Sardegna → Cipro → Corsica",
    curiosita: "Sicilia e Sardegna sono le due isole più grandi del Mediterraneo. Fra Cipro e la Corsica la differenza è piccola: circa 600 km²."
  },

  // ───────────── LA FINALE ─────────────
  {
    tappa: "finale", regione: "Tutta Italia", categoria: "Geografia",
    tipo: "multipla", modo: "entrambe",
    testo: "Qual è l'unica regione italiana che non tocca il mare e non confina con nessuno Stato estero?",
    opzioni: ["Molise", "Basilicata", "Umbria", "Abruzzo"],
    corretta: 2,
    curiosita: "Per questo l'Umbria è chiamata «il cuore verde d'Italia». Le altre regioni senza mare (Valle d'Aosta, Piemonte, Lombardia, Trentino-Alto Adige) confinano tutte con altri Stati."
  }
];

// Gli imprevisti: ne escono 4 a caso durante la partita.
window.IMPREVISTI = [
  { titolo: "Multa sul Raccordo Anulare", testo: "Eccesso di velocità tornando da Fiumicino.", effetto: "soldi", importo: -150 },
  { titolo: "Tartufo bianco d'Alba", testo: "Il vostro cane ha fiuto: lo rivendete al mercato.", effetto: "soldi", importo: 200 },
  { titolo: "Acqua alta a Venezia", testo: "Stivali nuovi e un taxi d'acqua per arrivare in albergo.", effetto: "soldi", importo: -100 },
  { titolo: "Terno sulla ruota di Napoli", testo: "La smorfia non sbaglia mai.", effetto: "soldi", importo: 250 },
  { titolo: "Controllore sul Frecciarossa", testo: "Il biglietto era per il treno di ieri.", effetto: "soldi", importo: -120 },
  { titolo: "Eredità dello zio calabrese", testo: "Vi ha lasciato un uliveto e un po' di contanti.", effetto: "soldi", importo: 150 },
  { titolo: "Pranzo della domenica dalla nonna", testo: "Portate le paste agli avversari: costano 100 €.", effetto: "regalo", importo: 100 },
  { titolo: "Il brigante della Lucania", testo: "Prende 200 € alla squadra più ricca e li dà a quella più povera.", effetto: "brigante", importo: 200 },
  { titolo: "Valigie scambiate a Roma Termini", testo: "Le due squadre si scambiano le casse!", effetto: "scambio" },
  { titolo: "Asta a Porta Portese", testo: "Le squadre fanno un'offerta segreta. Chi offre di più paga, e la prossima domanda a cui risponde vale il triplo se indovina.", effetto: "asta" }
];
