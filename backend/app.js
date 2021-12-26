const express = require("express")
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const path = require("path")

require("dotenv").config({path: "backend/config/config.env"})

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload())
app.use(cors())

// Route imports
const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")
const orderRouter = require("./routes/orderRoute")
const paymentRouter = require("./routes/paymentRoute")


app.use("/api/v1", productRouter)
app.use("/api/v1", userRouter);
app.use("/api/v1", orderRouter)
app.use("/api/v1", paymentRouter)

app.use(express.static(path.join(__dirname, "../frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
})

// middlewares
app.use(errorMiddleware)

module.exports = app