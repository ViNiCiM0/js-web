

// alert("Hello World!")
// console.log("Olá Mundo!")
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var titulo = document.querySelector("title");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");//tr

// +-
for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");//td da tr
    var peso = tdPeso.textContent;//valor td

    var tdAltura = paciente.querySelector(".info-altura");//td da tr
    var altura = tdAltura.textContent;//valor td

    var imc = peso / (Math.pow(altura, 2))

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc.toFixed(2);

}
// top
pacientes.forEach(paciente => {

    var tdPeso = paciente.querySelector(".info-peso");//td da tr
    var peso = tdPeso.textContent;//valor td

    var tdAltura = paciente.querySelector(".info-altura");//td da tr
    var altura = tdAltura.textContent;//valor td

    var imc = peso / (Math.pow(altura, 2))

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc.toFixed(2);
});

console.log(pacientes);



// console.log(peso);
// console.log(altura);
// console.log(imc.toFixed(2));