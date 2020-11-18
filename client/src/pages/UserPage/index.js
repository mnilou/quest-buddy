import { React, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";
function UserPage() {
    const history = useHistory();
    const { user } = useAuth();
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
        history.push("/team");
    };
    const characterPageClick = (event) => {
        event.preventDefault();
        history.push("/character");
    };
    return (
        <main className="container">
<<<<<<< HEAD
        <h3 className="mt-3 mb-4 text-center">Welcome home, <span style={{color: "red"}}>{user.username}</span></h3>
        <div className="row">
            <div className="col-md-5 mt-2 componentLeft border">
                <div className="row justify-content-center">
                    <h4 className="my-3">My Characters</h4>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-outline-danger btn-block mx-3 mt-3 mb-5" onClick={characterCreatorClick}>Create a New Character</button>
                </div>
                <div className="row justify-content-center border">
                    <div className="col overflow-auto" style={{height: "25em"}}>
                        <div className="mt-2">
                            <p>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Grumble the Merciless</h5>
                                    <p className="card-text">Level: 8 / Barbarian / Dark Elf 
=======
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
                            <div className="mt-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Grumble the Merciless</h5>
                                        <p className="card-text">Level: 8 / Barbarian / Dark Elf
>>>>>>> c20e5864e868b07e337bd701773272220c2b8a83
                                    </p>
                                    <a 
                                    href="/" 
                                    className="btn btn-danger">Go to Character</a>
                                </div>
                            </div>
                            </p>
                            <p>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Bumble the Less Merciless</h5>
                                    <p className="card-text">Level: 2 / Druid / Human
                                    </p>
                                    <a 
                                    href="/" 
                                    className="btn btn-danger">Go to Character</a>
                                </div>
                            </div>
                            </p>
                            <p>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">R'end Stormrider</h5>
                                        <p className="card-text">Level: 12 / Necromancer / High Elf
                                        </p>
                                        <a 
                                        href="/" 
                                        className="btn btn-danger">Go to Character</a>
                                    </div>
                                </div>
<<<<<<< HEAD
                            </p>
=======
                            </div>
>>>>>>> c20e5864e868b07e337bd701773272220c2b8a83
                        </div>
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
                    <div className="col overflow-auto" style={{height: "25em"}}>
                        <div className="mt-2">
                            <p>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Team Sparkle Motion</h5>
                                    <p className="card-text">Members: ( 4 ) / Campaigns: ( 1 )
                                    </p>
                                    <a 
                                    href="/" 
                                    className="btn btn-info">Go to Team</a>
                                </div>
                            </div>
                            </p>
                            <p>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Team Adventure Zone</h5>
                                    <p className="card-text">Members: ( 8 ) / Campaigns: ( 3 )
                                    </p>
                                    <a 
                                    href="/" 
                                    className="btn btn-info">Go to Team</a>
                                </div>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
export default UserPage;