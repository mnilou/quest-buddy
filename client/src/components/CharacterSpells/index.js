import React from "react";

function CharacterSpells(props) {
    console.log(props.spell.desc)
    let description;
    if (props.spell.desc[0]){
        description = props.spell.desc[0];
    } else {
        description = "";
    }
  return (
    <div  className="card">
    <div className="card-body">
        <h5 className="card-title">{props.spell.name}</h5>
        <p className="card-text">Range: {props.spell.range}</p>
        <p className="card-text">Casting time: {props.spell.casting_time}</p>
        <p className="card-text">Spell duration: {props.spell.duration} </p>
        <p className="card-text">School: {props.spell.school.name}</p>
        <p className="card-text">{description}</p>
    </div>
</div>
  );
}

export default CharacterSpells;