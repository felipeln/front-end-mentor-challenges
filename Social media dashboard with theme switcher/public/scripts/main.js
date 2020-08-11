let darkMode = localStorage.getItem('darkMode')
const checkbox = document.querySelector('#switch')

const ball = document.querySelector('.dark-theme label span')

const enableDarkMode = () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'enabled')
}
const disableDarkMode = () => {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'disabled')
}

if(darkMode === 'enabled'){
    enableDarkMode()
    ball.style.left = '5px'
}

checkbox.addEventListener('click',() =>{
    darkMode = localStorage.getItem('darkMode')
    if(darkMode != 'enabled'){
        enableDarkMode()
    }else{ 
        disableDarkMode()
    }
})