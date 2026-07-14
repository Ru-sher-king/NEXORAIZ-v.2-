const NexoData = {
    turismo: [
        {
            id: "leon",
            nombre: "León",
            coordenadas: { lat: 12.4378, lng: -86.8780 },
            descripcion: "Ciudad universitaria y colonial, cuna de poetas y hogar de la imponente Catedral de León.",
            imagen: "images/turismo/leon.jpg",
            video: "videos/turismo/leon.mp4",
            imperdibles: ["Catedral de León", "Hervideros de San Jacinto", "Las Peñitas"]
        },
        {
            id: "granada",
            nombre: "Granada",
            coordenadas: { lat: 11.9310, lng: -85.9560 },
            descripcion: "La Gran Sultana, famosa por su arquitectura colonial perfectamente conservada y las bellas Isletas en el Lago Cocibolca.",
            imagen: "images/turismo/granada.jpg",
            video: "videos/turismo/granada.mp4",
            imperdibles: ["Calle La Calzada", "Isletas de Granada", "Volcán Mombacho"]
        },
        {
            id: "masaya",
            nombre: "Masaya",
            coordenadas: { lat: 11.9744, lng: -86.0942 },
            descripcion: "Capital del folklore nicaragüense, hogar del majestuoso e imponente Volcán Masaya y su mercado de artesanías.",
            imagen: "images/turismo/masaya.jpg",
            video: "videos/turismo/masaya.mp4",
            imperdibles: ["Volcán Masaya (Santiago)", "Mercado de Artesanías", "Mirador de Catarina"]
        },
        {
            id: "ometepe",
            nombre: "Isla de Ometepe",
            coordenadas: { lat: 11.5034, lng: -85.6171 },
            descripcion: "Una isla paradisíaca en medio del Gran Lago, formada por dos colosales volcanes: el Concepción y el Maderas.",
            imagen: "images/turismo/ometepe.jpg",
            video: "videos/turismo/ometepe.mp4",
            imperdibles: ["Ojo de Agua", "Punta Jesús María", "Cascada de San Ramón"]
        }
    ],
    
    idiomas: {
        Mayagna: {
            1: [
                { q: "¿Cómo se dice Hola en Mayagna?", o: ["Yamni", "Perro", "Casa"], a: "Yamni", audio: "audio/mayagna/hola.mp3" },
                { q: "¿Cómo se dice Adiós en Mayagna?", o: ["Baiki", "Sol", "Luna"], a: "Baiki", audio: "audio/mayagna/adios.mp3" }
            ],
            2: [
                { q: "¿Cómo se dice Casa en Mayagna?", o: ["Uma", "Kiri", "Laya"], a: "Uma", audio: "audio/mayagna/casa.mp3" }
            ]
        },
        Miskito: {
            1: [
                { q: "¿Cómo se dice Hola en Miskito?", o: ["Naksa", "Kura", "Uma"], a: "Naksa", audio: "audio/miskito/hola.mp3" },
                { q: "¿Cómo se dice Adiós en Miskito?", o: ["Aisabe", "Pana", "Kura"], a: "Aisabe", audio: "audio/miskito/adios.mp3" }
            ],
            2: [
                { q: "¿Cómo se dice Casa en Miskito?", o: ["Watla", "Was", "Pani"], a: "Watla", audio: "audio/miskito/casa.mp3" }
            ]
        }
    },

    leyendas: [
        {
            id: "cegua",
            titulo: "La Cegua",
            origen: "León / Masaya",
            sinopsis: "Un personaje mitológico que se aparece por las noches a los hombres mujeriegos y trasnochadores.",
            narracion: "Cuentan los viejos que en los caminos oscuros, una hermosa mujer de cuerpo esbelto y cabello largo pide ayuda. Al subirse al caballo o auto del conductor, transforma su rostro en la calavera de una yegua muerta con ojos inyectados en sangre...",
            imagen: "images/leyendas/cegua.jpg",
            audio: "audio/leyendas/cegua.mp3", 
            video: "videos/leyendas/cegua.mp4"
        },
        {
            id: "carreta-nagua",
            titulo: "La Carreta Nagua",
            origen: "Nivel Nacional",
            sinopsis: "Una ruidosa carreta fantasma que pasa por las calles solitarias a medianoche.",
            narracion: "A la medianoche, se escucha un estruendo de cadenas y maderas viejas flotando en el silencio. Es la Carreta Nagua, conducida por la mismísima Muerte, tirada por bueyes flacos y esqueléticos, anunciando desgracias a quienes se atreven a mirarla por la cerradura.",
            imagen: "images/leyendas/carreta.jpg",
            audio: "audio/leyendas/carreta.mp3",
            video: "videos/leyendas/carreta.mp4"
        }
    ]
};