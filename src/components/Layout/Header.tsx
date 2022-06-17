import Image from 'mui-image';
import { useState } from 'react';

import { PropaneSharp } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, IconButton, Stack, Toolbar, Tooltip } from '@mui/material';

import CartButton from './CartButton';

export default function Header(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: "5px" }}>
        <AppBar
          position="fixed"
          sx={{
            boxShadow: 0,
            backgroundColor: "transparent",
            px: { xs: "10px", md: "60px" },
            mb: 8,
            // borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              height: "100px",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/1.jpeg"
              alt="Bally Kitchen"
              height="100px"
              width="180px"
              bgColor="transparent"
            />
            <Stack direction="row" spacing={2}>
              <CartButton onClick={props.onShowCart} />
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
