
//Exercici 1
console.log("Hola Mundo");

//Exercici 2
alert("Marta");

//Exercici 3
let nombre = "Marta Font";
console.log(nombre);

//Exercici 4
let a = 8
let b = 22
console.log( "La suma entre" + " " + a + " " +  "i" + " " +  b + " " +  "es" + " " + (a + b) );

//Exercici 5
let nota_examen = 8

if (nota_examen < 5) {
  alert("has suspendido")
} else {
  alert("has aprovado")
}

//Exercici 6
let str = "Tinc un cotxe de color blau";
let res = str.replace("blau", "verd");

console.log(res);

let exampleStr = "Tinc un cotxe de color blau";
let oRegex = /o/g;
let result = exampleStr.replace(oRegex , "u");

console.log(result);


//Exercici 7
let objectStr = ['taula', 'cadira', 'ordinador', 'llibreta']

objectStr.forEach(consoleItem);

function consoleItem(item, index, arr) {
  console.log("L'objecte " + item +  " és a la posició " + index);
}


//Exercici 8

function calculadora( operador, n1 , n2)
			{
          if (operador == "suma") {
            console.log(n1 + n2);
          }
          else if (operador == "resta") {
            console.log(n1 - n2);
          }
          else if (operador == "multiplicacion") {
             console.log(n1 * n2);
         }

			}

	const resultat = calculadora("resta",40,20);
