import React from "react";
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

import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";

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
            <Button sx={{
              color: "text.primary",
            }}>
              <MoneyRoundedIcon/>
              <Typography variant="positionSubtitle">
                Акции
              </Typography>
            </Button>
            <Button sx={{
              color: "text.primary",
            }}>
              <AccountBalanceRoundedIcon/>
              <Typography variant="positionSubtitle">
                Облигации
              </Typography>
            </Button>
            <Button sx={{
              color: "text.primary",
            }}>
              <AccountBalanceWalletRoundedIcon/>
              <Typography variant="positionSubtitle">
                Фонды
              </Typography>
            </Button>
            <Button sx={{
              color: "text.primary",
            }}>
              <CurrencyRubleRoundedIcon/>
              <Typography variant="positionSubtitle">
                Валюта
              </Typography>
            </Button>
            <Button sx={{
              color: "text.primary",
            }}>
              <ShoppingCartRoundedIcon/>
              <Typography variant="positionSubtitle">
                Другое
              </Typography>
            </Button>
          </ButtonGroup>
        </Paper>
      </Box>
    )
  }
}