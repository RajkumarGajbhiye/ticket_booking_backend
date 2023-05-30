const config = require("./config.js")
const express = require('express')
 const mongoose = require('mongoose');
 const cors = require("cors");
const movieRouter = require("./routes/MovieRoute.js");
const bookingRouter = require("./routes/bookingRoute.js");
const DBConnectionString = process.env.DATABASE_CONNECTION_STRING.replace(
   "<mongodb_user>", 
   process.env.DATABASE_USERNAME
).replace(
    "<mongodb_password>",
    process.env.DATABASE_PASSWORD
)
 mongoose.set("strictQuery",false)
mongoose.connect(DBConnectionString,{
    useNewUrlParser: true
})
.then(con => console.log("Database  connection established...."))

const app = express()

app.use(cors())
app.use(express.json())
app.use(movieRouter)
app.use("/api/booking",bookingRouter)
const port = process.env.PORT || 5000

app.listen(port,()=> console.log(`listening to ${port}.....`))
