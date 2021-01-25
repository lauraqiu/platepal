import CreateAccountPage from "./Containers/Pages/CreateAccount/CreateAccount";
import LoginPage from "./Containers/Pages/Login/Login";
import LandingPage from "./Containers/Pages/LandingPage/LandingPage";
import MetricPage from "./Containers/Pages/Metrics/Metrics";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "fontsource-roboto";
import DietaryRestrictions from "./Containers/Pages/DietaryRestrictions/DietaryRestrictions.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import MainRecipeModal from "./Containers/Pages/MainRecipeModal/MainRecipeModal";
import smoothie from "./Containers/Pages/MainRecipeModal/Creamy-Watermelon-Smoothie.jpg";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFD275", // yellow
    },
    secondary: {
      main: "#DB5A42", //red
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/create" component={CreateAccountPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/metric" exact component={MetricPage} />
          <Route
            path="/dietaryrestrictions"
            exact
            component={DietaryRestrictions}
          />
          <Route
            path="/mainrecipe"
            render={(props) => (
              <MainRecipeModal
                name="Creamy Watermelon Smoothie"
                percentage="87%"
                price="$"
                img={smoothie}
              />
            )}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
