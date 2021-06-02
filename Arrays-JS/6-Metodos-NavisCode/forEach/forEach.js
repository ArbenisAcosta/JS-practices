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

// personajes.forEach((personajes) => console.log(personajes.nombre));

let mienbrosFamilia = [];
personajes.forEach((personajes) => {
  if (mienbrosFamilia[personajes.familia]) {
    mienbrosFamilia[personajes.familia]++;
  } else {
    mienbrosFamilia[personajes.familia] = 1;
  }
});

// El metodo forEach permite ejecutar una función por cada elemento del array
console.log(mienbrosFamilia);
