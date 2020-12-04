import React from 'react';

function CharacterTile(props) {
  return (
    <div key={props.id} className="card">
      <div
        className="card-body"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}
      >
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
  );
}

export default CharacterTile;
