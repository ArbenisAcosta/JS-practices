// Ejecutar 1: un archivo en Nodejs

console.log('JavaScript es otro LVL');

function saludar(nombre) {
    console.log(`Hola ${ nombre }`);
}

saludar('Arbenis');

setTimeout(() => {
    console.log('Este mensaje se muestra despues de 5 segundos', 5000);
});

console.log('FIN!!');
