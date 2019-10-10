window.addEventListener('load', () => {
    var index = 1;
    window.setInterval( () => {
        if(index <= 3){
            let element = document.querySelector('.slide-active:nth-child('+index+')');
            element.classList.remove('slide-active');
            element.nextElementSibling.classList.add('slide-active');
            index++;
        }
        else{
            document.querySelector('.slide-active:nth-child('+index+')').classList.remove('slide-active');
            document.querySelector('.slide:nth-child(1)').classList.add('slide-active');
            index = 1;
        }
    },7000);
})