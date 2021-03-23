import React from "react";
import styles from "./MainRecipeModal.module.scss";
import pass from "../../../assets/images/x.svg";
import star from "../../../assets/images/superlike.svg";
import check from "../../../assets/images/checkmark.svg";
import { axiosInstance } from "../../../utilities/API/axiosInstance.js";
import Spoonacular_routes, {
  API_KEY,
} from "../../../utilities/API/Spoonacular.js";
import { addLikedRecipe } from "../../../utilities/firebase/index.js";

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
        this.setState({
          recipeCount: 0,
          resp: response,
        });
        this.updateRecipe(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  updateRecipe(response) {
    this.setState((prevState) => {
      return {
        spoonacularRecipe: response.data.recipes[this.state.recipeCount],
      };
    });
  }

  moveToNext() {
    this.setState((prevState) => {
      return {
        recipeCount: prevState.recipeCount + 1,
      };
    });
    if (this.state.recipeCount >= 20) this.callAPI();
    else this.updateRecipe(this.state.resp);
  }

  render() {
    // This will later come from Spoonacular API

    return (
      <div className={styles.fullPage}>
        <h3 className={styles.recipeName}>
          {this.state.spoonacularRecipe.title}
        </h3>
        <div className={styles.recipe}>
          <img
            src={this.state.spoonacularRecipe.image}
            alt={this.state.spoonacularRecipe.title}
            className={styles.recipeImage}
            onClick={this.imageClicked}
          ></img>
          <label className={styles.infoLabel1}>
            {this.state.spoonacularRecipe.healthScore}
          </label>
          <label className={styles.infoLabel2}>
            {"$" + this.state.spoonacularRecipe.pricePerServing}
          </label>
        </div>
        <input
          type="image"
          className={styles.bigButton}
          src={pass}
          alt={"pass"}
          onClick={() => this.moveToNext()}
        ></input>
        <input
          type="image"
          className={styles.lilButton}
          src={star}
          alt={"super like"}
          onClick={() => {
            addLikedRecipe(
              this.state.spoonacularRecipe.id,
              "superliked",
              this.state.spoonacularRecipe.title
            ).then(this.moveToNext());
          }}
        ></input>
        <input
          type="image"
          className={styles.bigButton}
          src={check}
          alt={"like"}
          onClick={() => {
            addLikedRecipe(
              this.state.spoonacularRecipe.id,
              "liked",
              this.state.spoonacularRecipe.title
            ).then(this.moveToNext());
          }}
        ></input>
      </div>
    );
  }
}
export default MainRecipeModal;
