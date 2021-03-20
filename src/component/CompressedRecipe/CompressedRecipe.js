import React from "react";
import styles from "./CompressedRecipe.module.scss";
import CostSummary from "./QuickSummaryItems/CostSummary/CostSummary.js";
import CookingTimeSummary from "./QuickSummaryItems/CookingTimeSummary/CookingTimeSummary.js";

const CompressedRecipe = (props) => {
  const containerClass = props.superLiked
    ? styles.recipeContainerSuperLiked
    : styles.recipeContainer;
  return (
    <div className={containerClass}>
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
        ></img>
      </div>
    </div>
  );
};

export default CompressedRecipe;
