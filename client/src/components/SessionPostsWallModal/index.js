import './style.css'

const SessionPostsWallModal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <form className="modal-main">
                <h4 className="p-3 bg-light">Write below to add a new post to the session wall</h4>
                <div className="form-group m-2">
                    <textarea className="form-control" id="text" type="text" placeholder={"Your notes go here"} onChange={props.handleInputChangeNewPostText}/>
                </div>
                <button
                    onClick={props.handleAddPostToSessionArray}
                    className="btn btn-outline-success"
                    type="submit"
                    style={{marginTop: '0.5rem', marginLeft: '0.5rem'}}
                > Submit
                </button>
                
                <div className="footer">
                    <button onClick={props.handleClose}
                    className="btn btn-outline-danger" style={{marginTop: '0.5rem', marginLeft: '0.5rem', marginBottom: '0.5rem'}}>Close</button>
                </div>
            </form>
        </div >
    );
};

export default SessionPostsWallModal;