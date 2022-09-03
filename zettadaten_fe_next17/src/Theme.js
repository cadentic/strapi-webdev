import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
/*
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});
*/
const theme = createTheme({
    palette: {
        common: {
            black: '#19192B',
            white: '#ffffff',
        },
        primary: {
            light: '#B3E5FC',
            main: '#03A9F4',
            dark: '#0288D1',
            contrastText: '#212121',
        },
        secondary: {
            main: '#607D8B', // omitting light and dark will calculate from main
            contrastText: '#757575',
        },
        grey: {
            '500': '#bcbcbc',
            '700': '#79797a',
        },
        info: {
            main: '#1bb2f1',
        },
        success: {
            main: '#00d589',
        },
        error: {
            main: '#832838',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
});

//export default theme;

export default theme;
