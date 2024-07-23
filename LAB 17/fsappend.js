const fs = require('fs');
fs.appendFile('fsDemo2.js',"hello meet",(err)=>{
    if (err) throw err;
  console.log('The "data to append" was appended to file!');
})