import React from 'react'
import { Box, Paper, Divider } from '@mui/material'
import { HeaderPosition } from './PositionDetail/HeaderPosition'
import { PositionRegion } from './PositionDetail/PositionRegion'

export class PositionPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          pt: "3.75em",
          pb: "3.75em",
        }}>
          <Paper sx={{
            borderRadius: "0.9em",
            backgroundColor: "primary.main",
          }}>
            <HeaderPosition/>
            <Divider color="#F4F4F4" variant="middle"/>
            <PositionRegion/>
            <Divider color="#F4F4F4" variant="middle"/>
            {/* <PositionDetail/> */}
            <Divider color="#F4F4F4" variant="middle"/>
            {/* <PositionGraph/> */}
            <Divider color="#F4F4F4" variant="middle"/>
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}