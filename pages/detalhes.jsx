import { Box, CardMedia, Grid, Paper } from "@mui/material";
import ListaDetalhes from "../components/molecules/listaDetalhes";

export default function Detalhes({ data }) {

    
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
            <ListaDetalhes data={data} />
        </Paper>
        <CardMedia component="img"  image="/trinca.svg" sx={{ height:"48px", width: "48px",  marginTop: "33px", marginBottom: "30px"}}  />
        </Box>
    </Grid>
  )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/participantes`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  