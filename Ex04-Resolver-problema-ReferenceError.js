// Ejercicio 04: Resolver problema de referencia de variable.

// Error típico:
// ReferenceError: <identificador> is not defined
/* Sucede comunmente cuando llamamos una variable con no se encuentra en scope*/

function mostrarSaludo() {

    var mensaje = `Hola.. Este código se ejecuta en una función`;

    console.log(mensaje);
}


// console.log(mensaje); // ReferenceError: <identificador> is not defined

var numero = 7;

function mostrarNumero() {
    console.log('El número es: ' + numero);
}

mostrarNumero();
