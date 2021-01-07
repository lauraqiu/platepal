import CreateAccountPage from "./Containers/Pages/CreateAccount/CreateAccount";
import LoginPage from "./Containers/Pages/Login/Login";
import LogoPage from "./Containers/Pages/Logo/Logo";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/create" component={CreateAccountPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={LogoPage} />
      </Switch>
    </div>
  );
}

export default App;
