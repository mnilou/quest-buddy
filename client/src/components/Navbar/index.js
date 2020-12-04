import {NavLink, useHistory} from 'react-router-dom';
import {useAuth} from '../../util/authContext';
import './navbar.css';
import logo from '../../assets/logo192.png';

function Navbar() {
  const {isLoggedIn, logout} = useAuth();
  const history = useHistory();

  const goBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" >
      {isLoggedIn ? (
        <NavLink className="navbar-brand" to="/user">
          <img src={logo} alt="" className="logo" style={{ width: 75, height: 35, objectFit: "cover"}}/>
        </NavLink>
      ) : (
        <NavLink className="navbar-brand" to="/">
         <img src={logo} alt="" className="logo" style={{ width: 75, height: 35, objectFit: "cover"}}/>
        </NavLink>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-center mr-auto">
            <li className="nav-item active">
                {isLoggedIn && (
                <NavLink className="nav-link" to="/user" style={{color: "purple", textShadow: "1px 1px #00008b"}}>
                  Home
                </NavLink>
                )}
            </li>
            <li className="nav-item active" style={{color: "purple", textShadow: "1px 1px #00008b", verticalAlign: "bottom"}}>
                {isLoggedIn && (
                <NavLink className="nav-link" to="/team_search" style={{color: "purple"}}>
                  Team Search
                </NavLink>
                )}
            </li>
            <li className="nav-item active" style={{color: "purple", textShadow: "1px 1px #00008b"}}>
                {isLoggedIn && (
                <NavLink className="nav-link" to="/" style={{color: "purple"}} onClick={logout}>
                  Logout
                </NavLink>
                )}
            </li>
        </ul>
      </div>
      <ul className="navbar-nav text-center ml-auto">
            <li className="nav-item active">
              {isLoggedIn && (
                <button
                  className="btn btn-sm btn-danger"
                  onClick={goBack}
                >
                  Go Back
                </button>
              )}
            </li>
      </ul>
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
