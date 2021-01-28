import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif ",
    h1: {
      fontWeight: 800,
      fontSize: "2.25rem",
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.15rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.75rem",
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.6rem",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.3rem",
      "@media (max-width:600px)": {
        fontSize: "1.15rem",
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.2rem",
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
    button: {
      fontWeight: 500,

      fontFamily:
        "-apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif ",
      //fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#062263",
    },
    secondary: {
      main: "#eb445a",
    },
    text: {
      primary: "#424242",
      secondary: "#737373",
    },
  },
});

export default theme;
