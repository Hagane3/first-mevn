const express = require("express");
const cors = require("cors");

const commentsRoutes = require("./routes/commentsRoutes");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`App listening on port ${port}`));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

app.post("/login", (req, res) => {
  console.log("login: ", req.body);
  res.json({ status: "ok" });
});

app.post("/register", (req, res) => {
  console.log("register: ", req.body);
  res.json({ status: "ok" });
});

app.use("/comments", commentsRoutes);
