import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Link, Typography } from '@mui/material';

export default function CartButton(props: any) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          // backgroundColor: "#4d1601",
          borderRadius: "25px",
          alignItems: "center",
          color: "white",
        }}
        href="/"
        onClick={props.onClick}
      >
        <ShoppingCartIcon></ShoppingCartIcon>
        <Typography variant="body1" mx={1}>
          Your cart
        </Typography>
        <Typography variant="body1">3</Typography>
      </Button>
    </>
  );
}
