const form2 = document.getElementById("signup");
const arrayTemp = []

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');

    const name = document.getElementById("inputName");
    const surname = document.getElementById("inputSurname");
    const emailA = document.getElementById("email-a");
    const passwordA = document.getElementById("password-a");
    const passwordB = document.getElementById("password-b");
    const lanage = document.getElementById("lanage");

    if(name.value == "") {
		name.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "this field is required";
		acumErrores ++;
	}

    if(surname.value == "") {
		surname.classList.add("is-invalid");
		document.getElementById("errorSurname").textContent = "this field is required";
		acumErrores ++;
	}

    if(emailA.value == "") {
        emailA.classList.add("is-invalid");
        document.getElementById("errorEmailA").innerText = "this field is required";
        acumErrores ++;
    }else if(!validar_email(emailA.value)){
        emailA.classList.add("is-invalid");
        document.getElementById("errorEmailA").innerText = "Email is not valid";
        acumErrores ++;
    }
    
    if(passwordA.value == "") {
        passwordA.classList.add("is-invalid");
        document.getElementById("errorPasswordA").innerText = "this field is required";
        acumErrores ++;
    } else if(!validar_password(passwordA.value)){
        console.log('hello')
        passwordA.classList.add("is-invalid");
        document.getElementById("errorPasswordA").innerText = "password doesn't match requirements";
        acumErrores ++;
    }

    if(!validar_password(passwordA.value, passwordB.value)) {
        passwordB.classList.add("is-invalid");
        document.getElementById("errorPasswordB").innerText = "password doesn't match";
        acumErrores ++;
    }

    if(language.value == "") {
		language.classList.add("is-invalid");
		document.getElementById("errorLanguage").textContent = "this field is required";
		acumErrores ++;
	}


    if (acumErrores > 0){
        return false;
    }else{
		return true;
    }
}

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_password(password) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(password) ? true: false;
}

function password_match(input1,input2) {
    input1.value === input2.value ? true : false;
}

let users = [];
const addUser = function() {
    let user = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSurname').value,
        email: document.getElementById('email-a').value,
        language: document.getElementById('language').value,
    }
//check if email is valid
users.push(user);
document.getElementById('signup').reset(); // to clear the form for the next entires

console.warn('added', {users});

//saving to localStorage
localStorage.setItem('Registered', JSON.stringify(users))
}

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
    const name = document.getElementById("inputName").value;
    const surname = document.getElementById("inputSurname").value;
    const modal = document.getElementById('exampleModal');
    const modalBody = modal.querySelector('.modal-body');

    modalBody.innerHTML = `Thanks! ${name} ${surname}`
    
    openModal();
}


  form2.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
	if (event.target.value == '') 
    {    
        console.log(event.target.value)
        registerValidate();   
        

    } else  {
        registerValidate();
        event.target.classList.remove('is-invalid');   
        addUser();
        openModal();
        //gruardar en el array los elementos
        
        //lanzar modal - Thanks for registering

        // si esta bien rellenado 
        // cuando se cierra el primer registro -> login 
    }
}, true);

