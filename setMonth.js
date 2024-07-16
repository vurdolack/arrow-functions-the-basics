const uniqueArr = (arr) => [...new Set(arr)];
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const merge = [...new Set([...a, ...b])];