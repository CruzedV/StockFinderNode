import React from 'react'
import { Box, Typography } from '@mui/material'
import { HeaderState } from '../../../Types/Position/HeaderState'
import { HeaderProps } from '../../../Types/Position/HeaderProps'
import { getPortfolioQuantity } from '../../../API/getPortfolio'

export class HeaderPosition extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      portfolioQuantity: 0,
    }
  }
  async componentDidMound() {
    const resQuantity = await getPortfolioQuantity("/api/user/", this.props.figi)
    console.log(resQuantity)
    this.setState({
      portfolioQuantity: resQuantity? resQuantity.quantity.units : 0,
    })
  }
  render () {
    return (
      <React.Fragment>
        <Box sx={{
            p: "1em 1em 1em 1em",
            height: "10.1em",
          }}>
          <Box sx={{
            width: "25%",
            float: "left",
          }}>
            <img alt="img" src={require ("../../../static/minfinx160.png")}/>
          </Box>
          <Box sx={{
            ml: "30%",
          }}>
            <Box>
              <Typography color="text.primary">
                {this.props.name}
              </Typography>
              <Typography color="text.primary" variant="positionSubtitle">
                {this.props.ticker}
              </Typography>
              <Box>
                <Typography color="text.primary" variant="positionText">
                  {this.props.instrumentType === "share" ? "Акция" : ""}
                  {this.props.instrumentType === "etf" ? "Фонд" : ""}
                  {this.props.instrumentType === "bond" ? "Облигация" : ""}
                  {this.props.instrumentType === "currency" ? "Валюта" : ""}
                  {this.props.instrumentType === "futures" ? "Фьючерс" : ""}
                </Typography>
              </Box>
              <Typography color="text.primary" variant="positionText">
                В вашем портфеле: {this.state.portfolioQuantity} шт
              </Typography>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
}