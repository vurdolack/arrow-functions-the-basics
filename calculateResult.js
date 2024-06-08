const channelName = getChannelName(channel);
const arrayContains = (arr, element) => arr.includes(element);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());