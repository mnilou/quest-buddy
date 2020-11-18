import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/authContext";

function TeamCreator() {
    const { logout, user } = useAuth();
    const [data, setData] = useState(null);
    const history = useHistory();


    const handleOnSubmit = (event) => {
        event.preventDefault();
        history.push("/user");
    };


    return (
        <main class="container">
            <h3 class="mt-3 mb-4 text-center">Create a New Team</h3>
            <div class="row">
                <div class="col">
                    <form onSubmit={handleOnSubmit}>
                        <div class="form-group">
                            <label for="teamName">Team Name</label>
                            <input type="text" class="form-control" id="teamName" aria-describedby="teamName" />
                        </div>
                        <button type="submit" class="btn btn-secondary">Create!</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default TeamCreator;
