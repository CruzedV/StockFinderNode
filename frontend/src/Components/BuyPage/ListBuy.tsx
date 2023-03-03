import React from "react";
import { Box, Pagination, Button } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem/PaginationItem";
import { BuyPositionCard } from "../PositionCard/BuyPositionCard"
import { GetAssets } from "../../API/getAssets";
import { ListProps } from "../../Types/BuyPage/ListProps";
import { ListState } from "../../Types/BuyPage/ListState";
import { IBuyInstrument } from "../../Interfaces/IBuyInstrument";

export class ListBuy extends React.Component<ListProps, ListState> {
  constructor(props:any){
    super(props)
    this.state = {
      data: [],
      page: parseInt(window.location.pathname.slice(18,)),
      type: "shares",
    }
  }
  async componentDidMount() {
    let res = await GetAssets(`/api/assets/${this.state.type}`, 20*(this.state.page-1), 20*(this.state.page))
    this.setState({
      data: res,
    })
  }
  render() {
    return(
      <Box>
        {this.state.data.map((i:IBuyInstrument) =>
          <BuyPositionCard
            figi={i.figi}
            ticker={i.ticker}
            currency={i.currency}
            name={i.name}
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
              component={Button}
              href={`/buy/?page=${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
    )
  }
}