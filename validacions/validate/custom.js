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
  input.forEach(function(el){
    if (el.value.trim() === "") {
      ShowError(el, `This field is required`);
    } else {
      ShowSuccess(el);  
      return true;
    }
  });
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
  }
}

//sign up submit
form2.addEventListener('submit', function(e){
  e.preventDefault();

  CheckEmail(email);
  CheckLenght(pass, 8, 25);
  CheckPasswordsMatch(pass, pass2); 
  if(CheckRequired([fullName, surname, email, pass, pass2, language]) && CheckEmail(email) && CheckPasswordsMatch(pass, pass2) ) {
    addUser()
  } 
  
});


//modal
const openModal = function() {
  document.getElementById("backdrop").style.display = "block"
  document.getElementById("exampleModal").style.display = "block"
  document.getElementById("exampleModal").className += "show"
}

function closeModal() {
  document.getElementById("backdrop").style.display = "none"
  document.getElementById("exampleModal").style.display = "none"
  document.getElementById("exampleModal").className += document.getElementById("exampleModal").className.replace("show", "")
}
// Get the modal
const modal = document.getElementById('exampleModal');
window.onclick = function (event) {
  if (event.target == modal) {
      closeModal()
  }
}

function results() {
  const modal = document.getElementById('exampleModal');
  const modalBody = modal.querySelector('.modal-body');

  modalBody.innerHTML = `Welcome`
  
  openModal();
}


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

//Log in form
const form = document.getElementById("login");
const email1 = document.getElementById("email");
const password = document.getElementById("password");


const filteredUsers = users.filter(user => {
  let loggedInUser = email1.value
  return user.email === loggedInUser
})
  

console.log(filteredUsers)


function checkFilteredUsers() {
    if (filteredUsers) {
      // alert('welcome');
    } else {
      alert("please sign up");
    }
}


//Log in submit
form.addEventListener('submit', function(e){
  e.preventDefault();

  CheckRequired([ email1, password ]);
  CheckEmail(email);
  CheckLenght(password, 8, 25);
  checkFilteredUsers();
});




