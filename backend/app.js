const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const commentsRoutes = require("./routes/commentsRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const dbURI = process.env.MONGO_KEY;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

app.use("/comments", commentsRoutes);
app.use("/auth", authRoutes);
