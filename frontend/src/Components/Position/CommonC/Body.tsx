import React from 'react'
import { Paper, Box, Divider } from '@mui/material'
import { BuyHeader } from "../CommonC/Header"
import { Param } from "../CommonC/Param"
import { Statistics } from "../CommonC/Statistics"
import { BuyButton } from "./Button"
import { BodyBuyState } from '../../../Types/Position/BuyPage/BodyBuyState'
import { BodyBuyProps} from '../../../Types/Position/BuyPage/BodyBuyProps'
import { getLastPrice } from '../../../API/getLastPrice'
import { getByFigi } from '../../../API/getByFigi'

export class BodyBuy extends React.Component<BodyBuyProps, BodyBuyState> {
  constructor(props:any) {
    super(props)
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this)
    this.state = {
      figi: window.location.pathname.slice(10, 22),
      name: "",
      currency: "",
      instrumentType: "",
      lastPrice: 0,
      lot: 0,
      quantity: 1,
    }
  }
  async componentDidMount() {
    const lastPriceRes = await getLastPrice("/api/assets/"+this.state.figi+"/lastprice")
    const res = await getByFigi("/api/assets/"+this.state.figi)
    this.setState ({
      lastPrice: res.instrumentType === "bond" ? Math.round(lastPriceRes*10) : lastPriceRes,
      name: res.name,
      currency: res.currency,
      instrumentType: res.instrumentType,
      lot: res.lot
    })
  }
  handleChangeQuantity(event: any) {
    this.setState({
      quantity: event.target.value
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
            <BuyHeader 
              figi={this.state.figi}
              name={this.state.name}
              lastPrice={this.state.lastPrice}
              currency={this.state.currency}
            />
            <Divider color="#F4F4F4" variant="middle"/>
{/* Parameters */}
            <Param
              lastPrice={this.state.lastPrice}
              currency={this.state.currency}
              lot={this.state.lot}
              quantity={this.state.quantity}
              quantityHandler={this.handleChangeQuantity}
            />
            <Divider color="#F4F4F4" variant="middle"/>
{/* Statistics */}
            <Statistics
              lastPrice={this.state.lastPrice}
              currency={this.state.currency}
              lot={this.state.lot}
              quantity={this.state.quantity}
            />
{/* Order Button */}
            <BuyButton
              isBuy={this.props.isBuy}
              figi={this.state.figi}
              price={this.state.lastPrice}
              quantity={this.state.quantity}
              isAvailable={
                (this.props.currencyAvailable! <= this.state.quantity*this.state.lastPrice) 
                ||
                (this.props.quantityAvailable! < this.state.quantity)
              }
            />
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}