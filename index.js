const express = require("express");const cors = require('cors')
const personRoute = require("./route/personRoute")
const articleRoute = require("./route/articleRoute")
const app = express();
const port = 5000;
const connect = require('./connectDB/connectDB')
app.listen(port, (e) => {
  if (e) {
    console.log("server is failed");
  } else {
    console.log(`server is running on port ${port}`);
  }
});
connect();
app.use(cors())
app.use(express.json())
app.use("/api", personRoute);
app.use("/api", articleRoute);
