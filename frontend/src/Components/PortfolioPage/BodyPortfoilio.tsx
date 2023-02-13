import React from "react";
import { Box, Paper } from "@mui/material";
import { PositionCard } from "../CommonComponents/PositionCard"
import { IInstrument } from "../../Interfaces/IInstrument";
import { GetPortfolio } from "../../API/getPortfolio";

export class BodyPortfolio extends React.Component<{}, {data: Array<IInstrument>}> {
  constructor(props:any){
    super(props)
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    let res = await GetPortfolio('/api/user')
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
            pb: "1em"
          }}>
            {this.state.data.map((i:IInstrument) =>
            <PositionCard
              name={i.figi}
              amount={i.quantityLots.units}
              price={i.currentPrice.units*i.quantityLots.units}
              currency={i.currentPrice.currency}
              profit={i.expectedYield.units}
              figi={i.figi}/>
            )}
          </Box>
        </Paper>
      </Box>
    )
  }
}