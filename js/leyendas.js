function initLeyendas() {
    const listaBox = document.getElementById("listaLeyendas");
    listaBox.innerHTML = "";

    NexoData.leyendas.forEach(leyenda => {
        const item = document.createElement("div");
        item.className = "leyenda-item-btn";
        item.innerHTML = `
            <h4>${leyenda.titulo}</h4>
            <small>📍 Origen: ${leyenda.origen}</small>
        `;
        item.onclick = () => verLeyenda(leyenda.id);
        listaBox.appendChild(item);
    });
}

function verLeyenda(idLeyenda) {
    const leyenda = NexoData.leyendas.find(ley => ley.id === idLeyenda);
    const viewer = document.getElementById("leyendaViewer");

    viewer.innerHTML = `
        <div class="leyenda-header-view">
            <h2>${leyenda.titulo}</h2>
            <span class="tag-origen">${leyenda.origen}</span>
        </div>
        
        <div class="leyenda-media">
            <img src="${leyenda.imagen}" alt="${leyenda.titulo}" class="leyenda-img" onerror="this.style.display='none'">
        </div>

        <div class="audio-narration">
            <p>🎧 <strong>Escuchar audio-cuento narrado:</strong></p>
            <audio controls src="${leyenda.audio}"></audio>
        </div>

        <div class="leyenda-content-text">
            <p class="sinopsis-text"><em>"${leyenda.sinopsis}"</em></p>
            <hr>
            <p class="narracion-p">${leyenda.narracion}</p>
        </div>
    `;
}