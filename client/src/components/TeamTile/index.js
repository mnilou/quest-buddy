import React from "react";

function TeamTile(props) {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{"Level: " +" / " +  "/ "}
        </p>
            <button
                onClick={props.onClick}
                id={props.id}
                className="btn btn-danger">Go to Character</button>
        </div>
    </div>
  );
}

export default TeamTile;