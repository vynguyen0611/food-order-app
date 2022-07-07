import { FormProvider, useForm } from 'react-hook-form';

import { Box, Grid, Stack, Typography } from '@mui/material';

import useCounter from '../../hooks/useCart';
import TextField from '../form/TextField';

interface CheckoutForm {
  name: string;
  phone_number: number;
  street_address: string;
  postal_code: string;
  city: string;
}

export default function Checkout(props: any) {
  const { cart, deleteItem, decreaseItemInCart, increaseItemInCart } =
    useCounter(props.id);
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
      <Stack
        sx={{
          p: "1rem 1rem 1rem 3rem",
        }}
      >
        <Grid container spacing={4}>
          <FormProvider {...methods}>
            <Stack
              component="form"
              onSubmit={handleSubmit((formData) =>
                console.log("formData: ", formData)
              )}
            >
              <Stack>
                <Stack sx={{ my: 2 }}>
                  <Typography variant="h6">Shipping Address</Typography>
                </Stack>
                <Box
                  sx={{
                    padding: 1,
                    alignItems: "center",
                    border: 1,
                    borderRadius: "5px",
                  }}
                >
                  <Grid container spacing={3} direction="row">
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Name"
                        name="name"
                        defaultValue=""
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Phone number"
                        name="phone_number"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Street Address"
                        name="street_address"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Postal code"
                        name="postal_code"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField label="City" name="city" size="small" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField label="Note" name="note" size="small" />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
              <Stack sx={{ my: 2 }}>
                <Stack sx={{ my: 2 }}>
                  <Typography variant="h6">Payment Method</Typography>
                </Stack>
                <Box
                  sx={{
                    padding: 1,
                    alignItems: "center",
                    border: 1,
                    borderRadius: "5px",
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Debit/Credit Card"
                        name="card"
                        defaultValue=""
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Card number"
                        name="card_number"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="MM/YY"
                        name="expiry_date"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Name on card"
                        name="card_name"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField label="CVV" name="cvv" size="small" />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Stack>
          </FormProvider>
        </Grid>
      </Stack>
    </>
  );
}
