import React from 'react'
import { Box, Typography } from '@mui/material'

export class HeaderPosition extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Box sx={{
            p: "1em 1em 1em 1em",
            height: "10.1em",
          }}>
          <Box sx={{
            width: "25%",
            float: "left",
          }}>
            <img alt="img" src={require ("../../../static/minfinx160.png")}/>
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
              Облигации федерального займа (ОФЗ) - самые надежные ценные бумаги на российском фондовом рынке, потому что их выпускает государство в лице Минфина. Государство же и будет их погашать(возвращать номинал)
            </Typography>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
}