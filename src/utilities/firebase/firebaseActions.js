import constants from './firebaseConstants';
import firebase from './firebase';

const authenticateUser = () => {
  var currentU = firebase.auth().currentUser;
  if (currentU == null) return constants.anonymous;
  else return firebase.auth().currentUser.uid;
};

const errorHandling = (error) => {
  if (error) {
    // The write failed...
    console.log('Write failed');
  } else {
    // Data saved successfully!
    console.log('Write successful');
  }
};

export const addAllergy = (allergies) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ allergies }, (error) => {
      errorHandling(error);
    });
};

export const addSpecialDiet = (diet) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ diet }, (error) => {
      errorHandling(error);
    });
};

export const addLikedRecipe = (recipe, title) => {
  var currentU = authenticateUser();
  console.log("reached");

  firebase
    .database()
    .ref('userID/' + currentU + '/todayRecipe/Timestamp/liked/' + recipe)
    .set(
      {
        recipe: title,
      },
      (error) => {
        errorHandling(error);
      }
    );

    window.location.reload();
};

export const superLike = (recipe, title) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref('userID/' + currentU + '/todayRecipe/Timestamp/superliked/' + recipe)
    .set(
      {
        recipe: title,
      },
      (error) => {
        errorHandling(error);
      }
    );

    window.location.reload();
};

export const updateMetric = (m) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref('userID/' + currentU)
    .set(
      {
        preference: {
          metric: m,
        },
      },
      (error) => {
        errorHandling(error);
      }
    );
};

export const getPreferences = () => {
  var currentU = authenticateUser();

  return firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .get();
};
