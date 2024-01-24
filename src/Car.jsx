import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Car(props) {
  return (
    <Card sx={{ width: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.carBrand + " " + props.carModel}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            PRICE: {props.price}$
            <br />
            CAR TYPE: {props.carType}
            <br />
            FUEL TYPE: {props.fuelType}
            <br />
            GEAR TYPE: {props.gearType}
            <br />
            USED: {props.isUsed ? "Used" : "Brand New"}
            <br />
            CAR YEAR: {props.carYear}
            <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
