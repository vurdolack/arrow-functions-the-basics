const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const isTabInView = () => !document.hidden;
[foo, bar] = [bar, foo];