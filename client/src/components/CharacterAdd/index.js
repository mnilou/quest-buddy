import React from "react";
import CharacterTile from "../../components/CharacterTile";

function CharacterAdd(props) {



    return (
        <div className="col overflow-auto" style={{ height: "25em" }}>
            <button type="button" className="btn btn-outline-danger btn-block mt-3 mb-5" onClick={props.characterPageClick}>Add a Character to Campaign</button>


            {(props.characters.length > 0)
                ?
                props.characters.map(character => (
                    <CharacterTile
                        onClick={props.characterPageClick}
                        id={character._id}
                        key={character._id}
                        name={character.name}
                        class={character.class}
                        race={character.race}
                        level={character.level}
                    />
                ))
                :
                <div key={props.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">No Characters to Show Yet</h5>
                        <p className="card-text">Add a character to join this campaign!</p>
                    </div>
                </div>
            }

        </div>
    );
}

export default CharacterAdd;