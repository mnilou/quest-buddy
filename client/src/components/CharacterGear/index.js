import React from "react";

function CharacterGear(props) {
  // console.log(props.equipment);
  let description;
  if (!props.equipment.desc){
    description = "";
} else {
    description = props.equipment.desc[0];
}
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.equipment.name}</h5>
        <p className="card-text">Gear type: {props.equipment.gear_category.name}</p>
        <p className="card-text">Weight: {props.equipment.weight}</p>
        <p className="card-text">Value: {props.equipment.cost.quantity} {props.equipment.cost.unit}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default CharacterGear;