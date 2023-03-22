import React from 'react'
import { Paper, Box, } from '@mui/material'
import { getLastPrice } from '../../../API/getLastPrice'
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
            <BodyBuy/>
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}