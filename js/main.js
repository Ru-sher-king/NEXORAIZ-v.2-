let modulos = {};

window.onload = function(){

    modulos = {
        turismo: document.getElementById("turismo"),
        idiomas: document.getElementById("idiomas")
    };

    mostrarModulo("turismo");
}

function mostrarModulo(nombreModulo){

    for(let key in modulos){
        modulos[key].style.display="none";
    }

    modulos[nombreModulo].style.display="block";
}