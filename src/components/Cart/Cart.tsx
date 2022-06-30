import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    Box, Button, Container, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography
} from '@mui/material';

import useCounter from '../../hooks/useCart';
import Modal from '../UI/Modal';

export default function Cart(props: any) {
  const { cart, deleteItem, decreaseItemInCart, increaseItemInCart } =
    useCounter(props.id);

  let navigate = useNavigate();
  const handleCheckout = () => {
    navigate("../checkout");
  };

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            // display: "flex",
            backgroundColor: "white",
            borderRadius: "14px",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            minWidth: 300,
            minHeight: 120,
            display: "flex",
            flexDirection: "column",
            // height: 700,
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
            <Stack>
              <TableContainer>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>No.</TableCell>
                      <TableCell align="left" variant="head">
                        Items
                      </TableCell>
                      <TableCell align="center" sx={{ minWidth: 140 }}>
                        Quan.
                      </TableCell>
                      <TableCell align="center" sx={{ minWidth: 65 }}>
                        Unit Price
                      </TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((item, index) => (
                      <TableRow key={item.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell align="left" sx={{ minWidth: 160 }}>
                          {item.title}
                        </TableCell>
                        <TableCell align="right" sx={{ minWidth: 140 }}>
                          <Button onClick={() => decreaseItemInCart(item.id)}>
                            <RemoveIcon fontSize="small" />
                          </Button>
                          {item.quantity}
                          <Button onClick={() => increaseItemInCart(item.id)}>
                            <AddIcon fontSize="small" />
                          </Button>
                        </TableCell>
                        <TableCell align="right" defaultValue={0}>
                          {item.unitPrice.toFixed(2)}
                        </TableCell>
                        <TableCell align="right" defaultValue={0}>
                          {(item.quantity * item.unitPrice).toFixed(2)}
                        </TableCell>
                        <TableCell align="justify">
                          <Button onClick={() => deleteItem(item.id)}>
                            <ClearIcon fontSize="small" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack
                direction="row"
                spacing={2}
                my={2}
                justifyContent="right"
                pr="16px"
              >
                <Typography variant="body1" fontWeight="bold">
                  Total Amount:
                </Typography>
                <Typography
                  variant="body1"
                  color="red"
                  sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                >
                  {cart
                    .reduce((sum, i) => sum + i.unitPrice * i.quantity, 0)
                    .toFixed(2)}
                </Typography>
              </Stack>
            </Stack>
          )}
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", my: 1.5 }}
          >
            <Button
              variant="contained"
              sx={{ marginRight: 2, minWidth: "30px" }}
              onClick={props.onCloseCart}
            >
              Close
            </Button>
            {cart.length > 0 && (
              <Button
                variant="contained"
                onClick={handleCheckout}
                sx={{ minWidth: "20px" }}
              >
                Checkout
              </Button>
            )}
          </Stack>
        </Box>
      </Container>
    </Modal>
  );
}
