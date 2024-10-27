const prompt = require('prompt-sync')();

const longueur = parseFloat(prompt("Entrez la longueur du rectangle : "));
const largeur = parseFloat(prompt("Entrez la largeur du rectangle : "));

const perimetre = 2 * (longueur + largeur);
const aire = longueur * largeur;

console.log(`Le périmètre du rectangle est : ${perimetre}`);
console.log(`L'aire du rectangle est : ${aire}`);
 
