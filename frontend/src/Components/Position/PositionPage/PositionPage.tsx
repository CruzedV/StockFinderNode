import React from 'react'
import { Box, Paper, Divider } from '@mui/material'
import { HeaderPosition } from './HeaderPosition'
import { PositionRegion } from './PositionRegion'
import { PositionGraph } from './PositionGraph/PositionGraph'
import { PositionButton } from './PositionButton'
import { Link } from 'react-router-dom';

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
            <PositionGraph/>
            <Divider color="#F4F4F4" variant="middle"/>
          </Paper>
          <Box>
            <Box sx={{
              width: "50%",
              float: "left",
            }}>
              <Link to="/position/sell">
                <PositionButton/>
              </Link>
            </Box>
            <Box sx={{
              width: "50%",
              float: "right",
            }}>
              <Link to="/position/buy">
                <PositionButton/>
              </Link>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
}