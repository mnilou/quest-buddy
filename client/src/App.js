import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/Authentication";
import UserPage from "./pages/UserPage";
import CharacterCreator from "./pages/CharacterCreator";
import TeamCreator from "./pages/TeamCreator";
import Navbar from "./components/Navbar";
import { ProvideAuth } from "./util/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
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
        <ProtectedRoute path="/charactercreator">
          <CharacterCreator />
        </ProtectedRoute>
        <ProtectedRoute path="/teamcreator">
          <TeamCreator />
        </ProtectedRoute>
      </Switch>
    </Router>
    </ProvideAuth>
  );
}

export default App;
