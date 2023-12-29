const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const MONGO_URL = "mongodb://localhost:27017/ApnaCollege";
const path = require("path");
const methodOverride = require("method-override");

// connect to database START //
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

// Basic REQUIREMENTS //
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});

// index route//
app.get("/listings", async (req, res, next) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
  next();
});

// Create new listing//
app.get("/listings/new", async (req, res, next) => {
  res.render("listings/new.ejs", {});
});


// show route//
app.get("/listings/:id", async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
  next();
});

// craete route //
app.post("/listings", async (req, res, next) =>{
  const newListing = new Listing(req.body.listing);
  newListing.save();
  res.redirect("/listings")
});

// edit route //
app.get("/listings/:id/edit", async (req, res, next) =>{
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
})

// update route //
app.put("/listings/:id", async (req, res, next) =>{
  let {id} = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing});
  res.redirect("/listings");
});