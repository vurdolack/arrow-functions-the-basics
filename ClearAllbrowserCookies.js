const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
console.log("0 || 1 = "+(0 || 1));