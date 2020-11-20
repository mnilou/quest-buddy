import { React, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import API from "../../util/API"

function TeamSearch() {

    const history = useHistory();
    const { user } = useAuth();

    const [teams, setTeams] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        API.getTeams().then(results => {
            setTeams(results.data);
        })
    }, [])

    const handleInputChange = (event) => {
        setSearch(event.target.value);
        console.log(search);
    }

    return (
        <main className="container">
            <h3 className="mt-3 mb-4 text-center">Search for a Team</h3>
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input className="form-control" type="text" onChange={handleInputChange}></input>
            </div>
            <table className="table">
                <thead>
                <tr className="thead-dark">
                    <th scope="col">Team Name</th>
                    <th scope="col">Members</th>
                </tr>
                </thead>
                <tbody>
                    {teams.map(team => {
                    return <tr key={team._id}>
                             <td>{team.name}</td>
                             <td>aefuyashdfukjashdfk</td> 
                            </tr>
                  
                    })}
                </tbody>
            </table>
        </main>
    );
}

export default TeamSearch;