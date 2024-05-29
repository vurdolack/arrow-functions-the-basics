const randomString = () => Math.random().toString(36).slice(2);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const channelName = getChannelName(channel);