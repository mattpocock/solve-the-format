#!/usr/bin/env node

const axios = require("axios");
const mongoose = require("mongoose");
const config = require("../config.json");
mongoose.connect(
  `mongodb://${config.dbuser}:${
    config.dbpassword
  }@ds247001.mlab.com:47001/solve_the_format`
);
const CardModel = require("../models/Card");

axios
  .get("https://api.magicthegathering.io/v1/cards?set=AKH&page=1")
  .then(({ data }) => {
    data.cards.forEach(item => {
      const card = new CardModel({ ...item });
      card.save();
    });
  });
