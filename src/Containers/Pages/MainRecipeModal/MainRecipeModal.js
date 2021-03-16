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
import { addLikedRecipe, superLike } from '../../../utilities/firebase/index.js';

class MainRecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spoonacularRecipe: [],
    };
  }

  componentDidMount() {
    axiosInstance
      .get(Spoonacular_routes.GET_RANDOM, {
        params: {
          number: 1,
          apiKey: API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data.recipes);
        this.setState((prevState) => {
          return {
            spoonacularRecipe: response.data.recipes[0],
          };
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  moveToNext() {
    window.location.reload();
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
          onClick={() => superLike(this.state.spoonacularRecipe.id, this.state.spoonacularRecipe.title)}
        ></input>
        <input
          type='image'
          className={styles.bigButton}
          src={check}
          onClick={() => addLikedRecipe(this.state.spoonacularRecipe.id, this.state.spoonacularRecipe.title)}
        ></input>
      </div>
    );
  }
}
export default MainRecipeModal;
