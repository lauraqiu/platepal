import React, {useState} from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useStyles} from '../../assets/styles/dietaryRestrictionStyles.js';

const OptionChips = (props) => {
  const styles = useStyles();
  
  const handleClick = (index) => {
    let arrayCopy = [...props.options];  
    arrayCopy[index].selected = !props.options[index].selected;
    props.setOptions(arrayCopy)
  };

  return (
    <Grid container>
        {props.options.map((data, index) => {
            return (
                <Chip item
                index={index}
                label={data.label}
                color={data.selected ? 'primary': 'default'} 
                onClick={() => handleClick(index)}
                className={styles.chip}
                size='small'
                />
            );
        })}
        <AddCircleOutlineIcon className={styles.icon}/>
    </Grid>
  );
}
export default OptionChips;