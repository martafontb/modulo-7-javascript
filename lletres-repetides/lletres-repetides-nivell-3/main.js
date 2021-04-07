// Exercici 1
const array = ["M","A","R","T","A"]
const html1 = document.getElementById('1');

for (let i = 0; i < array.length; i++) {
  html1.innerHTML += array[i] 
}

//display 
function resultatNom() {
  const html1 = document.getElementById('1');
  const displaySetting = html1.style.display;
  displaySetting == 'block' ? html1.style.display = 'none' : html1.style.display = 'block';
}

// Exercici 2

const nom = ["M","A","R","T","A"]
const vocals = ["A","E","I","O","U"]
const html2 = document.getElementById('2')

  for (let i = 0; i < nom.length; i++) {
    vocals.indexOf(nom[i]) ? html2.innerHTML += "He trobat la CONSONTANT: " + nom[i] + "<br>" : html2.innerHTML += "He trobat la VOCAL: "+ nom[i] + "<br>";
  }

  //display 
  function resultatVocals() {
    const html2 = document.getElementById('2');
    const toggle = html2.style.display;
    toggle == 'block' ? html2.style.display = 'none': html2.style.display = 'block';
  }

// Exercici 3

const lletres = ["M","A","R","T","A"]
const repetides = lletres.reduce((obj,lletra) => {
obj[lletra] ? obj[lletra]++ : (obj[lletra] = 1);
  return obj;   
}, {});

const html3 = document.getElementById('3');
html3.innerHTML = repetides

//display 
function resultatRep() {
  const html3 = document.getElementById('3');
  const toggle3 = html3.style.display;
  toggle3 == block ? html3.style.display = 'none' : html3.style.display = 'block';
}

// Exercici 4
const name = ["M","A","R","T","A"]
const surname = [ "F", "O", "N", "T"]
const fullName = [...name,'',...surname]
console.log(fullName)

const html4 = document.getElementById('4');
html4.innerHTML = fullName

//display 
function resultatComplet() {
  const html4 = document.getElementById('4');
  const toggle4 = html4.style.display;
  if(toggle4 == 'block') {
    html4.style.display = 'none';
  } else {
    html4.style.display = 'block';
  }
}
