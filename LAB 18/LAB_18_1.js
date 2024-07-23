const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end('Hello, World!');
}); 
const port = 5000;
server.listen(port,()=>{
    console.log('server running at port',port);     
})