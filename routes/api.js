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

app.post("/api/session/create", (req, res) => {
    console.log(req.body);
    db.Session.create(req.body).then(()=>{
        res.json(req.body)
    }).catch(err => {
        console.log(err);
    })
});

app.put("/api/character", (req, res) => {
    console.log(typeof req.body._id);
    db.Character.findByIdAndUpdate(req.body._id, req.body).then(results => {
        res.json(results);
    })
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

app.get("/api/character/:id", (req, res) => {
    db.User.findById(req.params.id).then(results => {
        res.json(results);
    })
});

app.get("/api/character/getdata/:id", (req, res) => {
    db.Character.findById(req.params.id).then(results => {
        res.json(results);
    })
});

app.get("/api/team/getdata/:id", (req, res) => {
    db.Team.findById(req.params.id).then(results => {
        res.json(results);
    })
});

app.get("/api/team/getcampaigns/:id", (req, res) => {
    db.Team.findById(req.params.id).then(results => {
        let campaignArray = results.campaigns;
        let newArray = [];
        let counter = 0;

        campaignArray.forEach(element => {
            db.Campaign.findById(element._id).then(results => {
                newArray.push(results);
                counter++;
                if (counter === campaignArray.length) {
                    return res.json(newArray)
                }
            })
        });
    });
});

app.get("/api/team", (req, res) => {
    db.Team.find().then(results => {
        res.json(results)
    })
});

app.get("/api/team/getusers/:id", (req, res) => {
    db.Team.findById(req.params.id).then(results => {
        let userArray = results.members;
        let newArray = [];
        let counter = 0;

        userArray.forEach(element => {
            db.User.findById(element.id).then(results => {
                newArray.push(results);
                counter++;
                if (counter === userArray.length) {
                    return res.json(newArray)
                }
            })
        });
    })
});

app.get("/api/campaign/getdata/:id", (req, res) => {
    db.Campaign.findById(req.params.id).then(results => {
        res.json(results);
    })
});
  
app.get("/api/campaign", (req, res) => {
    console.log("campaigns gotten");
});
  
app.get("/api/session", (req, res) => {
    console.log("sessions gotten");
});


module.exports = app;