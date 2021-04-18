const form = document.getElementById("login");

function loginValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if(email.value == "") {
        email.classList.add("is-invalid");
        document.getElementById("errorEmail").innerText = "this field is required";
        acumErrores ++;
    }else if(!validar_email(email.value)){
        email.classList.add("is-invalid");
        document.getElementById("errorEmail").innerText = "Email is not valid";
        acumErrores ++;
    }
    
    if(password.value == "") {
        password.classList.add("is-invalid");
        document.getElementById("errorPassword").innerText = "this field is required";
        acumErrores ++;
    } else if(!validar_password(password.value)){
        console.log('hello')
        password.classList.add("is-invalid");
        document.getElementById("errorPassword").innerText = "password doesn't match requirements";
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

form.addEventListener('submit', (event) => {
    event.preventDefault();
	console.log(event);
	if(event.target.value!='') {
        event.target.classList.remove('is-invalid');
        loginValidate();
    } 
}, true);
