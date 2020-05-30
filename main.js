
//Para abrir  ou fechar o botão hamburguer quando clicado
const navbartoggler = document.querySelector(".navbar-toggler");
const navbarmenu = document.querySelector(".navbar ul");

navbartoggler.addEventListener("click", navbartogglerclick);

function navbartogglerclick(){
    navbartoggler.classList.toggle("open-navbar-toggler");
    navbarmenu.classList.toggle("open");
} 

// Quando clicar em uma das opções da navbar o botão hamburguer é fechado 
const navbarlinks = document.querySelectorAll(".navbar a");

navbarlinks.forEach(elem => elem.addEventListener("click", navbarlinkclick));

function navbarlinkclick(){
    if(navbarmenu.classList.contains("open")){
        navbartoggler.click();
    }
}

//Mostrar link ativo
var tag_ul = document.getElementById('lista_menu');
var tag_li = tag_ul.getElementsByTagName('li');

function LinkAtivo(tag){

    for (i=0; i<tag_li.length; i++ )
    {  
       tag_li[i].style.background= "";
    }
       tag.style.background = "#2F4F4F";
    }