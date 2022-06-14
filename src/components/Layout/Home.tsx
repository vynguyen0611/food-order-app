import { ReactElement } from 'react';

import { Box } from '@mui/material';

import Meals from '../Meals/Meals';
import Header from './Header';

export default function Home() {
  return (
    <>
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
        <Header />
        <main>
          <Meals />
        </main>
      </Box>
    </>
  );
}
