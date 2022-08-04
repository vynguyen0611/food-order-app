import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

import useCounter from '../../hooks/useCart';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderSumary from './OrderSumary';

export default function ViewCart(props: any) {
  const { cart } = useCounter(props.id);
  const form = useForm();

  const [isCheckout, setIsCheckout] = useState(false);
  const [cartExpanded, setcartExpanded] = useState<boolean>(false);
  const [paymentExpanded, setPaymentExpanded] = useState<boolean>(false);

  const checkoutHandler = () => {
    setcartExpanded(false);
    setIsCheckout(true);
    setPaymentExpanded(true);
  };

  const placeOrderHander = async (userData: any) => {
    // fetch("https://food-app-a0055-default-rtdb.firebaseio.com/orders.json", {
    //   method: "POST",
    //   body: JSON.stringify({ userInfo: userData, itemsInfo: cart }),
    // });
    await axios.post(
      "https://food-app-a0055-default-rtdb.firebaseio.com/orders.json",
      { userInfo: userData, itemsInfo: cart }
    );
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
                        <Checkout onConfirm={placeOrderHander} />
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
                {isCheckout && (
                  <Button
                    variant="contained"
                    onClick={placeOrderHander}
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
