import React from "react";

function CharacterEquipment(props) {
  return (
    <div  className="card">
    <div className="card-body">
        <h5 className="card-title">{props.equipment.name}</h5>
        <p className="card-text">Type: {props.equipment.equipment_category.name}
    </p>
        <p className="card-text">Cost: {props.equipment.cost.quantity} {props.equipment.cost.unit}
    </p>
    </div>
</div>
  );
}

export default CharacterEquipment;