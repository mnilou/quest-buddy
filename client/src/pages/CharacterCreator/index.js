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
                            <option>Dragonborn</option>
                            <option>Dwarf</option>
                            <option>Elf</option>
                            <option>Gnome</option>
                            <option>Half-Elf</option>
                            <option>Halfling</option>
                            <option>Half-Orc</option>
                            <option>Human</option>
                            <option>Tiefking</option>
                            <option>Orc of Exandria</option>
                            <option>Leonin</option>
                            <option>Satyr</option>
                            <option>Aarakocra</option>
                            <option>Genasi</option>
                            <option>Goliath</option>
                            <option>Aasimar</option>
                            <option>Bugbear</option>
                            <option>Firbolg</option>
                            <option>Goblin</option>
                            <option>Hobgoblin</option>
                            <option>Kenku</option>
                            <option>Kobold</option>
                            <option>Lizardfolk</option>
                            <option>Orc</option>
                            <option>Tabaxi</option>
                            <option>Triton</option>
                            <option>Yuan-ti Pureblood</option>
                            <option>Feral Tiefling</option>
                            <option>Tortle</option>
                            <option>Changeling</option>
                            <option>Kalashtar</option>
                            <option>Orc of Eberron</option>
                            <option>Shifter</option>
                            <option>Warforged</option>
                            <option>Gith</option>
                            <option>Centaur</option>
                            <option>Loxodon</option>
                            <option>Minotaur</option>
                            <option>Simic Hybrid</option>
                            <option>Vedalken</option>
                            <option>Verdan</option>
                            <option>Locathah</option>
                            <option>Grung</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class</label>
                        <select className="form-control" id="class">
                            <option>Barbarian</option>
                            <option>Bard</option>
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
                            <option>Arificer</option>
                            <option>Blood Hunter</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlfor="description">Description</label>
                        <textarea type="text" className="form-control" id="description" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger">Create!</button>
                </form>
            </div>
        </div>
    </main>
  );
}

export default CharacterCreator;
