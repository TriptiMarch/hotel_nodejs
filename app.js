var fs = require("fs");
const os = require("os");
var data = require("./data");
var _ = require("lodash");

console.log(data.userName);

fs.writeFileSync("Tripti.txt", "My name is Tripti");

console.log(1 + "A");
console.log(os.platform());
console.log(os.userInfo());
