import React from "react";

function CharacterArmor(props) {
  //console.log(props.equipment);
//   let description;
//   if (!props.equipment.desc){
//     description = "";
// } else {
//     description = props.equipment.desc[0];
// }
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.equipment.name}</h5>
        <p className="card-text">Armor type: {props.equipment.armor_category}</p>
        <p className="card-text">Base protection: {props.equipment.armor_class.base}</p>
        <p className="card-text">Weight: {props.equipment.weight}</p>
        <p className="card-text">Value: {props.equipment.cost.quantity} {props.equipment.cost.unit}</p>
      </div>
    </div>
  );
}

export default CharacterArmor;