import { Grid, createTheme, ThemeProvider } from "@mui/material";
import Head from "next/head";

const theme = createTheme({
    palette: {
        background: {
          main: "#FFD836",
        },
        black: {
           main: "#000000",
           contrastText: "#FFFFFF"
        },
        textFieldLogin: {
          main: "#FFFFFF",
          contrastText: "#000000",
        },
      },
    typography: {
        fontFamily: "Raleway"
      }
});


export function Layout({children}){
    return(
        <Grid sx={{backgroundColor: "#FFD836", wrap: "wrap", width: '100%', height: "100vh"}}>
          <Head>
            <title>Agenda de Churras</title>
            <meta name="description" content="Churras App" />
            <link rel="icon" href="/icon_bbq.svg" />
          </Head>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </Grid>
    )
}