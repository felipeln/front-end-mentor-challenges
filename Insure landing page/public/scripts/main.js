const menuBtn = document.querySelector('.mobile')
const menuLinks = document.querySelector('.menu-links')

menuBtn.addEventListener('click', mobileMenu)
menuLinks.querySelectorAll('li').forEach((item) => {item.addEventListener('click', mobileLink)})
function mobileMenu(){
    
    
    if(menuLinks.classList.contains('open')){
        menuLinks.classList.remove('open')
        menuBtn.querySelector('img').src = '/public/assets/icon-hamburger.svg'
    }else{
        menuLinks.classList.add('open')
        menuBtn.querySelector('img').src = '/public/assets/icon-close.svg'
    }

}

function mobileLink(){
    menuLinks.classList.remove('open')
    menuBtn.querySelector('img').src = '/public/assets/icon-hamburger.svg'
}


// if(window.innerWidth < 900){
//     document.querySelector('#introduction .right').src = "/public/assets/bg-pattern-intro-right-mobile.svg"

//     document.querySelector('#introduction .left').src = "/public/assets/bg-pattern-intro-left-mobile.svg"
// }else if(window.innerWidth > 900){
//     document.querySelector('#introduction .right').src = "/public/assets/bg-pattern-intro-right-desktop.svg"

//     document.querySelector('#introduction .left').src = "/public/assets/bg-pattern-intro-left-desktop.svg"
// }