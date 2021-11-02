const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const userController = require('./controller/userController.js')
const routes = require('./routes')


app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use("/build", express.static(path.join(__dirname, "../build")));

app.post(`/loginUser`,
userController.signIn,
(req, res) => {
  res.status(200).json(res.locals.addedUser);
});

app.get('/', (req,res)=> {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

// app.use('/newestTen', routes);
// app.use('/allQ', routes);
app.use('/', routes);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: { err: 'An error occurred somewhere in express. Please check your logs' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, ()=> {
  console.log(`The server is on on port ${PORT}. It's listening...`); 
});


module.exports = app;
