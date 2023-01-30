const express = require("express");
const cors = require("cors");
const app = express();
const projects = require("./fakedata/projects.json");
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("api loading");
});
app.get("/projects", async (req, res) => {
  res.send(projects);
});
app.listen(port, () => {
  console.log("personal portfolio", port);
});
