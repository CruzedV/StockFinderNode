import React from "react";
import { Box, Paper } from "@mui/material";
import { BuyPositionCard } from "../PositionCard/BuyPositionCard"
import { IAsset } from "../../Interfaces/IAsset";
import { GetAssets } from "../../API/getAssets";

export class BodyBuy extends React.Component<{}, {data: Array<IAsset>}> {
  constructor(props:any){
    super(props)
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    let res = await GetAssets('/api/assets')
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
            {this.state.data.map((i:IAsset) =>
            <BuyPositionCard 
              name={i.name}
              uid={i.uid}
             />
            )}
          </Box>
        </Paper>
      </Box>
    )
  }
}