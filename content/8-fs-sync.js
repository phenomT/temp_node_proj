const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync("./content/first.txt","utf8");
const second = readFileSync("./content/second.txt","utf-8");

writeFileSync("./content/result-sync.txt", "Newly combined word of Hello Word", {flag : 'a'});

console.log(first,second);
