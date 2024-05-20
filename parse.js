const reversedString = str => str.split('').reverse().join('');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const uniqueArray = arr => [...new Set(arr)];