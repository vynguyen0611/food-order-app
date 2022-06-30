import { FormProvider, useForm } from 'react-hook-form';

import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';

interface CheckoutForm {
  name: string;
  phone_number: number;
  street_address: string;
  postal_code: string;
  city: string;
}

export default function Checkout() {
  //   const {
  //     handleSubmit,
  //     control,
  //     formState: { errors },
  //   } = useForm<CheckoutForm>();

  const methods = useForm<CheckoutForm>({
    mode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
        }}
      >
        <Container>
          <Typography variant="h6">Shipping Address</Typography>
          <FormProvider {...methods}>
            <Stack
              component="form"
              onSubmit={handleSubmit((formData) =>
                console.log("formData: ", formData)
              )}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField label="Name" name="name" defaultValue="" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Phone number" name="phone_number" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Street Address" name="street_address" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Postal code" name="postal_code" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="City" name="city" />
                </Grid>
                <Grid item xs={12} pt={4}>
                  <Button type="submit" size="large">
                    Place Order
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </FormProvider>
        </Container>
      </Box>
    </>
  );
}
