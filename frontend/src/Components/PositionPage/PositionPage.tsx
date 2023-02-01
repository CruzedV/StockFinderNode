import React from 'react'
import { Box, Paper, Typography, Divider } from '@mui/material'

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
          <Box sx={{
            p: "1em 1em 1em 1em",
            height: "10.1em",
          }}>
            <Box sx={{
              width: "25%",
              float: "left",
              maxHeight: "10.1em"
            }}>
              <img alt="img" src={require ("../../static/minfinx160.png")}/>
            </Box>
            <Box sx={{
              ml: "30%",
            }}>
              <Box>
                <Typography color="text.primary">
                  ОФЗ 12454566534343
                </Typography>
                <Typography color="text.primary" variant="positionSubtitle">
                  SU26232RMFS7
                </Typography>
              </Box>
              <Typography color="text.primary" variant="positionText">
                Облигации федерального займа (ОФЗ) - самые надежные ценные бумаги на российском фондовом рынке, потому что их выпускает государство в лице Минфина. Государство же и будет из погашать(возвращать номинал)
              </Typography>
            </Box>
            <Divider light={true} variant="middle"/>
          </Box>
          <Box>

          </Box>
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}