import React from "react";
import {Link} from "react-router-dom";

function SearchResults(props) {

    return (
        <tbody>
            {props.teams.map((team, index) => {
                return <tr key={team._id}>
                    <td><Link to={"/team/" + team._id}>{team.name}</Link></td>
                    <td>
                    {team.members.map(member => {
                        return <span>{member.username} </span>
                    })}
                    </td>
                </tr>
            })}
        </tbody>
    )
}

export default SearchResults;