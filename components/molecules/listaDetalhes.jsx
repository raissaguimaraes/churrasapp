import { Grid, ListItemButton, ListItemIcon, Checkbox, ListItemText, Typography, RadioGroup, Radio, FormControlLabel, Divider} from "@mui/material";
import PeopleRounded from "@mui/icons-material/PeopleRounded";
import PaidIcon from "@mui/icons-material/Paid";

export default function ListaDetalhes({data}){
    return(
        <Grid container xs={12} sx={{  width:"527px", marginRight:"36px", marginLeft: "24px", marginTop: "21px"}}>
            <Grid item xs={9}>
                <Typography sx={{ fontSize: "28px", fontWeight: "800" }}>
                    01/10
                </Typography>
                <Typography sx={{ fontSize: "36px", fontWeight: "700" }}>
                    Niver do Gui
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
                    <PeopleRounded sx={{ marginRight:"12px", color: "#FFD836" }} />
                    12
                </Typography>
                <Typography sx={{ fontSize: "21px", fontWeight: "500" }}>
                    <PaidIcon sx={{ marginRight:"12px", color: "#FFD836" }} />
                    R$10,00
                </Typography>
            </Grid>
           <Grid item xs={12}>
           {data.map((participantes) => (
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="participantes"
                name="radio-buttons-group"
                key={participantes.id}
            >
                <FormControlLabel value="participantes" 
                control={
                <Radio sx={{
                    color: "#998220",
                    '&.Mui-checked': {
                      color: "#FFD836",
                    },
                }} 
                />
            } 
                label={participantes.name}
                >
                </FormControlLabel>
                <Divider sx={{ opacity: "50%", border: "1px solid #E5C231" }} />
            </RadioGroup>
           ))}
            </Grid>
        </Grid>
    )
}

  