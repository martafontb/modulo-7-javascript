function calc() {
  event.preventDefault();
  const a = parseInt(document.querySelector("#value1").value)
  const b = parseInt(document.querySelector("#value2").value)
  const op = document.querySelector("#operador").value

  let resultat

  if (op == "add") {
    resultat = a + b;
  } else if (op == "min"){
    resultat = a - b;
  } else if (op == "div"){
    resultat = a / b;
  } else if (op == "mul"){
    resultat = a * b;
  }

  console.log(resultat)

  document.querySelector("#result").innerHTML = resultat

}
