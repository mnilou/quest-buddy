import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/authContext";
import API from "../../util/API"

function CharacterCreator() {
  const { user } = useAuth();
  const history = useHistory();
  const [formState, setFormState] = useState({
    name: "", 
    owner: {id: user.id, username: user.username},
    system: "D&D, 5E",
    level: 0,
    maxHP: 10,
    currentHP: 10,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    race: "Dragonborn",
    class: "Barbarian",
    description: ""
});


  const handleInputChange = (event) =>{
      switch (event.target.id) {
          case "name": 
           setFormState({...formState, name: event.target.value })
           break;
           case "system": 
           setFormState({...formState, system: event.target.value })
           break;
           case "level": 
           setFormState({...formState, level: event.target.value })
           break;
           case "hp": 
           setFormState({...formState, maxHP: event.target.value, currentHP: event.target.value })
           break;
           case "race": 
           setFormState({...formState, race: event.target.value })
           break;
           case "class": 
           setFormState({...formState, class: event.target.value })
           break;
           case "description": 
           setFormState({...formState, description: event.target.value })
           break;
           default: 
           break;    
        }
        
      
        
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
    API.createCharacter(user.id, formState).then(() => {
        console.log('character created!')
        history.push("/user");

    })
  };


  return (
    <main className="container">
        <h3 className="mt-3 mb-4 text-center">Create a New Character</h3>
        <div className="row">
            <div className="col">
                <form onSubmit={handleOnSubmit} onChange={handleInputChange}>
                    <div className="form-group">
                      <label htmlFor="name">Character Name</label>
                      <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="system">Game System</label>
                        <select className="form-control" id="system">
                            <option>D&D, 5E</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Level</label>
                        <input type="number" className="form-control" id="level"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hp">Max HP</label>
                        <input type="number" className="form-control" id="hp"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="race">Race</label>
                        <select className="form-control" id="race">
                            <option>Aarakocra</option>
                            <option>Aasimar</option>
                            <option>Bugbear</option>
                            <option>Centaur</option>
                            <option>Changeling</option>
                            <option>Dragonborn</option>
                            <option>Dwarf</option>
                            <option>Elf</option>
                            <option>Feral Tiefling</option>
                            <option>Firbolg</option>
                            <option>Genasi</option>
                            <option>Gith</option>
                            <option>Gnome</option>
                            <option>Goblin</option>
                            <option>Goliath</option>
                            <option>Grung</option>
                            <option>Half-Elf</option>
                            <option>Half-Orc</option>
                            <option>Halfling</option>
                            <option>Hobgoblin</option>
                            <option>Human</option>
                            <option>Kalashtar</option>
                            <option>Kenku</option>
                            <option>Kobold</option>
                            <option>Leonin</option>
                            <option>Lizardfolk</option>
                            <option>Locathah</option>
                            <option>Loxodon</option>
                            <option>Minotaur</option>
                            <option>Orc</option>
                            <option>Orc of Eberron</option>
                            <option>Orc of Exandria</option>
                            <option>Satyr</option>
                            <option>Shifter</option>
                            <option>Simic Hybrid</option>
                            <option>Tabaxi</option>
                            <option>Tiefking</option>
                            <option>Tortle</option>
                            <option>Triton</option>
                            <option>Vedalken</option>
                            <option>Verdan</option>
                            <option>Warforged</option>
                            <option>Yuan-ti Pureblood</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class</label>
                        <select className="form-control" id="class">
                            <option>Arificer</option>
                            <option>Barbarian</option>
                            <option>Bard</option>
                            <option>Blood Hunter</option>
                            <option>Cleric</option>
                            <option>Druid</option>
                            <option>Fighter</option>
                            <option>Monk</option>
                            <option>Paladin</option>
                            <option>Ranger</option>
                            <option>Rogue</option>
                            <option>Socerer</option>
                            <option>Warlock</option>
                            <option>Wizard</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlfor="description">Description</label>
                        <textarea type="text" className="form-control" id="description" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Create!</button>
                </form>
            </div>
        </div>
    </main>
  );
}

export default CharacterCreator;
