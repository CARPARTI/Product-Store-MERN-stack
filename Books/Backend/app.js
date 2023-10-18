const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const userRouter = require("./routes/user-routes")
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use("/books", router);//localhost::5000/books
app.use("/users",userRouter)


mongoose.connect("mongodb+srv://admin:fusion77fall@cluster0.oxsoc.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=> console.log("Connected to Database"))
.then(() => {
    app.listen(5000);
}).catch((err) => console.log(err));
//password fusion77fall