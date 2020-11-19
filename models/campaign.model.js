const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    manager: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    system: {
        type: String,
        required: true
    },
    description : {
        type: String
    }, 
    characters: {
        type: Array
    },
    sessions: {
        type: Array
    }, 
    monsters: {
        type: Array
    }
  });

const Campaign = mongoose.model("Campaign", schema);
module.exports = Campaign;