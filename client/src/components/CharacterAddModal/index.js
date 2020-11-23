import './style.css'

const CharacterAddModal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <form className="modal-main">
                <h4 className="p-3 bg-light">Select One of Your Existing Characters to Add to This Campaign</h4>
                <div className="form-group m-2">
                    <label htmlFor="character-select" className="pr-2">Your Current Characters:</label>

                    {(props.userCharacters.length === 0) ? 
                    <p> You Have No Existing Characters</p> :

                    <select className="form-control" id="system" type="text" defaultValue={"default"} onChange={props.handleInputChangeCharacterAdd}>
                        <option value="default" disabled>Select a Character...</option>
                    {props.userCharacters.map( character => (
                        <option key={character._id} value={character._id}>{character.name}</option>
                    ))}
                    </select>
                    
                    }
                </div>
                {(props.userCharacters.length === 0) ? 
                <div></div>  :  
                <button
                    onClick={props.handleCharacterAddSubmit}
                    className="btn btn-outline-success"
                    type="submit"
                    style={{marginTop: '0.5rem', marginLeft: '0.5rem'}}
                > Submit
                </button> }
                
                <div className="footer">
                    <button onClick={props.handleClose}
                    className="btn btn-outline-danger" style={{marginTop: '0.5rem', marginLeft: '0.5rem', marginBottom: '0.5rem'}}>Close</button>
                </div>
            </form>
        </div >
    );
};

export default CharacterAddModal;