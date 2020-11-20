import React from "react";

function SearchResults(props) {
    console.log(props);

    return (
        <tbody>
            {/* {props.searchArray.map(team => {
                return <tr key={team._id}>
                    <td>{team.name}</td>
                        {team.members.map((member, index) => {
                            return <td key={index}>{member.username}</td> 
                        })}
                      </tr>
                    })} */}
                </tbody>
    )
}

export default SearchResults;