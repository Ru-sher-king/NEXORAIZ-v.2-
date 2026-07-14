let map;
let markersGroup;

function initTurismo() {
    if (map) return;
    map = L.map('mapContainer').setView([12.6, -85.5], 7.5);
    const mapaSatelital = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri'
    }).addTo(map);
    const mapaCalles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    });
    const capasDisponibles = {
        "🗺️ Satélite": mapaSatelital,
        "📍 Calles": mapaCalles
    };
    L.control.layers(capasDisponibles, null, { position: 'topright' }).addTo(map);
    markersGroup = L.layerGroup().addTo(map);
    renderDestinos(NexoData.turismo);
}

function renderDestinos(lista) {
    markersGroup.clearLayers()
    const container = document.getElementById("mapContainer");
    container.innerHTML = "";

    const mapaImg = document.createElement("img");
    mapaImg.src = "images/turismo/mapa-nicaragua.png"; 
    mapaImg.className = "mapa-fondo-img";
    
    mapaImg.onerror = () => {
        mapaImg.style.display = 'none';
        container.classList.add("mapa-fallback-bg");
    };
    container.appendChild(mapaImg);
    
    if(lista.length === 0) {
        container.innerHTML = "<p class='no-results'>No se encontraron destinos.</p>";
        return;
    }

lista.forEach(lugar => {
        // Leaflet maneja sus propios marcadores visuales estándar.
        // Colocamos el marcador en su Latitud y Longitud real
        const marker = L.marker([lugar.coordenadas.lat, lugar.coordenadas.lng]);

        // Tooltip flotante al pasar el mouse por encima
        marker.bindTooltip(lugar.nombre, {
            permanent: false, 
            direction: 'top'
        });

        // Evento interactivo al hacer clic
        marker.on('click', () => {
            verDetalleTurismo(lugar.id);
            // Suave paneo de cámara al destino (Efecto "flyTo" de Google Earth)
            map.flyTo([lugar.coordenadas.lat, lugar.coordenadas.lng], 10, {
                animate: true,
                duration: 1.2
            });
        });

        markersGroup.addLayer(marker);
    });
}

// Conservamos exactamente tu función de detalle original pero adaptada a tu clase moderna
function verDetalleTurismo(idLugar) {
    const lugar = NexoData.turismo.find(l => l.id === idLugar);
    const panel = document.getElementById("placeDetails");
    
    panel.classList.remove("empty");
    panel.innerHTML = `
        <div class="place-card-modern animate-fade-in">
            <div class="place-hero-image" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%), url('${lugar.imagen}');">
                <h2>${lugar.nombre}</h2>
            </div>
            <div class="place-body-content">
                <p class="description-text">${lugar.descripcion}</p>
                
                <div class="media-section">
                    <h4>📹 Video Promocional:</h4>
                    <div class="video-container-wrapper">
                        <video controls class="modern-video" src="${lugar.video}" poster="${lugar.imagen}"></video>
                    </div>
                </div>
                
                <div class="imperdibles-section">
                    <h4>📌 Sitios Imperdibles:</h4>
                    <div class="badges-grid">
                        ${lugar.imperdibles.map(item => `<span class="imperdible-badge">✨ ${item}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function filtrarLugares() {
    const query = document.getElementById("searchPlace").value.toLowerCase();
    const filtrados = NexoData.turismo.filter(l => l.nombre.toLowerCase().includes(query));
    renderDestinos(filtrados);
}