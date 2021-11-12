const mongoose = require("mongoose")

const connectDatabase = (url) => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log("MongoDB connected");
      })
}

module.exports = connectDatabase