const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const merge = [...new Set(a.concat(b))];
const randomString = () => Math.random().toString(36).slice(2);