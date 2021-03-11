import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { useStyles } from '../../../assets/styles/ingredientSelectionClasses';
import OptionChips from '../../../component/OptionChips/OptionChips';
import {
  addDairyOption,
  addProduceOption,
  addBakingOption,
} from '../../../utilities/firebase/index';
import dairyImage from '../../../assets/images/Dairy.jpg';
import produceImage from '../../../assets/images/Produce.jpg';
import bakingImage from '../../../assets/images/Baking.png';
import { withRouter } from 'react-router';
import routes from '../../../constant/routes';

const IngredientSelection = (props) => {
  const classes = useStyles();
  const [dairyOptions, setDairy] = useState([
    { label: 'butter', selected: false },
    { label: 'milk', selected: false },
    { label: 'cream cheese', selected: false },
    { label: 'sour cream', selected: false },
    { label: 'cheddar cheese', selected: false },
    { label: 'condensed milk', selected: false },
    { label: 'yogurt', selected: false },
    { label: 'heavy cream', selected: false },
    { label: 'evaporated milk', selected: false },
    { label: 'mozzarella', selected: false },
  ]);

  const [produceOptions, setProduce] = useState([
    { label: 'onion', selected: false },
    { label: 'garlic', selected: false },
    { label: 'bell pepper', selected: false },
    { label: 'tomato', selected: false },
    { label: 'broccoli', selected: false },
    { label: 'potato', selected: false },
    { label: 'carrot', selected: false },
    { label: 'spinach', selected: false },
    { label: 'ginger', selected: false },
    { label: 'corn', selected: false },
    { label: 'mushroom', selected: false },
    { label: 'green beans', selected: false },
    { label: 'cucumber', selected: false },
    { label: 'avocado', selected: false },
  ]);

  const [bakingOptions, setBaking] = useState([
    { label: 'rice', selected: false },
    { label: 'pasta', selected: false },
    { label: 'baking powder', selected: false },
    { label: 'cornstarch', selected: false },
    { label: 'yeast', selected: false },
    { label: 'flour', selected: false },
    { label: 'bread', selected: false },
    { label: 'bread crumbs', selected: false },
    { label: 'baking soda', selected: false },
    { label: 'starch', selected: false },
    { label: 'cocoa powder', selected: false },
    { label: 'oats', selected: false },
    { label: 'vanilla extract', selected: false },
    { label: 'pancake mix', selected: false },
  ]);

  const filterItem = (items) => {
    const filtered = items.filter((item) => {
      return item.selected;
    });

    const labelOnly = filtered.map((item) => {
      return item.label;
    });

    return labelOnly;
  };

  return (
    <>
      <div>
        <h1 className={classes.title}>What ingredients do you have?</h1>
        <p className={classes.text}>(pick at least 5)</p>
      </div>
      <div className={classes.container}>
        <Grid container className={classes.header}>
          <img
            item
            className={classes.photo}
            src={dairyImage}
            alt='dairy logo'
          />
          <h2 item className={classes.header}>
            Dairy
          </h2>
          <OptionChips item options={dairyOptions} setOptions={setDairy} />
        </Grid>
      </div>
      <div className={classes.container}>
        <Grid container className={classes.header}>
          <img
            item
            className={classes.photo}
            src={produceImage}
            alt='produce logo'
          />
          <h2 item className={classes.header}>
            Produce
          </h2>
          <OptionChips item options={produceOptions} setOptions={setProduce} />
        </Grid>
      </div>
      <div className={classes.container}>
        <Grid container className={classes.header}>
          <img
            item
            className={classes.photo}
            src={bakingImage}
            alt='baking logo'
          />
          <h2 item className={classes.header}>
            Baking & Grains
          </h2>
          <OptionChips item options={bakingOptions} setOptions={setBaking} />
        </Grid>
      </div>
      <Grid container justify='center'>
        <Button
          item
          className={classes.button}
          onClick={() => {
            addDairyOption(filterItem(dairyOptions));
            addProduceOption(filterItem(produceOptions));
            addBakingOption(filterItem(bakingOptions));
            props.history.push(`/${routes.metrics}`);
          }}
        >
          Next
        </Button>
      </Grid>
    </>
  );
};
export default withRouter(IngredientSelection);
