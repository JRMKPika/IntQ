const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000; 

const userController = require('./controller/userController.js')


app.use(express.urlencoded({extended: true}));

app.use(express.json());


app.use("/build", express.static(path.join(__dirname, "../build")));

app.post(`/loginUser`,
userController.signIn,
(req, res) => {
  // res.status(200).json();
});

app.get('/', (req,res)=> {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, ()=> {
  console.log(`The server is on on port ${PORT}. It's listening...`); 
});


module.exports = app;
