import {React, useState} from "react";
import {useHistory} from "react-router-dom";
import API from "../../util/API"
import { useAuth } from "../../util/authContext";


function TeamCreator (){
    

    const {user, logout} = useAuth();
    const [data, setData] = useState(null);
    const [formState, setFormState] = useState({
                                            name: "", 
                                            manager: "",
                                            members: [],
                                        });
    const history = useHistory();

    const handleInputChange = (event) => {
        setFormState({name: event.target.value, manager: user.username, members: [{username: user.username, id: user.id}], campaigns: []});
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        API.createTeam(user.id, formState).then(res=>{
            console.log("Team created!");
            history.push("/user");
        });
    };


    return (
        <main className="container">
            <h3 className="mt-3 mb-4 text-center">Create a New Team</h3>
            <div className="row">
                <div className="col">
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor="teamName">Team Name</label>
                            <input type="text" className="form-control" id="teamName" aria-describedby="teamName" onChange={handleInputChange}/>
                        </div>
                        <button type="submit" className="btn btn-success">Create!</button>
                    </form>
                </div>
            </div>
        </main>
    );
};




export default TeamCreator;
