function showPlace(place){

    let info = "";

    switch(place){

        case "León":
            info = "León es una ciudad colonial con mucha historia y cultura.";
            break;

        case "Granada":
            info = "Granada es famosa por su arquitectura colonial y el lago Cocibolca.";
            break;

        case "Masaya":
            info = "Masaya es conocida por su volcán activo y artesanías.";
            break;

        case "Ometepe":
            info = "Ometepe es una isla formada por dos volcanes en el Lago Cocibolca.";
            break;

        default:
            info = "Lugar no encontrado.";
    }

    document.getElementById("placeInfo").innerText = info;
}