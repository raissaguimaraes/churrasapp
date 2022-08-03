import Box from "@mui/material/Box";
import { alpha, styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: "16px",
    },
    '& .MuiInputBase-input': {
      backgroundColor: "#FFFFFF",
      fontSize: "18px",
      fontWeight: "400",
      marginBottom: "36px"
    },

  }));

export default function Form(){
    const email = "example.com";
    const senha = "123";
    return(
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate sx={{ maxWidth: "282px" }}>
    
              <InputLabel htmlFor="Login" sx={{fontWeight: "700", size: "21px"}}>
                Login
              </InputLabel>
              <BootstrapInput fullWidth defaultValue="Email" id="email" />

            <InputLabel sx={{ size: "21px", fontWeight: "700"}}>
                Senha
            </InputLabel>
            
            <BootstrapInput fullWidth defaultValue="Senha" id="senha" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="black"
              sx={{ marginTop: '38px'}}
            >
              Sign In
            </Button>
          </Box>
        </Box>
    )
}