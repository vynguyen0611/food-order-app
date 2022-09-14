import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Box, Button, Container, Dialog, DialogActions, DialogTitle, Divider, Grid, Slide, Stack,
    Typography
} from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { TransitionProps } from '@mui/material/transitions';

import useCounter from '../../hooks/useCart';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderSummary from './OrderSummary';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewCart(props: any) {
  const { cart, clearCart } = useCounter(props.id);
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const [cartExpanded, setcartExpanded] = useState<boolean>(false);
  const [paymentExpanded, setPaymentExpanded] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const checkoutHandler = () => {
    setcartExpanded(false);
    setIsCheckout(true);
    setPaymentExpanded(true);
  };

  let orderSummary: object;

  const getOrderSummaryInfoHandler = (
    subtotal: number,
    tax: number,
    total: number
  ) => {
    orderSummary = { subtotal: subtotal, tax: tax, total: total };
    return orderSummary;
  };

  const placeOrderHandler = async (userData: any) => {
    await axios.post(
      "https://food-app-a0055-default-rtdb.firebaseio.com/orders.json",
      {
        itemsInfo: {
          item: cart,
          orderSummary: orderSummary,
        },
        userInfo: userData,
      }
    );
    setOpenDialog(true);
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
            <Typography variant="h5" align="left">
              View Cart & Checkout
            </Typography>
          </Stack>
          {cart.length <= 0 && (
            <Stack
              spacing={4}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h6" align="center">
                You haven't added any meals to your cart!
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "110px" }}
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
                      sx={{ pl: "24px" }}
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
                      <Cart />
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
                        sx={{ pl: "24px" }}
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
                      <MuiAccordionDetails sx={{ p: "0 8px 20px 16px" }}>
                        <Checkout onConfirm={placeOrderHandler} />
                      </MuiAccordionDetails>
                    </MuiAccordion>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                {/* <OrderSumary /> */}
                <OrderSummary onConfirm={getOrderSummaryInfoHandler} />
                {!isCheckout && (
                  <Button
                    variant="contained"
                    onClick={checkoutHandler}
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
                <Dialog
                  open={openDialog}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={(event, reason) => {
                    if (
                      reason !== "backdropClick" &&
                      reason !== "escapeKeyDown"
                    ) {
                      setOpenDialog(false);
                    }
                  }}
                  aria-describedby="alert-dialog-slide-description"
                  sx={{ alignSelf: "center" }}
                >
                  <DialogTitle>{"Your order is placed!"}</DialogTitle>
                  <DialogActions>
                    <Button
                      onClick={clearCart}
                      component={Link}
                      to="/"
                      sx={{ mr: "4px" }}
                    >
                      Home
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
}
