import React from 'react';
import allergiesImage from './images/allergies.png';
import specialDiets from './images/diet.jpg';
import {Grid, Button} from '@material-ui/core';
import {useStyles} from './styles.js';
import OptionChips from './OptionChips.js';
import firebase from '../../../firebase';

const DietaryRestrictions = () => {
    const styles = useStyles();
    const allergies = [
        { label: 'peanut', selected: false },
        { label: 'dairy', selected: false },
        { label: 'tree nuts', selected: false },
        { label: 'fish', selected: false },
        { label: 'shellfish', selected: false },
        { label: 'soy', selected: false },
        { label: 'gluten', selected: false },
        { label: 'egg', selected: false },
    ]
    const diets = [
        { label: 'classic', selected: false },
        { label: 'low carb', selected: false },
        { label: 'keto', selected: false },
        { label: 'flexitarian', selected: false },
        { label: 'paleo', selected: false },
        { label: 'vegetarian', selected: false },
        { label: 'pescatarian', selected: false },
        { label: 'vegan', selected: false },
    ]

    const addAllergy = (allergy) => {

        var currentU = firebase.auth().currentUser
        if (currentU == null)
            currentU = "anonymous";
        else
            currentU = currentU = firebase.auth().currentUser.uid

        firebase.database().ref('userID/' + currentU + '/preference').push({
            allergies: allergy
        }
        , (error) => {
            if (error) {
            // The write failed...
            console.log("Write failed")
            } else {
            // Data saved successfully!
            console.log("Write successful")
            }
        });
    }

    const addSpecialDiet = (diet) => {

        var currentU = firebase.auth().currentUser
        if (currentU == null)
            currentU = "anonymous";
        else
            currentU = currentU = firebase.auth().currentUser.uid

        firebase.database().ref('userID/' + currentU + '/preference').push({
            diet: diet
        }
        , (error) => {
            if (error) {
            // The write failed...
            console.log("Write failed")
            } else {
            // Data saved successfully!
            console.log("Write successful")
            }
        });
    }

    return (
        <>  
            <h1 className={styles.root}>Any Dietary Restrictions?</h1>
            <div className={styles.root}>
                <Grid container className={styles.header}>
                    <img item className={styles.photo} src={allergiesImage} alt='allergies logo'/>
                    <h2 item className={styles.header} >Allergies</h2>
                    <OptionChips item options={allergies}/>
                </Grid>
            </div>
            <div className={styles.root}>
                <Grid container className={styles.header}>
                    <img item className={styles.photo} src={specialDiets} alt='special diets logo'/>
                    <h2 item className={styles.header}>Special Diets</h2>
                    <OptionChips item options={diets}/>
                </Grid>
            </div>
            <Grid container justify="center">
                <Button item className={styles.button}>Next</Button>
                {/* TODO: get the selected info and add it to the database using the functions above */}
            </Grid>
        </>
    )
}
export default DietaryRestrictions;