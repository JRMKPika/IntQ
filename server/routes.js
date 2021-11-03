const express = require('express');
const router = express.Router();

const userController = require('./controller/userController');

app.post(`/loginUser`, userController.signIn, (req, res) => {
  res.status(200).json(res.locals.addedUser);
});

router.get('/newestTen', userController.newestTen, (req, res) => {
  return res.status(200).send(res.locals.newestTen)
})

router.get('/allQ', userController.allQ, (req, res) => {
  return res.status(200).send(res.locals.allQ)
  })

  //this might be a put...
router.put('/myQ', userController.myQ, (req, res) => {
  return res.status(200).send(res.locals.myQ)
})

router.delete('/deleteQ', userController.deleteQ, (req, res) => {
    return res.status(200).send(res.locals.deleteQ)
  })


module.exports = router;