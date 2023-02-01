import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

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
          <Box>
            <Box sx={{
              width: "35%",
              float: "left",
            }}>
              <img alt="img" src={require ("../../static/minfinx160.png")}/>
            </Box>
            <Box sx={{
              width: "65%",
              float: "left",
            }}>
              <Typography>
                ОФЗ 12454566534343
              </Typography>
              <Typography variant="positionSubtitle">
                SU26232RMFS7
              </Typography>
              <Typography variant="positionText">
                Облигации федерального займа (ОФЗ) - самые надежные ценные бумаги на российском фондовом рынке, потому что их выпускает государство в лице Минфина. Государство же и будет из погашать(возвращать номинал)
              </Typography>
            </Box>
          </Box>
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}