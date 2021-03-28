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
         else if (operador == "division") {
            if(n2 > 0)
            console.log(n1 / n2);
        }
			}

	const resultat = calculadora("resta",40,20);
