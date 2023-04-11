import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import { HeaderState } from '../../../Types/Position/HeaderState'
import { HeaderProps } from '../../../Types/Position/HeaderProps'

export class HeaderPosition extends React.Component<HeaderProps, HeaderState> {
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
                { this.props.name ? (
                  <Typography color="text.primary">
                    {this.props.name}
                  </Typography>
                  ) : (
                    <Skeleton variant="rounded"/>
                  )
                } 
                {this.props.ticker? (
                  <Typography color="text.primary" variant="positionSubtitle">
                    {this.props.ticker}
                  </Typography>
                  ) : (
                    <Skeleton variant="rounded"/>
                  )
                }
              <Box>
                {this.props.instrumentType? (
                  <Typography color="text.primary" variant="positionText">
                    {this.props.instrumentType === "share" ? "Акция" : ""}
                    {this.props.instrumentType === "etf" ? "Фонд" : ""}
                    {this.props.instrumentType === "bond" ? "Облигация" : ""}
                    {this.props.instrumentType === "currency" ? "Валюта" : ""}
                    {this.props.instrumentType === "futures" ? "Фьючерс" : ""}
                  </Typography>
                  ) : (
                    <Skeleton variant="rounded"/>
                  )
                }
              </Box>
              <Typography color="text.primary" variant="positionText">
                В вашем портфеле: {this.props.portfolioQuantity} шт
              </Typography>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
}