let ham = document.getElementsByClassName('ham')[0];
let navItem = document.getElementsByClassName("nav-item")[0];
let cross = document.getElementsByClassName("cross")[0];

ham.addEventListener('click' , ()=>{
    navItem.classList.toggle("navGo")
})

cross.addEventListener('click' , ()=>{
    navItem.classList.remove("navGo")
})