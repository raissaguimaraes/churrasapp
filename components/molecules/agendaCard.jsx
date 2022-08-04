import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleRounded from '@mui/icons-material/PeopleRounded';


export default function AgendaCard() {
  return (
    <Card sx={{ backgroundColor: "#FFFFFF", width: "282px", height: "192px", marginTop: "48px", marginLeft: "24px"}}>
      <CardContent>
        <Typography sx={{ fontSize: "28px", fontWeight: "800", marginBottom: "8px"}} component="div">
          Data
        </Typography>
        <Typography sx={{ fontSize: "21px", fontWeight: "700"}} component="div">
         Descrição
        </Typography>
        </CardContent>
        <CardContent sx={{ marginBottom: "32px", display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
        <PeopleRounded sx={{ marginRight:"12px", color: "#FFD836" }} />
          12
        </Typography>
        <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
        <PaidIcon sx={{ marginRight:"12px", color: "#FFD836" }} />
          R$10,00
        </Typography>
      </CardContent>
    </Card>
  );
}
