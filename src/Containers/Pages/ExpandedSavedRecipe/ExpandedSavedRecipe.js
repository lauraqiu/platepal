import React from 'react';
import {Grid, Box, Button} from '@material-ui/core';
import {useStyles} from '../../../assets/styles/expandedSavedRecipeClasses.js';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import recipeImage from '../../../assets/images/mushroom-pasta-spinach-best-recipe-easy-vegan-healthy-pasta-spinat-rezept-einfach-champignons-tasty.jpg';

const ingredientsArray = [
    { label: '14 oz pasta of choice'},
    { label: '3 tbsp olive oil'},
    { label: '1 onion chopped'},
    { label: '3 cloves garlic minced'},
    { label: '10.5 oz baby spinach'},
    { label: '1/2 cup vegetable broth'},
    { label: '14 oz mushroom'},
]

const instructionsArray = [
    { label: 'Cook the pasta in salted water according to the package instructions.'},
    { label: 'Toast the pine nuts in a small pan without additional oil. Then remove from the pan and set aside.'},
    { label: 'Heat the olive oil in a large skillet/ pan. Add the mushrooms along with the onions and sauté for about 3 minutes until lightly browned.'},
    { label: 'Add the chopped garlic and cook for about 30 seconds longer. Then deglaze with soy sauce and a bit of vegetable broth (or plant-based cream). Reduce the heat and cook for about 1-2 minutes longer.'},
    { label: 'Add the spinach and cook for further 2-3 minutes until it has wilted. Season with salt and pepper. Optionally, add a splash of fresh lime juice, if you like'},
    { label: 'Once the noodles are "al dente", pour off the cooking water. Put drained pasta to the mushrooms in the pan and toss to combine. Add yeast flakes or vegan parmesan as desired and season with spices to taste again.'},
    { label: 'Serve the mushroom pasta with toasted pine nuts.'},
]

const ExpandedSavedRecipe = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.navBar}></Box>
            {/* added this as a placeholder for the nav bar */}
            <Grid>
                <h1 item className={classes.recipeName}> Mushroom Pasta with Spinach</h1>
            </Grid>
            {/* recipe info */}
            <Grid className={classes.recipeInfo}>
                <img item className= {classes.photo} src={recipeImage} alt='recipe image'/>
                <Box container className={classes.informationBox}>
                    <Grid container item className={classes.timeContainer}> 
                        <AccessTimeIcon item className={classes.icon}/>
                        <p item>15 mins</p>
                    </Grid>
                    <Grid item className={classes.costContainer}>
                        <p item className={classes.cost}>$</p>
                    </Grid>
                    <Grid item className={classes.difficultyContainer}>
                        <p item className={classes.difficultyHeader}>Difficulty:</p>
                        <p item>Medium</p>
                    </Grid>
                </Box>
            </Grid>
            {/* ingredients list */}
            <Grid>
                <Box className={classes.header}>
                    <h2 className={classes.headerText}>Ingredients:</h2>
                </Box>
                <Grid container className={classes.ingredientList}>
                    {ingredientsArray.map((data) => (
                        <Grid xs={6}>
                            <li className={classes.text}>{data.label}</li>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            {/* instructions list */}
            <Grid>
                <Box className={classes.header}>
                    <h2 className={classes.headerText}>Cooking Instructions:</h2>
                </Box>
                <Grid className={classes.instructionsList} >
                    {instructionsArray.map((data, index) => (
                        <ul container className={classes.instructionStep}>
                            <li item className={classes.ingredientNumber}>{index+1}</li>
                            <p item className={classes.ingredientText}>{data.label}</p>
                        </ul>
                    ))}
                </Grid>
            </Grid>
            {/* button */}
            <Grid container className={classes.buttonContainer}>
                <Button item className={classes.button}>SAVE RECIPE</Button>
            </Grid>
        </>
    )
}
export default ExpandedSavedRecipe;