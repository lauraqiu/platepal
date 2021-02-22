import { Route, Switch, BrowserRouter } from "react-router-dom";

import DietaryRestrictions from "./Containers/Pages/DietaryRestrictions/DietaryRestrictions.js";
import LoginPage from "./Containers/Pages/Login/Login";
import LandingPage from "./Containers/Pages/LandingPage/LandingPage";
import MetricPage from "./Containers/Pages/Metrics/Metrics";
import MainRecipeModal from "./Containers/Pages/MainRecipeModal/MainRecipeModal";

import {ThemeProvider } from "@material-ui/core";
import mainUITheme from "./assets/styles/mainUITheme"
import "fontsource-roboto";

import routes from "./constant/routes"


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainUITheme}>
        <Switch>
          <Route path= {`/${routes.login}`} component={LoginPage} />
          <Route path="/" exact component={LandingPage} />
          <Route path= {`/${routes.metrics}`} exact component={MetricPage} />
          <Route
            path={`/${routes.dietaryRestriction}`}
            exact
            component={DietaryRestrictions}
          />
          <Route
            path={`/${routes.main}`}
            render={(props) => (
              <MainRecipeModal />
            )}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
