import React from 'react'
import { Paper, Box, Divider, Button, Typography } from '@mui/material'

export class PositionSellPage extends React.Component {
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
            <Box sx={{
              height: "6em"
            }}>
              {/* Image */}
              <Box sx={{
                float: "left",
                mr: "1em",
                display: "inline-block",
              }}>
                <img width="90em" height="90em" alt="img" src={require ("../../../static/minfinx160.png")}/>
              </Box>
            {/* Text Box */}
              <Box sx={{
                ml: "15%",
                pt: "1em",
              }}>
            {/* Text */}
                <Box sx={{
                  width: "49%",
                  display: "inline-block",
                }}>
                  <Typography>ОФЗ 1288929382</Typography>
                  <Typography variant="positionSubtitle">SU26232RMFS7</Typography>
            {/* Price */}
                </Box>
                <Box sx={{
                  textAlign: "right",
                  width: "45%",
                  display: "inline-block",
                }}>
                  <Typography>887.98P</Typography>
                  <Typography variant="positionSubtitle">Цена последней сделки</Typography>
                </Box>
              </Box>
            </Box>
            <Divider color="#F4F4F4" variant="middle"/>
{/* Parameters */}
            <Box>

            </Box>
            <Divider color="#F4F4F4" variant="middle"/>
{/* Statistics */}
            <Box>

            </Box>
{/* Sell Button */}
            {/* <Box sx={{
              width: "100%",
              ml: "auto",
              mr: "auto",
            }}>
              <Button variant="contained" sx={{
                p: "1em 3em 1em 3em",
                bottom: "3em",
                backgroundColor: "error.main",
              }}>
                <Typography>
                  Продать
                </Typography>
              </Button>
            </Box> */}
          </Paper>
        </Box>
      </React.Fragment>
    )
  }
}