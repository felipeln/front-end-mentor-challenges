const shareBtn = document.querySelector('.share-btn')
const share = document.querySelector('.share')
shareBtn.addEventListener('click', () =>{
    share.classList.toggle('active')
    if(window.pageXOffset > 768){
        if(share.classList.contains('active')){
            shareBtn.style.backgroundColor = "hsl(217, 19%, 35%)"
            shareBtn.querySelector('svg path').style.fill = "hsl(210, 46%, 95%)"
        }else{
            shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)"
            shareBtn.querySelector('svg path').style.fill = "hsl(217, 19%, 35%)"
        }
    }else{
        if(share.classList.contains('active')){
            shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)"
            shareBtn.querySelector('svg path').style.fill = "hsl(210, 46%, 95%)"
        }else{
            shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)"
            shareBtn.querySelector('svg path').style.fill = "hsl(217, 19%, 35%)"
        }
    }
    
})