import React from 'react'
import { Box, Typography } from '@mui/material'
import { PositionProps } from '../../../Types/Position/PositionProps'
import { HeaderState } from '../../../Types/Position/HeaderState'

export class HeaderPosition extends React.Component<PositionProps, HeaderState> {
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
            </Box>
            <Typography color="text.primary" variant="positionText">
            </Typography>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
}