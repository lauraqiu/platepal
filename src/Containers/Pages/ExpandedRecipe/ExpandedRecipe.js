import React from "react";
import { Grid, Box, GridList, GridListTile } from "@material-ui/core";
import { useStyles } from "../../../assets/styles/expandedRecipeClasses.js";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import recipeImage from "../../../assets/images/Creamy-Watermelon-Smoothie.jpg";
import watermelon from "../../../assets/images/watermelon.jpg";
import honey from "../../../assets/images/honey.jpg";
import milk from "../../../assets/images/milk.jpg";
import strawberries from "../../../assets/images/strawberries copy.jpg";
import mint from "../../../assets/images/mint-leaves-isolated-white-background_33736-2879.jpg";
import yogurt from "../../../assets/images/yogurt.jpg";

const ingredientData = [
  { img: watermelon, title: "watermelon" },
  { img: strawberries, title: "strawberries" },
  { img: yogurt, title: "yogurt" },
  { img: honey, title: "honey" },
  { img: milk, title: "milk" },
  { img: mint, title: "mint" },
];

const ExpandedRecipe = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.navBar}></Box>
      {/* added this as a placeholder for the nav bar */}
      <Grid>
        <h1 item className={classes.recipeName}>
          {" "}
          Creamy Watermelon Smoothie
        </h1>
      </Grid>
      <Grid className={classes.recipeInfo}>
        <img item className={classes.photo} src={recipeImage} alt="recipe" />
        <Box container className={classes.informationBox}>
          <Grid container item className={classes.timeContainer}>
            <AccessTimeIcon item className={classes.icon} />
            <p item>5 mins</p>
          </Grid>
          <Grid item className={classes.costContainer}>
            <p item className={classes.cost}>
              $
            </p>
          </Grid>
          <Grid item className={classes.difficultyContainer}>
            <p item className={classes.difficultyHeader}>
              Difficulty:
            </p>
            <p item>Easy</p>
          </Grid>
        </Box>
      </Grid>
      <Grid>
        <h3 className={classes.description}>
          A blend of frozen watermelon cubes, strawberries, and yogurt, with the
          optional addition of mint or basil if you feel so inclined, this pink
          drink is the grown-up equivalent of zipping down a Slip-n-Slide or
          drinking cold water right from the hose on the hottest day as a kid:
          utter exhilaration.
        </h3>
      </Grid>
      <Grid>
        <h2 className={classes.ingredientHeader}>Ingredients (6):</h2>
        <div className={classes.ingredientList}>
          <GridList className={classes.gridList}>
            {ingredientData.map((tile) => (
              <GridListTile
                container
                className={classes.gridTile}
                key={tile.img}
              >
                <img
                  item
                  src={tile.img}
                  alt={tile.title}
                  className={classes.ingredientImage}
                />
                <p item className={classes.ingredientText}>
                  {tile.title}
                </p>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Grid>
    </>
  );
};
export default ExpandedRecipe;
