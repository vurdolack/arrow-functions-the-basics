const isEven = (num) => num % 2 === 0;
const resultingPromises = urls.map((url) => makHttpRequest(url));
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const intermediateAppPath = path.join(buildOutputPath, 'app');