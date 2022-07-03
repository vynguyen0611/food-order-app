import { FormProvider, useForm } from 'react-hook-form';

import { Button, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material';

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
      <Container
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          // alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        <FormProvider {...methods}>
          <Stack
            component="form"
            sx={{ p: 2 }}
            onSubmit={handleSubmit((formData) =>
              console.log("formData: ", formData)
            )}
          >
            <Stack sx={{ my: 2 }}>
              <Stack sx={{ my: 2 }}>
                <Typography variant="h6">Shipping Address</Typography>
              </Stack>
              <Divider></Divider>
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
              </Grid>
            </Stack>
            <Stack sx={{ my: 2 }}>
              <Stack sx={{ my: 2 }}>
                <Typography variant="h6">Payment Method</Typography>
              </Stack>
              <Divider></Divider>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Debit/Credit Card"
                    name="card"
                    defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Card number" name="card_number" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="MM/YY" name="expiry_date" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Name on card" name="card_name" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="CVV" name="cvv" />
                </Grid>
              </Grid>
            </Stack>
            <Stack>
              <Button type="submit" variant="contained">
                Place Order
              </Button>
            </Stack>
          </Stack>
        </FormProvider>
      </Container>
    </>
  );
}
