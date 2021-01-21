import React from 'react';
import allergiesImage from './images/allergies.png';
import specialDiets from './images/diet.jpg';
import { Grid, Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useStyles } from './styles.js';
import OptionChips from './OptionChips.js';

// change Material UI default colours
const theme = createMuiTheme({
    palette: {
       primary: {
          main: "#FFD275" // yellow
                 },
       secondary: {
          main: "#E5E5E5" //grey
                  }
             },
    });

const DietaryRestrictions = () => {
    const styles = useStyles();
    const allergies = [
        { label: 'peanut', color: 'secondary'},
        { label: 'dairy', color: 'secondary'},
        { label: 'tree nuts', color: 'secondary'},
        { label: 'fish', color: 'secondary' },
        { label: 'shellfish', color: 'secondary' },
        { label: 'soy' , color: 'secondary'},
        { label: 'gluten', color: 'secondary' },
        { label: 'egg' , color: 'secondary'},
    ]
    const diets = [
        { label: 'classic', color: 'secondary'},
        { label: 'low carb', color: 'secondary'},
        { label: 'keto', color: 'secondary'},
        { label: 'flexitarian', color: 'secondary' },
        { label: 'paleo', color: 'secondary' },
        { label: 'vegetarian' , color: 'secondary'},
        { label: 'pescatarian', color: 'secondary' },
        { label: 'vegan' , color: 'secondary'},
    ]
    return (
        <>  
            <ThemeProvider theme={theme}>
                <h1 className={styles.root}>Any Dietary Restrictions?</h1>
                <div className={styles.root}>
                    <Grid container className={styles.header}>
                        <img item className={styles.photo} src={allergiesImage} alt='allergies logo'/>
                        <h2 item className={styles.header} >Allergies</h2>
                        <OptionChips item array={allergies}/>
                    </Grid>
                </div>
                <div className={styles.root}>
                    <Grid container className={styles.header}>
                        <img item className={styles.photo} src={specialDiets} alt='special diets logo'/>
                        <h2 item className={styles.header}>Special Diets</h2>
                        <OptionChips item array={diets}/>
                    </Grid>
                </div>
                <Grid container justify="center">
                    <Button item className={styles.button}>Next</Button>
                </Grid>
            </ThemeProvider>
        </>
    )
}
export default DietaryRestrictions;