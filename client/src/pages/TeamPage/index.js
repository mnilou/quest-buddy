import { React, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../util/API";
import { useAuth } from "../../util/authContext";
import UserTile from "../../components/UserTile";
import CampaignTile from "../../components/CampaignTile";

function TeamPage() {
    const styles = {
        container: {
            boxShadow: "10px 20px 10px #9E9E9E"
        },
      };
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
    }, [teamId, userAlreadyInTeam]);

    useEffect(() => {
        API.getUsersByTeam(teamId).then(results => {
            setUsers(results.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [teamId]);

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
            window.location.reload(false);
        })
        
    };

    const leaveTheTeamClick = (event) => {
        event.preventDefault();
        API.removeUserFromTeam(teamId, loggedInUser.id, loggedInUser.username).then(() => {
            setUserAlreadyInTeam(false);
            window.location.reload(false);
        })
    }

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
        <main className="container" style={styles.container}>
            <h3 className="mt-5 mb-4 text-center">{"Team: " + team.name}</h3>
            <div className="row">
                <div className="col-md-5 col-sm mt-2 componentLeft border">
                    <div className="row justify-content-center mb-2">
                        <h4 className="my-3">Current Team Members</h4>
                    </div>
                    {userAlreadyInTeam ? 
                    <div className="row">
                        <button type="button" onClick={leaveTheTeamClick} className="btn btn-outline-danger btn-block mx-3 mb-2">Leave Team</button>
                    </div> 
                    :
                    <div className="row">
                        <button type="button" onClick={joinTheTeamClick} className="btn btn-outline-primary btn-block mx-3 mb-4">Join the Team</button>
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
                    <div className="row justify-content-center mb-2">
                        <h4 className="my-3">Campaigns</h4>
                    </div>
                    <div className="row">
                        <button type="button" onClick={campaignCreatorClick} className="btn btn-outline-success btn-block mx-3 mb-4">Create New Campaign</button>
                    </div>
                    <div className="row justify-content-center border">
                        <div className="col overflow-auto" style={{ height: "25em" }}>
                            <div>
                            {(campaigns.length < 1) ?
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">No Campaigns Exist Yet</h5>
                                        <p className="card-text text-center">Add a campaign to begin your journey!</p>
                                    </div>
                                </div>
                                :
                                
                            campaigns.map( campaign => (
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