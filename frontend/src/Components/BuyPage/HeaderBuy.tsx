import React from "react";
import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// BOND
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
// ETF
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
// CURRENCY
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
// STOCK
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
//OTHER
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export class HeaderBuy extends React.Component {
  render() {
    return (
      <Box sx={{
        pt: "3.75em",
        pb: "3.75em",
      }}>
        <Paper sx={{
          borderRadius: "0.9em",
          backgroundColor: "primary.main",
          p: "1.6em 2em 1.6em 2em",
        }}>
          <ButtonGroup>
            {/* Shares */}
            <Link to="/buy/?type=shares&page=1">
              <Button sx={{
                color: "text.primary",
              }}>
                <MoneyRoundedIcon/>
                <Typography variant="positionSubtitle">
                  Акции
                </Typography>
              </Button>
            </Link>
            {/* Bonds */}
            <Link to="/buy/?type=bonds&page=1">
              <Button sx={{
                color: "text.primary",
              }}>
                <AccountBalanceRoundedIcon/>
                <Typography variant="positionSubtitle">
                  Облигации
                </Typography>
              </Button>
            </Link>
            {/* ETF */}
            <Link to="/buy/?type=etf&page=1">
              <Button sx={{
                color: "text.primary",
              }}>
                <AccountBalanceWalletRoundedIcon/>
                <Typography variant="positionSubtitle">
                  Фонды
                </Typography>
              </Button>
            </Link>
            {/* Currency */}
            <Link to="/buy/?type=currency&page=1">
              <Button sx={{
                color: "text.primary",
              }}>
                <CurrencyRubleRoundedIcon/>
                <Typography variant="positionSubtitle">
                  Валюта
                </Typography>
              </Button>
            </Link>
            {/* Other */}
            <Link to="/buy/?type=other&page=1">
              <Button sx={{
                color: "text.primary",
              }}>
                <ShoppingCartRoundedIcon/>
                <Typography variant="positionSubtitle">
                  Другое
                </Typography>
              </Button>
            </Link>
          </ButtonGroup>
        </Paper>
      </Box>
    )
  }
}