import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography, Box, Toolbar, Button, ButtonGroup, IconButton } from '@mui/material';
// Acciunt Icon
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// Buy
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
// Portfolio
import CardTravelRoundedIcon from '@mui/icons-material/CardTravelRounded';
// Settings
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export class Navbar extends React.Component {
  render() {
    return(
      <Box>
        <AppBar position="static" sx={{borderRadius: "0.9em"}}>
          <Toolbar>
            {/* Brand */}
            <Box sx={{
              width: "11em"
            }}>
              <Typography sx={{
                textAlign: "center"
              }}>
                STOCKFINDER
              </Typography>
            </Box>
            {/* Router Host*/}
            <Box sx={{
              ml: "auto",
              mr: "auto"
            }}>
              <ButtonGroup>
                {/* Buy */}
                <Button startIcon={<AddShoppingCartRoundedIcon/>} sx={{
                  color: "text.primary"
                }}>
                  <Typography color="text.primary">Купить</Typography>
                </Button>
                {/* Portfolio */}
                <Button startIcon={<CardTravelRoundedIcon/>} sx={{
                  color: "text.primary"
                }}>
                  <Typography color="text.primary">Портфель</Typography>
                </Button>
                {/* Settings */}
                <Button startIcon={<SettingsRoundedIcon/>} sx={{
                  color: "text.primary"
                }}>
                  <Typography color="text.primary">Настройки</Typography>
                </Button>
              </ButtonGroup>
            </Box>
            {/* Account */}
            <Box sx={{
              width: "11em"
            }}>
              <IconButton sx={{
                  color: "text.primary",
                  ml: "auto",
                  mr: "auto",
                  display: "block"
                }}>
                <AccountCircleRoundedIcon/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}