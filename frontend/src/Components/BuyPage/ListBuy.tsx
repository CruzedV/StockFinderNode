import React from "react";
import { Box, Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem/PaginationItem";
import { Link } from "react-router-dom";
import { BuyPositionCard } from "../PositionCard/BuyPositionCard"
import { IShare } from "../../Interfaces/Instruments/IShare";
import { GetShares } from "../../API/getAssets";
import { ListProps } from "../../Types/BuyPage/ListProps";
import { ListState } from "../../Types/BuyPage/ListState";

export class ListBuy extends React.Component<ListProps, ListState> {
  constructor(props:any){
    super(props)
    this.state = {
      data: [],
      page: parseInt(window.location.pathname.slice(11,)),
    }
  }
  async componentDidMount() {
    let res = await GetShares('/api/assets/shares', 20*(this.state.page-1), 20*(this.state.page))
    this.setState({
      data: res,
    })
  }
  render() {
    return(
      <Box>
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
      <Box sx={{
        p: "0em 23% 1em 23%"
      }}>    
        <Pagination
          count={100}
          page={this.state.page}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/buy/page=/${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
    )
  }
}