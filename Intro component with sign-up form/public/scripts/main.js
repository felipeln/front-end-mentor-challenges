const form = document.querySelector('form')

form.addEventListener('submit',(e) =>{
    e.preventDefault() //nao atualizar a pagina quando der submit 

    // pega os valores digitados nos inputs
    const firstName = form.querySelector('#first-name').value
    const lastName = form.querySelector('#last-name').value
    const email = form.querySelector('#email').value
    const password = form.querySelector('#password').value

    // Faz a verificação nos dados digitados no input
    if(firstName === ''){
        addError('first-name', 'firstName cannot be empty')
    }else{
        removeError('first-name')
    }

    if(lastName === ''){
        addError('last-name', 'lastName cannot be empty')
    }else{
        removeError('last-name')
    }

    if(email === ''){
        addError('email', 'Email cannot be empty')
    }else if(!valido('email')){
        addError('email', 'Email is not valid')
    }
    else{
        removeError('email')
    }

    if(password === ''){
        addError('password', 'password cannot be empty')
    }else{
        removeError('password')
    }
    
})

function addError(input,mensagem){
    const inputContainer = document.querySelector(`#${input}`).parentNode

    inputContainer.classList.add('error');

    

    inputContainer.querySelector('small').innerHTML = mensagem
}

function removeError(input){
    const inputContainer = document.querySelector(`#${input}`).parentNode
    inputContainer.classList.remove('error');
}

function valido(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    
}


