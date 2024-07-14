const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const randomBoolean = () => Math.random() >= 0.5;
const currentDate = () => new Date().toLocaleDateString('en-US');