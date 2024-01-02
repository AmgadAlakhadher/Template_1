//variables
var barsIcon = document.querySelector('.barsIcon');
var closeIcon = document.querySelector('.closeIcon');
var list = document.querySelector('.header .navbar');
let check = false;
//events
barsIcon.addEventListener('click', showList);
closeIcon.addEventListener('click', showList);

//functions

function showList() {
    barsIcon.classList.toggle('onChange');
    closeIcon.classList.toggle('onChange');
    list.classList.toggle('onChange');
    // if(check){
    // }else{

    // }
}