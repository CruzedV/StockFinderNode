import React from "react";
import { Box, Paper, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem/PaginationItem";
import { BodyState } from "../../Types/BuyPage/BodyState";
import { BodyProps } from "../../Types/BuyPage/BodyProps";
import { BuyPositionCard } from "../PositionCard/BuyPositionCard"
import { IShare } from "../../Interfaces/Instruments/IShare";
import { GetShares } from "../../API/getAssets";

export class BodyBuy extends React.Component<BodyProps, BodyState> {
  constructor(props:any){
    super(props)
    this.state = {
      data: [],
      page: 1,
    }
  }
  async componentDidMount() {
    let res = await GetShares('/api/assets/shares', 20*(this.state.page-1), 20*(this.state.page))
    this.setState({
      data: res
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
              page={this.state.page}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/buy/page=${item.page}`}
                  {...item}
                />
              )}
            />
          </Box>
        </Paper>
      </Box>
    )
  }
}