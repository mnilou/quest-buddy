import axios from "axios";

// example api request for protected data (sends error i user isn't logged in)
const getProtectedExample = () => axios.get("/api/protected");

// example api request for public data
const getPublicExample = () => axios.get("/api/unprotected");
const createTeam = (team) => {
 return axios({
        method: "post",
        url: "/api/team", 
        data: team
    });
}

const createSession = (session) => {
    return axios({
        method: "post",
        url: "/api/session", 
        data: session
    });
}

const API = { getProtectedExample, getPublicExample, createTeam, createSession };

export default API;
