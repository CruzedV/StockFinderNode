import React from "react";
import { Box, Paper } from "@mui/material";
import { PositionCard } from "../CommonComponents/PositionCard"

export class BodyBuy extends React.Component {
  render() {
    return (
      <Box>
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