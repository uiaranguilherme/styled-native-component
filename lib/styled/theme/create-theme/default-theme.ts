import { Theme } from "..";
import { blue, gray, green, purple, red, orange } from "../../constants/colors";

const defaultTheme : Theme = {
    palette: {
        light: {
            primary: {
                main: purple[700],
                light: purple[200],
                dark: purple[900],
            },
            secundary: {
                main: blue[700],
                light: blue[200],
                dark: blue[900],
            },
            background: {
                main: gray[100],
                light: gray[50],
                dark: gray[200],
            },
            text: {
                main: gray[900],
                light: gray[800],
                dark: gray[900],
            },
            warning: {
                main: orange[100],
                light: orange[50],
                dark: orange[200],
            },
            error: {
                main: red[700],
                light: red[200],
                dark: red[900],
            },
            info: {
                main: blue[700],
                light: blue[200],
                dark: blue[900],
            },
            success: {
                main: green[700],
                light: green[200],
                dark: green[900],
            }
        },
        dark: {
            primary: {
                main: purple[700],
                light: purple[200],
                dark: purple[900],
            },
            secundary: {
                main: blue[700],
                light: blue[200],
                dark: blue[900],
            },
            background: {
                main: gray[900],
                light: gray[800],
                dark: gray[900],
            },
            text: {
                main: gray[600],
                light: gray[400],
                dark: gray[700],
            },
            warning: {
                main: orange[100],
                light: orange[50],
                dark: orange[200],
            },
            error: {
                main: red[700],
                light: red[200],
                dark: red[900],
            },
            info: {
                main: blue[700],
                light: blue[200],
                dark: blue[900],
            },
            success: {
                main: green[700],
                light: green[200],
                dark: green[900],
            }
        }
    },
    typograph: {
        h1: {
            fontSize: 6 * 16,
            fontWeight: '300',
            letterSpacing: -0.01562
        },
        h2: {
            fontSize: 3.75 * 16,
            fontWeight: '400',
            letterSpacing: -0.00833
        },
        h3: {
            fontSize: 3 * 16,
            fontWeight: '400',
            letterSpacing: 0
        },
        h4: {
            fontSize: 2.125 * 16,
            fontWeight: '400',
            letterSpacing: 0.00735
        },
        h5: {
            fontSize: 1.5 * 16,
            fontWeight: '400',
            letterSpacing: 0
        },
        h6: {
            fontSize: 1.25 * 16,
            fontWeight: '500',
            letterSpacing: 0.0075,
        },
        paragraphy: {
            fontSize: 12,
            fontWeight: '400',
            letterSpacing: 0.00938,
        },
        subparagraph: {
            fontSize: 10,
            fontWeight: '400',
            letterSpacing: 0.00714,
        }
    }
};

export default defaultTheme;