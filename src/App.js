import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import LandingPage from "./Containers/Pages/LandingPage/LandingPage";
import MainRecipeModal from "./Containers/Pages/MainRecipeModal/MainRecipeModal";
import ProfilePage from "./Containers/Pages/ProfilePage/ProfilePage.js";
import TodaysRecipe from "./Containers/Pages/TodaysRecipe/TodaysRecipe";
import SavedRecipePage from "./Containers/Pages/SavedRecipePage/SavedRecipePage.js";
import Navbar from "./component/navbars/Navbar.js";

import { ThemeProvider } from "@material-ui/core";
import mainUITheme from "./assets/styles/mainUITheme";
import "fontsource-roboto";
import path from "./constant/routes";
import ExpandedSavedRecipe from "./Containers/Pages/ExpandedSavedRecipe/ExpandedSavedRecipe";
import IngredientSelection from "./Containers/Pages/IngredientSelection/IngredientSelection";
import DietaryRestrictions from "./Containers/Pages/DietaryRestrictions/DietaryRestrictions";
import Metrics from "./Containers/Pages/Metrics/Metrics";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainUITheme}>
        <Switch>
          <Route
            path={path.today}
            render={(props) => (
              <div>
                <Navbar fill="bookmark" />
                <TodaysRecipe />
              </div>
            )}
          />
          <Route
            path={path.diet}
            exact
            render={(props) => (
              <div>
                <DietaryRestrictions />
              </div>
            )}
          />
          <Route
            path={path.metric}
            render={(props) => (
              <div>
                <Metrics />
              </div>
            )}
          />
          <Route
            path={path.saved}
            render={(props) => (
              <div>
                <Navbar fill="heart" />
                <SavedRecipePage />
              </div>
            )}
          />
          <Route
            path={path.expanded}
            render={(props) => (
              <div>
                <Navbar fill="bookmark" />
                <ExpandedSavedRecipe />
              </div>
            )}
          />

          <Route
            path={path.profile}
            render={(props) => (
              <div>
                <Navbar fill="person" />
                <ProfilePage />
              </div>
            )}
          />

          <Route
            path={path.main}
            render={(props) => (
              <div>
                <Navbar fill="home" />
                <MainRecipeModal />
              </div>
            )}
          />
          <Redirect from="/:random" to="/" />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
