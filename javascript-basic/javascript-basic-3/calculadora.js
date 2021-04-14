let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                display.innerText =  display.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    if (display.innerText === 'undefined' || display.innerText == null ) {
                        console.log(hello);
                        display.innerText = '';
                    }  else{
                        display.innerText = 'error';   
                    }
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
    });
});




{/* <script>
  var nums = document.getElementById("num");
  var operator = document.getElementById("ope");
  var textbox = document.getElementById("txtBox");
  var counter = 0
  var dotReset=true;
  function Click(e) {
      var but = e.target;
      var maxamount = 9;
      var dot = 1;

      if (but.innerText != "=" && but.innerText != "delete") {
          if (but.innerText != ".") {
              textbox.value += but.innerText;
              if (but.innerText == "+" || but.innerText == "-" || but.innerText == "*" || but.innerText == "/"){
                  dotReset=true;
              }
          }

          if (but.innerText == "C") {
              textbox.value = "0";
              dotReset=true;
          }
          else if (textbox.value[0] == "." || textbox.value[0] == "0" || textbox.value[0] == "+" || textbox.value[0] == "-" || textbox.value[0] == "/" || textbox.value[0] == "*") {
              textbox.value = "";
              dotReset=true;
          }
          else if (textbox.value.length > maxamount) {
              textbox.value = textbox.value.substring(0, maxamount);
          }
          else if (textbox.value.includes == "+/-") {
              textbox.value*= -1;
          }
          if (but.innerText == ".") {

              if(dotReset){
                  if (textbox.value != "") {
                          textbox.value+="."
                          dotReset=false;
                      }
              }

              }
      }
      else {
          textbox.value = eval(textbox.value)
      }
      if (but.innerText == "delete") {
          textbox.value = textbox.value.substring(0, textbox.value.length - 1);
      }
      if (textbox.value == "NaN" || textbox.value == "undefine") {
          textbox.value = ""
      }

  }
</script> */}