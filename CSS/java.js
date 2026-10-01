const bota = document.getElementById("bota");
const labe = document.getElementById("labe");
const min = 1;
const max = 200;
let numeroaleatorio;


bota.onclick = function () {
 numeroaleatorio = Math.floor(Math.random() * max) + min;
  labe.textContent = numeroaleatorio;
}

