import { isTemplateExpression } from 'typescript';

import {
    Box, Button, ButtonGroup, Card, CardActions, CardContent, Container, Grid, Paper, Stack, Table,
    TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from '@mui/material';

import Modal from '../UI/Modal';

export default function Cart(props: any) {
  const cartItems = [
    {
      id: "1",
      name: "Crispy Spring Rolls (2 Rolls)",
      quantity: 3,
      price: 5.0,
    },
    {
      id: "2",
      name: "Summer Rolls (2 Rolls)",
      quantity: 1,
      price: 5.5,
    },
  ];

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Card sx={{ p: 1, maxWidth: 600, borderRadius: "14px" }}>
          <CardContent>
            <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell align="left" variant="head">
                      Name
                    </TableCell>
                    <TableCell align="right">Quan.</TableCell>
                    <TableCell align="right">Unit Price</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell align="left">{item.name}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">
                        {item.price.toFixed(1)}
                      </TableCell>
                      <TableCell align="right">
                        {item.quantity * item.price}
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
                $ {cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)}
              </Typography>
            </Stack>
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
            <Button variant="contained" size="small">
              Order
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Modal>
  );
}
