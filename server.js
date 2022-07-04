const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const PORT = process.env.PORT || 8080;
require("./app/routes/tutorial.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});