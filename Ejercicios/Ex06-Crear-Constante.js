// Ejercicio 06: Creación de una contatnte

var nombre = 'Edward';
let lenguaje = 'JavaScript';
const PI = 3.141592;

nombre = 'Edward Ortiz';
lenguaje = 'JavaScript ESnext';
// PI = 3.1415; Genera error, una constante no se puede sobreescribir {TypeError}

const estudiante = { 'id': 6, nombre: 'Diego Ortiz' }
estudiante.id = 7;

console.log(estudiante);


estudiante = { 'id': 8, nombre: 'Daniela Ortiz' }
// console.log(estudiante);  // Error
