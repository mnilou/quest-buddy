import { React, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../../util/API"
import { useAuth } from "../../util/authContext";


function CampaignCreator() {
    const styles = {
        container: {
            boxShadow: "5px 10px 5px #9E9E9E",
            outline: 'none',
            marginBottom: '1rem',
            marginTop: '1rem',
            border: 'none',
        },
      };
    const { id } = useParams();
    const { user, logout } = useAuth();
    const [data, setData] = useState(null);
    const [formState, setFormState] = useState({
        name: "",
        manager: { username: user.username, id: user.id },
        description: "",
        system: "D&D 5E",
        characters: [],
        monsters: [],
        sessions: []
    });
    const history = useHistory();

console.log(id);

    const handleInputChange = (event) => {
        switch (event.target.id) {
            case "campaignName":
                setFormState({ ...formState, name: event.target.value });
                console.log(formState);
                break;
            case "description":
                setFormState({ ...formState, description: event.target.value });
                console.log(formState);
                break;
            default:
                break;
        }

        console.log(formState);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        API.createCampaign(id, formState).then(()=> {
            history.push("/team/" + id);
        });
        
    };


    return (
        <main className="container" style={styles.container}>
            <h3 className="mt-5 mb-4 text-center">Create a New Campaign</h3>
            <div className="row">
                <div className="col" onSubmit={handleOnSubmit}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="campaignName">Campaign Name</label>
                            <input type="text" className="form-control" id="campaignName" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gameSystem">Game System</label>
                            <select className="form-control" id="gameSystem">
                                <option>D&D, 5E</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Setting Description</label>
                            <textarea type="text" onChange={handleInputChange} className="form-control" id="description" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success" style={{marginBottom: '1rem'}}>Create!</button>
                    </form>
                </div>
            </div>
        </main>
    );
};




export default CampaignCreator;