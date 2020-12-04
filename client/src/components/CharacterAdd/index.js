import React from "react";
import CharacterTile from "../../components/CharacterTile";
import CharacterAddModal from "../../components/CharacterAddModal";

function CharacterAdd (props) {


    return (
        <div className="col overflow-auto" style={{ height: "25em" }}>
            <button type="button" className="btn btn-outline-success btn-block mt-3 mb-5" onClick={props.showModalFunction}>Add a Character to Campaign</button>
          <CharacterAddModal
          show={props.show}
          handleClose={props.handleClose}
          userCharacters={props.userCharacters}
          handleCharacterAddSubmit={props.handleCharacterAddSubmit}
          handleInputChangeCharacterAdd={props.handleInputChangeCharacterAdd}
          />


            {(props.campaignCharacters.length > 0)
                ?
                props.campaignCharacters.map(character => (
                    <CharacterTile
                        onClick={props.onClick}
                        id={character._id}
                        key={character._id}
                        name={character.name}
                        class={character.class}
                        race={character.race}
                        level={character.level}
                    />
                ))
                :
                <div key={props.id} className="card" >
                    <div className="card-body">
                        <h5 className="card-title">No Characters to Show Yet</h5>
                        <p className="card-text">Add an existing character to join this campaign!</p>
                    </div>
                </div>
            }

        </div>
    );
}

export default CharacterAdd;