import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography, Box, Toolbar, Button, ButtonGroup } from '@mui/material';
// Acciunt Icon
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// Buy
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
// Portfolio
import CardTravelRoundedIcon from '@mui/icons-material/CardTravelRounded';
// Settings
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export class Navbar extends React.Component {
  constructor(props:any){
    super(props);
    this.handleUrlBuy = this.handleUrlBuy.bind(this);
    this.handleUrlPortfolio = this.handleUrlPortfolio.bind(this);
    this.handleUrlSettings = this.handleUrlSettings.bind(this);
  }
  handleUrlBuy(){
    window.location.assign('http://localhost:3000/buy')
  }
  handleUrlPortfolio(){
    window.location.assign('http://localhost:3000/portfolio')
  }
  handleUrlSettings(){
    window.location.assign('http://localhost:3000/settings')
  }
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
                <Button onClick={this.handleUrlBuy} startIcon={<AddShoppingCartRoundedIcon/>} sx={{
                  color: "text.primary"
                }}>
                  <Typography color="text.primary">Купить</Typography>
                </Button>
                {/* Portfolio */}
                <Button onClick={this.handleUrlPortfolio} startIcon={<CardTravelRoundedIcon/>} sx={{
                  color: "text.primary"
                }}>
                  <Typography color="text.primary">Портфель</Typography>
                </Button>
                {/* Settings */}
                <Button onClick={this.handleUrlSettings} startIcon={<SettingsRoundedIcon/>} sx={{
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