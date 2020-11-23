import React from "react";

function CharacterTile(props) {
  return (
    <div key={props.id} className="card">
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.race +  " / " + props.class + " / Level: " + props.level}
        </p>
            <button
                onClick={props.onClick}
                id={props.id}
                className="btn" style={{backgroundColor: "purple", borderBlockColor: "purple", color: "white"}}>Go to Character</button>
        </div>
    </div>
  );
}

export default CharacterTile;