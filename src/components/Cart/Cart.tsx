import ClearIcon from '@mui/icons-material/Clear';
import {
    Button, Card, CardActions, CardContent, Container, Stack, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Typography
} from '@mui/material';

import useCounter from '../../hooks/useCart';
import Modal from '../UI/Modal';

export default function Cart(props: any) {
  const { cart, deleteItem } = useCounter(props.id);
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Card
          sx={{
            p: 1,
            maxWidth: 700,
            minWidth: 400,
            borderRadius: "14px",
          }}
        >
          <CardContent>
            {cart.length <= 0 && (
              <Typography variant="h6" align="center">
                Cart empty!
              </Typography>
            )}
            {cart.length > 0 && (
              <>
                <TableContainer>
                  <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align="left" variant="head">
                          Name
                        </TableCell>
                        <TableCell align="right">Quan.</TableCell>
                        <TableCell align="center">Unit Price</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="center">Delete</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell align="left">{item.title}</TableCell>
                          <TableCell align="right">{item.quantity}</TableCell>
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
                  spacing={4}
                  mt={2}
                  justifyContent="right"
                  pr="16px"
                >
                  <Typography variant="body1" fontStyle="italic">
                    Total Amount:
                  </Typography>
                  <Typography variant="body1" color="red" fontStyle="bold">
                    {cart
                      .reduce((sum, i) => sum + i.unitPrice * i.quantity, 0)
                      .toFixed(2)}
                  </Typography>
                </Stack>
              </>
            )}
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{ marginRight: 2 }}
              onClick={props.onCloseCart}
            >
              Close
            </Button>
            {cart.length > 0 && (
              <Button variant="contained" size="small">
                Order
              </Button>
            )}
          </CardActions>
        </Card>
      </Container>
    </Modal>
  );
}
