function initTurismo() {
    renderDestinos(NexoData.turismo);
}

function renderDestinos(lista) {
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
        const btn = document.createElement("div");
        btn.className = "map-marker-btn animated-bounce";
        btn.style.left = `${lugar.coordenadas.x}%`;
        btn.style.top = `${lugar.coordenadas.y}%`;
        btn.innerHTML = `
            <div class="btn-icon">📍</div>
            <div class="btn-tooltip">${lugar.nombre}</div>
        `;
        
        btn.onclick = () => {
            document.querySelectorAll('.map-marker-btn').forEach(p => p.classList.remove('btn-activo'));
            btn.classList.add('btn-activo');
            verDetalleTurismo(lugar.id);
        };
        container.appendChild(btn);
    });
}

function verDetalleTurismo(idLugar) {
    const lugar = NexoData.turismo.find(l => l.id === idLugar);
    const panel = document.getElementById("placeDetails");
    
    panel.classList.remove("empty");
    panel.innerHTML = `
        <div class="place-hero">
            <img src="${lugar.imagen}" alt="${lugar.nombre}" onerror="this.style.display='none'">
            <h2>${lugar.nombre}</h2>
        </div>
        <div class="place-body">
            <p class="description">${lugar.descripcion}</p>
            
            <h4>📹 Video Promocional:</h4>
            <video controls class="place-video" src="${lugar.video}"></video>
            
            <h4>📌 Sitios Imperdibles:</h4>
            <ul class="imperdibles-list">
                ${lugar.imperdibles.map(item => `<li>✨ ${item}</li>`).join('')}
            </ul>
        </div>
    `;
}

function filtrarLugares() {
    const query = document.getElementById("searchPlace").value.toLowerCase();
    const filtrados = NexoData.turismo.filter(l => l.nombre.toLowerCase().includes(query));
    renderDestinos(filtrados);
}