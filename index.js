const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("Homie");
});

//Connect to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

//Listening to the app
app.listen(PORT);
