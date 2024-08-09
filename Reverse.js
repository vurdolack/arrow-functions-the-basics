const resultingPromises = urls.map((url) => makHttpRequest(url));
const merge = (a, b) => [...a, ...b];
const minNumber = arr => Math.min(...arr);