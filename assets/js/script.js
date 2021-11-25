let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '50%'
email.style.width = '100%'

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML='Campo Inválido'
        txtNome.style.color='red'
    }else{
        txtNome.innerHTML='Campo Válido'
        txtNome.style.color='green'
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML='Campo Inválido'
        txtEmail.style.color='red'
    }else{
        txtEmail.innerHTML='Campo Válido'
        txtEmail.style.color='green'
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 3) {
        txtAssunto.innerHTML='Campo Inválido'
        txtAssunto.style.color='red'
    }else{
        txtAssunto.innerHTML='Campo Válido'
        txtAssunto.style.color='green'
    }
}