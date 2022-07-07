import { Divider, Stack, Typography } from '@mui/material';

import useCounter from '../../hooks/useCart';

export default function OrderSumary(props: any) {
  const { cart } = useCounter(props.id);
  const subtotal = cart
    .reduce((sum, i) => sum + i.unitPrice * i.quantity, 0)
    .toFixed(2);

  const taxEst = ((Number(subtotal) * 13) / 100).toFixed(2);

  const total = (Number(subtotal) + Number(taxEst)).toFixed(2);

  return (
    <>
      <Stack spacing={2}>
        <Stack>
          <Typography variant="h6">Order Summary</Typography>
        </Stack>
        <Divider />
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Stack spacing={1}>
            <Typography variant="body1">Subtotal: </Typography>
            <Typography variant="body1">Shipping Estimate:</Typography>
            <Typography variant="body1">Tax Estimate:</Typography>
          </Stack>
          <Stack spacing={1} sx={{ textAlign: "right" }}>
            <Typography variant="body1">${subtotal}</Typography>
            <Typography variant="body1">$9.95</Typography>
            <Typography variant="body1">${taxEst}</Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold">
            Total:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            ${total}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
