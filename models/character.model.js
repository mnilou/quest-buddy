const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
  },
  system: {
    type: String
  },
  equipment: {
    type: Array
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
  }
});

const Character = mongoose.model("Character", schema);
module.exports = Character;
