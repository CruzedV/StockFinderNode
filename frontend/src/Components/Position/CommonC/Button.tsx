import React from 'react'
import { Box, Button, Snackbar, Typography, Alert } from '@mui/material'
import { postOrder } from '../../../API/postOrder'
import { ButtonBuyProps } from '../../../Types/Position/BuyPage/ButtonBuyProps'
import { ButtonBuyState } from '../../../Types/Position/BuyPage/ButtonBuyState'

export class BuyButton extends React.Component<ButtonBuyProps, ButtonBuyState> {
  constructor(props:any) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  handleClick() {
    this.props.isBuy 
    ? postOrder(this.props.figi, 'buy', this.props.price, this.props.quantity)
    : postOrder(this.props.figi, 'sell', this.props.price, this.props.quantity)
    this.setState({
      isOpen: true,
    })
    setTimeout(()=>window.location.assign("/position/"+this.props.figi))
  }
  handleClose() {
    this.setState({
      isOpen: false,
    })
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
          // eslint-disable-next-line eqeqeq
          disabled={this.props.isAvailable || this.props.quantity == 0}
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
        <Snackbar open={this.state.isOpen} onClose={this.handleClose} autoHideDuration={6000}>
          <Alert  variant="filled" severity="success" sx={{ width: '100%' }}>
            Торговое поручение на {this.props.isBuy? "покупку": "продажу"} {this.props.quantity} лота(ов) успешно отправлено
          </Alert>
        </Snackbar>
      </Box>
    )
  }
}