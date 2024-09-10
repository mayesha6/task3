const menu = document.getElementById("menu");
const menuBars = document.getElementById("menu-bars");
const closeBtn = document.getElementById("close-btn");
menuBars.addEventListener("click", ()=>{
    menu.classList.add("mobile-menu");
    menuBars.style.display="none";
    closeBtn.style.display="block";
    // console.log(menu)
})
closeBtn.addEventListener("click", ()=>{
    menu.classList.remove("mobile-menu");
    menuBars.style.display="block";
    closeBtn.style.display="none";
})