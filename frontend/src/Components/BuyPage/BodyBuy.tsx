import React from "react";
import { Box, Paper } from "@mui/material";
import { PositionCard } from "../CommonComponents/PositionCard"
import { IInstrument } from "../../Interfaces/IInstrument";
import { GetPortfolio } from "../../API/getPortfolio";

export class BodyBuy extends React.Component<{}, {data: Array<IInstrument>}> {
  constructor(props:any){
    super(props)
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    // Replace with correct get
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
            price={(i.averagePositionPrice.units+(Math.floor(i.averagePositionPrice.nano/10000000)/100))*i.quantity.units}
            currency={i.averagePositionPrice.currency}
            profit={i.expectedYield.units+(Math.floor(i.averagePositionPrice.nano/10000000)/100)}
            figi={i.figi}/>
            )}
          </Box>
        </Paper>
      </Box>
    )
  }
}