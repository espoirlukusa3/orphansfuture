
const Hamburger=document.querySelector(".hamburger");
const myMenu=document.querySelector(".menu");

Hamburger.addEventListener('click',()=>{
    Hamburger.classList.toggle('active');
    myMenu.classList.toggle('active');
})

window.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        myMenu.classList.remove('active');
        myMenu.style.transition='.3s';
        Hamburger.classList.remove('active');
     }
    // else if(window.scrollY = 0){
    //      myMenu.classList.add('active');
    // }
})
