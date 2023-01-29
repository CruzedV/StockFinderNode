import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export class HeaderPortfolio extends React.Component {
  render() {
    return (
      <Box sx={{
        pt: "3.75em",
        pb: "3.75em",
        borderRadius: "0.9em"
      }}>
        <Paper sx={{
          borderRadius: "0.9em",
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