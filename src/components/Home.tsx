import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

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
          height: "100%",
          minHeight: "100vh",
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(images/background.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <Header onShowCart={showCartHandler} />
        <main>
          <Box
            sx={{
              alignItems: "center",
              marginTop: "10px",
              padding: "2rem 0",
              width: "100%",
              height: "100%",
            }}
          >
            <Routes>
              <Route path="/" element={<Meals />} />
              <Route path="/cart" element={<ViewCart />} />
            </Routes>
          </Box>
        </main>
      </Box>
    </CartContextProvider>
  );
}
