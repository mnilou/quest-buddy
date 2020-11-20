import { React, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../util/API";
import { useAuth } from "../../util/authContext";
import UserTile from "../../components/UserTile";
import CampaignTile from "../../components/CampaignTile";

function TeamPage() {
    const {id} = useParams();
    const history = useHistory();
    const { user } = useAuth();

    const [team,setTeam] = useState({});
    const [users, setUsers] = useState([]);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        API.getOneTeam(id).then(results => {
            setTeam(results.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        API.getUsersByTeam(id).then(results => {
            setUsers(results.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        API.getCampaignsByTeam(id).then(results => {
            console.log(results);
            setCampaigns(results.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const userClick = (event) => {
        event.preventDefault();
        const id = event.target.id;
        history.push("/user/" + id);
    };

    const campaignCreatorClick = (event) => {
        event.preventDefault();
        history.push("/campaigncreator/" + id);
    };

    const campaignClick = (event) => {
        event.preventDefault();
        const id = event.target.id;
        history.push("/campaign/" + id);
    };

    return (
        <main className="container">
            <h3 className="mt-3 mb-4 text-center">{"Team: " + team.name}</h3>
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
                            {users.map( user => (
                                    <UserTile
                                        onClick={userClick}
                                        id={user._id}
                                        key={user._id}
                                        username={user.username}
                                        email={user.email}
                                    />
                        ))}
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
                            {campaigns.map( campaign => (
                                    <CampaignTile
                                        onClick={campaignClick}
                                        id={campaign._id}
                                        key={campaign._id}
                                        name={campaign.name}
                                        system={campaign.system}
                                        characterCount={campaign.characters.length}
                                    />
                        ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TeamPage;