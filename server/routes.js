const express = require('express');
// const app = require("./server");
const router = express.Router();

const userController = require('./controller/userController');
// const { router } = require("./server");


router.get('/newestTen', userController.newestTen, (req, res) => {
  return res.status(200).send(res.locals.newestTen)
})

router.get('/allQ', userController.allQ, (req, res) => {
    return res.status(200).send(res.locals.allQ)
  })

module.exports = router;