const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
let sessionId;

const userController = require('./controller/userController.js')


app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use("/build", express.static(path.join(__dirname, "../build")));

app.post('/addQuestion',
 userController.AddQuestion,
  (req,res) => {
    return res.status(200).json(res.locals.user);
  });

app.get('/search/type/:searchText',
userController.searchByType,
(req, res) => {
  return res.status(200).json(res.locals.searchResults);
});

app.get('/search/role/:searchText',
userController.searchByRole,
(req, res) => {
  return res.status(200).json(res.locals.searchResults);
});

app.get('/search/company/:searchText',
userController.searchByCompany,
(req, res) => {
return res.status(200).json(res.locals.searchResults);
});

app.post(`/loginUser`, userController.signIn, (req, res) => {
  res.status(200).json(res.locals.addedUser);
});

app.get('/newestTen', userController.newestTen, (req, res) => {
  return res.status(200).send(res.locals.newestTen);
})

app.get('/allQ', userController.allQ, (req, res) => {
  return res.status(200).send(res.locals.allQ);
  })

  //this might be a put...
app.put('/myQ', userController.myQ, (req, res) => {
  return res.status(200).send(res.locals.myQ)
})

app.delete('/deleteQ', userController.deleteQ, (req, res) => {
    return res.status(200).send(res.locals.deleteQ)
  })

app.get('/', (req,res)=> {
    return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
  });

// app.use('/', routes);

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
