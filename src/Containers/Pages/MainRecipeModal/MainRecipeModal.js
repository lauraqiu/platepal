import React from 'react';
import styles from './MainRecipeModal.module.scss';
import pass from '../../../assets/images/x.svg';
import star from '../../../assets/images/superlike.svg';
import check from '../../../assets/images/checkmark.svg';
import smoothie from '../../../assets/images/Creamy-Watermelon-Smoothie.jpg';
//import dataFunctions from '../../../dataFunctions.js'

import { axiosInstance } from '../../../utilities/API/axiosInstance.js';
import Spoonacular_routes, {
  API_KEY,
} from '../../../utilities/API/Spoonacular.js';
import { addLikedRecipe } from '../../../utilities/firebase/index.js';

class MainRecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeCount: 0,
      resp: null,
      spoonacularRecipe: [],
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    axiosInstance
    .get(Spoonacular_routes.GET_RANDOM, {
      params: {
        number: 20,
        apiKey: API_KEY,
      },
    })
    .then((response) => {
      this.state.recipeCount=0;
      this.state.resp=response;
      this.updateRecipe(response)})
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  updateRecipe(response) {
    console.log(response.data.recipes);
    this.setState((prevState) => {
      return {
        spoonacularRecipe: response.data.recipes[this.state.recipeCount],
      };
    });
  }

  moveToNext() {
    //window.location.reload();
    this.state.recipeCount++;

    if (this.state.recipeCount >= 20)
      this.callAPI();
    else
      this.updateRecipe(this.state.resp);
  }

  render() {
    // This will later come from Spoonacular API
    const name = 'Creamy Watermelon Smoothie';
    const percentage = '87%';
    const price = '$';

    return (
      <div className={styles.fullPage}>
        <h3 className={styles.recipeName}>
          {this.state.spoonacularRecipe.title}
        </h3>
        <div className={styles.recipe}>
          <img
            src={this.state.spoonacularRecipe.image}
            alt={name}
            className={styles.recipeImage}
            onClick={this.imageClicked}
          ></img>
          <label className={styles.infoLabel1}>
            {this.state.spoonacularRecipe.healthScore}
          </label>
          <label className={styles.infoLabel2}>
            {this.state.spoonacularRecipe.pricePerServing}
          </label>
        </div>
        <input
          type='image'
          className={styles.bigButton}
          src={pass}
          onClick={() => this.moveToNext()}
        ></input>
        <input
          type='image'
          className={styles.lilButton}
          src={star}
          onClick={() => {
            addLikedRecipe(this.state.spoonacularRecipe.id, "superliked", this.state.spoonacularRecipe.title)
            .then(this.moveToNext());
          }}
        ></input>
        <input
          type='image'
          className={styles.bigButton}
          src={check}
          onClick={() => {
            addLikedRecipe(this.state.spoonacularRecipe.id, "liked", this.state.spoonacularRecipe.title)
            .then(this.moveToNext());
          }}
        ></input>
      </div>
    );
  }
}
export default MainRecipeModal;
