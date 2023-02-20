const csv = require("csv-parser");
const fs = require("fs");
const prompts = [];

fs.createReadStream("prompts.csv")
    .pipe(csv())
    .on("data", (data) => {
        prompts.push(data);
        // console.log("=================");
        // console.log(data.act);
        // console.log("=================");
    })
    .on("end", async () => {
        console.log("prompts loaded successfully");
        let res = JSON.stringify(prompts);
        fs.writeFileSync("./src/prompts.json", res);
    });
