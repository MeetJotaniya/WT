const express = require('express');
const app = express();
app.use(express.json());
let list = [];

//display
app.get('/list', (req,res)=>{
    res.send(list);
});

//add
app.post('/list', (req,res)=>{
    let {name} = req.body;
    list.push(name);
    res.send(list);
});

//update
app.put('/list/:index', (req,res)=>{
    let num = parseInt(req.params.index +"");
    const {name} = req.body;
    list[num]=name;    
    res.send(list);
});

//delete
app.delete('/list/:index', (req,res)=>{
    let num = parseInt(req.params.index +"");
    list.splice(num,1);
    res.send(list);
});

//server
app.listen(2700, ()=>{
    console.log("server started at 2700");
});
