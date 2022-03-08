const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/", (req, res) => {});

app.listen("4000", () => {
  console.log("Backend is Runing on 4000 Port");
});