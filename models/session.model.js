const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    // campaign: {
    //     type: String,
    //     required: true
    // },
    // team: {
    //     type: Array,
    //     required: true
    // },
    time: {
        type: Object,
        required: true       
    }
  });

const Session = mongoose.model("Session", schema);
module.exports = Session;