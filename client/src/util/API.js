import axios from "axios";

// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");
const createCharacter = (id, character) => {
    return axios ({
        method: "post",
        url: "api/character",
        data: {id: id, character: character}
    })
}
const createTeam = (id, team) => {
    return axios({
        method: "post",
        url: "/api/team", 
        data: {id: id, team: team}
    });
}

const createCampaign = (id, campaign) => {
    //ID IS TEAM ID, NOT USER ID
    return axios({
        method: "post",
        url: "/api/campaign", 
        data: {id: id, campaign: campaign}
    });
}

const createSession = (session) => {
    return axios({
        method: "post",
        url: "/api/session", 
        data: session
    });
}


const getCharacters = (user) => {
    return axios.get("/api/character/" + user.id)
};

const getOneCharacter = (userId) => {
    return axios.get("/api/character/getdata/" + userId)
};

const getUsersByTeam = (teamId) => {
    return axios.get("/api/team/getusers/" + teamId)
};

const getOneTeam = (teamId) => {
    return axios.get("/api/team/getdata/" + teamId)
};

const getCampaignsByTeam = (teamId) => {
    return axios.get("/api/team/getcampaigns/" + teamId)
};

const getTeams = () => {
    return axios.get("api/team");
}

const API = { getTeams, getCharacters, createCampaign, getProtectedExample, getPublicExample, createCharacter, createTeam, createSession, getOneCharacter, getUsersByTeam, getOneTeam, getCampaignsByTeam  };

export default API;
