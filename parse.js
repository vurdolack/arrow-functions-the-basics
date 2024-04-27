const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);