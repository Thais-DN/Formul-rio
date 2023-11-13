
const form = document.getElementById("form");
const username = document.getElementById("username");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password_confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();

})

username.addEventListener("blur", () => {
    checkInputUsername();
})

age.addEventListener("blur", () => {
    checkInputAge();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha seu nome!")
    } else{
        const formItem= username.parentElement;
        formItem.className = "form_content"
    }
}

function checkInputAge(){
    const ageValue = age.value;

    if(ageValue === ""){
        errorInput(age, "Preencha sua idade!")
    }else if (ageValue.maxlength="3") {
        errorInput(age, "A senha precissa ter no máximo 3 caracteres.")
     } else{
        const formItem = age.parentElement;
        formItem.className = "form_content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório.")
    } else{
        const formItem = email.parentElement;
        formItem.className = "form_content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatório.")
    }else if (passwordValue.length < 8) {
        errorInput(password, "A senha precissa ter no mínimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form_content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "A confirmção de senha é obrigatório.")
    }else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "A senha precisa ser igual a anterior.")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form_content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputAge();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form_content")
    const isValid = [...formItems].every( (item) => {
        return item.className === "form_content"
    });
        
        if(isValid){
            alert("Enviado com sucesso!")
        }

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form_content error"
}