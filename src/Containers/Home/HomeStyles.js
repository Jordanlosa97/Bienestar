
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #e3eafa 30%, #e3eafa 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    tituloNav:{
        color: 'linear-gradient(45deg, #e3eafa 30%, #e3eafa 90%)',
    },
    navItem:{
        color:'blue'
    },
    buttonLogin:{
        background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
  });
export default useStyles;