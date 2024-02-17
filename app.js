
let items = document.querySelectorAll('.list .item') ;
let thumbnails = document.querySelectorAll('.thumbnail .item') ;
let next = document.querySelector('#next') ;
let prev = document.getElementById('prev') ;


let counti = items.length;
let activeItem = 0 ; 

next.addEventListener("click" , ()=>{
    let ai = document.querySelector('.slider .list .item.active') ;
    let at = document.querySelector('.slider .thumbnail .item.active') ;
    ai.classList.remove('active') ;
    at.classList.remove('active') ;
    activeItem = activeItem + 1 ; 
    if( activeItem >= counti ){
        activeItem = 0 ; 
    }
    items[activeItem].classList.add('active') ;
    thumbnails[activeItem].classList.add('active');
});


prev.addEventListener("click" , ()=>{
    let ai = document.querySelector('.slider .list .item.active') ;
    let at = document.querySelector('.slider .thumbnail .item.active') ;
    ai.classList.remove('active') ;
    at.classList.remove('active') ;
    activeItem = activeItem - 1 ; 
    if( activeItem < 0 ){
        activeItem = counti-1 ; 
    }
    items[activeItem].classList.add('active') ;
    thumbnails[activeItem].classList.add('active');
});

