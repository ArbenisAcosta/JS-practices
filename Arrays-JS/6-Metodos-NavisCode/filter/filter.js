const personajes = [
  { id: 1, nombre: 'Jaime', familia: 'Lannister', edad: 34 },
  { id: 2, nombre: 'Arya', familia: 'Stark', edad: 11 },
  { id: 3, nombre: 'Oberyn', familia: 'Martell', edad: 41 },
  { id: 4, nombre: 'Sansa', familia: 'Start', edad: 13 },
  { id: 5, nombre: 'Jon', familia: 'Snow', edad: 14 },
  { id: 6, nombre: 'Theon', familia: 'Greyjoy', edad: 21 },
  { id: 7, nombre: 'Daenerys', familia: 'Targaryen', edad: 17 },
  { id: 8, nombre: 'Cersei', familia: 'Lannister', edad: 34 },
];

// ---------------  filtrando el arreglo de personajes por su familia - Metodo normal -----------
// let lannister = [];
// for (let i = 0; i < personajes.length; i++) {
//   if (personajes[i].familia === 'Lannister') {
//     lannister.push(personajes[i]);
//   }
// }

// console.log(lannister);

// Metodo Filter

// Función normal
// const lannister = personajes.filter(function (personaje) {
//   return personaje.familia === 'Lannister';
// });

// Función flecha
const esLannnister = (personaje) => personaje.familia === 'Lannister';
const lannister = personajes.filter(esLannnister);

console.log(lannister);
