import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 10px',
        width: 'max-content'
    },
    item: {
    },
    select: {
        minWidth: '200px',
        width: 'max-content',
        '&:before': {
            borderColor: theme.palette.secondary.contrastText,
        },
        '&:after': {
            borderColor: theme.palette.secondary.contrastText,
        }
    },
    icon: {
        fill: theme.palette.secondary.contrastText,
    },
    label: {
        color: theme.palette.secondary.contrastText,
        marginLeft: '10px'
    },
}));

export default useStyles;