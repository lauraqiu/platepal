import React, { useState } from 'react';import Slider from '../../../component/Slider/Slider.js';
import GroupOfButtons from '../../../component/ButtonGroup/GroupOfButtons.js'
import InfoButton from '../../../component/moreInfoButton/InfoButton.js'
import {useStyles} from '../../../assets/styles/AdjustOptionsClasses.js'


const AdjustOptions = () => {
    
    const classes = useStyles();
    
    const timeMarks = [
        {value: 10, label: '10 min'},
        { value: 120, label: '120 min'},
    ]

    const calorieMarks = [
        {value: 10, label: '10 cal'},
        {value: 1500, label: '1500 cal'},
    ]

    const [meals, setMeals] = useState([
        {label: 'Breakfast', selected: false},
        {label: 'Lunch', selected: false},
        {label: 'Dinner', selected: false},
        {label: 'Snack', selected: false}
    ])

    const [costs, setCost] = useState([
        {label: '$', selected: false},
        {label: '$$', selected: false},
        {label: '$$$', selected: false}
    ])

    return (
        <div className={classes.root}>
            <GroupOfButtons options={meals} setOptions={setMeals}/> 
            <GroupOfButtons options={costs} setOptions={setCost}/> 
            <InfoButton buttonName='Ingredients' colour='#FFD275'/>
            <Slider marks={timeMarks} default={50} max={'120'} min={10} title={'Max Ready Time'}/>
            <Slider marks={calorieMarks} default={1000} max={'1500'} min={10} title={'Calories'}/>
            <InfoButton buttonName='Advanced Options' colour='#E5E5E5'/>
        </div>
    )
}
export default AdjustOptions;
