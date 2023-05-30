
const Movie = require("../models/moviemodel.js")

//********get data*********
const getMovie = async(req,res)=>{
    try{
        

        const data = await Movie.find();
        
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
   
 }

//
//**find data by id and find single data**
const getDetailsById = async (req, res) => {
    try {
      const data = await Movie.findById({"_id":req.params.id});
      res.json({
        status: "success",
        data,
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message,
      });
    }
  };






module.exports = {getMovie,getDetailsById}