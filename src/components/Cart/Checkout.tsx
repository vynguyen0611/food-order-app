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

  const { handleSubmit } = methods;

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
            onSubmit={handleSubmit((formData) => {
              props.onConfirm(formData);
            })}
          >
            <Stack>
              <Stack sx={{ my: 2 }}>
                <Typography variant="subtitle1">Shipping Address</Typography>
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
                        rules={{ required: true }}
                        name="name"
                        defaultValue="Vy"
                        size="small"
                      />
                      <TextField
                        label="Street Address"
                        name="street_address"
                        rules={{ required: true }}
                        size="small"
                        defaultValue="1164 ouellette"
                      />

                      <TextField
                        label="Postal code"
                        name="postal_code"
                        rules={{ required: true }}
                        size="small"
                        defaultValue="N9A1C9"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2} sx={{ p: 1 }}>
                      <TextField
                        label="Phone number"
                        name="phone_number"
                        rules={{ required: true }}
                        size="small"
                        defaultValue="38838383838"
                      />

                      <TextField
                        label="City"
                        name="city"
                        rules={{ required: true }}
                        size="small"
                        defaultValue="WINDSOR"
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
                <Typography variant="subtitle1">Payment Method</Typography>
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
                        rules={{ required: true }}
                        defaultValue="DEBIT"
                        size="small"
                      />
                      <TextField
                        label="Name on card"
                        name="card_name"
                        size="small"
                        defaultValue="VY"
                      />
                      <TextField
                        label="CVV"
                        name="cvv"
                        type="password"
                        rules={{ required: true }}
                        size="small"
                        defaultValue="111"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2} sx={{ p: 1 }}>
                      <TextField
                        label="Card number"
                        name="card_number"
                        rules={{ required: true }}
                        size="small"
                        defaultValue="83837373338"
                      />
                      <TextField
                        label="MM/YY"
                        name="expiry_date"
                        rules={{ required: true }}
                        size="small"
                        defaultValue="11/29"
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "150px",
                alignSelf: "center",
                backgroundColor: "#ef4e99 !important",
                mt: "10px",
              }}
            >
              Place Order
            </Button>
          </Stack>
        </FormProvider>
      </Stack>
    </>
  );
}
