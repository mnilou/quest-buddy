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

const createSession = (session) => {
    return axios({
        method: "post",
        url: "/api/session", 
        data: session
    });
}

const API = { getProtectedExample, getPublicExample, createCharacter, createTeam, createSession };

export default API;
