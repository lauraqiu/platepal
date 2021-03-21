import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    textTransform: "none",
    flexGrow: 1,
    borderRadius: "10em",
    borderColor: "#FFD275",
    borderStyle: "solid",
    borderWidth: "1px",
  },
}));

// customize button group component
const NewButtonGroup = withStyles({
  root: {
    paddingBottom: "2.19em",
    width: "20em",
    height: "1.875em",
  },
  groupedTextHorizontal: {
    "&:not(:last-child)": {
      borderRight: 0,
    },
  },
})(ButtonGroup);

// customize button component
const NewButton = withStyles({
  root: {},
  contained: {
    boxShadow: "none",
  },
})(Button);

const GroupOfButtons = (props) => {
  const classes = useStyles();

  // upon click, button changes colour
  const handleClick = (index) => {
    let arrayCopy = [...props.options];
    arrayCopy[index].selected = !props.options[index].selected;
    props.setOptions(arrayCopy);
  };

  return (
    <div className={classes.root}>
      <NewButtonGroup
        container
        variant="text"
        aria-label="text primary button group"
      >
        {props.options.map((data, index) => {
          return (
            <NewButton
              item
              variant="contained"
              disableElevation="true"
              index={index}
              color={data.selected ? "primary" : "secondary"}
              onClick={() => handleClick(index)}
              className={classes.button}
            >
              {data.label}
            </NewButton>
          );
        })}
      </NewButtonGroup>
    </div>
  );
};
export default GroupOfButtons;
