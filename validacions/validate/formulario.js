//Sign up form
const nameEl = document.getElementById("inputName");
const surnameEl = document.getElementById("inputSurname");
const emailEl = document.getElementById("inputEmail");
const passwordEl = document.getElementById("inputPass");
const confirmPasswordEl = document.getElementById("inputPassVal");
const languageEl = document.getElementById("inputLanguage");
const btn = document.getElementById("btnSend");

const form2 = document.getElementById("signup");

//Log in form
const email = document.getElementById("email");
const password = document.getElementById("password");

const form = document.getElementById("login");

//Database
let users = [];

inputName.addEventListener('blur', ValidateString, false);
inputSurname.addEventListener('blur', ValidateString, false);
inputEmail.addEventListener('blur', CheckEmail, false);
inputPass.addEventListener('blur', CheckLenght, false);
inputPassVal.addEventListener('blur', CheckPasswordsMatch, false);
email.addEventListener('blur', CheckEmail, false);
password.addEventListener('blur', CheckLenght, false);

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

function ValidateString(e){
  let valid = false;
  const letters = /^[a-z]*$/i;
  if(e.target.value === undefined) {
    for(i = 0; i < e.target.length; i++) {
      if( e.target[i].id === "inputName" || e.target[i].id === "email"){
        console.log(e.target)
        valid = true;
      } 
    }
   } 
   else {
    if (!e.target.value.match(letters)) {
      ShowError(e.target, `Please input letters only`);
    } else {
      ShowSuccess(e.target);
      valid = true;
    }
  }
  return valid;
}

//Check email
function CheckEmail(e) {
  let valid = false;
  const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(e.target.value === undefined) {
    for(i = 0; i < e.target.length; i++) {
      if( e.target[i].id === "inputEmail" || e.target[i].id === "email" ){
        ShowSuccess(e.target)
        valid = true;
      } 
    }
  } else {
    if (char.test(e.target.value.trim())) {
      ShowSuccess(e.target)
      valid = true;
    }else {
      ShowError(e.target, `Email is not valid`);
    }
  }
  return valid;
}

//Required
function CheckRequired(input) {
  let valid = false;
  var validation = true;
  input.forEach(function(el){
    if (el.value.trim() === "") {
      ShowError(el, `This field is required`);
      validation = false;
    } else {
      ShowSuccess(el);  
      valid = true;
    }
  });
  if(validation) {
    valid = true;
  }
  return valid;
}

//Length
function CheckLenght(e) {
  let valid = false;
  if(e.target.value === undefined) {
    for(i = 0; i < e.target.length; i++) {
      if( e.target[i].id === "inputPass" || e.target[i].id === "inputPassVal" || e.target[i].id === "password"){
        ShowSuccess(e.target)
        valid = true;
      } 
    }
  } else {
    if (e.target.value.length < 8) {
      ShowError(e.target, `field must be at least 8 characters`);
    }else if(e.target.value.length > 20){
      ShowError(e.target, `field must be less then 20 characters`);
    }else {
      ShowSuccess(e.target);
      valid = true;
    }
  }
  return valid;
}

//Password Match
function CheckPasswordsMatch(e) {
  let valid = false;
  if(e.target.value === undefined) {
    for(i = 0; i < e.target.length; i++) {
      if( e.target[i].id === "inputPass" || e.target[i].id === "inputPassVal"){
        if(e.target[i].value !== e.target[i].value) {
          ShowError(e.target, `Passwords do not match`);
        } else {
          ShowSuccess(e.target);
          valid = true;
        }
      } 
    }
  } else {
    if(e.target.form[3].value !== e.target.form[4].value){
      ShowError(e.target, `Passwords do not match`);
    } else {
      ShowSuccess(e.target);
      valid = true;
      }
  }
  return valid;
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
    } else if( user.email === '') {
      alert("please sign up");
    } else {
      alert("please sign up");
    }
  })  
}


form2.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate forms
  let isRequiredValid = CheckRequired([nameEl, surnameEl, emailEl, passwordEl, confirmPasswordEl, languageEl]),
      isStringValid = ValidateString(e);
      isEmailValid = CheckEmail(e),
      isPasswordValid = CheckLenght(e),
      isConfirmPasswordValid = CheckPasswordsMatch(e); 

  let isFormValid = isRequiredValid  &&
      isStringValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    addUser();
  } else {
    alert('please create an account')
  }
});


//Log in submit
form.addEventListener('submit', function(e){
  e.preventDefault();

 // validate forms
  let isRequiredValid = CheckRequired([ email, password ]),
  isEmailValid = CheckEmail(e),
  isPasswordValid = CheckLenght(e);

  let isUserValid = isRequiredValid &&
  isEmailValid &&
  isPasswordValid;

  if(isUserValid) {
    checkUsers(users, email);
  } else {
    alert ('user not found - please sign up')
  }
});




