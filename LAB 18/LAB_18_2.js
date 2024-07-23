const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    console.log(req.url);
    let file;
    
    if(req.url=== "/about"){
       file=("C:\\Users\\meetj\\Desktop\\WEB TECHNOLOGY PROGRAM\\Practice wt\\about.html")
       res.write("<h1>about</h1><br>");
    }
    else if(req.url=== "/contact"){
        file=("C:\\Users\\meetj\\Desktop\\WEB TECHNOLOGY PROGRAM\\Practice wt\\contact.html")

        res.write("<h1>contact</h1><br>");
    }
    else if(req.url=== "/home"){
        file=("C:\\Users\\meetj\\Desktop\\WEB TECHNOLOGY PROGRAM\\Practice wt\\home.html")
        res.write("<h1>home</h1><br>");
    }
    else if(req.url=== "/moreinfo"){
        file=("C:\\Users\\meetj\\Desktop\\WEB TECHNOLOGY PROGRAM\\Practice wt\\myinfo.html")
        file=("<h1>More info</h1><br>");
    }
    else if(req.url=== "/profile"){
        file=("C:\\Users\\meetj\\Desktop\\WEB TECHNOLOGY PROGRAM\\Practice wt\\profile.html")
        res.write("<h1>profile</h1><br>");
    }
    else{
    res.end('<h1>Hello, World!</h1>');
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