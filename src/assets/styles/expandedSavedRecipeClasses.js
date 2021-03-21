import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: "5.9em",
    width: "23.44em",
    backgroundColor: "white",
  },
  recipeName: {
    textAlign: "center",
    fontSize: "1.3em",
    marginBlockEnd: "0.2em",
  },
  recipeInfo: {
    display: "flex",
    flexDirection: "column",
  },
  photo: {
    width: "100%",
    objectFit: "cover",
  },
  informationBox: {
    width: "100%",
    display: "flex",
    height: "2em",
    alignItems: "center",
  },
  timeContainer: {
    display: "flex",
    alignItems: "center",
    flex: "1",
    justifyContent: "center",
  },
  icon: {
    color: "#DB5A42",
    paddingRight: "0.3em",
  },
  timeInfo: {
    fontSize: "1em",
  },
  costContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
  },
  cost: {
    textAlign: "center",
  },
  difficultyContainer: {
    display: "flex",
    flex: "1",
    justifyContent: "center",
  },
  difficultyHeader: {
    color: "#DB5A42",
    paddingRight: "0.3em",
  },
  header: {
    backgroundColor: "#FFD275",
    width: "100%",
    opacity: 0.8,
    display: "flex",
    height: "2em",
    alignItems: "center",
  },
  headerText: {
    fontSize: "0.8em",
    fontWeight: 400,
    paddingLeft: "1em",
  },
  ingredientList: {
    width: "100%",
    padding: "1em",
    flexDirection: "column",
  },
  text: {
    fontSize: "0.8em",
    lineHeight: "200%",
  },
  instructionsList: {
    padding: "1em",
    paddingBottom: 0,
    paddingTop: 0,
    display: "flex",
    flexWrap: "wrap",
  },
  instructionStep: {
    display: "flex",
    flexWrap: "no-wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingInlineStart: 0,
  },
  ingredientNumber: {
    color: "#DB5A42",
    fontSize: "0.8em",
    fontWeight: 600,
    listStyleType: "none",
    paddingRight: "0.5em",
  },
  ingredientText: {
    marginBlockStart: 0,
    fontSize: "0.8em",
  },
  button: {
    display: "flex",
    color: "white",
    background: "#DB5A42",
    justifyContent: "center",
    height: "2em",
    width: "9.9em",
    textTransform: "none",
    borderRadius: "10em",
    // prevent button from disappearing upon click
    "&:hover": {
      backgroundColor: "#DB5A42",
      "@media (hover: none)": {
        backgroundColor: "#DB5A42",
        "&:active": {
          backgroundColor: "#DB5A42",
        },
      },
    },
  },
  buttonContainer: {
    flex: "display",
    justifyContent: "center",
    padding: "1em",
    paddingTop: 0,
  },
}));
export { useStyles };
