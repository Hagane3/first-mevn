const express = require("express");

const commentsRoutes = require("./routes/commentsRoutes");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

app.listen(port, () => console.log(`App listening on port ${port}`));

app.use("/comments", commentsRoutes);
