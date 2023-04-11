import React from 'react';
import { Box, Paper, Typography } from '@mui/material'
import { BodyBuy } from "../CommonC/Body"
import { BuyState } from '../../../Types/Position/BuyPage/BuyState';
import { getPortfolioInstrument } from '../../../API/getPortfolio';

export class PositionBuyPage extends React.Component<{}, BuyState> {
  constructor(props:any) {
    super(props);
    this.state = {
      currency: "rub",
      currencyAvailable: 0,
      figi: window.location.pathname.slice(10, 22),
    }
  }
  async componentDidMount() {
    const res = await getPortfolioInstrument("/api/user/", "RUB000UTSTOM")
    this.setState({
      currency: res[0].currentPrice.currency,
      currencyAvailable: res[0].quantity.units,
    })
  }
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          pt: "3.75em",
          pb: "3.75em",
        }}>
          <Paper sx={{
            borderRadius: "0.9em",
            p: "1em 1em 1em 1em",
            backgroundColor: "primary.main",
          }}>
            <Typography variant="positionPrice">
              ИИС
            </Typography>
            <Typography>
              Доступно для покупки: {this.state.currencyAvailable} {this.state.currency}
            </Typography>
          </Paper>
        </Box>
        <BodyBuy
          isBuy={true}
          currencyAvailable={this.state.currencyAvailable}
        />
      </React.Fragment>

    )
  }
}