const express=require('express');
const bodyParser=require('body-parser');

app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
    var n = Number(req.body.num1);
    var m = Number(req.body.num2);
    var result = n+m;
    res.send("Your total is: "+ result);
});

app.listen('3000',()=>{
    console.log("server started on port: 3000");
});