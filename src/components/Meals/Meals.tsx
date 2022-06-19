import { Card, Container, Grid, Typography } from '@mui/material';

import MealItem from './MealItem';
import { data } from './MealsList';

export default function Meals() {
  return (
    <>
      <Container sx={{ pt: 16 }}>
        <Typography variant="h6" fontWeight={700} color="white">
          MENU
        </Typography>
        <Grid container spacing={6} mt={1}>
          {data.map((item) => (
            <MealItem key={item.id} {...item} />
          ))}
        </Grid>
      </Container>
      <Card></Card>
    </>
  );
}
