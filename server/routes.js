const express = require('express');
const router = express.Router();

const userController = require('./controller/userController');


router.post('/addQuestion',
 userController.AddQuestion,
  (req,res) => {
    retuen res.status(200).json(res.locals.user);
  });

router.get('/search/type/:searchText',
userController.searchByType,
(req, res) => {
  return res.status(200).json(res.locals.searchResults);
});

router.get('/search/role/:searchText',
userController.searchByRole,
(req, res) => {
  return res.status(200).json(res.locals.searchResults);
});

router.get('/search/company/:searchText',
userController.searchByCompany,
(req, res) => {
return res.status(200).json(res.locals.searchResults);
});

router.post(`/loginUser`, userController.signIn, (req, res) => {
  res.status(200).json(res.locals.addedUser);
});

router.get('/newestTen', userController.newestTen, (req, res) => {
  return res.status(200).send(res.locals.newestTen);
})

router.get('/allQ', userController.allQ, (req, res) => {
  return res.status(200).send(res.locals.allQ);
  })

  //this might be a put...
router.put('/myQ', userController.myQ, (req, res) => {
  return res.status(200).send(res.locals.myQ)
})

router.delete('/deleteQ', userController.deleteQ, (req, res) => {
    return res.status(200).send(res.locals.deleteQ)
  })

router.get('/', (req,res)=> {
    return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
  });


module.exports = router;