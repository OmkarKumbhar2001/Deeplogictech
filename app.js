const express=require("express");
const ejs=require("ejs");
const fs=require("fs");
const app=express();
let rawdata = fs.readFileSync('./timesdata.json');
let maindata = fs.readFileSync('./remdata.json');
let mdata=JSON.parse(maindata);
let alldata = JSON.parse(rawdata);
app.set("view engine","ejs");
app.use(express.static("public"))

app.get("/",function(req,res){
    console.log(mdata)
    res.render("index",{alldat:alldata,mdat:mdata})
})
app.get("/getTimeStories",function(req,res){
    // console.log(alldata)
    res.send(alldata)
})

app.listen(3000,()=>{
    console.log("Server started at point 3000")
})