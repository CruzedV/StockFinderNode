import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography, Box, Toolbar, Button } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import CardTravelRoundedIcon from '@mui/icons-material/CardTravelRounded';

export class Navbar extends React.Component {
  render() {
    return(
      <Box>
        <AppBar position="static" sx={{borderRadius: "0.9em"}}>
          <Toolbar>
            <Typography>
              STOCKFINDER
            </Typography>
            {/* Router */}
            <Box>
              <Button sx={{startIcon: "../../resources/Loopa.png"}}>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}