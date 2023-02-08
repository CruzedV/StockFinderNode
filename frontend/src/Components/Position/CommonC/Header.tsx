import React from 'react'
import { Box, Typography } from '@mui/material'

export class Header extends React.Component {
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
            <Typography>ОФЗ 1288929382</Typography>
            <Typography variant="positionSubtitle">SU26232RMFS7</Typography>
      {/* Price */}
          </Box>
          <Box sx={{
            textAlign: "right",
            width: "45%",
            display: "inline-block",
          }}>
            <Typography>887.98P</Typography>
            <Typography variant="positionSubtitle">Цена последней сделки</Typography>
          </Box>
        </Box>
      </Box>
    )
  }
}