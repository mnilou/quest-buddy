import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/authContext";

function CharacterCreator() {
  const { logout, user } = useAuth();
  const [data, setData] = useState(null);
  const history = useHistory();


  const handleOnSubmit = (event) => {
    event.preventDefault();
    history.push("/user");
  };


  return (
    <main className="container">
        <h3 className="mt-3 mb-4 text-center">Create a New Character</h3>
        <div className="row">
            <div className="col">
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                      <label for="name">Character Name</label>
                      <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label for="gameSystem">Game System</label>
                        <select className="form-control" id="gameSystem">
                            <option>D&D, 5E</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="race">Race</label>
                        <select className="form-control" id="race">
                            <option>Human</option>
                            <option>High Elf</option>
                            <option>Dark Elf</option>
                            <option>Orc</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="class">Class</label>
                        <select className="form-control" id="class">
                            <option>Fighter</option>
                            <option>Mage</option>
                            <option>Rogue</option>
                            <option>Barbarian</option>
                            <option>Druid</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
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
