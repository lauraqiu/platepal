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

export const addDairyOption = (items) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ [constants.preference]: items }, (error) => {
      errorHandling(error);
    });
};

export const addProduceOption = (items) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ [constants.produceOption]: items }, (error) => {
      errorHandling(error);
    });
};

export const addBakingOption = (items) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ [constants.bakingOption]: items }, (error) => {
      errorHandling(error);
    });
};

export const addLikedRecipe = (recipe) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref('userID/' + currentU + '/todayRecipe/Timestamp')
    .update(
      {
        liked: recipe,
      },
      (error) => {
        errorHandling(error);
      }
    );
};

export const superLike = () => {
  // TODO: show full recipe
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
