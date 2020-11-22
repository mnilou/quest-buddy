import { React, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../util/API";
import { useAuth } from "../../util/authContext";
import UserTile from "../../components/UserTile";
import CampaignTile from "../../components/CampaignTile";

function TeamPage() {
    const { teamId } = useParams();
    const history = useHistory();
    const { user } = useAuth();
    const loggedInUser = user;
    let usersInCampaignArray; 

    const [team,setTeam] = useState({});
    const [users, setUsers] = useState([]);
    const [campaigns, setCampaigns] = useState([]);
    const [userAlreadyInTeam,setUserAlreadyInTeam] = useState(false);

    useEffect(() => {
        API.getOneTeam(teamId).then(results => {
            setTeam(results.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        API.getUsersByTeam(teamId).then(results => {
            setUsers(results.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [teamId,userAlreadyInTeam]);

    useEffect(() => {
        API.getCampaignsByTeam(teamId).then(results => {
            setCampaigns(results.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    //check if user is already in the team and if so removes the "join" button
    useEffect(() => {
        API.getUsersByTeam(teamId).then(results => {
            console.log(results.data);
            console.log(loggedInUser.id);
            usersInCampaignArray = results.data;
        })
        .then(() => {
            usersInCampaignArray.forEach(user => {
                if(user._id === loggedInUser.id ) {
                    setUserAlreadyInTeam(true);
                }
            });
        })
        .catch(err => {
            console.log(err);
        })
    }, [users]);

    const joinTheTeamClick = (event) => {
        event.preventDefault();
        API.addUserToTeamArray(teamId,loggedInUser.id, loggedInUser.username).then(() => {
            setUserAlreadyInTeam(true);
        })
    };

    const userClick = (event) => {
        event.preventDefault();
        const userId = event.target.id;
        history.push("/user/" + userId);
    };

    const campaignCreatorClick = (event) => {
        event.preventDefault();
        history.push("/campaigncreator/" + teamId);
    };

    const campaignClick = (event) => {
        event.preventDefault();
        const campaignId = event.target.id;
        history.push("/campaign/" + campaignId);
    };

    return (
        <main className="container">
            <h3 className="mt-3 mb-4 text-center">{"Team: " + team.name}</h3>
            <div className="row">
                <div className="col-md-5 col-sm mt-2 componentLeft border">
                    <div className="row justify-content-center">
                        <h4 className="my-3">Current Team Members</h4>
                    </div>
                    {userAlreadyInTeam ? 
                    <div className="row">
                        <button type="button" className="btn btn-outline-danger btn-block mx-3 mb-2">Leave Team</button>
                    </div> 
                    :
                    <div className="row">
                        <button type="button" onClick={joinTheTeamClick} className="btn btn-outline-primary btn-block mx-3 mt-3 mb-1">Join the Team</button>
                    </div>}
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
                        <button type="button" onClick={campaignCreatorClick} className="btn btn-outline-success btn-block mx-3 mt-3 mb-5">Create New Campaign</button>
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