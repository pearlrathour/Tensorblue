const express = require("express");
const bodyParser= require('body-parser');
// const path = require("path");
const cors= require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const {PORT, DB_URL} = require('./config');
const User = require("./model")
const Routes= require("./routes");

const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const sessionConfig = {
  secret: "Our Lil secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(process.env.DB_URL)
  .then(() => {console.log("Conn succ")})
  .catch((err) => console.log("No conn", err));

app.use("/", Routes);

app.listen(process.env.Port, function () {
  console.log("Server started on port 4000")
});