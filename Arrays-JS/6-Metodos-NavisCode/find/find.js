// Find devuelve solo el valor que va a encontrar
// Si se desea mas de un valor filter es mejor opción
const personajes = [
  { id: 1, nombre: 'Jaime', familia: 'Lannister', edad: 34 },
  { id: 2, nombre: 'Arya', familia: 'Stark', edad: 11 },
  { id: 3, nombre: 'Oberyn', familia: 'Martell', edad: 41 },
  { id: 4, nombre: 'Sansa', familia: 'Stark', edad: 13 },
  { id: 5, nombre: 'Jon', familia: 'Snow', edad: 14 },
  { id: 6, nombre: 'Theon', familia: 'Greyjoy', edad: 21 },
  { id: 7, nombre: 'Daenerys', familia: 'Targaryen', edad: 17 },
  { id: 8, nombre: 'Cersei', familia: 'Lannister', edad: 34 },
];

// Buscar a Arya
// Este metodo se deja de ejecutar cuando encuentra el elemento deseado

// const buscarArya = ({ nombre }) => nombre === 'Arya';

// const arya = personajes.find(buscarArya);
// console.log('Arya', arya);

// ------ Buscar Lannister ---------

const buscarLannister = ({ familia }) => familia === 'Lannister';

const lannister = personajes.find(buscarLannister);

console.log(lannister);
