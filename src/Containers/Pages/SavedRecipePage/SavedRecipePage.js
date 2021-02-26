import React, { Component } from 'react';
import styles from './SavedRecipe.module.scss';
import CompressedRecipe from '../../../component/CompressedRecipe/CompressedRecipe.js';
import Constants from '../../../constant/messages.js';

export class SavedRecipePage extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.pageName}>
          <h2 className={styles.pageNameFont}>{Constants.savedRecipe}</h2>
        </div>
        <CompressedRecipe
          recipeName="Kimchi Fried Rice yaya"
          pricePerServing="10"
          readyInMinutes="16"
          recipeImageSrc="https://webknox.com/recipeImages/1516713-90x90.jpg"
        />
      </div>
    );
  }
}

export default SavedRecipePage;
