let language = "";
let level = 1;
let index = 0;
let points = 0;
let lives = 5;
let unlockedLevel = 1;

function obtenerPreguntas() {
    if (NexoData && NexoData.idiomas && NexoData.idiomas[language]) {
        return NexoData.idiomas[language][level] || [];
    }
    return [];
}

function openMenu() {
    hideAll();
    document.getElementById("menu").classList.remove("hidden");
}

function backToWelcome() {
    hideAll();
    document.getElementById("welcome").classList.remove("hidden");
}

function selectLanguage(lang) {
    language = lang;
    hideAll();
    document.getElementById("levels").classList.remove("hidden");
    document.getElementById("languageTitle").innerHTML = lang;
    
    unlockedLevel = 1;
    for (let i = 2; i <= 5; i++) {
        let node = document.getElementById("level" + i);
        if (node) {
            node.classList.add("locked");
            node.innerHTML = "🔒";
        }
    }
}

function backMenu() {
    hideAll();
    document.getElementById("menu").classList.remove("hidden");
}

function openLevel(lv) {
    if (lv <= unlockedLevel) {
        startLevel(lv);
    } else {
        alert("🔒 Debes completar el nivel anterior");
    }
}

function startLevel(lv) {
    level = lv;
    index = 0;
    points = 0;
    lives = 5;

    updateLives();
    document.getElementById("points").innerHTML = points;

    hideAll();
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("gameLanguage").innerHTML = language;
    document.getElementById("levelName").innerHTML = "Nivel " + level;

    loadQuestion();
}

function loadQuestion() {
    let questions = obtenerPreguntas();

    if (questions.length === 0) {
        document.getElementById("question").innerHTML = "⚠️ Próximamente";
        document.getElementById("options").innerHTML = `
            <div class="complete">
                <p>Aún estamos preparando las lecciones para este nivel.</p>
                <button class="main-btn" onclick="backLevels()">Volver al mapa</button>
            </div>
        `;
        return;
    }

    if (index >= questions.length) {
        if (level < 5) {
            unlockedLevel = level + 1;
            let next = document.getElementById("level" + (level + 1));
            if (next) {
                next.classList.remove("locked");
                next.innerHTML = level + 1;
            }
        }

        document.getElementById("question").innerHTML = "🎉 Nivel completado";
        document.getElementById("options").innerHTML = `
            <div class="complete">
                <h2>Excelente</h2>
                <p>Obtuviste ${points} puntos</p>
                <button class="main-btn" onclick="backLevels()">Continuar</button>
            </div>
        `;
        document.getElementById("bar").style.width = "100%";
        return;
    }

    let q = questions[index];
    document.getElementById("question").innerHTML = q.q;
    document.getElementById("count").innerHTML = index + 1;

    let html = "";
    q.o.forEach(op => {
        html += `
            <button class="option" onclick="checkAnswer('${op}')">
                ${op}
            </button>
        `;
    });
    document.getElementById("options").innerHTML = html;

    let progress = (index / questions.length) * 100;
    document.getElementById("bar").style.width = progress + "%";
}

function checkAnswer(op) {
    let questions = obtenerPreguntas();
    let q = questions[index];

    if (op === q.a) {
        points += 10;
        document.getElementById("points").innerHTML = points;
        
        if (q.audio) {
            let sfx = new Audio(q.audio);
            sfx.play().catch(e => console.log("Audio no cargado aún:", e));
        }
    } else {
        lives--;
        updateLives();

        if (lives <= 0) {
            document.getElementById("question").innerHTML = "💀 Te quedaste sin vidas";
            document.getElementById("options").innerHTML = `
                <div class="complete">
                    <h2>Juego terminado</h2>
                    <p>Perdiste todas tus oportunidades</p>
                    <button class="main-btn" onclick="restartLevel()">🔄 Reintentar nivel</button>
                </div>
            `;
            document.getElementById("bar").style.width = "100%";
            return;
        }
    }

    index++;
    loadQuestion();
}

function updateLives() {
    let hearts = "";
    for (let i = 0; i < lives; i++) {
        hearts += "❤️";
    }
    document.getElementById("lives").innerHTML = hearts || "💀";
}

function restartLevel() {
    index = 0;
    points = 0;
    lives = 3;
    document.getElementById("points").innerHTML = points;
    updateLives();
    loadQuestion();
}

function backLevels() {
    hideAll();
    document.getElementById("levels").classList.remove("hidden");
}

function hideAll() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("levels").classList.add("hidden");
    document.getElementById("game").classList.add("hidden");
}