import React from "react";

function Charactertools(props) {
    // console.log(props.equipment.desc)
    const styles = {
      container: {
          boxShadow: "5px 10px 5px #9E9E9E",
          outline: 'none',
          marginBottom: '1rem',
          marginTop: '1rem',
          border: 'none',
      },
    };
    let description;
    if (props.equipment.desc[0]){
        description = props.equipment.desc[0];
    } else {
        description = "";
    }
  return (
    <div  className="card" style={styles.container}>
    <div className="card-body">
        <h5 className="card-title">{props.equipment.name}</h5>
        <p className="card-text">Tool type: {props.equipment.tool_category}</p>
        <p className="card-text">Weight: {props.equipment.weight}</p>
        <p className="card-text">Cost: {props.equipment.cost.quantity} {props.equipment.cost.unit}</p>
        <p className="mt-3">{description}</p>
    </div>
</div>
  );
}

export default Charactertools;