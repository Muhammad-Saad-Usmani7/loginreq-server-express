// console.log("universe07")

import express from "express";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors({origin : "*"}));

app.use(express.json());


let userData = [];
let flag = false;
// console.o
app.post('/user123', (req, res) => {
  const body = req.body;
  if (!body.fullName) {
    res.status(404).send({
      message: "fullname required!",
    });
    if (!body.email) {
      res.status(404).send({
        email: "email required!",
      });
      if (!body.password) {
        res.status(404).send({
          password: "password required!",
        });
      } else {
        flag = true;
      }
    } else {
      flag = true;
    }
  } else {
    flag = true;
  }
  if(flag){
    const obj1 = {
        fullName : body.fullName,
        email : body.email,
        password : body.password
    }
    userData.push(obj1);
  }
  
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