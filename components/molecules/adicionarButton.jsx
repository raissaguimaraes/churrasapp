import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AdicionarButton() {
  return (
    <Card sx={{ backgroundColor: "#F1F1F1", width: "282px", height: "192px", marginTop: "48px", marginLeft: "24px"}}>
      <CardContent>
        
        <Typography sx={{ fontSize: "21px", fontWeight: "700", alignItems: "center"}}>
         Adicionar Churras
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}