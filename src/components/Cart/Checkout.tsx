import { FormProvider, useForm } from 'react-hook-form';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';

import TextField from '../form/TextField';

interface CheckoutForm {
  name: string;
  phone_number: number;
  street_address: string;
  postal_code: string;
  city: string;
  card: boolean;
  card_number: number;
  expiry_date: string;
  name_on_card: string;
  cvv: number;
}

export default function Checkout(props: any) {
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
          p: "0 16px 16px 8px",
        }}
      >
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
                  borderColor: "#757575",
                  borderRadius: "5px",
                }}
              >
                <Grid container spacing={4} sx={{ p: "10px" }}>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2} sx={{ p: 1 }}>
                      <TextField
                        label="Name"
                        name="name"
                        defaultValue=""
                        size="small"
                      />
                      <TextField
                        label="Street Address"
                        name="street_address"
                        size="small"
                        defaultValue=""
                      />

                      <TextField
                        label="Postal code"
                        name="postal_code"
                        size="small"
                        defaultValue=""
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2} sx={{ p: 1 }}>
                      <TextField
                        label="Phone number"
                        name="phone_number"
                        size="small"
                        defaultValue=""
                      />

                      <TextField
                        label="City"
                        name="city"
                        size="small"
                        defaultValue=""
                      />
                      <TextField
                        label="Note"
                        name="note"
                        size="small"
                        defaultValue=""
                      />
                    </Stack>
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
                  borderColor: "#757575",
                  borderRadius: "5px",
                }}
              >
                <Grid container spacing={4} sx={{ p: "10px" }}>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2} sx={{ p: 1 }}>
                      <TextField
                        label="Debit/Credit Card"
                        name="card"
                        defaultValue=""
                        size="small"
                      />
                      <TextField
                        label="Name on card"
                        name="card_name"
                        size="small"
                        defaultValue=""
                      />
                      <TextField
                        label="CVV"
                        name="cvv"
                        size="small"
                        defaultValue=""
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2} sx={{ p: 1 }}>
                      <TextField
                        label="Card number"
                        name="card_number"
                        size="small"
                        defaultValue=""
                      />
                      <TextField
                        label="MM/YY"
                        name="expiry_date"
                        size="small"
                        defaultValue=""
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Stack>
        </FormProvider>
      </Stack>
    </>
  );
}
