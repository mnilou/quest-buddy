const express = require("express");
//const { result } = require("validate.js");
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

app.post("/api/character/equipment", (req, res) => {
    db.Character.findById(req.body.id).then(results => {
        results.equipment.push(req.body.equipment);
        results.save();
        res.json(results)
    })
    
  });

app.post("/api/character/spells", (req, res) => {
    db.Character.findById(req.body.id).then(results => {
        results.spells.push(req.body.spell);
        results.save();
        res.json(results)        
    })
    
})

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

app.post("/api/team/:teamId/adduser/:userId/:username", (req, res) => {
    db.Team.findById(req.params.teamId).then(results => {
        const usersArray = results.members;
        usersArray.push({id: req.params.userId,username: req.params.username});
        db.User.findById(req.params.userId).then(user => {
            const teamArray = user.teams;
            console.log(teamArray);
            teamArray.push(results);
            user.save();
        })
        results.save();
        res.json(results);
    })
});

app.post("/api/team/:teamId/removeuser/:userId/:username", (req, res) => {
    let index;
    let id;
    db.Team.findById(req.params.teamId).then(results => {
        id = req.params.teamId;
        const usersArray = results.members;
        let removedUser = usersArray.filter(user => {
            return user.id === req.params.userId
        })
        removedUser = removedUser[0];
        for (let i = 0; i < usersArray.length; i++){
            if(usersArray[i] === removedUser){
                index = i
            }
        }
        usersArray.splice(index, 1)
        db.User.findById(req.params.userId).then(user => {
           let teamIndex;
           let removedTeam = user.teams.filter(team => {
               return team._id == id
           })
           removedTeam = removedTeam[0]
           for (let i = 0; i < user.teams.length; i++){
                if (user.teams[i] === removedTeam){
                    teamIndex = i;
                } 
           }
           user.teams.splice(teamIndex, 1);
           user.save();
       })       
        results.save();
        res.json(results);
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
    db.Character.findByIdAndUpdate(req.body._id, req.body).then(results => {
        let index;
        const charID = JSON.stringify(results._id);
        db.User.findById(results.owner.id).then(user => {
            let character = user.characters.filter(element => {
                return JSON.stringify(element._id) === charID
            })
            character = character[0];
            for (let i = 0; i <user.characters.length; i++){
                if (user.characters[i] === character){
                    index = i;
                } 
            }
            user.characters.splice(index, 1, results);
            user.save();
            res.json(user);
        })
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

app.get("/api/session/:sessionName/searchbycampaign/:campaignId", (req, res) => {
    db.Session.findOne({ title: req.params.sessionName, campaignId: req.params.campaignId }).then(results => {
       res.json(results)
    })
});

app.get("/api/session/getdata/:sessionId", (req, res) => {
    db.Session.findById(req.params.sessionId).then(results => {
        res.json(results);
    })
});

app.get("/api/session/getsessionsbycampaign/:campaignId", (req, res) => {
    db.Session.find({campaignId: req.params.campaignId}).then(results => {
        res.json(results);
    })
});

app.post("/api/campaign/:campaignId/addcharacter/:characterId", (req, res) => {
    db.Campaign.findById(req.params.campaignId).then(results => {
        const characterArray = results.characters;
        characterArray.push(req.params.characterId),
        results.save();
        res.json(results);
    })

});



module.exports = app;