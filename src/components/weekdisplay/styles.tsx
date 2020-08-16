import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: '15px'
    },
    picture: {
        width: '150px',
        height: '150px'
    },
    title : {
        fontFamily: '"Courier New", monospace',
        fontWeight: 'bold'
    },
    subtitle : {
        fontFamily: '"Courier New", monospace',
        fontWeight: 'bold'
    },
    content: {
        flex: '1 auto'
    },
    choose: {
        padding: 0,
        width: '150px',
        height: '150px'
    },
    arrow: {
        margin: '63px 63px'
    },
    link: {
        textDecoration: 'none'
    }
}));

export default useStyles;