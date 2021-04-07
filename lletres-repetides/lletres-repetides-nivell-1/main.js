// Exercici 1

//lletres
const array = ["M","A","R","T","A"]
// iteracion sobre les lletres 
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}




// Exercici 2
let nom = ["M","A","R","T","A"]
let vocals = ["A","E","I","O","U"]

for (let i = 0; i < nom.length; i++) {

  // if (vocals.indexOf(nom[i])){
  //   console.log("He trobat la CONSONTANT: " + nom[i])
  // } else {
  //   console.log("He trobat la VOCAL: "+ nom[i])
  // }

  vocals.indexOf(nom[i]) ? console.log("He trobat la CONSONTANT: " + nom[i]) : console.log("He trobat la VOCAL: "+ nom[i])
}



// Exercici 3
// Emmagatzemar en un Map les lletres de l'array 
// y el nombre de vegades que apareixen.

const lletres = ["M","A","R","T","A"]
const repetides = lletres.reduce((obj,lletra) => {
obj[lletra] ? obj[lletra]++ : (obj[lletra] = 1);
  // if(!obj[lletra]) {
  //   obj[lletra]= 0;
  // }
  // obj[lletra]++;
  return obj;   
}, {});

console.log(repetides);

// Exercici 4
//Fusiona els dos arrays en un.
//Afegeix una posició amb un espai buit entre la primera i la segona.
// al acabar l’execució només tindrem una que es dirà fullName.
const name = ["M","A","R","T","A"]
const surname = [ "F", "O", "N", "T"]
const fullName = [...name,'', ...surname]

console.log(fullName)



