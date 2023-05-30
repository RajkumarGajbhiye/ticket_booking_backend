const express = require('express')
const { getBooking,saveBooking,getSaveRecords } =  require( '../controllers/bookingController.js');

const router = express.Router();
router.route("/:id").get(getBooking)
router.route("/book").post(saveBooking);
router.get("/fetchsaveBooking",getSaveRecords)
module.exports = router