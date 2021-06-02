const numeros = [1, 2, 3];

const total = numeros.reduce(suma);

function suma(acumulador, valorAcrual) {
  return acumulador + valorAcrual;
}

console.log(total);
