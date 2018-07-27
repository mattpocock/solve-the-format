const { buildSchema } = require("graphql");
const cardModel = require("../models/Card");

const schema = buildSchema(`
  type Query {
    allCards(set: String, rarity: String): [Card]
    cardsByName(name: String): [Card]
  }
  type Mutation {
    removeAllCards: Card
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
  cardsByName: args => {
    return cardModel
      .find({
        name: {
          $regex: `${args.name}`,
          $options: "i"
        }
      })
      .limit(5);
  },
  removeAllCards: () => {
    return cardModel.remove();
  }
};

module.exports = {
  schema,
  rootValue
};
