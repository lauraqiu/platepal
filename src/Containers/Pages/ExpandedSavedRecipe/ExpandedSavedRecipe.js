import React, { useEffect, useState } from "react";
import { Grid, Box, Button } from "@material-ui/core";
import { useStyles } from "../../../assets/styles/expandedSavedRecipeClasses.js";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { connect } from "react-redux";
import SpoonacularAPI, { API_KEY } from "../../../utilities/API/Spoonacular";
import { axiosInstance } from "../../../utilities/API/axiosInstance";
import dollarSign from "../../../assets/images/dollar_sign.svg";
const ExpandedSavedRecipe = (props) => {
  const classes = useStyles();

  const [recipeInformation, setRecipeInformation] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(SpoonacularAPI.GET_RECIPE.replace("{id}", props.recipeId), {
        params: {
          apiKey: API_KEY,
          includeNutrition: false,
        },
      })
      .then((res) => {
        const {
          analyzedInstructions,
          extendedIngredients,
          pricePerServing,
          readyInMinutes,
          image,
          title,
        } = res.data;

        const instructions = analyzedInstructions[0].steps.map((item) => {
          return { label: item.step };
        });

        const ingredients = extendedIngredients.map((item) => {
          return { label: item.original };
        });

        setRecipeInformation({
          instructions,
          ingredients,
          pricePerServing,
          readyInMinutes,
          image,
          title,
        });
      });
  }, []);
  return (
    <>
      {recipeInformation && (
        <>
          <Box className={classes.navBar}></Box>
          {/* added this as a placeholder for the nav bar */}
          <Grid>
            <h1 item className={classes.recipeName}>
              {recipeInformation.title}
            </h1>
          </Grid>
          {/* recipe info */}
          <Grid className={classes.recipeInfo}>
            <img
              item
              className={classes.photo}
              src={recipeInformation.image}
              alt={recipeInformation.title}
            />
            <Box container className={classes.informationBox}>
              <Grid container item className={classes.timeContainer}>
                <AccessTimeIcon item className={classes.icon} />
                <p item>{`${recipeInformation.readyInMinutes} mins`}</p>
              </Grid>
              <Grid item className={classes.costContainer}>
                <span item className={classes.cost}>
                  <img src={dollarSign} alt="dollar sign" />
                  {recipeInformation.pricePerServing}
                </span>
              </Grid>
            </Box>
          </Grid>
          {/* ingredients list */}
          <Grid>
            <Box className={classes.header}>
              <h2 className={classes.headerText}>Ingredients:</h2>
            </Box>
            <Grid container className={classes.ingredientList}>
              {recipeInformation.ingredients.map((data) => (
                <li className={classes.text}>{data.label}</li>
              ))}
            </Grid>
          </Grid>
          {/* instructions list */}
          <Grid>
            <Box className={classes.header}>
              <h2 className={classes.headerText}>Cooking Instructions:</h2>
            </Box>
            <Grid className={classes.instructionsList}>
              {recipeInformation.instructions.map((data, index) => (
                <ul container className={classes.instructionStep}>
                  <li item className={classes.ingredientNumber}>
                    {index + 1}
                  </li>
                  <p item className={classes.ingredientText}>
                    {data.label}
                  </p>
                </ul>
              ))}
            </Grid>
          </Grid>
          {/* button */}
          <Grid container className={classes.buttonContainer}>
            <Button item className={classes.button}>
              SAVE RECIPE
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recipeId: state.general.recipeId,
  };
};

export default connect(mapStateToProps)(ExpandedSavedRecipe);
