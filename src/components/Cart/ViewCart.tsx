import Image from 'mui-image';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    Box, Button, Container, Divider, Grid, Stack, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Typography
} from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

import useCounter from '../../hooks/useCart';
import Checkout from './Checkout';
import OrderSumary from './OrderSumary';

export default function ViewCart(props: any) {
  const { cart, deleteItem, decreaseItemInCart, increaseItemInCart } =
    useCounter(props.id);

  const [isCheckout, setIsCheckout] = useState(false);
  const [cartExpanded, setcartExpanded] = useState<boolean>(false);
  const [paymentExpanded, setPaymentExpanded] = useState<boolean>(false);

  const handleCheckout = () => {
    setcartExpanded(false);
    setIsCheckout(true);
    setPaymentExpanded(true);
  };

  const expandedCartChangeHandler =
    (isCheckout: boolean) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setcartExpanded(isExpanded ? isCheckout : false);
    };

  const expandedPaymentChangeHandler =
    (isCheckout: boolean) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setPaymentExpanded(isExpanded ? isCheckout : false);
    };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "whitesmoke",
            borderRadius: "10px",
            padding: "2rem",
            minHeight: "100%",
            flexDirection: "column",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <Stack sx={{ pb: 2 }}>
            <Typography variant="h4" align="left">
              View Cart & Checkout
            </Typography>
          </Stack>
          {cart.length <= 0 && (
            <Stack
              spacing={2}
              sx={{
                justifyContent: "center",
                my: 2,
                alignItems: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h5" align="center">
                You haven't added any meals to your cart!
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "110px" }}
                // onClick={props.onCloseCart}
                component={Link}
                to="/"
              >
                Add Meal
              </Button>
            </Stack>
          )}
          {cart.length > 0 && (
            <Grid container spacing={3} sx={{ py: 2 }}>
              <Grid item xs={12} md={9}>
                <Stack>
                  <MuiAccordion
                    sx={{ justifyContent: "center" }}
                    onChange={expandedCartChangeHandler(isCheckout)}
                    expanded={cartExpanded === isCheckout}
                  >
                    <MuiAccordionSummary
                      expandIcon={
                        <ExpandMoreIcon style={{ color: "#1976d2" }} />
                      }
                    >
                      <Typography
                        variant="body1"
                        fontSize="1.25rem"
                        fontWeight={500}
                      >
                        Your Cart ({cart.length})
                      </Typography>
                    </MuiAccordionSummary>
                    <MuiAccordionDetails sx={{ p: "0 8px 20px 16px" }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                      >
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
                                    <TableCell align="right">
                                      Unit Price
                                    </TableCell>
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
                                        <TableCell align="left">
                                          {item.title}
                                        </TableCell>
                                        <TableCell align="center">
                                          <Button
                                            onClick={() =>
                                              decreaseItemInCart(item.id)
                                            }
                                          >
                                            <RemoveIcon fontSize="small" />
                                          </Button>
                                          {item.quantity}
                                          <Button
                                            onClick={() =>
                                              increaseItemInCart(item.id)
                                            }
                                          >
                                            <AddIcon fontSize="small" />
                                          </Button>
                                        </TableCell>
                                        <TableCell
                                          align="right"
                                          defaultValue={0}
                                        >
                                          {item.unitPrice.toFixed(2)}
                                        </TableCell>
                                        <TableCell
                                          align="right"
                                          defaultValue={0}
                                        >
                                          {(
                                            item.quantity * item.unitPrice
                                          ).toFixed(2)}
                                        </TableCell>
                                        <TableCell align="center">
                                          <Button
                                            onClick={() => deleteItem(item.id)}
                                          >
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
                          <Button
                            variant="contained"
                            component={Link}
                            to="/"
                            size="small"
                          >
                            Add more
                          </Button>
                        </Stack>
                      </Stack>
                    </MuiAccordionDetails>
                  </MuiAccordion>
                </Stack>
                <Stack sx={{ pt: 2 }}>
                  {isCheckout && (
                    <MuiAccordion
                      sx={{ justifyContent: "center", mb: "18px" }}
                      onChange={expandedPaymentChangeHandler(isCheckout)}
                      expanded={paymentExpanded === isCheckout}
                    >
                      <MuiAccordionSummary
                        expandIcon={
                          <ExpandMoreIcon style={{ color: "#1976d2" }} />
                        }
                      >
                        <Typography
                          variant="body1"
                          fontSize="1.25rem"
                          fontWeight={500}
                        >
                          Review & Place Order
                        </Typography>
                        <Divider />
                      </MuiAccordionSummary>
                      <MuiAccordionDetails>
                        <Checkout />
                      </MuiAccordionDetails>
                    </MuiAccordion>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <OrderSumary />
                {!isCheckout && (
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
                {isCheckout && (
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
                    Place Order
                  </Button>
                )}
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
}
