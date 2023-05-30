 /*****************************\
|  Hecho por Benjamin tavarez.  |
 \*****************************/ 
const form = document.getElementById("form");
const botones = document.querySelectorAll(".propinas .btn");
const inputs = document.querySelectorAll(".izq input");

const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const reset = document.querySelector("#reset");
let tip = null;
console.log(form);
botones.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    limpiar();

    if (event.target.type == "button") {
      inputs[1].value = "";
      event.target.classList.add("isSelected");
    }
    tip = parseFloat(event.target.value) / 100;
    calcular();
  });
});

inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    if (event.target.id == "tip") tip = parseFloat(event.target.value) / 100;
    calcular();
  });
});

form.addEventListener("reset", (event) => {
  limpiar();
  reset.disabled = true;
});

function limpiar() {
  console.log("limpiando");
  botones.forEach((selec) => selec.classList.remove("isSelected"));
  inputs[1].value = "";
  tip = null;
}

function calcular() {
  let bill = parseFloat(form.bill.value);
  let nPeople = parseFloat(form.numPeople.value);
  console.log("BILL", bill, "PEOPLE", nPeople, "TIP", tip);

  if (validar(bill, nPeople, tip)) {
    console.log("aprovado");
    tipPerson = (bill * tip) / nPeople;
    tipAmount.value = tipPerson.toFixed(2);
    totalAmount.value = (bill / nPeople + tipPerson).toFixed(2);
    reset.disabled = false;
  } else {
    console.log("rechazado");
    tipAmount.value = "";
    totalAmount.value = "";
    reset.disabled = true;
  }
}

function validar(bill_, nPeople_, tip_) {
  const input = document.getElementById("bl_npeople");

  if (nPeople_ === 0) {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
  }
  console.log(bill_ > 0, nPeople_ > 0, tip_ >= 0, tip_ != null);

  if (bill_ > 0 && nPeople_ > 0 && tip_ >= 0 && tip_ != null) return true;
  return false;
}
