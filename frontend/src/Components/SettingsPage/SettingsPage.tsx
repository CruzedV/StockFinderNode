import React from 'react'
import { Box, Paper } from "@mui/material";
import { Param } from './Param'

export class SettingsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Box sx={{
          pt: "3.75em",
          pb: "3.75em"
        }}>
          <Paper sx={{
            borderRadius: "0.9em",
            backgroundColor: "primary.main"
          }}>
          <Box sx={{
            pt: "1em",
            pb: "1em"
          }}>
            <Param/>
            <Param/>
            <Param/>
            <Param/>
            <Param/>
          </Box>
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}