const numbers = [1, 2, 3, 1, 2, 3, 4, 5, 6];

const estaRepetido = (value, index, arr) => {
  return arr.indexOf(value) === index;
};

const nums = numbers.filter(estaRepetido);

console.log(nums);
