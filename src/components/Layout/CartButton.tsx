import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from '@mui/material';

import useCounter from '../../hooks/useCart';

export default function CartButton(props: any) {
  const { totalCount } = useCounter(props.id);

  return (
    <>
      <Button
        variant="contained"
        sx={{
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
        <Typography variant="body1">{totalCount}</Typography>
      </Button>
    </>
  );
}
