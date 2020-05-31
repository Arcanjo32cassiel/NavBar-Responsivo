
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

//SCROLL SUAVE

    //IDENTIFICAR O CLIQUE NO MENU
    const menuItens =document.querySelectorAll('.menu_intens a[href^="#"]');


    //VERIFICAR O INTEM  QUE FOI CLICADO E FAZER  REFERENCIA COM O ALVO
    menuItens.forEach(item =>{
    item.addEventListener('click', scrolltoidonclick);
});

 //função pra fazer referencia  entre o href e o intem
    function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop
}
    //função para o momento que é efetuado o click 
    function scrolltoidonclick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrolltoposition(to);
}

   // função para fazer o scroll suave
   function scrolltoposition(to){
    window.scroll({
        top:to - 80,
    });
}
   

