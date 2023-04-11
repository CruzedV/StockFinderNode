import React from 'react'
import { Box } from '@mui/material'
import { BodyBuy } from "../CommonC/Body"
import { getPortfolioInstrument } from '../../../API/getPortfolio';
import { SellState } from '../../../Types/Position/BuyPage/SellState';

export class PositionSellPage extends React.Component<{}, SellState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currency: "rub",
      quantityAvailable: 0,
      figi: window.location.pathname.slice(10, 22),
    }
  }
  async componentDidMount() {
    const res = await getPortfolioInstrument("/api/user/", this.state.figi)
    this.setState({
      currency: res.currentPrice.currency,
      quantityAvailable: res.quantity.units,
    })
  }
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          pt: "3.75em",
          pb: "3.75em",
        }}>
          <BodyBuy
            isBuy={false}
            quantityAvailable={this.state.quantityAvailable}
          />
        </Box>
      </React.Fragment>
    )
  }
}