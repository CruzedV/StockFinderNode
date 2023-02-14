import React from "react";
import { Box, Paper } from "@mui/material";
import { PositionCard } from "../PositionCard/PositionCard"
import { IInstrument } from "../../Interfaces/IInstrument";
import { GetPortfolioPositions } from "../../API/getPortfolio";

export class BodyPortfolio extends React.Component<{}, {data: Array<IInstrument>}> {
  constructor(props:any){
    super(props)
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    let res = await GetPortfolioPositions('/api/user')
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
              price={(i.currentPrice.units+(i.currentPrice.nano/Math.pow(10, 9)))*i.quantity.units}
              currency={i.currentPrice.currency}
              profit={i.expectedYield.units+(i.expectedYield.nano/Math.pow(10, 9))}
              figi={i.figi}/>
            )}
          </Box>
        </Paper>
      </Box>
    )
  }
}