// console.log("universe07")

import express from "express";
import cors from "cors";
const app = express();
app.use(cors({origin : "*"}));

app.use(express.json());
const port = process.env.PORT || 3000;
// const port = 3000;

let userData = [];
let flag = false;
// console.o
app.post('/user123', (req, res) => {
    const body = req.body;
  
    if (!body.fullName || !body.email || !body.password) {
      return res.status(400).send({
        message: "fullname, email, and password are required!",
      });
    }
  
    const obj1 = {
      fullName: body.fullName,
      email: body.email,
      password: body.password
    };
  
    userData.push(obj1);
    console.log(userData);
  
    // Adding CORS headers
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  
    res.status(201).send('user is created');
  });
  
  
  console.log(userData);
  res.status(201).send('user is created');
  
});

app.get('/user123',(req,res)=>{
    res.send("I am home page");
    console.log("dscsdv");
  })

app.listen(port,()=>{
    console.log(`SayyaJinn belongs to ${port}`);
});