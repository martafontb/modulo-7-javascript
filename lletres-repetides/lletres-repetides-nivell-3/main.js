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
const entries = Object.entries(repetides);

html3.innerHTML = entries;
// for (const [lletres, count] of entries) {
//   html3.innerHTML = (`Hi ha ${count} ${lletres}`)
// }
// console.log(entries)


//display 
function resultatRep() {
  const html3 = document.getElementById('3');
  const toggle3 = html3.style.display;
  toggle3 == 'block' ? html3.style.display = 'none' : html3.style.display = 'block';
}

// Exercici 4
const name = ["M","A","R","T","A"]
const surname = [ "F", "O", "N", "T"]
const fullName = [...name,'',...surname]
// console.log(fullName)

const html4 = document.getElementById('4');
html4.innerHTML = fullName;

//display 
function resultatComplet() {
  const html4 = document.getElementById('4');
  const toggle4 = html4.style.display;
  toggle4 == 'block' ? html4.style.display = 'none': html4.style.display = 'block';
}


// Exercici 5

//string
let str = 'Una direcci??n de correo electr??nico es la direcci??n que utiliza para recibir y enviar correos electr??nicos. Se muestra a los destinatarios de sus correos electr??nicos para que sepan qui??n le envi?? un correo electr??nico. Cada direcci??n de correo electr??nico s??lo se puede asignar una vez en todo el mundo y, por lo tanto, est?? disponible exclusivamente para usted. No puede cambiar las direcciones de correo electr??nico, pero puede eliminarlas en cualquier momento. Una direcci??n de correo electr??nico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detr??s, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la direcci??n de correo electr??nico: en nuestro ejemplo es ionos.es. Esta informaci??n var??a de proveedor a proveedor, por lo que una parte del dominio tambi??n puede ser gmail.com o gmx.es si utiliza una direcci??n de correo electr??nico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sue??os.es, las direcciones de correo electr??nico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sue??os.es o nombre-de-usuario@el-nombre-de-sus-sue??os.ES). El nombre de usuario es la parte de una direcci??n de correo electr??nico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una direcci??n de correo electr??nico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinaci??n con la parte del dominio deseada ya est?? registrada. En este caso, deber?? considerar alternativas para el nombre de usuario de su direcci??n de correo electr??nico. Si utiliza su propio dominio, estas restricciones no se aplican porque s??lo usted puede crear direcciones de correo electr??nico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
// regex caracteres con los que quiero hacer match
let regex = /([a-zA-Z\u00f1\u00d1_-]+)@[a-zA-Z\u00f1\u00d1_-]*\.([a-zA-Z\u00f1\u00d1_-]+)/g;
// variable que hace match a mi string
let found = str.match(regex);

console.log(found);
const html5 = document.getElementById('5');
html5.innerHTML = found;

//display 
function resultatEmail() {
  const html5 = document.getElementById('5');
  const toggle5 = html5.style.display;
  toggle5 == 'block' ? html5.style.display = 'none': html5.style.display = 'block';
}


// const buttons = document.querySelectorAll('button.accent');
// const divToggle = document.query
// function toggleOpen() {
  
// }