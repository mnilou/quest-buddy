import React from "react";

function CharacterWeapons(props) {
    //console.log(props.equipment)
    // let description;
    // if (props.equipment.desc[0]){
    //     description = props.equipment.desc[0];
    // } else {
    //     description = "";
    // }
  return (
    <div  className="card">
    <div className="card-body">
        <h5 className="card-title">{props.equipment.name}</h5>
        <p className="card-text">Weapon type: {props.equipment.weapon_category} {props.equipment.weapon_range.toLowerCase()}</p>
        <p className="card-text">Damage: {props.equipment.damage.damage_dice}</p>
        <p className="card-text">Damage type: {props.equipment.damage.damage_type.name}</p>
        <p className="card-text">Range: {props.equipment.range.normal}</p>
        <p className="card-text">Weight: {props.equipment.weight}</p>
        <p className="card-text">Cost: {props.equipment.cost.quantity} {props.equipment.cost.unit}

    </p>
    </div>
</div>
  );
}

export default CharacterWeapons;