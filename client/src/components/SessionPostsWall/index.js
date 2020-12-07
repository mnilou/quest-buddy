import React from "react";
import SessionPostsWallModal from "../../components/SessionPostsWallModal";

function SessionPostsWall(props) {
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
        <div className="row" style={styles.container}>
            <div className="col-11 overflow-auto" style={{ height: "15em" }}>
                <SessionPostsWallModal
                show={props.show}
                handleClose={props.handleClose}
                posts={props.posts}
                handleAddPostToSessionArray={props.handleAddPostToSessionArray}
                handleInputChangeNewPostText={props.handleInputChangeNewPostText}
                />

                {props.posts.length < 1 ? 
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">No Posts Yet</h5>
                        <p className="card-text text-center">Add a post</p>
                    </div>
                </div>
                :
                props.posts.map(post => (
                    <p>{post.username + ": " + post.postText }</p>
                ))}
            </div>
            <div className="col-1">
                <button className="btn btn-success" style={{ height: "15em", display: "block" }} onClick={props.showModalFunction}>
                    Add Post</button>
            </div>
        </div>
    );
}

export default SessionPostsWall;