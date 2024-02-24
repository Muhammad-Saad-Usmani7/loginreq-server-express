import express from "express";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors({
  origin: '*',
  methods: 'POST'
}));
app.use(express.json());

let userData = [];

app.post('/user123', (req, res) => {
  const body = req.body;
  // Check if all required fields are present
  if (!body.fullName || !body.email || !body.password) {
    res.status(400).json({
      error: "All fields (fullName, email, password) are required."
    });
    return; // Exit the function if any field is missing
  }

  // If all fields are present, proceed to create the user
  const newUser = {
    fullName: body.fullName,
    email: body.email,
    password: body.password
  };

  // Push the new user to the userData array
  userData.push(newUser);

  console.log(userData);
  res.status(201).send('User is created');
});

app.get('/user123', (req, res) => {
  res.send(userData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
