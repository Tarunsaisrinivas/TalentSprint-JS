const path = require("path");
const fileName = __filename;
const fs = require("fs");
console.log(path.extname(fileName));
console.log(path.dirname(fileName));
console.log(path.basename(fileName))
const obj = path.parse(fileName);
const newFolder = `${obj.dir}/test`;
//need to create folder and need to have text in it using callback hell
try {
    if(!fs.accessSync(newFolder)){
        fs.mkdirSync(newFolder)
        fs.writeFileSync(path.join(newFolder, "test.txt"), "hello","utf-8")
        
    } else {
        fs.writeFileSync(path.join(newFolder, "test.txt"), "hello" ,"utf-8")
    }

} catch (error) {
    console.log(error)
    
} 
//path to create folder
// fs.mkdirSync(path.join(__dirname, "test"), (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("folder created");
//     }
// })


// const fs = require("fs");
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("folder created");
//     }
// });

// const fs = requrire("fs");

// // need to create folder
// fs.mkdir("test", (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });


// // path to url 
// const url = require("url");
// const myUrl = new URL("https://www.google.com");
// console.log(myUrl);