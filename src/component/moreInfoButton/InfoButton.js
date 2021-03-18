import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, IconButton, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1.9em',
        paddingTop: '0.4em',
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        backgroundColor: (props) => props.colour,
        height: '1.9em',
        width: '20em',
        borderRadius: '10em'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        flex: '1',
        justifyContent: 'space-between',
        paddingTop: 0,
        height: '2em',
        paddingLeft: '0.94em'
      },
      name: {
          fontSize: '0.875em'
      }
  }));

const InfoButton = (props) => {
  const classes = useStyles(props);

  return (
    <div container className={classes.root}>
        <Box item className={classes.button}>
            <Grid item className={classes.buttonContainer}>
                <Typography className={classes.name}>{props.buttonName}</Typography>
                {/* button to click for more options */}
                <IconButton>
                    <AddCircleOutlineIcon/>
                </IconButton>
            </Grid>
        </Box>
    </div>
  );
}
export default InfoButton;