import React from 'react';
import styles from './MainRecipeModal.module.css';
import pass from './pass.png';
import star from './star.png';
import check from './check.png';

class MainRecipeModal extends React.Component {

    like() {
        // TODO: like (add to recipes, show next)
    }

    dislike() {
        // TODO: dislike (show next)
    }

    star() {
        // TODO: show full recipe
    }

    imageClicked() {
        // TODO: fullsize image?
        console.log("Image clicked");
    }

    render() {
        return (
            <div className={styles.fullPage}> 
                <h3 className={styles.recipeName}>{this.props.name}</h3>
                <div className={styles.recipe}>
                    <img src={this.props.img} alt={this.props.name} className={styles.recipeImage} onClick={this.imageClicked}></img>
                    <label className={styles.infoLabel1}>{this.props.percentage}</label>
                    <label className={styles.infoLabel2}>{this.props.price}</label>
                </div>
                <input type="image" className={styles.bigButton} src={pass} onClick={this.dislike}></input>
                <input type="image" className={styles.lilButton} src={star} onClick={this.star}></input>
                <input type="image" className={styles.bigButton} src={check} onClick={this.like}></input>
            </div>
        )
    }
}
export default MainRecipeModal;