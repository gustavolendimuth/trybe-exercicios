// const numbers = [1,2,3,4,5];

// const getSum = (result, number) => result + number;
// const sum = (elements) => elements.reduce(getSum);

// console.log(sum(numbers));

const getSum = (result, number) => result + number;
const sum = (...elements) => elements.reduce(getSum);

console.log(sum(5, 10, 30, 50));