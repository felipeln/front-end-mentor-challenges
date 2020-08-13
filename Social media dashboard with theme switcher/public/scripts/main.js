let darkMode = localStorage.getItem('darkMode')
const checkbox = document.querySelector('#switch')



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
    checkbox.checked = true
}


checkbox.addEventListener('click',() =>{
    darkMode = localStorage.getItem('darkMode')
    if(darkMode != 'enabled'){
        enableDarkMode()
        checkbox.checked = true
       
    }else{ 
        disableDarkMode()
        checkbox.checked = false
    }
})



