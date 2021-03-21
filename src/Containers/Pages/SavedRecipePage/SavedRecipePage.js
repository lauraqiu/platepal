import React, { Component } from "react";
import styles from "./SavedRecipe.module.scss";
import CompressedRecipe from "../../../component/CompressedRecipe/CompressedRecipe.js";
import Constants from "../../../constant/messages.js";
import { getSavedRecipe } from "../../../utilities/firebase/firebaseActions";
import { axiosInstance } from "../../../utilities/API/axiosInstance";
import SpoonacularAPI, { API_KEY } from "../../../utilities/API/Spoonacular";

export class SavedRecipePage extends Component {
  state = {
    savedRecipeId: [],
    savedRecipe: [],
    loading: false,
  };

  componentDidMount() {
    // Call firebase API to retreive entries
    getSavedRecipe().then((res) => {
      const savedRecipe = res.val();
      this.setState(
        {
          savedRecipeId: this.extractId(savedRecipe),
          loading: true,
        },
        () => {
          // Get all data of individual recipe from Spoonacular
          const bulkId = this.state.savedRecipeId.join(",");
          axiosInstance
            .get(SpoonacularAPI.GET_RECIPE_BULK, {
              params: {
                ids: bulkId,
                apiKey: API_KEY,
              },
            })
            .then((res) => {
              const data = res.data;
              data.map((item) => {
                const { title, id, image, pricePerServing, readyInMinutes } = {
                  ...item,
                };
                const newObj = {
                  title,
                  id,
                  image,
                  pricePerServing,
                  readyInMinutes,
                };

                this.state.savedRecipe.push(newObj);
                return newObj;
              });
              this.setState({ loading: false });
            });
        }
      );
    });
  }

  extractId = (list) => {
    const newArr = [];
    for (let key in list) {
      newArr.push(key);
    }
    // just get 3 to save api request costs
    return newArr.slice(0, 3);
  };

  generateRecipeTiles() {
    const savedRecipeTiles = this.state.savedRecipe.map((item, index) => {
      return (
        <CompressedRecipe
          recipeName={item.title}
          pricePerServing={item.pricePerServing}
          readyInMinutes={item.readyInMinutes}
          recipeImageSrc={item.image}
          id={item.id}
          isFavorite={true}
          key={item.id + index}
        />
      );
    });
    return savedRecipeTiles;
  }

  render() {
    const compressedRecipeCollection = !this.state.loading
      ? this.generateRecipeTiles()
      : null;
    return (
      <div className={styles.fullPage}>
        <div className={styles.pageName}>
          <h2 className={styles.pageNameFont}>{Constants.savedRecipe}</h2>
        </div>
        {this.state.loading && "loading"}
        {compressedRecipeCollection}
      </div>
    );
  }
}

export default SavedRecipePage;
