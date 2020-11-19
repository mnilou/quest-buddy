import { React, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
import API from "../../util/API";
import UserTile from "../../components/UserTile";
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
        console.log(id);
        history.push("/team/" + id);
    };
    const characterPageClick = (event) => {
        event.preventDefault();
        const id = event.target.id;
        console.log(id);
        history.push("/character/" + id);
    };


    // API.getCharacters(user).then(results => {
    //     currentUser = results;
    //     characters = currentUser.data.characters;
    //     console.log(characters[0]);
    // }).catch(err => {
    //     console.log(err);
    // }) ;

    useEffect(() => {
        // example API call
        API.getCharacters(user).then(results => {
            setCharacters(results.data.characters);
            setTeams(results.data.teams);
        }).then(() => {
            console.log(characters);
            console.log(teams);
        }).catch(err => {
            console.log(err);
        })
    }, [user]);

    return (
        <main className="container">
            <h3 className="mt-3 mb-4 text-center">Welcome home, <span style={{ color: "red" }}>{user.username}</span></h3>
            <div className="row">
                <div className="col-md-5 mt-2 componentLeft border">
                    <div className="row justify-content-center">
                        <h4 className="my-3">My Characters</h4>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-danger btn-block mx-3 mt-3 mb-5" onClick={characterCreatorClick}>Create a New Character</button>
                    </div>
                    <div className="row justify-content-center border">
                        <div className="col overflow-auto" style={{ height: "25em" }}>
                        {characters.map(character => (
                                    <UserTile
                                        onClick={characterPageClick}
                                        id={character._id}
                                        key={character._id}
                                        name={character.name}
                                        class={character.class}
                                        race={character.race}
                                        level={character.level}
                                    />
                        ))}
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-md-5 mt-2 componentLeft border">
                    <div className="row justify-content-center">
                        <h4 className="my-3 ml-3 text-justify">My Teams</h4>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-info btn-block mx-3 mt-3 mb-1">Join an Existing Team</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-info btn-block mx-3 mb-2" onClick={teamCreatorClick}>Make a New Team</button>
                    </div>
                    <div className="row justify-content-center border">
                        <div className="col overflow-auto" style={{ height: "25em" }}>
                        {teams.map(team => (
                                    <TeamTile
                                        onClick={teamPageClick}
                                        id={team._id}
                                        key={team._id}
                                        name={team.name}
                                    />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default UserPage;