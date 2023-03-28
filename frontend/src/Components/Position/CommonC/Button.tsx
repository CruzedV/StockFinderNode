import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { postOrder } from '../../../API/postOrder'
import { ButtonBuyProps } from '../../../Types/Position/BuyPage/ButtonBuyProps'

export class BuyButton extends React.Component<ButtonBuyProps, {}> {
  constructor(props:any) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.isBuy 
    ? postOrder(this.props.figi, 'buy', this.props.price, this.props.quantity)
    : postOrder(this.props.figi, 'sell', this.props.price, this.props.quantity)

  }
  render () {
    return (
      <Box sx={{
        width: "20%",
        mt: "2em",
        ml: "40%",
        mr: "40%",
      }}>
        <Button 
        variant="contained" 
        sx={{
          p: "0.7em 2em 0.7em 2em",
          backgroundColor: this.props.isBuy
          ? "success.main"
          : "error.main",
        }}
        onClick={this.handleClick}
        >
          <Typography variant="positionText">
            {this.props.isBuy ? "купить" : "продать"}
          </Typography>
        </Button>
      </Box>
    )
  }
}