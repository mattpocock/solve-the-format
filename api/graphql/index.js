const { buildSchema } = require("graphql");
const cardModel = require("../models/Card");

const schema = buildSchema(`
  type Query {
    allCards(set: String, rarity: String): [Card]
    oneCard(name: String, id: String): Card
  }
  type Card {
    name: String
    manaCost: String
    cmc: Int
    colors: [String]
    colorIdentity: [String]
    type: String
    types: [String]
    rarity: String
    set: String
    setName: String
    text: String
    flavor: String
    artist: String
    number: String
    layout: String
    multiverseid: Int
    imageUrl: String
    rulings: [String]
    foreignNames: [String]
    printings: [String]
    originalText: String
    originalType: String
    legalities: [String]
    id: String
  }
`);

const rootValue = {
  allCards: args => {
    return cardModel.find();
  },
  oneCard: args => {
    return cardModel.findOne({ ...args });
  },
  hello: (parent, args) => "Hello World!"
};

module.exports = {
  schema,
  rootValue
};
