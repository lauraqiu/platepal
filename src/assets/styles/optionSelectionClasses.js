import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(2),
    margin: 35,
    fontFamily: 'Roboto',
    fontWeight: 500,
  },
  header: {
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: 'Roboto',
    fontWeight: 400
  },
  photo:{
    margin: theme.spacing(0.5),
    height: '2.6em', 
    width: '2.6em'
  },
  button: {
    display: 'flex',
    color: 'white',
    background: '#DB5A42',
    justifyContent: 'center',
    margin: 35,
    height: '3.69em',
    width: '19.7em',
    textTransform: 'none',
    // prevent button from disappearing upon click
    "&:hover": {
      backgroundColor: '#DB5A42',
      "@media (hover: none)": {
        backgroundColor: '#DB5A42',
        "&:active": {
          backgroundColor: '#DB5A42'
        }
      }
    }
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  icon: {
    margin: theme.spacing(0.5),
    color: '#FFD275'
  },
}));
export { useStyles };
