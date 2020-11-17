import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/Authentication";
import UserPage from "./pages/UserPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Navbar from "./components/Navbar";
import ProtectedExamplePage from "./components/ProtectedExamplePage";
import { ProvideAuth } from "./util/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    // <ProvideAuth>
    //   <Router>
    //     <Navbar />


    //     <Switch>
    //       <Route exact path="/">
    //         <HomePage />
    //       </Route>
    //       <Route path="/login">
    //         <LoginPage />
    //       </Route>
    //       <Route path="/signup">
    //         <SignupPage />
    //       </Route>
    //       <ProtectedRoute path="/protected/example">
    //         <ProtectedExamplePage />
    //       </ProtectedRoute>
    //     </Switch>
    //   </Router>


    // </ProvideAuth>
    <ProvideAuth>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Authentication />
        </Route>
        <Route path="/login">
          <Redirect to="/"/>
        </Route>
        <ProtectedRoute path="/user">
          <UserPage />
        </ProtectedRoute>
      </Switch>
    </Router>
    </ProvideAuth>
  );
}

export default App;
