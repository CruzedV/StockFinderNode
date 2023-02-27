import React from "react";
import { Box, Paper, TablePagination } from "@mui/material";
import { BuyPositionCard } from "../PositionCard/BuyPositionCard"
import { IShare } from "../../Interfaces/Instruments/IShare";
import { GetShares } from "../../API/getAssets";
import { BodyState } from "../../Interfaces/BuyPage/BodyState";

export class BodyBuy extends React.Component<{}, BodyState> {
  constructor(props:any){
    super(props)
    this.state = {
      data: [],
      counter: 20,
    }
    this.handlePagination = this.handlePagination.bind(this);
  }
  async componentDidMount() {
    let res = await GetShares('/api/assets/shares', 0, this.state.counter)
    this.setState({
      data: res
    })
  }
  async handlePagination() {

    this.setState({
      counter:  this.state.counter + 20
    })
  }
  render() {
    return (
      <Box>
        <Paper sx={{
          borderRadius: "0.9em",
          backgroundColor: "primary.main"
        }}>
          <Box sx={{
            pt: "1em",
            pb: "1em",
          }}>
            {this.state.data.map((i:IShare) =>
            <BuyPositionCard
              figi={i.figi}
              ticker={i.ticker}
              currency={i.currency}
              name={i.name}
              isDividend={i.divYieldFlag}
              isSellAvailable={i.sell_available_flag}
              isBuyAvailable={i.buy_available_flag}
             />
            )}
          </Box>
          <Box sx={{
            p: "0em 23% 1em 23%"
            }}>
            <TablePagination
              count={100} 
              page={1}
              onPageChange={this.handlePagination}
              rowsPerPage={20}
            >

              </TablePagination>
          </Box>
        </Paper>
      </Box>
    )
  }
}