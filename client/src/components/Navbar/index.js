import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../util/authContext";

function Navbar() {
    const { isLoggedIn, logout } = useAuth();
    const history = useHistory();

    const goBack = (event) => {
        event.preventDefault();
        history.goBack();
      };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            { isLoggedIn ? <NavLink className="navbar-brand" to="/user" >Campaign Planner</NavLink> : <NavLink className="navbar-brand" to="/" >Campaign Planner</NavLink>}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active mr-2">
                        {isLoggedIn && <button className="btn btn-sm btn-outline-secondary" onClick={logout}>Logout</button>}
                    </li>
                    <li className="nav-item active">
                        {isLoggedIn && <button className="btn btn-sm btn-outline-danger" onClick={goBack}>BACK</button>}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;


// import { NavLink } from "react-router-dom";
// import { useAuth } from "../util/authContext";

// import "./Navbar.css";

// function Navbar() {
//   const { isLoggedIn, logout } = useAuth();
//   return (
//     <nav className="nav">
//       <NavLink
//         className="nav-link"
//         exact
//         to="/"
//         activeClassName="nav-link-active"
//       >
//         Home
//       </NavLink>
//       {isLoggedIn || (
//         <NavLink
//           className="nav-link"
//           to="/login"
//           activeClassName="nav-link-active"
//         >
//           Login
//         </NavLink>
//       )}
//       {isLoggedIn || (
//         <NavLink
//           className="nav-link"
//           to="/signup"
//           activeClassName="nav-link-active"
//         >
//           Signup
//         </NavLink>
//       )}
//       {isLoggedIn && (
//         <NavLink
//           className="nav-link"
//           to="/protected/example"
//           activeClassName="nav-link-active"
//         >
//           Protected
//         </NavLink>
//       )}
//       {isLoggedIn && <button onClick={logout}>Logout</button>}
//     </nav>
//   );
// }
// export default Navbar;