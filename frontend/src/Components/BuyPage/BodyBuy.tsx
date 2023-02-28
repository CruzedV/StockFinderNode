import React from "react";
import { Box, Paper, Pagination } from "@mui/material";
import { BuyPositionCard } from "../PositionCard/BuyPositionCard"
import { IShare } from "../../Interfaces/Instruments/IShare";
import { GetShares } from "../../API/getAssets";
import { BodyState } from "../../Types/BuyPage/BodyState";

export class BodyBuy extends React.Component<{}, BodyState> {
  constructor(props:any){
    super(props)
    this.state = {
      data: [],
      page: 1,
    }
    this.handlePagination = this.handlePagination.bind(this);
  }
  async componentDidMount() {
    let res = await GetShares('/api/assets/shares', 0, 20)
    this.setState({
      data: res
    })
  }
  async handlePagination(event: any, page: number) {
    let res = await GetShares('/api/assets/shares', 20*(page-1), 20*page)
    this.setState({
      data: res,
      page: page,
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
            <Pagination
              count={100}
              onChange={(event, page) => this.handlePagination(event, page)}
              page={this.state.page}
            />
          </Box>
        </Paper>
      </Box>
    )
  }
}