/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Il biglietto andrà stampato in pagina! :occhiolino: Ma controllate prima che tutto il codice funzioni !!!!

*/

let kilometri = parseInt(prompt('inserire kilometri:'));
let eta = parseInt(prompt('inserire la tua eta:'));
console.log('numero di kilometri: ' + kilometri + ',', ' eta: ' + eta);
let costoKilometri = (kilometri * 0.21);
console.log('costo: '+costoKilometri);
if(eta<18){
    costoKilometri = costoKilometri - ((20 / 100) * costoKilometri);
    console.log('sconto 20');
}
else if(eta>65){
    costoKilometri = costoKilometri - ((40 / 100) * costoKilometri);
    console.log('sconto 40');
}
else{
    costoKilometri = costoKilometri;
}
costoKilometri = (costoKilometri).toFixed(2);
console.log('costo biglietto: '+ costoKilometri);

const costoBiglietto = `
    ${costoKilometri}&euro;
`
const elementoCosto = document.getElementById('prezzo');
elementoCosto.innerHTML = costoBiglietto;

const kilometriInseriti = `
    ${kilometri} km
`
const elementoKilometri = document.getElementById('kilometri');
elementoKilometri.innerHTML = kilometriInseriti;