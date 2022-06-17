import { useEffect, useState } from 'react';

import { Card, Container, Grid, Typography } from '@mui/material';

import { useAppContext } from '../context/cart-context';
import MealItem from './MealItem';
import { data } from './MealsList';

export default function Meals() {
  const { items } = useAppContext();
  const addedItem = localStorage.getItem("addedItem");

  useEffect(() => {
    if (!!addedItem) {
      const itemObj = JSON.parse(addedItem);
      console.log("itemObj", itemObj);
      items?.push(itemObj);
      console.log("items", items);
    }
  }, [addedItem]);

  return (
    <>
      <Container sx={{ py: 16 }}>
        <Typography variant="h6" fontWeight={700} color="white">
          MENU
        </Typography>
        <Grid container spacing={6} mt={1}>
          {data.map((item) => (
            <MealItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              unitPrice={item.unitPrice}
            />
          ))}
        </Grid>
      </Container>
      <Card></Card>
    </>
  );
}
