import { useState } from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    Badge, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack,
    Typography
} from '@mui/material';

export default function MealItem(props: any) {
  const [itemCount, setItemCount] = useState(0);
  return (
    <>
      <Grid item xs={12} sm={6} md={4} key={props.title}>
        <Paper elevation={0}>
          <Card
            sx={{
              height: 400,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "#dfdfdf",
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
                  {props.price.toFixed(2)}
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
                <Button
                  onClick={() => {
                    setItemCount(itemCount + 1);
                  }}
                >
                  <AddCircleOutlineIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    </>
  );
}
