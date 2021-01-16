import CreateAccountPage from "./Containers/Pages/CreateAccount/CreateAccount";
import LoginPage from "./Containers/Pages/Login/Login";
import LandingPage from "./Containers/Pages/LandingPage/LandingPage";
import MetricPage from "./Containers/Pages/Metrics/Metrics";
import { Route, Switch } from "react-router-dom";
import 'fontsource-roboto';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/create" component={CreateAccountPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/metric" exact component={MetricPage} />
      </Switch>
    </div>
  );
}

export default App;
