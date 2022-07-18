import Container from '@mui/material/Container';
import Form from '../components/organisms/form';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Login(){
    return(
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <Paper />
      
      <Typography fontSize="32px" fontWeight="800" sx={{ maxWidth: "298px", marginBottom: "102px", marginTop: "70px" }}>
        Agenda de Churras
      </Typography>
      <Form />
    </Box>
    )
}