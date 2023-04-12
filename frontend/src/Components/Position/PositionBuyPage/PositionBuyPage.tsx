import React from 'react';
import { Box, Paper, Typography } from '@mui/material'
import { BodyBuy } from "../CommonC/Body"
import { BuyState } from '../../../Types/Position/BuyPage/BuyState';
import { getPortfolioCurrency } from '../../../API/getPortfolio';
import { getByFigi } from '../../../API/getByFigi';

export class PositionBuyPage extends React.Component<{}, BuyState> {
  constructor(props:any) {
    super(props);
    this.state = {
      currencyPortfolio: "rub",
      currencyAvailable: 0,
      figi: window.location.pathname.slice(10, 22),
    }
  }
  async componentDidMount() {
    const res = await getByFigi("/api/assets/"+this.state.figi)
    const currencyRes = await getPortfolioCurrency("/api/user/", res.currency)
    console.log(res.currency)
    this.setState({
      currencyPortfolio: res.currency,
      currencyAvailable: currencyRes.quantity.units+(currencyRes.quantity.nano/Math.pow(10, 9)),
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
              Доступно для покупки: {this.state.currencyAvailable} {this.state.currencyPortfolio}
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