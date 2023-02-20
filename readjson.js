const fs = require("fs");

let rawdata = fs.readFileSync("prompts.json");
let student = JSON.parse(rawdata);
console.log(student);
