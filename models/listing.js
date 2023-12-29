const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imager: {
    type: String,
    default: "https://imgs.search.brave.com/iNdia1bD3rKW8UvKjZco-enuBdhhU3oJ4p0ropyYfjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn",
    set : (v) => v === "" ? "https://imgs.search.brave.com/iNdia1bD3rKW8UvKjZco-enuBdhhU3oJ4p0ropyYfjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8wNS8xMC8xOC90/cmVlLTgzMjA3OV82/NDAuanBn":v,

  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;