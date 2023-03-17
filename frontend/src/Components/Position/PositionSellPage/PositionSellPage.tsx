import React from 'react'
import { Paper, Box, Divider } from '@mui/material'
import { Header } from "../CommonC/Header"
import { Param } from "../CommonC/Param"
import { Statistics } from '../CommonC/Statistics'
import { SellButton } from './SellButton'
import { BodySellState } from '../../../Types/Position/BuyPage/BodySellState'
import { getLastPrice } from '../../../API/getLastPrice'
import { getByFigi } from '../../../API/getByFigi'

export class PositionSellPage extends React.Component<{}, BodySellState> {
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
{/* Header */}
            <Header
              figi={this.state.figi}
              name={this.state.name}
              lastPrice={this.state.lastPrice}
            />
            <Divider color="#F4F4F4" variant="middle"/>
{/* Parameters */}
            <Param/>
            <Divider color="#F4F4F4" variant="middle"/>
{/* Statistics */}
            <Statistics/>
{/* Sell Button */}
            <SellButton/>
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}