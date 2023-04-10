import React from 'react'
import { Box, Typography } from '@mui/material'
import { BodyHeaderBuyProps } from '../../../Types/Position/BuyPage/BodyHeaderBuyProps'

export class BuyHeader extends React.Component<BodyHeaderBuyProps, {}> {
  render () {
    return (
      <Box sx={{
        height: "6em",
        mb: "1em",
      }}>
        {/* Image */}
        <Box sx={{
          float: "left",
          mr: "1em",
          display: "inline-block",
        }}>
          <img width="90em" height="90em" alt="img" src={require ("../../../static/minfinx160.png")}/>
        </Box>
      {/* Text Box */}
        <Box sx={{
          ml: "15%",
          pt: "1em",
        }}>
      {/* Text */}
          <Box sx={{
            width: "49%",
            display: "inline-block",
          }}>
            <Typography>{this.props.name}</Typography>
            <Typography variant="positionSubtitle">{this.props.figi}</Typography>
      {/* Price */}
          </Box>
          <Box sx={{
            textAlign: "right",
            width: "45%",
            display: "inline-block",
          }}>
            <Typography>{this.props.lastPrice} {this.props.currency}</Typography>
            <Typography variant="positionSubtitle">Цена последней сделки</Typography>
          </Box>
        </Box>
      </Box>
    )
  }
}