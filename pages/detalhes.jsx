import { Box, CardMedia, Grid, Paper } from "@mui/material";
import ListaDetalhes from "../components/molecules/listaDetalhes";

export default function Detalhes() {

    
  return (
    <Grid>
        <Box
            sx={{
                backgroundColor: "#FAFAFA",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: "100vh"
            }}
            >
        <Paper
            sx={{
                backgroundColor: "#FFFFFF",
                width: "588px",
                height: "100vh",
                display: "flex"
            }}
        >    
            <ListaDetalhes />
        </Paper>
        <CardMedia component="img"  image="/trinca.svg" sx={{ height:"48px", width: "48px",  marginTop: "33px", marginBottom: "30px"}}  />
        </Box>
    </Grid>
  )
}