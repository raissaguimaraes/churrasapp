import Form from '../components/organisms/form';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';


export default function Login(){
    return(
    <Box
        sx={{
          marginTop: "54px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <Form />
      <CardMedia component="img"  image="/trinca.svg" sx={{ height:"48px", width: "48px",  marginTop: "120px"}}  />
    </Box>
    )
}