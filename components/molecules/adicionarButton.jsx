import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { BbqIcon } from './bbqIcon';

export default function AdicionarButton() {
  return (
    <Card sx={{ backgroundColor: "#F1F1F1", width: "282px", height: "192px", marginTop: "48px", marginLeft: "24px"}}>
      <CardActions>
        <CardContent>
        <Button>
        <Image src="/icon_bbq.svg" alt="logo" width="40px" height="31px" position="relative"/>
        <BbqIcon />
        <Typography sx={{ fontSize: "21px", fontWeight: "700", alignItems: "center"}}>
         Adicionar Churras
        </Typography>
        </Button>
        </CardContent>
      </CardActions>
    </Card>
  );
}