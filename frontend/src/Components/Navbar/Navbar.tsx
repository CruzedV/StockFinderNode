import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography, Box, Toolbar, Button, ButtonGroup } from '@mui/material';
import { SearchField } from '../CommonComponents/SearchField';
// Acciunt Icon
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// Buy
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
// Portfolio
import CardTravelRoundedIcon from '@mui/icons-material/CardTravelRounded';
// Settings
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { Link } from 'react-router-dom';

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
            <Box sx={{
              width: "20em",
              m: "0.4em auto 0.4em auto",
            }}>
              <SearchField/>
            </Box>
            <Box sx={{
              ml: "auto",
              mr: "auto"
            }}>
              <ButtonGroup>
                {/* Buy */}
                <Link to="/buy/?type=shares&page=1&search=null">
                  <Button startIcon={<AddShoppingCartRoundedIcon/>} sx={{
                    color: "text.primary"
                  }}>
                    <Typography>Купить</Typography>
                  </Button>
                </Link>
                {/* Portfolio */}
                <Link to="/">
                  <Button startIcon={<CardTravelRoundedIcon/>} sx={{
                    color: "text.primary"
                  }}>
                    <Typography>Портфель</Typography>
                  </Button>
                </Link>
                {/* Settings */}
                <Link to="/settings">
                  <Button startIcon={<SettingsRoundedIcon/>} sx={{
                    color: "text.primary"
                  }}>
                    <Typography>Настройки</Typography>
                  </Button>
                </Link>
              </ButtonGroup>
            </Box>
            {/* Account */}
            <Box sx={{
              width: "11em"
            }}>
              <Button endIcon={<AccountCircleRoundedIcon/>}sx={{
                  color: "text.primary",
                }}>
                <Typography>Профиль</Typography>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    )
  }
}