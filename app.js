//Variables
const buttons = document.querySelectorAll("button"); //[botonGatito, si, no, return]
const container = document.getElementById("container");
const title = document.querySelector("h1");
const subTitle = document.querySelector("h3");
const paragraph = document.querySelectorAll("p"); //[texto, pregunta]

//Fecha Actual
const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth() + 1;
const anio = hoy.getFullYear();
//Fecha Inicio
const loveDay = new Date(2024, 3, 7, 19, 7); //año, (mes-1), dia, hora, min
//Diferencia base
const difEnMiliSeg = hoy - loveDay;

//prueba
buttons.forEach((button) => console.log(button));

//BotónGatito function
buttons[0].addEventListener("click", () => {
  console.log("Botón 1 pulsado");
  //Esconder elementos originales
  title.style.display = "none";
  subTitle.style.display = "none";
  buttons[0].style.display = "none";
  segundaPantalla();
});

//Botón SI function
buttons[1].addEventListener("click", () => {
  console.log("Botón 2 pulsado");
  //Esconder segundos elementos
  paragraph[1].style.display = "none";
  buttons[1].style.display = "none";
  buttons[2].style.display = "none";
  //Mostrar terceros elementos
  paragraph[0].innerHTML = `${cantDias()} </br> ${cantHoras()} </br> ${cantMin()}`;
  buttons[3].style.display = "flex";
});

//Botón NO function
buttons[2].addEventListener("click", () => {
  console.log("Botón 3 pulsado");
  //Esconder terceros elementos
  buttons[1].style.display = "none";
  buttons[2].style.display = "none";
  paragraph[1].style.display = "none";
  container.style.backgroundImage =
    "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)";
  //Mostrar cuartos elementos
  buttons[3].style.display = "flex";
  paragraph[0].innerHTML = "No importa, igual te amo ❤️";
});

//Botón Volver function
buttons[3].addEventListener("click", () => {
  if (paragraph[0].innerHTML === "No importa, igual te amo ❤️") {
    paragraph[0].style.display = "none";
    segundaPantalla();
    buttons[3].style.display = "none";
  } else {
    segundaPantalla();
    buttons[3].style.display = "none";
  }
});

//Funciones
function cantMeses() {
  return Math.floor(difEnMiliSeg / (1000 * 60 * 60 * 24) / 30);
}
function cantDias() {
  const difEnDias = Math.floor(difEnMiliSeg / (1000 * 60 * 60 * 24));
  return `Llevamos ${difEnDias} dias siendo novios`;
}
function cantHoras() {
  const difEnHoras = Math.floor(difEnMiliSeg / (1000 * 60 * 60));
  return `Llevamos ${difEnHoras} horas siendo novios`;
}
function cantMin() {
  const difEnMin = Math.floor(difEnMiliSeg / (1000 * 60));
  return `Llevamos ${difEnMin} minutos siendo novios`;
}
//-------------
function segundaPantalla() {
  //Mostrar primeros elementos
  if (dia === "7") {
    paragraph.innerHTML = `Hoy ${dia}/${mes}/${anio} cumplimos ${cantMeses()} meses de novios ❤️`;
  } else {
    texto.innerHTML = `Hoy ${dia}/${mes}/${anio} llevamos ${cantMeses()} meses y un poco más de novios ❤️`;
  }
  paragraph.forEach((p) => {
    p.style.display = "flex";
  });
  buttons[1].style.display = "flex";
  buttons[2].style.display = "flex";
  // Cambiar fondo
  container.style.background = "url(falling-pink-hearts.gif)";
  container.style.border = "dotted yellow";
}
