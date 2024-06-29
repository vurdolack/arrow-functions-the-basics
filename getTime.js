var regexp  = new RegExp('{{([^}]+)}}', 'g');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const isEven = (num) => num % 2 === 0;