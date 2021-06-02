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

// const nombresPersonajes = personajes.map(
//   // (personajes) => personajes.nombre + personajes.edad -> Devuelve un string
//   (personajes) => ({ nombre: personajes.nombre, edad: personajes.edad }) // -> Devuelve un objeto
// );

const nombresPersonajes = personajes.map(
  ({ nombre, edad }) => ({
    nombre,
    edad,
  }) // -> Devuelve un objeto
);

console.log(nombresPersonajes);
