import { useEffect, useState } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    Badge, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack,
    Typography
} from '@mui/material';

import { Item, useAppContext } from '../context/cart-context';

export default function MealItem(props: any) {
  const [itemCount, setItemCount] = useState(0);
  const { items } = useAppContext();
  let addedItem = localStorage.getItem("addedItem");

  const addItemHandler = () => {
    setItemCount(itemCount + 1);

    localStorage.setItem(
      "addedItem",
      JSON.stringify({
        id: props.id,
        title: props.title,
        unitPrice: props.unitPrice,
        quantity: itemCount + 1,
      })
    );
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} key={props.id}>
        <Card
          sx={{
            height: 400,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            backgroundColor: "#dfdfdf",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            height="360"
            image={`/images/meals/${props.image}`}
            alt="Paella dish"
            sx={{ borderBottomRightRadius: "150px" }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Typography variant="h6" color="#1e2022" height={50}>
                {props.title}
              </Typography>
              <Typography variant="body1" color="#677788" mt={0.7}>
                <span>$ </span>
                {props.unitPrice.toFixed(2)}
              </Typography>
            </Stack>

            <Typography variant="body2" color="#677788">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Badge badgeContent={itemCount} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
            <ButtonGroup variant="text">
              <Button
                onClick={() => {
                  setItemCount(Math.max(itemCount - 1, 0));
                }}
              >
                <RemoveCircleOutlineIcon fontSize="small" />
              </Button>
              <Button onClick={addItemHandler}>
                <AddCircleOutlineIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
