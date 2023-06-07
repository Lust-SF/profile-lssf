let menuVisible=false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}

function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skill = document.getElementsByClassName("progreso");
        skill[0].classList.add("paciencia");
        skill[1].classList.add("empatia");
        skill[2].classList.add("puntualidad");
        skill[3].classList.add("tolerancia");
        skill[4].classList.add("responsabilidad");
        skill[5].classList.add("honestidad");
        skill[6].classList.add("futbol");
        skill[7].classList.add("natacion");
        skill[8].classList.add("dota2");
        skill[9].classList.add("fortnite");
        skill[10].classList.add("ml");
        skill[11].classList.add("programacion");

    }
}

window.onscroll = function(){
    efectoSkills();
}


const openya = document.getElementById('open_container');
const modal_container = document.getElementById('modal_container');
const sevatemp1 =document.getElementById('seva1');
const sevatemp2 =document.getElementById('seva2');


openya.addEventListener( 'click', () => {

    sevatemp1.classList.add('opacando');
    sevatemp2.classList.add('opacando');

    modal_container.classList.add('show');


    let identificadorTiempoDeEsperaNoice;
    
    function temporizadorDeRetraso() {
     identificadorTiempoDeEsperaNoice = setTimeout(Alerta1Noice, 500);
    }

    function Alerta1Noice() {
      alert("Gracias por el mensaje, lo leeré lo más pronto posible... ");
    }


    let identificandorTiempoNoice;

    function temporizadorDeNoice() {
        identificandorTiempoNoice = setTimeout(byeNoice, 3000);
    }
    function byeNoice(){
        modal_container.classList.remove('show');
    }


    let identificadorTiempoSeva;

    function temporizadorDeSeva(){
        identificadorTiempoSeva = setTimeout(byeSeva, 3000);
    }

    function byeSeva(){
        sevatemp1.classList.remove('opacando');
        sevatemp2.classList.remove('opacando');
    }


    temporizadorDeRetraso();

    temporizadorDeNoice();

    temporizadorDeSeva();
})


const open_caiste = document.getElementById('open_caiste');
const gif_container = document.getElementById('gif_container');
const opacatemp1 = document.getElementById('opaca1');
const opacatemp2 = document.getElementById('opaca2');
const opacatemp3 = document.getElementById('opaca3');
const opacatemp4 = document.getElementById('opaca4');

open_caiste.addEventListener( 'click', () => {

    opacatemp1.classList.add('opacando');
    opacatemp2.classList.add('opacando');
    opacatemp3.classList.add('opacando');
    opacatemp4.classList.add('opacando');

    gif_container.classList.add('caiste');


    let DelayTiempoDeEsperaAlerta1;
    let DelayTiempoDeEsperaAlerta2;
    
    function temporizadorDeRetrasoCaiste() {
     DelayTiempoDeEsperaAlerta1 = setTimeout(Alerta1Caiste, 2000);
     DelayTiempoDeEsperaAlerta2 = setTimeout(Alerta2Caiste, 4000);
    }

    function Alerta1Caiste() {
      alert("JAJAJA, como puedes pensar que Luis se puede descargar?  xD");
    }

    function Alerta2Caiste() {
        alert("¿Así ingresaste a la universidad? XDXDXD");
    }


    let identificandorTiempoCaiste;

    function byeCaiste(){
        gif_container.classList.remove('caiste');
    }

    function temporizadorDeCaiste() {
        identificandorTiempoCaiste = setTimeout(byeCaiste, 5000);
    }

    
    let identificadorTiempoOpaca;

    function tempOpacaSobreMi(){
        identificadorTiempoOpaca = setTimeout(byeOpaca, 3000);
    }

    function byeOpaca(){
        opacatemp1.classList.remove('opacando');
        opacatemp2.classList.remove('opacando');
        opacatemp3.classList.remove('opacando');
        opacatemp4.classList.remove('opacando');
    }
    
    tempOpacaSobreMi();
    temporizadorDeCaiste();
    temporizadorDeRetrasoCaiste();

    
})



