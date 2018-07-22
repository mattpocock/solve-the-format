const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  manaCost: String,
  cmc: Number,
  colors: Array,
  colorIdentity: Array,
  type: String,
  types: Array,
  rarity: String,
  set: String,
  setName: String,
  text: String,
  flavor: String,
  artist: String,
  number: String,
  layout: String,
  multiverseid: Number,
  imageUrl: String,
  rulings: Array,
  foreignNames: Array,
  printings: Array,
  originalText: String,
  originalType: String,
  legalities: Array,
  id: String
});

module.exports = mongoose.model("Card", cardSchema);
