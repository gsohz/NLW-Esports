import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

//#region Pages
import Home from "./screens/Home/Home";
import Profile from "./screens/Profile/Profile";
//#endregion

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Switch>
    </Router>
  );
}

export default Routes;
