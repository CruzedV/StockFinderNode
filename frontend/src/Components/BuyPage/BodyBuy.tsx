import React from "react";
import { Box, Paper, CircularProgress } from "@mui/material";
import { BuyPositionCard } from "../PositionCard/BuyPositionCard"
import { IShare } from "../../Interfaces/Instruments.ts/IShare";
import { GetShares } from "../../API/getAssets";

export class BodyBuy extends React.Component<{}, {data: Array<IShare>}> {
  constructor(props:any){
    super(props)
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    let res = await GetShares('/api/assets/shares', 0, 20)
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
              nominal={(i.nominal.units + (i.nominal.nano/Math.pow(10, 9)))*i.lot}
             />
            )}
          </Box>
          <Box sx={{
            p: "1em 47% 3em 47%",
            width: "6%",
          }}>
            <CircularProgress color="secondary"/>
          </Box>
        </Paper>
      </Box>
    )
  }
}