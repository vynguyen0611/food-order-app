import axios from 'axios';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { Card, Container, Grid, Typography } from '@mui/material';

import MealItem from './MealItem';
import { Product } from './MealsList';

const getMeals = async (): Promise<Product[]> => {
  return await axios
    .get("https://food-app-a0055-default-rtdb.firebaseio.com/meals.json")
    .then(({ data }) => {
      const res = Object.keys(data).map((m) => {
        return { ...data[m], id: m };
      });
      return res;
    });
};

export default function Meals() {
  const { isLoading, data } = useQuery("meals", getMeals, {
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  if (isLoading) return null;

  return (
    <>
      <Container sx={{ pt: 8 }}>
        <Typography variant="h6" fontWeight={700} color="white">
          MENU
        </Typography>
        <Grid container spacing={6} mt={0.5}>
          {!isLoading &&
            data?.map((item: Product) => <MealItem key={item.id} {...item} />)}
        </Grid>
      </Container>
      <Card></Card>
    </>
  );
}
