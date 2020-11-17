import React from "react-router-dom";

function Authentication() {


    return (
        <main className="container">
            <h3 className="mt-3 mb-4 text-center">Login/Signup</h3>
            <div className="row">
                <div className="col">
                    <div className="row mt-2">
                        <div className="col-md-6 border">
                            <form className="text-center border border-light p-5" action="#!">
                                <p className="h4 mb-4">Sign in</p>
                                <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
                                <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                            <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                                        </div>
                                    </div>
                                    <div>
                                        <a 
                                        href="/"
                                        >Forgot password?</a>
                                    </div>
                                </div>
                                <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                                <p>Not a member?
                                    <a 
                                    href="/"
                                    >Register</a>
                                </p>
                                <p>or sign in with:</p>
                                <a 
                                href="/" 
                                className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
                                <a 
                                href="/" 
                                className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
                                <a 
                                href="/" 
                                className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
                                <a 
                                href="/" 
                                className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>
                            </form>
                        </div>

                        <div className="col-md-6 border">
                            <form className="text-center border border-light p-5" action="#!">
                                <p className="h4 mb-4">Sign up</p>
                                <div className="form-row mb-4">
                                    <div className="col">
                                        <input type="text" id="defaultRegisterFormFirstName" className="form-control"
                                            placeholder="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" id="defaultRegisterFormLastName" className="form-control"
                                            placeholder="Last name" />
                                    </div>
                                </div>
                                <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4"
                                    placeholder="E-mail" />
                                <input type="password" id="defaultRegisterFormPassword" className="form-control"
                                    placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                    At least 8 characters and 1 digit
                                </small>
                                <input type="text" id="defaultRegisterPhonePassword" className="form-control"
                                    placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                    Optional - for two step authentication
                                 </small>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
                                    <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our
                                    newsletter</label>
                                </div>
                                <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>
                                <p>or sign up with:</p>
                                <a 
                                href="/" 
                                className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
                                <a 
                                href="/" 
                                className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
                                <a 
                                href="/" 
                                className="mx-2" role="button"><i
                                    className="fab fa-linkedin-in light-blue-text"></i></a>
                                <a 
                                href="/" 
                                className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>
                                <hr />
                                <p>By clicking
                                <em>Sign up</em> you agree to our
                                <a 
                                href="/" 
                                target="_blank">terms of service</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Authentication;