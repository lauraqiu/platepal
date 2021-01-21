import CreateAccountPage from "./Containers/Pages/CreateAccount/CreateAccount";
import LoginPage from "./Containers/Pages/Login/Login";
import LandingPage from "./Containers/Pages/LandingPage/LandingPage";
import MetricPage from "./Containers/Pages/Metrics/Metrics";
import { Route, Switch } from "react-router-dom";
import 'fontsource-roboto';
import DietaryRestrictions from "./Containers/Pages/DietaryRestrictions/DietaryRestrictions.js";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/create" component={CreateAccountPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/metric" exact component={MetricPage} />
        <Route path="/dietaryrestrictions" exact component={DietaryRestrictions} />
      </Switch>
    </div>
  );
}

export default App;
