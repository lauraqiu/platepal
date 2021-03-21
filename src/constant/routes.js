const routes = {
  app: "app",
  login: "login",
  main: "main",
  profile: "profile",
  today: "today",

  // User preference related
  diet: "diet",
  metrics: "metrics",
  expandedRecipe: "expandedRecipe",
  ingredients: "ingredients",
  favorite: "favorite",
};

const path = {
  main: `/${routes.app}`,
  today: `/${routes.app}/${routes.today}`,
  profile: `/${routes.app}/${routes.profile}`,
  diet: `/${routes.app}/${routes.profile}/${routes.diet}`,
  metric: `/${routes.app}/${routes.profile}/${routes.metrics}`,
  saved: `/${routes.app}/${routes.favorite}`,
  expanded: `/${routes.app}/${routes.expandedRecipe}/:recipe`,
  login: `/`,
};

export default path;
