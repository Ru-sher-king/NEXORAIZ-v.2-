let modulos = {};

window.onload = function(){
    modulos = {
        inicio: document.getElementById("inicio"),
        turismo: document.getElementById("turismo"),
        idiomas: document.getElementById("idiomas"),
        leyendas: document.getElementById("leyendas")
    };

    initTurismo();
    initLeyendas();

    mostrarModulo("inicio");
}

function mostrarModulo(nombreModulo){
    for(let key in modulos){
        modulos[key].classList.remove("active-modulo");
        modulos[key].style.display = "none";
        
        const btn = document.getElementById(`btn-${key}`);
        if(btn) btn.classList.remove("btn-activo");
    }

    modulos[nombreModulo].style.display = "block";
    modulos[nombreModulo].classList.add("active-modulo");

    const btnActivo = document.getElementById(`btn-${nombreModulo}`);
    if(btnActivo) btnActivo.classList.add("btn-activo");
}