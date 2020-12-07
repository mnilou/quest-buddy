import React, {useEffect, useState} from "react";
import API from "../../util/API"
import SearchResults from "../../components/SearchResults/index";

function TeamSearch() {

    const styles = {
        container: {
            boxShadow: "5px 10px 5px #9E9E9E",
            outline: 'none',
            marginBottom: '1rem',
            marginTop: '1rem',
            border: 'none',
        },
      };
    const [teams, setTeams] = useState([]);
    const [search, setSearch] = useState("");
    const searchArray = teams.filter(team => {
        if(!search){
            return teams
        } 
        return team.name.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        API.getTeams().then(results => {
            setTeams(results.data); 
        })
    }, [])


   

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }


    return (
        <main className="container" style={styles.container}>
            <h3 className="mt-5 mb-4 text-center">Search for a Team</h3>
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input className="form-control" type="text" onChange={handleInputChange}></input>
                </div>
            <table className="table">
                <thead>
                <tr className="thead-dark">
                    <th scope="col">Team Name</th>
                    <th scope="col">Members</th>
                </tr>
                </thead>
                <SearchResults teams={searchArray}/>
            </table>
        </main>
    );
}

export default TeamSearch;