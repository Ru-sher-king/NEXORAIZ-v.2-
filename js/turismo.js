let map;
let markersGroup;

function initTurismo() {
    if (map) {
        setTimeout(() => { map.invalidateSize(); }, 50);
        return;
    }

    map = L.map('mapContainer').setView([12.6, -85.5], 7.5);
    const mapaCalles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        className: 'osm-layer',
        userAgent: 'NexoRaiz/1.0 (contacto@nexoraiz.com)' 
    });
    
    const mapaSatelital = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri &mdash; Source: Esri, iCubic, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    });

    mapaCalles.addTo(map);
    const capasDisponibles = {
        "📍 Calles (OpenStreetMap)": mapaCalles,
        "🗺️ Satélite": mapaSatelital,
    };
    L.control.layers(capasDisponibles, null, { position: 'topright' }).addTo(map);
    markersGroup = L.layerGroup().addTo(map);
    renderDestinos(NexoData.turismo);

    setTimeout(() => {
        map.invalidateSize();
    }, 200);
}

function renderDestinos(lista) {
    markersGroup.clearLayers();

    if (lista.length === 0) {
        console.log("No se encontraron destinos coincidentes.");
        return;
    }

    lista.forEach(lugar => {
        const marker = L.marker([lugar.coordenadas.lat, lugar.coordenadas.lng]);

        marker.bindTooltip(lugar.nombre, {
            permanent: false,
            direction: 'top'
        });

        marker.on('click', () => {
            verDetalleTurismo(lugar.id);
            map.flyTo([lugar.coordenadas.lat, lugar.coordenadas.lng], 10, {
                animate: true,
                duration: 1.2
            });
        });

        markersGroup.addLayer(marker);
    });
}

function verDetalleTurismo(idLugar) {
    const lugar = NexoData.turismo.find(l => l.id === idLugar);
    const panel = document.getElementById("placeDetails");
    
    if (!lugar) return;

    panel.classList.remove("empty");
    panel.innerHTML = `
        <div class="place-card-modern animate-fade-in">
            <div class="place-hero-image" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%), url('${lugar.imagen}'); height: 200px; background-size: cover; background-position: center; display: flex; align-items: flex-end; padding: 15px; border-radius: 8px 8px 0 0;">
                <h2 style="color: white; margin: 0; text-shadow: 1px 1px 4px rgba(0,0,0,0.8);">${lugar.nombre}</h2>
            </div>
            
            <div class="place-body-content" style="padding: 15px;">
                <p class="description-text">${lugar.descripcion}</p>
                
                <div class="media-section" style="margin-top: 15px;">
                    <h4>📹 Video Promocional:</h4>
                    <div class="video-container-wrapper">
                        <video controls class="modern-video" src="${lugar.video}" poster="${lugar.imagen}" style="width: 100%; border-radius: 6px;"></video>
                    </div>
                </div>
                
                <div class="imperdibles-section" style="margin-top: 15px;">
                    <h4>📌 Sitios Imperdibles:</h4>
                    <div class="badges-grid" style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${lugar.imperdibles.map(item => `<span class="imperdible-badge" style="background: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 12px; font-size: 0.85em; font-weight: bold;">✨ ${item}</span>`).join('')}
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