import React from "react";
import { Box, Paper } from "@mui/material";
import { PositionCard } from "../Cards/PositionCard"

export class BodyPortfolio extends React.Component {
  render() {
    return (
      <Box sx={{
      }}>
        <Paper sx={{
          borderRadius: "0.9em",
          backgroundColor: "primary.main"
        }}>
          <Box sx={{
            pt: "1em",
            pb: "1em"
          }}>
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
          </Box>
        </Paper>
      </Box>
    )
  }
}