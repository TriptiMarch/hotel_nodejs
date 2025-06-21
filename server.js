const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

//Import the router files
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

app.use("/person", personRoutes);
app.use("/menu", menuRoutes);
// app.get("/", function (req, res) {
//   res.send("Welcome to my hotel");
// });

// app.get("/dosa", function (req, res) {
//   res.send("Sure sir I would love to serve dosa");
// });

// app.get("/idli", function (req, res) {
//   var customized_idli = {
//     name: "Rava idli",
//     size: "10cm diameter",
//     is_sambhar: true,
//     is_chutney: false,
//   };
//   res.send(customized_idli);
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
