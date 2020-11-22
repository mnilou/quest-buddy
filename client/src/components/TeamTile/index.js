import React from "react";

function TeamTile(props) {
  return (
    <div key={props.id} className="card">
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Team Members: {props.members.length}
        </p>
            <button
                onClick={props.onClick}
                id={props.id}
                className="btn" style={{backgroundColor: "purple", borderBlockColor: "purple", color: "white"}}>Go to Team</button>
        </div>
    </div>
  );
}

export default TeamTile;