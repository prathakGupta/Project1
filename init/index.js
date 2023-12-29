const express = require('express');
const app = express();
const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js")
const MONGO_URL = "mongodb://localhost:27017/ApnaCollege";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("working...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  console.log("home");
});

const initDb = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("Successfully inserted");
}

initDb();