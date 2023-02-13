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
              amount={i.quantity.units}
              price={(i.currentPrice.units+(Math.floor(i.currentPrice.nano/10000000)/100))*i.quantity.units}
              currency={i.currentPrice.currency}
              profit={i.expectedYield.units+(Math.floor(i.currentPrice.nano/10000000)/100)}
              figi={i.figi}/>
            )}
          </Box>
        </Paper>
      </Box>
    )
  }
}