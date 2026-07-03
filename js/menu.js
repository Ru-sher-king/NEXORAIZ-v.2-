const modulos = {
    turismo: document.getElementById("turismo"),
    idiomas: document.getElementById("idiomas")
};


function mostrarModulo(nombreModulo){

    
    for(let key in modulos){
        modulos[key].style.display = "none";
    }

    
    modulos[nombreModulo].style.display = "block";
}


window.onload = function(){

    mostrarModulo("turismo");

};