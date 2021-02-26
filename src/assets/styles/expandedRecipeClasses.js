import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: '5.9em',
    width: '23.44em',
    backgroundColor: 'white',
  },
  recipeName: {
    textAlign: 'center',
    fontSize: '1.3em',
    marginBlockEnd: '0.2em'
  }, 
  recipeInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  photo:{
    margin: theme.spacing(0.5),
    height: '21.3em', 
    width: '100%',
    objectFit: 'cover',
  },
  informationBox: {
    backgroundColor: '#FFD275',
    width: '100%',
    opacity: 0.8,
    display: 'flex',
    height: '2em',
    alignItems: 'center',
  },
  timeContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    justifyContent: 'center',
  }, 
  icon: {
    color: '#DB5A42',
    paddingRight: '0.3em',
  },
  timeInfo: {
    fontSize: '1em',
  },
  costContainer: {
    flex: '0.5',
    display: 'flex',
    justifyContent: 'center'
  },
  cost: {
    color: '#DB5A42',
    textAlign: 'center'
  },
  difficultyContainer: {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
  },
  difficultyHeader: {
    color: '#DB5A42',
    paddingRight: '0.3em',
  },
  description: {
    fontSize: '0.9em',
    fontFamily: 'Roboto',
    fontWeight: 10,
    margin: 15,
    lineHeight: '150%'
  },
  ingredientHeader: {
    fontSize: '1.1em',
    margin: 14,
    fontWeight: 500,
    marginBlockEnd: 0
  },
  ingredientList: {
    paddingLeft: '0.3em',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    paddingLeft: '1em'
  },
  gridTile: {
    width: '25% !important',
    height: '25% !important'
  },
  ingredientImage: {
    height: '5em',
    width: '5em',
    objectFit: 'cover'
  },
  ingredientText: {
    textAlign: 'center',
    marginBlockStart: 0,
    fontSize: '0.8em',
  }
}));
export { useStyles };