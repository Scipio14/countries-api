import { FC, useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardProps = {
  image: string;
  name: string;
  id: number;
};

export const CardComponent: FC<CardProps> = ({ image, name, id }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant="h4">
          {name}
        </Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/country/${id}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
