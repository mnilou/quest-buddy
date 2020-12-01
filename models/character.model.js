const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Object,
  },
  system: {
    type: String
  },
  race: {
    type: String
  },
  class: {
    type: String
  },
  equipment: {
    type: Object,
    default: {gear: [], tools: [], weapons: [], armor: []}
  },
  spells: {
    type: Array
  },
  description: {
      type: String
  },
  currentHP: {
      type: Number
  }, 
  maxHP: {
      type: Number
  },
  level: {
      type: Number
  },
  strength: {
    type: Number
  },
  dexterity: {
    type: Number
  },
  constitution: {
    type: Number
  },
  intelligence: {
    type: Number
  },
  wisdom: {
    type: Number
  },
  charisma: {
    type: Number
  },
  
});

const Character = mongoose.model("Character", schema);
module.exports = Character;
