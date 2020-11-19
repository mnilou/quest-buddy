import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/authContext";

function Authentication() {

    const { signup, login} = useAuth();
    const history = useHistory();
    const [formState, setFormState] = useState({ usernameSignup: "", email: "", passwordSignup: "", firstName: "", lastName: "", usernameLogin: "", passwordLogin: "" });
    const [isPending, setIsPending] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        const { usernameSignup, passwordSignup, firstName, lastName, email } = formState;
        console.log(usernameSignup + passwordSignup + firstName + lastName + email);
        if (passwordSignup.length < 8) {
            alert("Password must have at least 8 characters.");
        } else if (usernameSignup.length < 6) {
            alert("Username must contain at least 6 characters.");
        } else if (usernameSignup.length > 50) {
            alert("Username must not contain more than 16 characters.");
        } else {
            setIsPending(true);
            signup({ username: usernameSignup, password: passwordSignup, firstName, lastName, email })
                .then((res) => {
                history.push("/user")})
                .catch((error) => {
                    console.log(error);
                    alert("An error occurred.");
                    setIsPending(false);
                });
        }
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const { usernameLogin, passwordLogin } = formState;
        if (passwordLogin.length < 8) {
          alert("Password must have at least 8 characters.");
        } else if (usernameLogin.length < 6) {
          alert("Username must contain at least 6 characters.");
        } else if (usernameLogin.length > 16) {
          alert("Username must not contain more than 16 characters.");
        } else {
          setIsPending(true);
          login({ username:usernameLogin, password:passwordLogin })
            .then(() => history.push("/user"))
            .catch((error) => {
              console.log(error);
              alert("An error occurred.");
              setIsPending(false);
            });
        }
      };

    return (
        <main className="container">
            <h3 className="mt-3 mb-4 text-center">Login/Signup</h3>
            <div>{isPending && "Loading..."}</div>
            <div className="row">
                <div className="col">
                    <div className="row mt-2">
                        <div className="col-md-6 border">
                            <form className="text-center border border-light p-5" onSubmit={handleLoginSubmit}>
                                <p className="h4 mb-4">Sign in</p>
                                <input
                                    type="text"
                                    name="usernameLogin"
                                    id="usernameLogin"
                                    value={formState.usernameLogin}
                                    onChange={handleInputChange}
                                    className="form-control mb-4" placeholder="jane.doe@email.com" />
                                <input
                                    type="password"
                                    name="passwordLogin"
                                    id="passwordLogin"
                                    value={formState.passwordLogin}
                                    onChange={handleInputChange}
                                    className="form-control mb-4" placeholder="abc123!@#" />
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            href="/"
                                        >Forgot password?</a>
                                    </div>
                                </div>
                                <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>

                            </form>
                        </div>

                        <div className="col-md-6 border">
                            <form className="text-center border border-light p-5" onSubmit={handleSignUpSubmit}>
                                <p className="h4 mb-4">Sign up</p>
                                <div>{isPending && "Loading..."}</div>
                                <div className="form-row mb-4">
                                    <div className="col">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={formState.firstName}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Jane" />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={formState.lastName}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            placeholder="Doe" />
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    name="usernameSignup"
                                    id="usernameSignup"
                                    value={formState.usernameSignup}
                                    onChange={handleInputChange}
                                    className="form-control mb-4"
                                    placeholder="jane" />
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    className="form-control mb-4"
                                    placeholder="jane@email.com" />
                                <input
                                    type="password"
                                    name="passwordSignup"
                                    id="passwordSignup"
                                    value={formState.passwordSignup}
                                    className="form-control"
                                    onChange={handleInputChange}
                                    placeholder="abc123!@#" />

                                <button className="btn btn-info my-4 btn-block" type="submit">Sign up</button>
                                <p>
                                    By clicking 'Sign up' you agree to our <a href="/" target="_blank"> terms of service</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Authentication;