const express = require("express");
const app = express();
const db = require("../models/")

app.post("/api/character", (req, res) => {
  db.Character.create(req.body.character).then(result => {
    const character = result;

    db.User.findById(req.body.id).then(results => {
        const characterArray = results.characters;
        characterArray.push(character);
        results.save();
        res.json(results);
    })
  }) 

});

app.post("/api/team", (req, res) => {
  db.Team.create(req.body.team).then(result => {
    const team = result;

    db.User.findById(req.body.id).then(results => {
        const teamsArray = results.teams;
        teamsArray.push(team);
        results.save();
        res.json(results);
    })
  })
});

app.post("/api/campaign", (req, res) => {
  db.Campaign.create(req.body.campaign).then(result => {
      const campaign = result;

      db.Team.findById(req.body.id).then(results => {
          const campaignArray = results.campaigns;
          campaignArray.push(campaign),
          results.save();
          res.json(results);
      })
  })
});

app.post("/api/session", (req, res) => {
    db.Session.create(req.body).then(()=>{
        res.json(req.body)
    }).catch(err => {
        console.log(err);
    })
});

app.put("/api/character", (req, res) => {
    console.log("Character edited");
});
  
app.put("/api/team", (req, res) => {
    console.log("team edited");
});
  
app.put("/api/campaign", (req, res) => {
    console.log("campaign edited");
});
  
app.put("/api/session", (req, res) => {
    console.log("session edited");
});

app.delete("/api/character", (req, res) => {
    console.log("Character deleted");
});
  
app.delete("/api/team", (req, res) => {
    console.log("team deleted");
});
  
app.delete("/api/campaign", (req, res) => {
    console.log("campaign deleted");
});
  
app.delete("/api/session", (req, res) => {
    console.log("session deleted");
});

app.get("/api/character", (req, res) => {
    console.log("Characters gotten");
});
  
app.get("/api/team", (req, res) => {
    console.log("teams gotten");
});
  
app.get("/api/campaign", (req, res) => {
    console.log("campaigns gotten");
});
  
app.get("/api/session", (req, res) => {
    console.log("sessions gotten");
});


module.exports = app;