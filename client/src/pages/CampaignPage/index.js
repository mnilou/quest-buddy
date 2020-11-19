import { React, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../util/authContext";

function CampaignPage() {
    const {id} = useParams();
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
        <main class="container">
        <h3 class="mt-3 mb-4 text-center">Death, Frost, Doom </h3>
        <div class="row">
            <div class="col">
                <div class="row" style={{height: "15em"}}>
                    <div class="col-11 overflow-auto" style={{backgroundColor: "grey"}}></div>
                    <div class="col-1 border">
                        <button class="btn btn-primary" style={{height: "15em", display: "block"}}>
                            Create New Event</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row mt-2">
                    <div class="col-md-6 overflow-auto border" style={{height: "15em"}}>
                        <p class="mt-2"></p>
                        <p>Up on the mountain is a house by a cemetary, haunted by the memories of atrocities past.  The cult on the mountain is long gone,
                            yet the music of weidling death carries on the wind.
                        </p>
                        <p>The mountain is cold. So very cold.</p>
                        <p>And the greedy and the foolish will march bravely up the mountain for gold and glory.</p>
                    </div>
                    <div class="col-md-6 overflow-auto border" style={{height: "15em"}}>
                        <p>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Grumble the Merciless</h5>
                                    <p class="card-text">Level: 8 / Barbarian / Dark Elf 
                                    </p>
                                    <button 
                                    onClick={characterPageClick}
                                    class="btn btn-danger">Go to Character</button>
                                </div>
                            </div>
                            </p>
                            <p>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Bumble the Less Merciless</h5>
                                    <p class="card-text">Level: 2 / Druid / Human
                                    </p>
                                    <button 
                                    onClick={characterPageClick} 
                                    class="btn btn-danger">Go to Character</button>
                                </div>
                            </div>
                            </p>
                            <p>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">R'end Stormrider</h5>
                                        <p class="card-text">Level: 12 / Necromancer / High Elf
                                        </p>
                                        <button 
                                        onClick={characterPageClick} 
                                        class="btn btn-danger">Go to Character</button>
                                    </div>
                                </div>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
export default CampaignPage;