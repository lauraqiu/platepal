import React, { useState } from "react";
import ReactDOM from "react-dom";
import Slider from "../Slider/Slider.js";
import GroupOfButtons from "../ButtonGroup/GroupOfButtons.js";
import InfoButton from "../moreInfoButton/InfoButton.js";
import { useStyles } from "../../assets/styles/AdjustOptionsClasses.js";
import { withRouter } from "react-router";
import IngredientSelection from "../../Containers/Pages/IngredientSelection/IngredientSelection.js";
import styles from "./AdjustOptions.module.scss";

const AdjustOptions = (props) => {
  const classes = useStyles();
  const [showIngredientSelection, setShowIngredientSelection] = useState(false);

  const timeMarks = [
    { value: 10, label: "10 min" },
    { value: 120, label: "120 min" },
  ];

  const calorieMarks = [
    { value: 10, label: "10 cal" },
    { value: 1500, label: "1500 cal" },
  ];

  const [meals, setMeals] = useState([
    { label: "Breakfast", selected: false },
    { label: "Lunch", selected: false },
    { label: "Dinner", selected: false },
    { label: "Snack", selected: false },
  ]);

  const [costs, setCost] = useState([
    { label: "$", selected: false },
    { label: "$$", selected: false },
    { label: "$$$", selected: false },
  ]);

  const renderIngredientsPage = () => {
    const root = document.getElementById("root");
    return ReactDOM.createPortal(
      <div className={styles.ingredientsDiv}>
        <IngredientSelection
          nextOnClick={() => setShowIngredientSelection(false)}
        />
      </div>,
      root
    );
  };

  return (
    <div
      className={classes.root}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      {showIngredientSelection && renderIngredientsPage()}
      <GroupOfButtons options={meals} setOptions={setMeals} />
      <GroupOfButtons options={costs} setOptions={setCost} />
      <InfoButton
        buttonName="Ingredients"
        colour="#FFD275"
        onClick={() => {
          setShowIngredientSelection(true);
        }}
      />
      <Slider
        marks={timeMarks}
        default={50}
        max={"120"}
        min={10}
        title={"Max Ready Time"}
      />
      <Slider
        marks={calorieMarks}
        default={1000}
        max={"1500"}
        min={10}
        title={"Calories"}
      />
      <InfoButton buttonName="Advanced Options" colour="#E5E5E5" />
    </div>
  );
};
export default withRouter(AdjustOptions);
