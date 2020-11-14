const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    DM: {
        type: String,
        required: true
    }, 
    players: {
        type: Array,
        required: true
    }, 
    characters: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description : {
        type: String
    }, 
    link: {
        type: String
    },
    sessions: {
        type: Array
    }
  });

const Campaign = mongoose.model("Campaign", schema);
module.exports = Campaign;