// import axios from 'axios';

// const fname = document.getElementById("fname").value;
// const lname = document.getElementById("lname").value;
// const mail = document.getElementById("mail").value;
const pass = document.getElementById("password");
const imagePassword = document.getElementById("image");
const x = "show-password-icon-18.jpg";
const y = "show pass.jpg";
imagePassword.addEventListener("click", () => {
  const x = "show-password-icon-18.jpg";
  const y = "show pass.jpg";
  const z = imagePassword.src;
  if (z.includes(x)) {
    imagePassword.src = y;
    pass.type = "text";
  } else {
    imagePassword.src = x;
    pass.type = "password";
  }
});
const submitt = document.getElementById("submit");

submitt.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const mail = document.getElementById("mail").value;
  const pass = document.getElementById("password").value;

  const fullName = fname + " " + lname;
  axios.post("https://login123-48b746d1d006.herokuapp.com/user123", {
    fullName: fullName,
    email: mail,
    password: pass,
  });

  console.log(fname);
});
