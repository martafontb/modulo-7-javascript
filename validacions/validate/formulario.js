//Sign up form
const form2 = document.getElementById("signup");
const fullName = document.getElementById("inputName");
const surname = document.getElementById("inputSurname");
const email = document.getElementById("inputEmail");
const pass = document.getElementById("inputPass");
const pass2 = document.getElementById("inputPassVal");
const language = document.getElementById("inputLanguage");
const btn = document.getElementById("btnSend");
//Log in form
const form = document.getElementById("login");
const email1 = document.getElementById("email");
const password = document.getElementById("password");
//Database
let users = [];



//Show input error message
function ShowError(input, message) {
  const formControl = input
  formControl.className = "form-control is-invalid";

  const errors = document.querySelectorAll('.invalid-feedback');
  errors.forEach( error => error.innerHTML = message)
}

//Show input success
function ShowSuccess(input) {
  const formControl = input;
  formControl.className = "form-control is-valid";
}

//Check email
function CheckEmail(input) {
  const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (char.test(input.value.trim())) {
    ShowSuccess(input);
    return true;
  }else {
    ShowError(input, "Email is not valid");
  }
}

//Required
function CheckRequired(input) {
  var validation = true;
  input.forEach(function(el){
    if (el.value.trim() === "") {
      ShowError(el, `This field is required`);
      validation = false;
    } else {
      ShowSuccess(el);  
    }
  });
  if(validation) {
    return true;
  }
}

//Length
function CheckLenght(input, min, max) {
  if (input.value.length < min) {
    ShowError(input, `This field is required`);
  }else if(input.value.length > max){
    ShowError(input, `field must be less then ${max} characters`);
  }else {
    ShowSuccess(input);
    return true;
  }
}

//Password Match
function CheckPasswordsMatch(input1,input2) {
  if (input1.value !== input2.value) {
    ShowError(input2, "Passwords do not match");
  } else {
    return true;
  }
}

//Database
function addUser() {
    let user = {
        name: inputName.value,
        surname: inputSurname.value,
        email: inputEmail.value,
        password:inputPass.value,
        language: inputLanguage.value,
    }
    //check if email is valid
    users.push(user);
    signup.reset(); // to clear the form for the next entires
    console.warn('added', {users});

    //saving to localStorage
    localStorage.setItem('Registered', JSON.stringify(users))
}

//modal
function openModal() {
  backdrop.style.display = "block"
  exampleModal.style.display = "block"
  exampleModal.className += "show"
}

function closeModal() {
  backdrop.style.display = "none"
  exampleModal.style.display = "none"
  exampleModal.className += exampleModal.className.replace("show", "")
}

// Get the modal
const modal = document.getElementById('exampleModal');
window.onclick = function (event) {
  if (event.target == modal) {
      closeModal()
  }
}

//Show details in modal
function details(value) {
  modalBody.innerHTML = `<p> Name: ${value.name} </p>
                        <p> Surname: ${value.surname} </p>
                        <p> Email: ${value.email} </p>`
  openModal();
}

//Check if user is registered 
function checkUsers(users, email) {
  return users.filter(user => {
    if (user.email === email.value) {
      details(user);
    }  else {
      alert("please sign up");
    }
  })  
}


//Sign up submit
form2.addEventListener('submit', function(e){
  e.preventDefault();

  CheckEmail(email);
  CheckLenght(pass, 8, 25);
  CheckPasswordsMatch(pass, pass2); 
  if(CheckRequired([fullName, surname, email, pass, pass2, language]) && CheckEmail(email) && CheckPasswordsMatch(pass, pass2) ) {
    addUser()
  } 
  
});

//Log in submit
form.addEventListener('submit', function(e){
  e.preventDefault();

  CheckRequired([ email1, password ]);
  CheckEmail(email1);
  CheckLenght(password, 8, 25);

  if(CheckRequired([ email1, password]) && CheckEmail(email1) ) {
    checkUsers(users, email1);
  } 
});




