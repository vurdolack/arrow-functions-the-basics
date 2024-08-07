const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const intermediateAppPath = path.join(buildOutputPath, 'app');
function myAPITS(someString: string, someNum: number) { ... };