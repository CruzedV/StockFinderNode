import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export class HeaderPortfolio extends React.Component {
  render() {
    return (
      <Box sx={{
        m: "auto",
        borderRadius: "0.9em"
      }}>
        <Paper sx={{
          backgroundColor: "primary.main"
        }}>
          <Typography sx={{
            p: "1.6em 2em 1.6em 2em",
          }}
          >
            Content
          </Typography>
        </Paper>
      </Box>
    )
  }
}