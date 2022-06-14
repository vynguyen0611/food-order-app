import { useState } from 'react';

import { Card, Container, Grid, Typography } from '@mui/material';

import MealItem from './MealItem';
import { data } from './MealsList';

export default function Meals() {
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <Container sx={{ py: 16 }}>
        <Typography variant="h6" fontWeight={700} color="white">
          MENU
        </Typography>
        <Grid container spacing={6} mt={1}>
          {data.map((item, index) => (
            <MealItem
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
        </Grid>
      </Container>
      <Card></Card>
    </>
  );
}
