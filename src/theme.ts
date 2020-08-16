import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#efefef',
            contrastText: 'black'
        },
        secondary: {
            main: '#969696',
            light: '#f2f2f2',
            contrastText: 'white'
        }
    },
    typography: {
        fontFamily: '"Courier New", courier, monospace',
        body1: {
            fontWeight: 'bold'
        },
        h6: {
            fontWeight: 'bold'
        }
    }
});

export default theme;