import { Grid, createTheme, ThemeProvider, Typography, Box, CardMedia } from "@mui/material";
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
      <>
        <Grid sx={{backgroundColor: "#FFD836", backgroundImage: 'url(/bbq_background.png)', backgroundRepeat: 'repeat-x', wrap: "wrap", width: '100%', height: "100vh"}}>
          <Head>
            <title>Agenda de Churras</title>
            <meta name="description" content="Churras App" />
            <link rel="icon" href="/icon_bbq.svg" />
          </Head>
          <ThemeProvider theme={theme}>
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography fontSize="32px" fontWeight="800" sx={{ maxWidth: "298px", marginBottom: "48px", marginTop: "70px" }}>
            Agenda de Churras
          </Typography>
          </Box>
            {children}
          </ThemeProvider>
        </Grid>
        </>
    )
}