const getRandomBoolean = () => Math.random() >= 0.5;
console.log("0 && 1 = "+(0 && 1));
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());