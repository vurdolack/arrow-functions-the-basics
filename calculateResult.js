const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const currentDate = () => new Date().toLocaleDateString('en-US');