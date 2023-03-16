import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { getPortfolioTotal } from "../../API/getPortfolio";
import { PortfolioTotal } from "../../Types/Portfolio/PortfolioTotal";

export class HeaderPortfolio extends React.Component<{}, PortfolioTotal> {
  constructor(props:any){
    super(props)
    this.state = {
      totalAmountShares: 0,
      totalAmountBonds: 0,
      totalAmountEtf: 0,
      totalAmountCurrencies: 0,
      totalAmountFutures: 0,
      expectedYield: 0,
      profitPercentage: 0,
      total: 0,
      isProfitable: false,
    }
  }
  async componentDidMount() {
    let res = await getPortfolioTotal('/api/user')
    this.setState({
      totalAmountShares: res.totalAmountShares,
      totalAmountBonds: res.totalAmountBonds,
      totalAmountEtf: res.totalAmountEtf,
      totalAmountCurrencies: res.totalAmountCurrencies,
      totalAmountFutures: res.totalAmountFutures,
      expectedYield: res.expectedYield,
      profitPercentage: res.expectedYield,
      total: res.totalAmountShares + res.totalAmountBonds + res.totalAmountEtf + res.totalAmountCurrencies + res.totalAmountFutures,
      isProfitable: res.expectedYield > 0 ? true : false,
    })
  }
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
                width: "60%",
              }}>
                <Typography color="text.primary">
                </Typography>
                <Typography color={this.state.isProfitable ? "success" : "error"}>
                  {this.state.total.toFixed(2)} rub
                </Typography>
                <Typography variant="positionText" color={this.state.isProfitable ? "success" : "error"}>
                  {((this.state.total*this.state.profitPercentage)/(100+this.state.profitPercentage)).toFixed(2)} rub | {this.state.profitPercentage.toFixed(2)} %
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