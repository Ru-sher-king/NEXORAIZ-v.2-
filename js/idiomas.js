    let language="";
let level=1;
let index=0;
let points=0;
let lives=3;
let unlockedLevel=1;

const data={

1:[
{
q:"¿Cómo se dice Hola?",
o:["Yamni","Perro","Casa"],
a:"Yamni"
},
{
q:"¿Cómo se dice Adiós?",
o:["Baiki","Sol","Luna"],
a:"Baiki"
},
{
q:"¿Cómo se dice Gracias?",
o:["Pana","Yulu","Was"],
a:"Pana"
},
{
q:"¿Cómo se dice Buenos días?",
o:["Yamni nani","Ani","Uma"],
a:"Yamni nani"
},
{
q:"¿Cómo se dice Bienvenido?",
o:["Ais","Wina","Pali"],
a:"Ais"
}
],

2:[
{
q:"¿Cómo se dice Casa?",
o:["Uma","Kiri","Laya"],
a:"Uma"
},
{
q:"¿Cómo se dice Agua?",
o:["Was","Kura","Tuma"],
a:"Was"
},
{
q:"¿Cómo se dice Mesa?",
o:["Pani","Yulu","Baka"],
a:"Pani"
},
{
q:"¿Cómo se dice Puerta?",
o:["Laka","Uma","Ani"],
a:"Laka"
},
{
q:"¿Cómo se dice Silla?",
o:["Kiri","Pali","Mairin"],
a:"Kiri"
}
],

3:[
{
q:"¿Cómo se dice Perro?",
o:["Kura","Was","Uma"],
a:"Kura"
},
{
q:"¿Cómo se dice Gato?",
o:["Mis","Baka","Laya"],
a:"Mis"
},
{
q:"¿Cómo se dice Pájaro?",
o:["Wina","Tuma","Pani"],
a:"Wina"
},
{
q:"¿Cómo se dice Caballo?",
o:["Buri","Yulu","Pali"],
a:"Buri"
},
{
q:"¿Cómo se dice Vaca?",
o:["Bakra","Kura","Ais"],
a:"Bakra"
}
],

4:[
{
q:"¿Cómo se dice Comida?",
o:["Laya","Uma","Was"],
a:"Laya"
},
{
q:"¿Cómo se dice Maíz?",
o:["Ani","Turu","Pali"],
a:"Ani"
},
{
q:"¿Cómo se dice Pescado?",
o:["Wabul","Yamni","Kiri"],
a:"Wabul"
},
{
q:"¿Cómo se dice Fruta?",
o:["Mairin","Baka","Tuma"],
a:"Mairin"
},
{
q:"¿Cómo se dice Carne?",
o:["Pihni","Ais","Laka"],
a:"Pihni"
}
],

5:[
{
q:"¿Cómo se dice ¿Cómo estás?",
o:["Yamni nani?","Kura","Uma"],
a:"Yamni nani?"
},
{
q:"¿Cómo se dice Estoy bien?",
o:["Pana nani","Laya","Was"],
a:"Pana nani"
},
{
q:"¿Cómo se dice ¿Cuál es tu nombre?",
o:["Mana nani?","Ani","Buri"],
a:"Mana nani?"
},
{
q:"¿Cómo se dice Mi amigo?",
o:["Wina pali","Uma","Pihni"],
a:"Wina pali"
},
{
q:"¿Cómo se dice Hasta mañana?",
o:["Baiki nani","Bakra","Laka"],
a:"Baiki nani"
}
]

};

 function openMenu(){

hideAll();

document.getElementById("menu")
.classList.remove("hidden");

}

function backToWelcome(){

hideAll();

document.getElementById("welcome")
.classList.remove("hidden");

}

function selectLanguage(lang){

language=lang;

hideAll();

document.getElementById("levels")
.classList.remove("hidden");

document.getElementById("languageTitle")
.innerHTML=lang;

}

function backMenu(){

hideAll();

document.getElementById("menu")
.classList.remove("hidden");

}

function openLevel(lv){

if(lv<=unlockedLevel){

startLevel(lv);

}else{

alert("🔒 Debes completar el nivel anterior");

}

}

function startLevel(lv){

level=lv;
index=0;
points=0;
lives=3;

updateLives();

document.getElementById("points")
.innerHTML=points;

hideAll();

document.getElementById("game")
.classList.remove("hidden");

document.getElementById("gameLanguage")
.innerHTML=language;

document.getElementById("levelName")
.innerHTML="Nivel "+level;

loadQuestion();

}

function loadQuestion(){

let questions=data[level];

if(index>=questions.length){

if(level<5){

unlockedLevel=level+1;

let next=document.getElementById(
"level"+(level+1)
);

if(next){

next.classList.remove("locked");

next.innerHTML=level+1;

}

}

document.getElementById("question")
.innerHTML="🎉 Nivel completado";

document.getElementById("options")
.innerHTML=`

<div class="complete">

<h2>Excelente</h2>

<p>
Obtuviste ${points} puntos
</p>

<button class="main-btn"
onclick="backLevels()">
Continuar
</button>

</div>

`;

document.getElementById("bar")
.style.width="100%";

return;

}

let q=questions[index];

document.getElementById("question")
.innerHTML=q.q;

document.getElementById("count")
.innerHTML=index+1;

let html="";

q.o.forEach(op=>{

html+=`

<button class="option"
onclick="checkAnswer('${op}')">

${op}

</button>

`;

});

document.getElementById("options")
.innerHTML=html;

let progress=(index/questions.length)*100;

document.getElementById("bar")
.style.width=progress+"%";

}

function checkAnswer(op){

let questions=data[level];

if(op===questions[index].a){

points+=10;

document.getElementById("points")
.innerHTML=points;

}else{

lives--;

updateLives();

if(lives<=0){

document.getElementById("question")
.innerHTML="💀 Te quedaste sin vidas";

document.getElementById("options")
.innerHTML=`

<div class="complete">

<h2>Juego terminado</h2>

<p>
Perdiste todas tus oportunidades
</p>

<button class="main-btn"
onclick="restartLevel()">

🔄 Reintentar nivel

</button>

</div>

`;

document.getElementById("bar")
.style.width="100%";

return;

}

}

index++;

loadQuestion();

}

function updateLives(){

let hearts="";

for(let i=0;i<lives;i++){

hearts+="❤️";

}

document.getElementById("lives")
.innerHTML=hearts;

}

function restartLevel(){

index=0;
points=0;
lives=3;

document.getElementById("points")
.innerHTML=points;

updateLives();

loadQuestion();

}

function backLevels(){

hideAll();

document.getElementById("levels")
.classList.remove("hidden");

}

function hideAll(){

document.getElementById("welcome")
.classList.add("hidden");

document.getElementById("menu")
.classList.add("hidden");

document.getElementById("levels")
.classList.add("hidden");

document.getElementById("game")
.classList.add("hidden");

}