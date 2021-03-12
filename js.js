let themeButton=document.querySelector('.theme-button');
let page=document.querySelector(".page");
themeButton.onclick=function(){
    page.classList.toggle('theme-light');
    page.classList.toggle('theme-dark');
    themeButton.classList.toggle('sun');
    themeButton.classList.toggle('moon');
}
