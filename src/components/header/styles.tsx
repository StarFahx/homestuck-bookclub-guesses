import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
    space: {
        flex: '1 1 auto'
    },
    icon: {
        height: '25px'
    }
}));

export default useStyles;