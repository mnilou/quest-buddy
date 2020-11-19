import { React, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";

function TeamPage() {
    const {id} = useParams();
    const history = useHistory();
    const { user } = useAuth();

    const userClick = (event) => {
        event.preventDefault();
        history.push("/user");
    };

    const teamCreatorClick = (event) => {
        event.preventDefault();
        history.push("/teamcreator");
    };

    const campaignCreatorClick = (event) => {
        event.preventDefault();
        history.push("/campaigncreator/" + id);
    };

    const campaignClick = (event) => {
        event.preventDefault();
        history.push("/campaign");
    };

    return (
        <main className="container">
            <h3 className="mt-3 mb-4 text-center">Team Sparkle Motion</h3>
            <div className="row">
                <div className="col-md-5 col-sm mt-2 componentLeft border">
                    <div className="row justify-content-center">
                        <h4 className="my-3">Current Team Members</h4>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-success btn-block mx-3 mt-3 mb-1">Ask to Join</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-success btn-block mx-3 mb-2">Leave Team</button>
                    </div>
                    <div className="row justify-content-center border">
                        <div className="col overflow-auto" style={{ height: "25em" }}>
                            <div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Chris Cruzcosa</h5>
                                        <p className="card-text">
                                            ccruzcosa@gmail.com
                                        </p>
                                        <button
                                            onClick={userClick}
                                            className="btn btn-success">Go to User
                                        </button>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Allie Cortez</h5>
                                        <p className="card-text">
                                            allie@gmail.com
                                        </p>
                                        <button
                                            onClick={userClick}
                                            className="btn btn-success">Go to User
                                        </button>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Sayeed Ghazali</h5>
                                        <p className="card-text">
                                            shardok@yahoo.com
                                        </p>
                                        <button
                                            onClick={userClick}
                                            className="btn btn-success">Go to User
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-md-5 col-sm mt-2 componentLeft border">
                    <div className="row justify-content-center">
                        <h4 className="my-3 ml-3 text-justify">Campaigns</h4>
                    </div>
                    <div className="row">
                        <button type="button" onClick={campaignCreatorClick} className="btn btn-outline-info btn-block mx-3 mt-3 mb-5">Create New Campaign</button>
                    </div>
                    <div className="row justify-content-center border">
                        <div className="col overflow-auto" style={{ height: "25em" }}>
                            <div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Into the UnderDark</h5>
                                        <p className="card-text">
                                            D&D Campaign / Characters: ( 4 )
                                        </p>
                                        <button
                                            onClick={campaignClick}
                                            className="btn btn-info">Go to Campaign
                                        </button>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Death, Frost, Doom</h5>
                                        <p className="card-text">
                                            D&D Campaign / Characters: ( 3 )
                                        </p>
                                        <button
                                            onClick={campaignClick}
                                            className="btn btn-info">Go to Campaign
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TeamPage;