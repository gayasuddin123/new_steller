const t1 = document.getElementById("t1");
const navMenu = document.querySelector(".nav-menu");

t1.addEventListener('click',function barchange(){
    t1.classList.toggle('change')
    navMenu.classList.toggle('active')
})

// document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
//     t1.classList.remove('change')
//     navMenu.classList.remove('active')
// }))

document.onclick = function(event){
    if (!navMenu.contains(event.target) && !t1.contains(event.target) ) {
        navMenu.classList.remove("active");
        t1.classList.remove("change");
    }
}
let hidep = document.getElementById('hide-show')
let memegif = document.getElementById('masti')
function masti() {
    console.log('hello')
    memegif.classList.toggle('meme')
}

