import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    Box, Button, Container, Divider, Stack, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Typography
} from '@mui/material';

import useCounter from '../../hooks/useCart';

export default function ViewCart(props: any) {
  const { cart, deleteItem, decreaseItemInCart, increaseItemInCart } =
    useCounter(props.id);

  let navigate = useNavigate();
  const handleCheckout = () => {
    navigate("../checkout");
  };

  const subtotal = cart
    .reduce((sum, i) => sum + i.unitPrice * i.quantity, 0)
    .toFixed(2);

  const taxEst = ((Number(subtotal) * 13) / 100).toFixed(2);

  const total = (Number(subtotal) + Number(taxEst)).toFixed(2);

  return (
    <>
      <Container>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            // alignItems: "center",
            // justifyContent: "center",
            p: 2,
            minWidth: 300,
            minHeight: 120,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {cart.length <= 0 && (
            <Stack sx={{ justifyContent: "center", my: 2 }}>
              <Typography variant="h5" align="center">
                Cart is empty!
              </Typography>
            </Stack>
          )}
          {cart.length > 0 && (
            <Stack direction="row" spacing={4} justifyContent="space-between">
              <Stack>
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left" variant="head">
                          Items
                        </TableCell>
                        <TableCell align="center">Quan.</TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="center">Delete</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.map((item, index) => {
                        const img = "/images/meals/" + item.image;
                        return (
                          <TableRow key={item.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell align="left">
                              <Image
                                src={img}
                                height="80px"
                                width="80px"
                                bgColor="transparent"
                              />
                            </TableCell>
                            <TableCell align="left">{item.title}</TableCell>
                            <TableCell align="center">
                              <Button
                                onClick={() => decreaseItemInCart(item.id)}
                              >
                                <RemoveIcon fontSize="small" />
                              </Button>
                              {item.quantity}
                              <Button
                                onClick={() => increaseItemInCart(item.id)}
                              >
                                <AddIcon fontSize="small" />
                              </Button>
                            </TableCell>
                            <TableCell align="right" defaultValue={0}>
                              {item.unitPrice.toFixed(2)}
                            </TableCell>
                            <TableCell align="right" defaultValue={0}>
                              {(item.quantity * item.unitPrice).toFixed(2)}
                            </TableCell>
                            <TableCell align="center">
                              <Button onClick={() => deleteItem(item.id)}>
                                <ClearIcon fontSize="small" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
              <Stack sx={{ py: 1, px: 2 }} spacing={2}>
                <Stack>
                  <Typography variant="h6">Order Summary</Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  spacing={4}
                  justifyContent="space-between"
                >
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
                {cart.length > 0 && (
                  <Button
                    variant="contained"
                    onClick={handleCheckout}
                    sx={{
                      width: "110px",
                      alignSelf: "center",
                      backgroundColor: "#ef4e99 !important",
                      minWidth: "100%",
                      mt: "10px",
                    }}
                  >
                    Checkout
                  </Button>
                )}
              </Stack>
            </Stack>
          )}
          {/* <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", my: 1.5 }}
          >
            <Button
              variant="contained"
              sx={{ marginRight: 2, width: "110px" }}
              // onClick={props.onCloseCart}
              component={Link}
              to="/"
            >
              Add more
            </Button>
          </Stack> */}
        </Box>
      </Container>
    </>
  );
}
