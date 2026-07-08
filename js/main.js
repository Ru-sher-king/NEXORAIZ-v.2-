let modulos = {};

window.onload = function(){
    modulos = {
        turismo: document.getElementById("turismo"),
        idiomas: document.getElementById("idiomas"),
        leyendas: document.getElementById("leyendas")
    };

    initTurismo();
    initLeyendas();

    mostrarModulo("turismo");
}

function mostrarModulo(nombreModulo){
    for(let key in modulos){
        modulos[key].classList.remove("active-modulo");
        modulos[key].style.display = "none";
    }
    modulos[nombreModulo].style.display = "block";
    modulos[nombreModulo].classList.add("active-modulo");
}