import React, { useEffect, useState } from 'react';
import allergiesImage from '../../../assets/images/allergies.png';
import specialDiets from '../../../assets/images/diet.jpg';
import {Grid, Button} from '@material-ui/core';
import {useStyles} from '../../../assets/styles/dietaryRestrictionStyles';
import OptionChips from '../../../component/OptionChips/OptionChips';
import {addAllergy, addSpecialDiet} from "../../../utilities/firebase/index"
import { withRouter } from 'react-router';
import routes from '../../../constant/routes';

const DietaryRestrictions = (props) => {
    const styles = useStyles();
    const [allergies, setAllergies] = useState([
        { label: 'peanut', selected: false },
        { label: 'dairy', selected: false },
        { label: 'tree nuts', selected: false },
        { label: 'fish', selected: false },
        { label: 'shellfish', selected: false },
        { label: 'soy', selected: false },
        { label: 'gluten', selected: false },
        { label: 'egg', selected: false },
    ])

    const [diets, setDiets] = useState([
        { label: 'classic', selected: false },
        { label: 'low carb', selected: false },
        { label: 'keto', selected: false },
        { label: 'flexitarian', selected: false },
        { label: 'paleo', selected: false },
        { label: 'vegetarian', selected: false },
        { label: 'pescatarian', selected: false },
        { label: 'vegan', selected: false },
    ])

    const filterItem = (items) => {
        const filtered = items.filter((item) => {
            return item.selected;
        })

        const labelOnly = filtered.map((item) => {
            return item.label
        })

        return labelOnly
    }

    return (
        <>  
            <h1 className={styles.root}>Any Dietary Restrictions?</h1>
            <div className={styles.root}>
                <Grid container className={styles.header}>
                    <img item className={styles.photo} src={allergiesImage} alt='allergies logo'/>
                    <h2 item className={styles.header} >Allergies</h2>
                    <OptionChips item options={allergies} setOptions = {setAllergies} />
                </Grid>
            </div>
            <div className={styles.root}>
                <Grid container className={styles.header}>
                    <img item className={styles.photo} src={specialDiets} alt='special diets logo'/>
                    <h2 item className={styles.header}>Special Diets</h2>
                    <OptionChips item options={diets} setOptions = {setDiets}/>
                </Grid>
            </div>
            <Grid container justify="center">
                <Button item className={styles.button} 
                    onClick = {() => {
                        addAllergy(filterItem(allergies));
                        addSpecialDiet(filterItem(diets));
                        props.history.push(`/${routes.metrics}`)
                    }}>Next
                </Button>
            </Grid>
        </>
    )
}
export default withRouter(DietaryRestrictions);