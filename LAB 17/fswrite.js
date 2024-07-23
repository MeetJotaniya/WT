const fs = require('fs');
fs.readFile("C:\\Users\\meetj\\Desktop\\WEB TECHNOLOGY PROGRAM\\LAB 17\\childprocess.js",(err,data)=>{
    fs.writeFile('fsDemo.js',data.toString(),(err)=>{
    if(err) throw err;
        console.log("file saved!")})
})