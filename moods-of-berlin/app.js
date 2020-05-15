require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

mongoose

  .connect("mongodb://localhost/moods-of-berlin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

// TWO TEST ROUTES ADDED BY ALFONSO
// 1
// app.get("/api/places", (req, res) => {
//   // res.send("All good with the GET request");
//   // res.send(req.query);
// });
// 2
// app.post("/", (req, res) => { // http//:localhost:5555 --> http//:localhost:5555/api/places
//   // res.send("All good with the POST request");
//   // res.send(req.body);
// });

app.use("/api/places", require("./routes/places"));

module.exports = app;
