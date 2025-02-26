// 1- Referencias a los elemetos del DOM ,referencia de los id,
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// 2- Definición de variables para almacenar los valores de los colores
// Valores para definir el color RGB
//Cada valor debe estar en el rango: [0, 255]
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// 3- Actualizar el texto de los párrafos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// 4- Función para actualizar el color de fondo
function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// 5- Event listeners para los inputs

// Para actualizar Rojo
inputRojo.addEventListener('input', () => {
    rojo = inputRojo.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
});

// Para actualizar Verde
inputVerde.addEventListener('input', () => {
    verde = inputVerde.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});

// Para actualizar Azul
inputAzul.addEventListener('input', () => {
    azul = inputAzul.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
});