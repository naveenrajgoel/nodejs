const http = require("http")
const fs = require("fs")
const url = require("url")
const express = require("express");

const app = express()

app.get("/",(req,res) =>{
    return res.send("Hello From Home page");
});
app.get("/about",(req,res) =>{
    return res.send("Hello From About page");
})

// function myHandler(req, res){
   
//         if (req.url === "/favicon.ico") return res.end()
//         const log = `${Date.now()}: ${req.url} New Req recieved\n`
//         const myUrl = url.parse(req.url)
//         console.log(myUrl)
//         fs.appendFile("log.txt", log, (err,data)=>{
//         switch(req.url){
//             case'/' : res.end("Home Page")
//             break
//             case'/about' : res.end("Hii I am Naveen")
//             break
//             case'/contact' : res.end("8851182066")
//             break
//             case '/search' :
//                 const search = myUrl.query.search_query;
//                 res.end("here are your search results"+ search);
//             default:
//                 res.end("ERROR 404 not found")
//         }
//     })    
    
// }
const myServer = http.createServer(app);


myServer.listen(8000);