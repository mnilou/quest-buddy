import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/authContext";
import API from "../../util/API"

function CharacterCreator() {
  const { user } = useAuth();
  const history = useHistory();
  const [formState, setFormState] = useState({
    name: "", 
    owner: user.username,
    system: "",
    level: 0,
    hp: 0,
    race: "",
    class: "",
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
           setFormState({...formState, hp: event.target.value })
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
                            <option>Human</option>
                            <option>High Elf</option>
                            <option>Dark Elf</option>
                            <option>Orc</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class</label>
                        <select className="form-control" id="class">
                            <option>Fighter</option>
                            <option>Mage</option>
                            <option>Rogue</option>
                            <option>Barbarian</option>
                            <option>Druid</option>
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
