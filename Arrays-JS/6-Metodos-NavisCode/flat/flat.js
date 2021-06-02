// Flat coloca un conjunto de arreglos anidados a un mismo nivel haciendo mas facil recorrerlos

const personas = [
  { nombre: 'Maria', edad: 12 },
  { nombre: 'Juan', edad: 13 },
  { nombre: 'Lucia', edad: 14 },
  [
    { nombre: 'Paco', edad: 15 },
    { nombre: 'Nuria', edad: 16 },
    [{ nombre: 'Raul', edad: 17 }, [{ nombre: 'Almudena', edad: 18 }]],
  ],
];

console.log(personas);

// flat(nivel-de-array)
const personasFlat = personas.flat(Infinity);
console.log('personajesFlat', personasFlat);
