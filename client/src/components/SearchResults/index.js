import React from "react";
import {Link} from "react-router-dom";

function SearchResults(props) {

    return (
        <tbody>
            {props.teams.map(team => {
                return <tr key={team._id}>
                    <td><Link target="_blank" to={"/team/" + team._id}>{team.name}</Link></td>
                    {team.members.map((member, index) => {
                        return <td key={index}>{member.username}</td>
                    })}
                </tr>
            })}
        </tbody>
    )
}

export default SearchResults;