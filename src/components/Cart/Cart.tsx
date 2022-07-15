import Image from 'mui-image';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';

import useCounter from '../../hooks/useCart';

export default function Cart(props: any) {
  const { cart, deleteItem, decreaseItemInCart, increaseItemInCart } =
    useCounter(props.id);

  return (
    <>
      <Stack
        sx={{
          p: "0 8px",
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack spacing={2} alignItems="flex-start">
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
                          <TableCell align="center" sx={{ p: "0px" }}>
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
            <Button variant="contained" component={Link} to="/" size="small">
              Add more
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
