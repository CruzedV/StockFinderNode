import React from 'react'
import { Typography, Box } from '@mui/material'
import { StatisticsProps } from '../../../Types/Position/BuyPage/StatisticsProps'

export class Statistics extends React.Component<StatisticsProps ,{}> {
  render () {
    return (
      <Box sx={{
        mb: "1em",
        mt: "1em",
        textAlign: "center",
      }}>
        <Box sx={{
          width: "50%",
          display: "inline-block",
        }}>
          <Typography>
            Комиссия: 
          </Typography>
        </Box>
        <Box sx={{
          width: "50%",
          display: "inline-block",
        }}>
          <Typography>
            На сумму: 0P
          </Typography>
        </Box>
        <Box sx={{
          width: "50%",
          display: "inline-block",
          mt: "1em",
        }}>
          <Typography>
            Итог:
          </Typography>
        </Box>
        <Box sx={{
          width: "50%",
          display: "inline-block",
          mt: "1em",
        }}>
          <Typography>
            На сумму: {Math.round((this.props.quanity*(this.props.lot*this.props.lastPrice))*100)/100} {this.props.currency}
          </Typography>
        </Box>
      </Box>
    )
  }
}