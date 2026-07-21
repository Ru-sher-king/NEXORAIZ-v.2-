let modulos = {};

window.onload = function(){
    modulos = {
        inicio: document.getElementById("inicio"),
        turismo: document.getElementById("turismo"),
        idiomas: document.getElementById("idiomas"),
        leyendas: document.getElementById("leyendas"),
        nosotros: document.getElementById("nosotros")
    };

    if (typeof initTurismo === "function") initTurismo();
    if (typeof initLeyendas === "function") initLeyendas();

    mostrarModulo("inicio");
}

function mostrarModulo(nombreModulo){
    if (!modulos[nombreModulo]) return;

    for(let key in modulos){
        if (modulos[key]) {
            modulos[key].style.setProperty("display", "none", "important");
            modulos[key].classList.remove("active-modulo");
        }
        
        const btn = document.getElementById(`btn-${key}`);
        if(btn) btn.classList.remove("btn-activo");
    }

    modulos[nombreModulo].style.setProperty("display", "block", "important");
    modulos[nombreModulo].classList.add("active-modulo");

    const btnActivo = document.getElementById(`btn-${nombreModulo}`);
    if(btnActivo) btnActivo.classList.add("btn-activo");

    if (nombreModulo === "turismo" && typeof map !== "undefined" && map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 150);
        }
}