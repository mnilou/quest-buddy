import React from "react";

function UserTile(props) {
    return (
        <div key={props.id} className="card">
            <div className="card-body">
                <h5 className="card-title">{props.username}</h5>
                <p className="card-text">
                    {props.email}
                </p>
                <button
                    onClick={props.onClick}
                    id={props.id}
                    className="btn btn-success">Go to User
                </button>
            </div>
        </div>
    );
}

export default UserTile;