const executableName = getExecutableName(channel, appName);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isTabInView = () => !document.hidden;