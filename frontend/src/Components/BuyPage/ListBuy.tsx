import React from "react";
import { Box, Pagination, Button } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem/PaginationItem";
import { BuyPositionCard } from "../PositionCard/BuyPositionCard"
import { GetAssets } from "../../API/getAssets";
import { ListProps } from "../../Types/BuyPage/ListProps";
import { ListState } from "../../Types/BuyPage/ListState";
import { IBuyInstrument } from "../../Interfaces/IBuyInstrument";
import { GetInstrument } from "../../API/getInstrument";

export class ListBuy extends React.Component<ListProps, ListState> {
  constructor(props:ListProps){
    const params = new URLSearchParams(window.location.search)
    super(props)
    this.state = {
      data: [],
      page: parseInt(params.get("page")!),
      query: params.get("search")!,
      isSearch: params.get("search") === "null" ? false : true,
    }
  }
  async componentDidMount() {
    if (this.state.isSearch) {
      const res = await GetInstrument(`/api/assets/find/${this.state.query}`)
      this.setState({
        data: res,
      })
    }
    else {
      const res = await GetAssets(`/api/assets/${this.props.type}`, 20*(this.state.page-1), 20*(this.state.page))
      this.setState({
        data: res,
      })
    }
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
            instrumentType={i.instrumentType}
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
              href={`/buy/?type=${this.props.type}&page=${item.page}&search=${this.state.query}`}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
    )
  }
}