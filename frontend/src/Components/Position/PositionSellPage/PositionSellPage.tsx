import React from 'react'
import { getLastPrice } from '../../../API/getLastPrice'
import { Box } from '@mui/material'
import { getByFigi } from '../../../API/getByFigi'
import { BodyBuy } from "../CommonC/Body"
import { BodyBuyState } from '../../../Types/Position/BuyPage/BodyBuyState'

export class PositionSellPage extends React.Component<{}, BodyBuyState> {
  constructor(props:any) {
    super(props)
    this.state = {
      figi: window.location.pathname.slice(10, 14),
      name: "",
      currency: "",
      instrumentType: "",
      lastPrice: 0,
      lot: 0,
      quantity: 1,
    }
  }
  async componentDidMount() {
    const lastPriceRes = await getLastPrice(`/api/assets/${this.state.figi}/lastprice`)
    const res = await getByFigi(`/api/assets/{this.state.figi}`)
    this.setState ({
      lastPrice: lastPriceRes,
      name: res.name,
      currency: res.currency,
      instrumentType: res.instrumentType,
      lot: res.lot
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
          />
        </Box>
      </React.Fragment>
    )
  }
}