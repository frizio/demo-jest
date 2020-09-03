const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Demo Jest Testing Framework")
});

app.listen(3000, () => {
  console.log("Server is now running");
});
