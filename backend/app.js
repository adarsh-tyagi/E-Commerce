const express = require("express")
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload())

// Route imports
const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")
const orderRouter = require("./routes/orderRoute")


app.use("/api/v1", productRouter)
app.use("/api/v1", userRouter);
app.use("/api/v1", orderRouter)

// middlewares
app.use(errorMiddleware)

module.exports = app