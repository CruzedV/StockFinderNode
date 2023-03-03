import React from "react";
import { Box, Paper } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { BodyState } from "../../Types/BuyPage/BodyState";
import { BodyProps } from "../../Types/BuyPage/BodyProps";
import { ListBuy } from "./ListBuy";

export class BodyBuy extends React.Component<BodyProps, BodyState> {
  constructor(props:any){
    super(props)
    this.state = {
      page: parseInt(window.location.pathname.slice(11,)),
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
            <Routes>
              <Route 
                path="*"
                element={<ListBuy/>}
              />
            </Routes>
          </Box>
        </Paper>
      </Box>
    )
  }
}