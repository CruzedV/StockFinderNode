import React from 'react'
import { Box, Paper, Divider } from '@mui/material'
import { HeaderPosition } from './HeaderPosition'
import { PositionRegion } from './PositionRegion'
import { PositionGraph } from './PositionGraph/PositionGraph'
import { PositionButton } from './PositionButton'
import { Link } from 'react-router-dom';
import { PositionState } from '../../../Types/Position/PositionState'
import { PositionProps } from '../../../Types/Position/PositionProps'

export class PositionPage extends React.Component<PositionProps, PositionState> {
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
          </Paper>
          <Box sx={{
            p: "0.5em 0 0.5em 0"
          }}
          >
            <Box sx={{
              width: "20%",
              ml: "20%",
              mr: "auto",
            }}>
              <Link to="/position/sell">
                <PositionButton/>
              </Link>
            </Box>
            <Box sx={{
              width: "20%",
              ml: "auto",
              mr: "20%",
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