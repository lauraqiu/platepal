import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiSlider-markLabel[data-index="0"]': {
      transform: "translateX(0%)"
    },
    '& .MuiSlider-markLabel[data-index="1"]': {
      transform: "translateX(-100%)"
    },
    paddingLeft: '1.9em',
    paddingRight: '1.9em'
  },
  margin: {
    height: theme.spacing(3),
  },
  title: {
    paddingTop: '0.6em',
    paddingBottom: '0.9em',
    fontSize: '0.9em',
  }
}));

function valuetext(value) {
    return `${value}°C`;
  }

// customize slider
const NewSlider = withStyles({
  root: {
    color: '#FFD275',
    height: '0.25 em',
    padding: '15px 0',
    width: '19.4em',
  },
  thumb: {
    height: 19,
    width: 19,
    backgroundColor: '#FFD275',
    marginTop: -8,
    marginLeft: -10,
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: 25,
    left: -6,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: '0.25em'
  },
  rail: {
    height: '0.25em',
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    opacity: '0'
  },
  markActive: {
    backgroundColour: 'none'
  },
  markLabel: {
    top: -5,
    fontSize: '0.8em'
  }
})(Slider);


const CustomizedSlider = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        {props.title}
      </Typography>
      <NewSlider 
        defaultValue={props.default}
        marks={props.marks} 
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        max={props.max}
        min={props.min}
         />
    </div>
  );
}
export default CustomizedSlider;