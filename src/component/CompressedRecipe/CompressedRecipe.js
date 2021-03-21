import React, { useState } from "react";
import styles from "./CompressedRecipe.module.scss";
import CostSummary from "./QuickSummaryItems/CostSummary/CostSummary.js";
import CookingTimeSummary from "./QuickSummaryItems/CookingTimeSummary/CookingTimeSummary.js";
import favoriteBtn from "../../assets/images/favorite_24px.svg";
import filledFavoriteBtn from "../../assets/images/favorite_filled_24px.svg";
import { saveRecipe } from "../../utilities/firebase/firebaseActions";
import * as reduxActions from "../../store/index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import path from "../../constant/routes";
const CompressedRecipe = (props) => {
  const [selected, setSelected] = useState(props.isFavorite);
  const containerClass = props.superLiked
    ? styles.recipeContainerSuperLiked
    : styles.recipeContainer;

  return (
    <div
      className={containerClass}
      onClick={() => {
        props.storeRecipeId(props.id);
        props.history.push(path.expanded.replace(":recipe", props.recipeName));
      }}
    >
      <div className={styles.recipeInfoContainer}>
        <h3 className={styles.recipeName}>{props.recipeName} </h3>
        <div className={styles.recipeQuickSummaryContainer}>
          <CostSummary pricePerServing={props.pricePerServing} />
          <CookingTimeSummary readyInMinutes={props.readyInMinutes} />
        </div>
      </div>
      <div className={styles.recipeImageContainer}>
        <img
          className={styles.recipeImage}
          src={props.recipeImageSrc}
          alt="recipe"
        />
        <button
          className={styles.favoriteBtn}
          onClick={() => {
            saveRecipe(props.id, props.recipeName);
            setSelected(!selected);
          }}
        >
          <img
            src={selected ? filledFavoriteBtn : favoriteBtn}
            alt="favorite button"
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeRecipeId: (recipeId) => dispatch(reduxActions.storeRecipeId(recipeId)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CompressedRecipe));
