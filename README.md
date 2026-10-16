# Gran Tour d'Italia

Un quiz a squadre sulle regioni italiane, con le puntate. Due squadre partono con la stessa cassa e vince chi alla fine ha più soldi.

- **Gioca:** https://josiahcatch.github.io/gran-tour-italia/
- **Foglio del conduttore** (con le risposte, da aprire sul telefono): https://josiahcatch.github.io/gran-tour-italia/conduttore.html

30 domande in quattro tappe (il Nord, il Centro, il Sud e le Isole, la Finale). Una partita dura circa un'ora.

## Come si prepara

1. Aprite il link del gioco sul PC collegato alla TV, a schermo intero (tasto F11).
2. Il conduttore apre il foglio del conduttore sul telefono.
3. Dividete i giocatori in due squadre, date un nome alle squadre e premete **Inizia la partita**.

La partita viene salvata nel browser: se ricaricate la pagina, riprendete da dove eravate. Se sbagliate un clic c'è **Annulla ultima azione**, e i pulsanti **−50 / +50** sotto ogni squadra servono per correggere la cassa a mano.

## Le regole

### Ogni domanda
- Si vedono la regione e la categoria, ma non la domanda.
- La squadra di turno punta: minimo 50 €, massimo tutta la cassa.
- Poi esce la domanda: 30 secondi per decidere. Giusta: si vince la puntata. Sbagliata: si perde.
- Domande **★ Difficile**: se indovinate, la vincita vale il doppio.
- Domande **«Chi si avvicina di più»**: puntano e rispondono tutte e due le squadre. Vince chi dà il numero più vicino. Chi indovina il numero esatto prende anche 100 € di premio.

### Le carte speciali (una volta a testa per partita)
| Carta | Cosa fa |
|---|---|
| Furto | Se indovinate, la vincita la paga l'altra squadra invece della banca. |
| Scudo | Se sbagliate, non perdete niente. |
| Raddoppio | Vincita e perdita raddoppiano. |
| Rubabandiera | Se gli avversari sbagliano, rispondete voi e vi prendete metà di quello che hanno perso. Non vale sulle domande vero/falso. |
| Sfida diretta | Sulla domanda degli avversari, scegliete voi chi deve rispondere, da solo e senza aiuti. Se sbaglia, voi prendete 100 €. |

Furto, Scudo e Raddoppio si dichiarano insieme alla puntata, prima di vedere la domanda. Si può usare una sola carta per domanda.

### Imprevisti e banca
- Quattro volte durante la partita esce un imprevisto a caso: soldi in più, soldi in meno, scambio delle casse, il brigante che ruba ai ricchi, oppure un'asta che fa valere il triplo la domanda successiva.
- Se la cassa scende sotto i 50 €, potete chiedere alla banca un prestito di 500 €. Alla fine ne restituite 750.

### La finale
Ogni squadra scrive su un foglio quanto punta e quale risposta sceglie. Poi si rivela tutto insieme.

## Cambiare le domande

Le domande e gli imprevisti sono nel file [`domande.js`](domande.js). Basta modificare il testo e ricaricare la pagina. In cima al file c'è la spiegazione di ogni campo.
