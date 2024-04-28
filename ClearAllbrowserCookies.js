const results = await Promise.all(resultingPromises);
const buildOutputPath = path.join(repositoryRootPath, 'out');