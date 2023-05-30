const bookingModel = require("../models/bookingModel.js");

const getBooking = async (req, res) => {
  try {
    const data = await bookingModel.findById({ _id: req.body._id });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).send({ mesage: "something wrong" });
    console.log(e);
  }
};
const saveBooking = async (req, res) => {
  try {
    const data = await bookingModel.create(req.body.data);
    console.log(req.body.data);
    res.status(200).send({ mesage: "success", data });
  } catch (e) {
    res.status(500).send({ mesage: "something wrong" });
    console.log(e);
  }
};

const getSaveRecords = async (req, res) => {
    try{
        const data = await bookingModel.find();
        res.json({
            status:"success",
            result:data.length,
            data  
          })
    }catch(err){
        res.status(500).json({
            status:"error",
            message: "Something went wrong"
                    })
    }
};

module.exports = { getBooking, saveBooking, getSaveRecords };
