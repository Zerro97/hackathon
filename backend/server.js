const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Authentication Set Up
/*let passport= require("passport");
let localStrategy= require("passport-local");
let passportLocalMongoose = require("passport-local-mongoose")

app.use(require("express-session")({
  secret: "Hackathon",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());*/


// MongoDB Connection Set Up
const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Routes Set Up
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

// Open up server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
