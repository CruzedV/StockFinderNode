import React from "react";
import { Box } from "@mui/material";
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
      </Box>
    )
  }
}