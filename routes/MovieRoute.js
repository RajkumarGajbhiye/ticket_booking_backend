const express = require('express')
 const router =express.Router();
const {getMovie,getDetailsById} = require("../controllers/movieController.js")


router.route('/movies').get(getMovie)
router.route('/singlemovie/:id').get(getDetailsById)


 module.exports =router