import React, {useState} from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useStyles} from './styles.js';

const OptionChips = (props) => {
  const styles = useStyles();
  const [chipArray, setChipData] = useState(props.options);
  
  const handleClick = (index) => {
    let arrayCopy = [...chipArray];  
    if (chipArray[index].color == 'primary') {
      arrayCopy[index].color = 'secondary';
    } else if (chipArray[index].color == 'secondary'){
      arrayCopy[index].color = 'primary';
    };
    setChipData(arrayCopy)
  };

  return (
    <Grid container>
        {chipArray.map((data, index) => {
            return (
                <Chip item
                index={index}
                label={data.label}
                color={data.color} 
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