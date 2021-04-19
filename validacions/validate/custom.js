//Log in form
const form = document.getElementById("login");

//Sign up form
const form2 = document.getElementById("signup");
const fullName = document.getElementById("inputName");
const surname = document.getElementById("inputSurname");
const email = document.getElementById("inputEmail");
const pass = document.getElementById("inputPass");
const pass2 = document.getElementById("inputPassVal");
const language = document.getElementById("inputLanguage");
const btn = document.getElementById("btnSend");

//Show input error message
function ShowError(input, message) {
  const formControl = input;
  console.log(formControl)
  formControl.className = "form-control  is-invalid";
  const error = formControl.querySelectorAll('div.invalid-feedback');
  error.innerText = message;
}

//Show input success
function ShowSuccess(input) {
  const formControl = input;
  formControl.className = "form-control  is-valid";
}

//Check email
function CheckEmail(input) {
  const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (char.test(input.value.trim())) {
    ShowSuccess(input);
  }else {
    ShowError(input, "Email is not valid");
  }
}
function CheckRequired(inputErr) {
  inputErr.forEach(function(input){
    if (input.value.trim() === "") {
      ShowError(input, `${getFieldName(input)} is required`);
    }else {
      ShowSuccess(input);
    }
  });
}

function CheckLenght(input, min, max) {
  if (input.value.length < min) {
    ShowError(input, `${getFieldName(input)} must be at least ${min} characters`);
  }else if(input.value.length > max){
    ShowError(input, `${getFieldName(input)} must be less then ${max} characters`);
  }else {
    ShowSuccess(input);
  }
}

function CheckPasswordsMatch(input1,input2) {
  if (input1.value !== input2.value) {
    ShowError(input2, "Password do not match");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form2.addEventListener('submit', function(e){
  e.preventDefault();

  CheckRequired([fullName, surname, email, pass, pass2, language]);
  CheckLenght(fullName, 3, 15);
  CheckLenght(surname, 3, 15);
  CheckEmail(email);
  CheckLenght(pass, 8, 25);
  CheckPasswordsMatch(pass, pass2);
});