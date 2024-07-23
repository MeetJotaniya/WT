const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    let file;
    
    console.log(req.url);
    if(req.url=== "/chileprocess"){
        file = ('C:\\Users\\meetj\\Desktop\\WEB TECHNOLOGY PROGRAM\\LAB 17\\childprocess.js');
        
    }
    else if
    (req.url=== "/fs"){
            file = ("C:\\Users\\meetj\\Desktop\\WEB TECHNOLOGY PROGRAM\\LAB 17\\fs.js");
        
    }
    fs.readFile(file, (err,data)=>{
        if(err) {
        
        res.end("FILE NOT FOUND");
    }
else{
    res.end(data.toString());
}
})
}); 
const port = 5000;
server.listen(port,()=>{
    console.log('server running at port',port);     
})