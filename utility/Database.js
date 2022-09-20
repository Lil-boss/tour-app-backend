const mongoose = require("mongoose");

module.exports = database = () => {
  mongoose
    .connect(process.env.TOUR_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected.."))
    .catch("Connect to fail....");
};
