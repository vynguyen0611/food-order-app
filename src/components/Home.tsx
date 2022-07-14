import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import Checkout from './Cart/Checkout';
import ViewCart from './Cart/ViewCart';
import { CartContextProvider } from './context/cart-context';
import Header from './Layout/Header';
import Meals from './Meals/Meals';

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setCartIsShown(true);
  };

  return (
    <CartContextProvider>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          objectFit: "cover",
          height: "100%",
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(images/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* {cartIsShown && <Cart onCloseCart={hideCartHandler} />} */}
        <Header onShowCart={showCartHandler} />
        <main>
          <Box
            sx={{
              alignItems: "center",
              marginTop: "20px",
              padding: "2rem 0",
              width: "100%",
              height: "100%",
            }}
          >
            <Routes>
              <Route path="/" element={<Meals />} />
              <Route path="/cart" element={<ViewCart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Box>
        </main>
      </Box>
    </CartContextProvider>
  );
}
