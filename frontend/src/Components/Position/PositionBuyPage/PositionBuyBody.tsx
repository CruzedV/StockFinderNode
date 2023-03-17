import React from 'react'
import { Paper, Box, Divider } from '@mui/material'
import { Header } from "../CommonC/Header"
import { Param } from "../CommonC/Param"
import { Statistics } from "../CommonC/Statistics"
import { BuyButton } from "./BuyButton"
import { BodyBuyState } from '../../../Types/Position/BuyPage/BodyBuyState'
import { getLastPrice } from '../../../API/getLastPrice'
import { getByFigi } from '../../../API/getByFigi'

export class PositionBuyBody extends React.Component<{}, BodyBuyState> {
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
            <BuyButton/>
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}