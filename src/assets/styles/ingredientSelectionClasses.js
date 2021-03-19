import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    padding: 30,
    paddingBottom: 0,
    marginBlockEnd: 5
  },
  container: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    padding: 30,
    paddingBottom: 0,
    marginBlockEnd: 5
  },
  text: {
    color: '#DB5A42',
    fontSize: '0.9em',
    paddingLeft: 30,
    marginBlock: 0
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
}));
export { useStyles };
