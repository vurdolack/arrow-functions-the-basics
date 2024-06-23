const reversedString = str => str.split('').reverse().join('');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();