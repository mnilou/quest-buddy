import React from "react";

function UserTile(props) {
    const styles = {
        container: {
            boxShadow: "5px 10px 5px #9E9E9E",
            outline: 'none',
            marginBottom: '1rem',
            marginTop: '1rem',
            border: 'none',
        },
      };
    return (
        <div key={props.id} className="card" style={styles.container}>
            <div className="card-body">
                <h5 className="card-title">{props.username}</h5>
                <p className="card-text">
                    {props.email}
                </p>
                <button
                    onClick={props.onClick}
                    id={props.id}
                    className="btn" style={{backgroundColor: "purple", borderBlockColor: "purple", color: "white"}}>Go to User
                </button>
            </div>
        </div>
    );
}

export default UserTile;