const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    manager: {
        type: String,
        required: true
    }, 
    members: {
        type: Array,
        required: true
    }
  
    // add additional user fields as needed
  });

const Team = mongoose.model("Team", schema);
module.exports = Team;