const express = require("express");
const cors = require("cors");

const commentsRoutes = require("./routes/commentsRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`App listening on port ${port}`));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

app.use("/comments", commentsRoutes);
app.use("/auth", authRoutes);
