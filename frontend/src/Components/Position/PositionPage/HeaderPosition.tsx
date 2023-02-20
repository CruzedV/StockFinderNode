import React from 'react'
import { Box, Typography } from '@mui/material'
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