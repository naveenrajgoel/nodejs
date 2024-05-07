const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

const PORT = 8000;
app.use(express.urlencoded({extended:false}));
//routes
app.get('/api/users', (req,res)=> {
     return res.json(users);
 });

app.route("/api/users/:id")
    .get
    ((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id===id)
    return res.json(user);
   })
   .patch((req,res)=>{
    return res.json({status: "pending"})
   })
   .delete((req,res)=>{
    return res.json({status: "pending"})
   });




app.get('/users',(req,res)=>{
    const html = `
    <ul>
    ${users.map((users)=> `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.post("/api/users",(req,res)=>{
    const body = req.body;
    console.log("Body", body)
    return res.json({status: "pending"})
});

app.listen(PORT, ()=> console.log(`Server started at PORT: ${PORT}`))