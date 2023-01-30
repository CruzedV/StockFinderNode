import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export class HeaderPortfolio extends React.Component {
  render() {
    return (
      <Box sx={{
        pt: "3.75em",
        pb: "3.75em",
      }}>
        <Paper sx={{
          borderRadius: "0.9em",
          backgroundColor: "primary.main",
          p: "1.6em 2em 1.6em 2em",
        }}>
          <Box sx={{
            width: "70%"
            }}>
              <Box sx={{
                width: "40%",
              }}>
                <Typography color="text.primary">
                  12345Р
                </Typography>
                <Typography color="error">
                  -1234Р | -12%
                </Typography>
              </Box>
            <Typography variant="positionSubtitle">
              Пополнить портфель можно с помощью Тинькофф инвестиций
            </Typography>
          </Box>
        </Paper>
      </Box>
    )
  }
}