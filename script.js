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