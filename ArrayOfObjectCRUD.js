const express = require('express');
const app = express();
app.use(express.json());


const students = [
    {
        enrollmentNo : 23010101281,
        name:'parth',
        email:'parth@darshan.ac.in',
        age:19
    },
    {
        enrollmentNo : 23010101116,
        name:'meet',
        email:'meet@darshan.ac.in',
        age:18
    }
];

app.get('/students',(req,res)=>{
    res.send(students);
})

app.get('/students/:enrollmentNo',(req,res)=>{
    const ans = students.find(stu=>stu.enrollmentNo==req.params.enrollmentNo);
    res.send(ans);
});

app.post('/students',(req,res)=>{
    let{enrollmentNo,name,email,age}=req.body;
    students.push({enrollmentNo,name,email,age});
    res.send({enrollmentNo,name,email,age});
});

app.patch('/students/:enrollmentNo',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.enrollmentNo==req.params.enrollmentNo){
            return true;
        }
    });
    let{enrollmentNo,name,email,age}=req.body;
    students[idToEdit] = {enrollmentNo,name,email,age};
    res.send({enrollmentNo,name,email,age});
});

app.delete('/students/:enrollmentNo',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.enrollmentNo==req.params.enrollmentNo){
            return true;
        }
    });
    students.splice(idToEdit,1);
    res.send("Student deleted");
});

app.listen(3000,()=>{
    console.log("Server started at 3000");
})