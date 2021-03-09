import { Route, Switch, BrowserRouter } from 'react-router-dom';

import DietaryRestrictions from './Containers/Pages/DietaryRestrictions/DietaryRestrictions.js';
import LoginPage from './Containers/Pages/Login/Login';
import LandingPage from './Containers/Pages/LandingPage/LandingPage';
import MetricPage from './Containers/Pages/Metrics/Metrics';
import MainRecipeModal from './Containers/Pages/MainRecipeModal/MainRecipeModal';
import ExpandedSavedRecipe from './Containers/Pages/ExpandedSavedRecipe/ExpandedSavedRecipe.js';
import ExpandedRecipe from './Containers/Pages/ExpandedRecipe/ExpandedRecipe.js';
import IngredientSelection from './Containers/Pages/IngredientSelection/IngredientSelection.js';
import ProfilePage from './Containers/Pages/ProfilePage/ProfilePage.js';

import { ThemeProvider } from '@material-ui/core';
import mainUITheme from './assets/styles/mainUITheme';
import 'fontsource-roboto';

import routes from './constant/routes';
import Navbar from './component/navbars/Navbar.js';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={mainUITheme}>
        <Switch>
          <Route path={`/${routes.login}`} component={LoginPage} />
          <Route path='/' exact component={LandingPage} />
          <Route path={`/${routes.metrics}`} exact component={MetricPage} />
          <Route
            path={`/${routes.dietaryRestriction}`}
            exact
            component={DietaryRestrictions}
          />
          <Route
            path={`/${routes.expandedSavedRecipe}`}
            exact
            component={ExpandedSavedRecipe}
          />
          <Route
            path={`/${routes.expandedRecipe}`}
            exact
            component={ExpandedRecipe}
          />
          <Route
            path={`/${routes.ingredientSelection}`}
            exact
            component={IngredientSelection}
          />
          <Route
            path={`/${routes.main}`}
            render={(props) => 
              <div>
                <Navbar fill='home'/>
                <MainRecipeModal/>  
              </div>
            }
          />
          <Route 
            path={`/${routes.profile}`} 
            render={(props) => 
              <div>
                <Navbar fill='person'/>
                <ProfilePage/>
              </div>
            }
          /> 
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
