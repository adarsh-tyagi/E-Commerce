const express = require("express")
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())

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