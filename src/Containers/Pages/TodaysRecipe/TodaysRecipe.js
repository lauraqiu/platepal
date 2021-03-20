import React from "react";
import CompressedRecipe from "../../../component/CompressedRecipe/CompressedRecipe";
import { axiosInstance } from "../../../utilities/API/axiosInstance";
import SpoonacularAPI, { API_KEY } from "../../../utilities/API/Spoonacular";
import { getTodayRecipe } from "../../../utilities/firebase/firebaseActions";
import styles from "./TodaysRecipe.module.scss";
class TodaysRecipe extends React.Component {
  state = {
    todayRecipeId: { liked: [], superliked: [] },
    likedRecipe: [],
    superlikedRecipe: [],
    loading: false,
  };

  componentDidMount() {
    // Call firebase API to retreive entries
    getTodayRecipe().then((res) => {
      const { liked, superliked } = res.val().Timestamp;
      this.setState(
        {
          todayRecipeId: {
            liked: this.extractId(liked),
            superliked: this.extractId(superliked),
          },
          loading: true,
        },
        () => {
          // Get all data of individual recipe from Spoonacular
          const bulkId = this.state.todayRecipeId.liked
            .concat(this.state.todayRecipeId.superliked)
            .join(",");
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
                if (this.state.todayRecipeId.liked.indexOf(`${id}`) > -1) {
                  this.state.likedRecipe.push(newObj);
                } else {
                  this.state.superlikedRecipe.push(newObj);
                }
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
    // just get 3 of each to save api request costs
    return newArr.slice(0, 3);
  };

  generateRecipeTiles() {
    const liked = this.state.likedRecipe.map((item) => {
      return (
        <CompressedRecipe
          recipeName={item.title}
          pricePerServing={item.pricePerServing}
          readyInMinutes={item.readyInMinutes}
          recipeImageSrc={item.image}
          id={item.id}
          isFavorite={false}
        />
      );
    });

    const superLiked = this.state.superlikedRecipe.map((item) => {
      return (
        <CompressedRecipe
          superLiked={true}
          recipeName={item.title}
          pricePerServing={item.pricePerServing}
          readyInMinutes={item.readyInMinutes}
          recipeImageSrc={item.image}
          id={item.id}
          isFavorite={false}
        />
      );
    });
    const compressedRecipeCollection = superLiked.concat(liked);
    return compressedRecipeCollection;
  }

  render() {
    const compressedRecipeCollection = !this.state.loading
      ? this.generateRecipeTiles()
      : null;
    return (
      <div className={styles.fullPage}>
        {this.state.loading && "loading"}
        {compressedRecipeCollection}
      </div>
    );
  }
}

export default TodaysRecipe;
