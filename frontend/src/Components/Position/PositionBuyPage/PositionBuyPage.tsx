import React from 'react'
import { Paper, Box, Divider } from '@mui/material'
import { Header } from "../CommonC/Header"
import { Param } from "../CommonC/Param"
import { Statistics } from "../CommonC/Statistics"
import { BuyButton } from "./BuyButton"

export class PositionBuyPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          pt: "3.75em",
          pb: "3.75em",
        }}>
          <Paper sx={{
            borderRadius: "0.9em",
            p: "1em 1em 1em 1em",
            backgroundColor: "primary.main",
          }}>
{/* Header */}
            <Header/>
            <Divider color="#F4F4F4" variant="middle"/>
{/* Parameters */}
            <Param/>
            <Divider color="#F4F4F4" variant="middle"/>
{/* Statistics */}
            <Statistics/>
{/* Sell Button */}
            <BuyButton/>
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}