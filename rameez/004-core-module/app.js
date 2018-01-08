var fs = require('fs');

fs.writeFileSync("cow.txt","Cow is animal, cow gives milk");
console.log(fs.readFileSync("cow.txt").toString());


// Additional code -- similar to when we run pwd in cmd pmpt

console.log(__dirname);
console.log(__filename);