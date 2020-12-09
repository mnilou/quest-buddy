import React from "react";
import Artificer from "../../assets/artificer.png";
import Barbarian from "../../assets/barbarian.png";
import Bard from "../../assets/bard.png";
import BloodHunter from "../../assets/blood-hunter.png";
import Cleric from "../../assets/cleric.png";
import Druid from "../../assets/druid.png";
import Fighter from "../../assets/fighter.png";
import Monk from "../../assets/monk.png";
import Paladin from "../../assets/paladin.png";
import Ranger from "../../assets/ranger.png";
import Rogue from "../../assets/rogue.png";
import Sorcerer from "../../assets/sorcerer.png";
import Warlock from "../../assets/warlock.png";
import Wizard from "../../assets/wizard.png";

function CharacterTile(props) {
  let img; 
  switch (props.class) {
    case "Paladin":
      img = Paladin; 
    break;
    case "Artificer":
      img = Artificer; 
    break;
    case "Barbarian":
      img = Barbarian; 
    break;
    case "Blood Hunter":
      img = BloodHunter; 
    break;
    case "Cleric":
      img = Cleric; 
    break;
    case "Druid":
      img = Druid; 
    break;
    case "Fighter":
      img = Fighter; 
    break;
    case "Monk":
      img = Monk; 
    break;
    case "Ranger":
      img = Ranger; 
    break;
    case "Rogue":
      img = Rogue; 
    break;
    case "Sorcerer":
      img = Sorcerer; 
    break;
    case "Wizard":
      img = Wizard; 
    break;
    case "Bard":
      img = Bard; 
    break;
    case "Warlock":
      img = Warlock; 
    break;
    default: 
    break;
  }
  console.log(props)
  const styles = {
    container: {
      boxShadow: "5px 10px 5px #9E9E9E",
      outline: 'none',
      marginBottom: '1rem',
      marginTop: '1rem',
      border: 'none',
    },
    icon: {
      width: '8rem',
      position: 'relative',
      top: '1rem',
      right: '3rem'
    }
  };



  return (

    <div key={props.id} className="card" style={styles.container}>
      <div className="row">
        <div className="col-8" >
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.race + " / " + props.class + " / Level: " + props.level}
            </p>
            <button
              onClick={props.onClick}
              id={props.id}
              className="btn" style={{ backgroundColor: "purple", borderBlockColor: "purple", color: "white" }}>Go to Character</button>
          </div>
        </div>
        <div className="col-4">
          <img src ={img} alt="test" style={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default CharacterTile;