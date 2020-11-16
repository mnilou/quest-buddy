const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
  },
  stats: {
    type: Object
  },
  equipment: {
    type: Array
  },
  spells: {
    type: Array
  },
  description: {
      type: Text
  },
  currentHP: {
      type: Number
  }, 
  maxHP: {
      type: Number
  }
});

const Character = mongoose.model("Character", schema);
module.exports = Character;
