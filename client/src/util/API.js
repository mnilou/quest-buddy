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
        url: "/api/session/create", 
        data: session
    });
}

const updateCharacter = (character) => {
    return axios({
        method: "put",
        url: "/api/character",
        data: character
    })
}

const getCharacters = (user) => {
    return axios.get("/api/character/" + user.id)
};

const getOneCharacter = (characterId) => {
    return axios.get("/api/character/getdata/" + characterId)
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

const getOneCampaign = (campaignId) => {
    return axios.get("/api/campaign/getdata/" + campaignId)
};

const getSessionIdByCampaign = (sessionName,campaignId) => {
    return axios.get("/api/session/" + sessionName + "/searchbycampaign/" + campaignId)
};

const getOneSession = (sessionId) => {
    return axios.get("/api/session/getdata/" + sessionId)
};

const getSessionsByCampaign = (campaignId) => {
    return axios.get("/api/session/getsessionsbycampaign/" + campaignId)
};


const addCharacterToCampaignArray = (campaignId, characterId) => {
    return axios.post("/api/campaign/" + campaignId + "/addcharacter/" + characterId)
};

const API = { getTeams, getCharacters, createCampaign, getProtectedExample, getPublicExample, createCharacter, createTeam, createSession, getOneCharacter, getUsersByTeam, getOneTeam, getCampaignsByTeam, getOneCampaign, getSessionIdByCampaign, getOneSession, getSessionsByCampaign, addCharacterToCampaignArray  };

export default API;
