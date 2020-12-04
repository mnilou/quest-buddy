const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    campaignId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true       
    },
    title: {
      type: String,
      required: true       
    },
    posts: {
      type: Array,
      required: false     
    },
    description: {
      type: String,
      required: false    
    },
    monsters: {
      type: Array
    }
  });

const Session = mongoose.model("Session", schema);
module.exports = Session;