import { useState } from 'react';

import { Box } from '@mui/material';

import Cart from './Cart/Cart';
import { CartContextProvider } from './context/cart-context';
import Header from './Layout/Header';
import Meals from './Meals/Meals';

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setCartIsShown(true);
  };

  const hideCartHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setCartIsShown(false);
  };

  return (
    <CartContextProvider>
      <Box
        sx={{
          overflow: "auto",
          objectFit: "cover",
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(images/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </Box>
    </CartContextProvider>
  );
}
