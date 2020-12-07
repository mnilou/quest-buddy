import React from "react";

function CharacterGear(props) {
  const styles = {
    container: {
        boxShadow: "5px 10px 5px #9E9E9E",
        outline: 'none',
        marginBottom: '1rem',
        marginTop: '1rem',
        border: 'none',
    },
  };
  // console.log(props.equipment);
  let description;
  if (!props.equipment.desc){
    description = "";
} else {
    description = props.equipment.desc[0];
}
  return (
    <div className="card" style={styles.container}>
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