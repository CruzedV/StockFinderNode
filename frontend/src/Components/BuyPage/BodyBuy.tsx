import React from "react";
import { Box, Paper } from "@mui/material";
import { BodyState } from "../../Types/BuyPage/BodyState";
import { BodyProps } from "../../Types/BuyPage/BodyProps";
import { ListBuy } from "./ListBuy";

export class BodyBuy extends React.Component<BodyProps, BodyState> {
  constructor(props:any){
    super(props)
    const params = new URLSearchParams(window.location.search)
    this.state = {
      page: parseInt(params.get("page")!),
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
            <ListBuy/>
          </Box>
        </Paper>
      </Box>
    )
  }
}