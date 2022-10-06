const database = require("./utility/Database");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const createPackage = require("./routes/tour.route");
dotenv.config();

database();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/api/v1", createPackage);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
