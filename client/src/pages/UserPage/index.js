import { Link, useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import API from "../../util/API";
import CharacterTile from "../../components/CharacterTile";
import TeamTile from "../../components/TeamTile";

function UserPage() {
    const { id } = useParams();
    const history = useHistory();
    const { user } = useAuth();

    const [characters, setCharacters] = useState([]);
    const [teams, setTeams] = useState([]);

    const characterCreatorClick = (event) => {
        event.preventDefault();
        history.push("/charactercreator");
    };
    const teamCreatorClick = (event) => {
        event.preventDefault();
        history.push("/teamcreator");
    };
    const teamPageClick = (event) => {
        event.preventDefault();
        const id = event.target.id;
        history.push("/team/" + id);
    };
    const characterPageClick = (event) => {
        event.preventDefault();
        const id = event.target.id;
        history.push("/character/" + id);
    };

    const teamSearchClick = (event) => {
        event.preventDefault();
        history.push("/team_search");
    };

    useEffect(() => {
        // example API call
        API.getCharacters(user).then(results => {
            setCharacters(results.data.characters);
            setTeams(results.data.teams);
        })
            .catch(err => {
                console.log(err);
            })
    }, [user]);

    return (
        <main className="container">
            <h3 className="mt-5 mb-4 text-center">Welcome home, <span style={{ color: "red" }}>{user.username}</span></h3>
            <div className="row">
                <div className="col-md-5 mt-2 componentLeft border">
                    <div className="row justify-content-center">
                        <h4 className="my-3">My Characters</h4>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-success btn-block mx-3 mt-3 mb-5" onClick={characterCreatorClick}>Create a New Character</button>
                    </div>
                    <div className="row justify-content-center border">
                        {(characters.length < 1) ?

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">No Characters to Display Yet</h5>
                                    <p className="card-text text-center">Create a character to start a new adventure!</p>
                                </div>
                            </div>
                            :
                            <div className="col overflow-auto" style={{ height: "25em" }}>
                                {characters.map(character => (
                                    <CharacterTile
                                        onClick={characterPageClick}
                                        id={character._id}
                                        key={character._id}
                                        name={character.name}
                                        class={character.class}
                                        race={character.race}
                                        level={character.level}
                                    />
                                ))}
                            </div>}
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-md-5 mt-2 componentLeft border">
                    <div className="row justify-content-center">
                        <h4 className="my-3 ml-3 text-center">My Teams</h4>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-info btn-block mx-3 mt-3 mb-1" onClick={teamSearchClick}>Join an Existing Team</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-success btn-block mx-3 mb-2" onClick={teamCreatorClick}>Make a New Team</button>
                    </div>
                    <div className="row justify-content-center border">
                        <div className="col overflow-auto" style={{ height: "25em" }}>
                            {(teams.length < 1) ?
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Not a Member of Any Teams Yet</h5>
                                        <p className="card-text text-center">Find an existing team to join --- or make your own!</p>
                                    </div>
                                </div>
                                :
                                teams.map(team => (
                                    <TeamTile
                                        onClick={teamPageClick}
                                        members={team.members}
                                        id={team._id}
                                        key={team._id}
                                        name={team.name}
                                    />
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default UserPage;