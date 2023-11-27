const form = document.getElementById("form")
const username = document.getElementById("username");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

idade.addEventListener("blur", () => {
    checkInputIdade();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

mensagem.addEventListener("blur", () => {
    checkInputMensagem();
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

function checkInputIdade(){
    const idadeValue = idade.value;

    if(idadeValue === ""){
        errorInput(idade, "Preencha sua idade!")
    } else{
        const formItem = idade.parentElement;
        formItem.className = "form_content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === "" || !emailValid(emailValue)){
        errorInput(email, "O email é obrigatório ou inválido.");
    } else {
        const formItem = email.parentElement;
        formItem.className = "form_content";
    }
}

function emailValid(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function checkInputMensagem(){
    const mensagemValue = mensagem.value;

    if(mensagemValue === ""){
        errorInput(mensagem, "A sua mensagem é obrigatório.")
    }else if (mensagemValue.length > 150) {
        errorInput(mensagem, "A sua mensagem precisa ter no maximo 150 caracteres.")
    }else{
        const formItem = mensagem.parentElement;
        formItem.className = "form_content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputIdade();
    checkInputEmail();
    checkInputMensagem();

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

// form.addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const formData = {
//         nome: username.value,
//         idade: idade.value,
//         email: email.value,
//         mensagem: mensagem.value
//     };

//     try {
//         const response = await fetch('enviar-email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });

//         if (response.ok) {
//             alert("Email enviado com sucesso!");
//             checkForm();
//         } else {
//             alert("Erro ao enviar o email. Tente novamente.");
//         }
//     } catch (error) {
//         console.error("Erro ao enviar a requisição:", error);
//         alert("Erro ao enviar a requisição. Verifique sua conexão.");
//     }

// });