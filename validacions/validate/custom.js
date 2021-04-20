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
  // const small = formControl.querySelector('small');
  // small.innerText = message;
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
//Required
function CheckRequired(inputErr) {
  inputErr.forEach(function(input){
    if (input.value.trim() === "") {
      ShowError(input, `${getFieldName(input)} is required`);
    }else {
      ShowSuccess(input);
    }
  });
}
//Length
function CheckLenght(input, min, max) {
  if (input.value.length < min) {
    ShowError(input, `${getFieldName(input)} must be at least ${min} characters`);
  }else if(input.value.length > max){
    ShowError(input, `${getFieldName(input)} must be less then ${max} characters`);
  }else {
    ShowSuccess(input);
  }
}
//Password Match
function CheckPasswordsMatch(input1,input2) {
  if (input1.value !== input2.value) {
    ShowError(input2, "Password do not match");
  }
}



//sign up submit
form2.addEventListener('submit', function(e){
  e.preventDefault();

  CheckRequired([fullName, surname, email, pass, pass2, language]);
  CheckLenght(fullName, 3, 15);
  CheckLenght(surname, 3, 15);
  CheckEmail(email);
  CheckLenght(pass, 8, 25);
  CheckPasswordsMatch(pass, pass2);

  addUser();
});

//Database
let users = [];
const addUser = function() {
    let user = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSurname').value,
        email: document.getElementById('inputEmail').value,
        password:document.getElementById('inputPass').value,
        language: document.getElementById('inputLanguage').value,
    }
//check if email is valid
users.push(user);
document.getElementById('signup').reset(); // to clear the form for the next entires
console.warn('added', {users});

//saving to localStorage
localStorage.setItem('Registered', JSON.stringify(users))
}


// Object.keys(user);
// Object.values(user).includes("email");

//Check if email is stored in array
function CheckUser(users, input) {
  if (users.some(user => user === input.value)) {
    document.write("welcome");
  } else {
    alert("wrong");
  }
}


//Log in form
const form = document.getElementById("login");
const email1 = document.getElementById("email");
const password = document.getElementById("password");

//Log in submit
form.addEventListener('submit', function(e){
  e.preventDefault();

  CheckRequired([ email1, password ]);
  CheckEmail(email);
  CheckLenght(password, 8, 25);

  
  CheckUser(users, email);
});
