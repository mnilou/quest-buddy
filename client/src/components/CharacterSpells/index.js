import React from "react";

function CharacterSpells(props) {
    //console.log(props)
  return (
    <div  className="card">
    <div className="card-body">
        <h5 className="card-title">{props.spell.name}</h5>
        <p className="card-text">Range: {props.spell.range}
    </p>
        <p className="card-text">School: {props.spell.school.name}
    </p>
    </div>
</div>
  );
}

export default CharacterSpells;