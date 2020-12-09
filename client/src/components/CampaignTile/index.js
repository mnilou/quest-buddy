import React from 'react';
import Campaign from "../../assets/campaign.png"

function CharacterTile(props) {
  const styles = {
    container: {
      boxShadow: '5px 10px 5px #9E9E9E',
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
        <div className="col-7">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              {props.system +
                ' Campaign / Characters: ( ' +
                props.characterCount +
                ' )'}
            </p>
            <button
              onClick={props.onClick}
              id={props.id}
              className="btn"
              style={{
                backgroundColor: 'purple',
                borderBlockColor: 'purple',
                color: 'white',
              }}
            >
              Go to Campaign
        </button>
          </div>
        </div>
        <div className="col-5">
            <img src={Campaign} alt="test" style={styles.icon} />
          </div>
      </div>
    </div>
  );
}

export default CharacterTile;
