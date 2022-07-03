import Image from 'mui-image';
import { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, IconButton, Link, Stack, Toolbar, Tooltip } from '@mui/material';

import CartButton from './CartButton';

export default function Header(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  let navigate = useNavigate();
  const handleCheckout = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate("../cart");
  };
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          flexGrow: 1,
          mb: "5px",
          top: 0,
          left: 0,
          width: "100%",
          height: "100px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10%",
          // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
          zIndex: 10,
        }}
      >
        <AppBar
          sx={{
            boxShadow: 0,
            backgroundColor: "transparent",
            px: { xs: "10px", md: "60px" },
            mb: 8,
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              height: "100px",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Image
                src="/images/1.jpeg"
                alt="Bally Kitchen"
                height="100px"
                width="180px"
                bgColor="transparent"
              />
            </Link>
            <Stack direction="row" spacing={2}>
              {/* <CartButton onClick={props.onShowCart} /> */}
              <CartButton onClick={handleCheckout} />
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <AccountCircleIcon sx={{ width: 32, height: 32 }}>
                    M
                  </AccountCircleIcon>
                </IconButton>
              </Tooltip>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
