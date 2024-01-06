import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // Enable CORS for all routes

app.use(express.json());
const port = process.env.PORT || 3000;

let userData = [];
let flag = false;

app.post('/user123', (req, res) => {
  // Your existing code for handling the request...

  // Adding CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (flag) {
    const obj1 = {
      fullName: body.fullName,
      email: body.email,
      password: body.password
    }
    userData.push(obj1);
  }
  console.log(userData);
  res.status(201).send('user is created');
});

app.get('/user', (req, res) => {
  res.send("I am home page")
})

app.listen(port, () => {
  console.log(`SayyaJinn belongs to ${port}`);
});
