import axios from "axios";
//D&D API ROUTES
const getLanguages = () => {
    return axios.get("https://www.dnd5eapi.co/api/languages")
}

const getOneLanguage = (language) => {
    return axios.get("https://www.dnd5eapi.co/api/languages/" + language)
}

const getMonsters = () => {
    return axios.get("https://www.dnd5eapi.co/api/monsters");
}

const getOneMonster = (monster) => {
    return axios.get("https://www.dnd5eapi.co/api/monsters/" + monster)
}

const addMonsterToCampaign = (monster, campaignId) => {
    return axios({
        method: "post",
        url: "/api/campaign/" + campaignId + "/addmonster/", 
        data: monster
    })
}

const getSpells = () => {
    return axios.get("https://www.dnd5eapi.co/api/spells");
}

const getOneSpell = (spell) => {
    return axios.get("https://www.dnd5eapi.co/api/spells/" + spell)
}

const getEquipment = () => {
    return axios.get("https://www.dnd5eapi.co/api/equipment");
}

const getOneEquipment = (equipment) => {
    return axios.get("https://www.dnd5eapi.co/api/equipment/" + equipment);
}

const getWeapons = () => {
    return axios.get("https://www.dnd5eapi.co/api/equipment-categories/weapon")
}

const getArmor = () => {
    return axios.get("https://www.dnd5eapi.co/api/equipment-categories/armor")
}

const getAdventureGear = () => {
    return axios.get("https://www.dnd5eapi.co/api/equipment-categories/adventuring-gear")
}

const getTools = () => {
    return axios.get("https://www.dnd5eapi.co/api/equipment-categories/tools")
}

const getStartingEquipment = (characterClass) => {
    return axios.get("https://www.dnd5eapi.co/api/starting-equipment/" + characterClass);
}
//USING OUR ROUTES
// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");

const addEquipment = (id, equipment) => {
    return axios({
        method: "post",
        url: "/api/character/equipment",
        data: {id: id, equipment: equipment}
    })
}

const addSpell = (id, spell) => {
    return axios({
        method: "post",
        url: "/api/character/spells",
        data: {id: id, spell: spell}
    })
}

const createCharacter = (id, character) => {
    return axios({
        method: "post",
        url: "/api/character",
        data: { id: id, character: character }
    })
}
const createTeam = (id, team) => {
    return axios({
        method: "post",
        url: "/api/team",
        data: { id: id, team: team }
    });
}

const createCampaign = (id, campaign) => {
    //ID IS TEAM ID, NOT USER ID
    return axios({
        method: "post",
        url: "/api/campaign",
        data: { id: id, campaign: campaign }
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

const getSessionIdByCampaign = (sessionName, campaignId) => {
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

const addUserToTeamArray = (teamId, userId, username) => {
    return axios.post("/api/team/" + teamId + "/adduser/" + userId + "/" + username)
};

const removeUserFromTeam = (teamId, userId, username) => {
    //console.log("api/team/" + teamId + "/removeuser/" + userId)
    return axios.post("/api/team/" + teamId + "/removeuser/" + userId + "/" + username)
}

const addPostToSessionArray = (sessionId, username, postText) => {
    return axios({
        method: "post",
        url: ("/api/session/" + sessionId + "/addPost"),
        data: {username, postText}
    })
}



const API = {
    addEquipment,
    addSpell,
    getLanguages,
    getOneLanguage,
    getMonsters,
    getOneMonster,
    addMonsterToCampaign,
    getEquipment,
    getOneEquipment,
    getWeapons,
    getArmor,
    getAdventureGear,
    getTools,
    getStartingEquipment,
    getSpells,
    getOneSpell,
    updateCharacter,
    getTeams,
    getCharacters,
    createCampaign,
    getProtectedExample,
    getPublicExample,
    createCharacter,
    createTeam,
    createSession,
    getOneCharacter,
    getUsersByTeam,
    getOneTeam,
    getCampaignsByTeam,
    getOneCampaign,
    getSessionIdByCampaign,
    getOneSession,
    getSessionsByCampaign,
    addCharacterToCampaignArray,
    addUserToTeamArray,
    removeUserFromTeam,
    addPostToSessionArray
};

export default API;
