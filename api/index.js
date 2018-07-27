const express = require("express");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const config = require("./config.json");
const graphqlSchema = require("./graphql");

mongoose.connect(
  `mongodb://${config.dbuser}:${
    config.dbpassword
  }@ds247001.mlab.com:47001/solve_the_format`
);

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/",
  graphqlHTTP({
    ...graphqlSchema,
    graphiql: true
  })
);

app.listen(6600);
