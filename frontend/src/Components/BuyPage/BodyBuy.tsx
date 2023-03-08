import React from "react";
import { Box, Paper } from "@mui/material";
import { BodyState } from "../../Types/BuyPage/BodyState";
import { BodyProps } from "../../Types/BuyPage/BodyProps";
import { ListBuy } from "./ListBuy";

export class BodyBuy extends React.Component<BodyProps, BodyState> {
  constructor(props:BodyProps){
    super(props)
    const params = new URLSearchParams(window.location.search)
    this.state = {
      page: parseInt(params.get("page")!),
      type: params.get("type")!,
    }
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
            <ListBuy type={this.state.type}/>
          </Box>
        </Paper>
      </Box>
    )
  }
}