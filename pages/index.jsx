import { Box, CardMedia } from "@mui/material";
import AdicionarButton from "../components/molecules/adicionarButton";
import AgendaCard from "../components/molecules/agendaCard";

export default function Home() {
  return (
    <Box
          sx={{
            backgroundColor: "#FAFAFA",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: "100vh"
          }}
        >
      <AgendaCard />
      <AdicionarButton />
      <CardMedia component="img"  image="/trinca.svg" sx={{ height:"48px", width: "48px",  marginTop: "106px"}}  />
    </Box>
  )
}
