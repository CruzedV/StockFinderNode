import React from "react";
import { Box, Paper, Pagination } from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem/PaginationItem";
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
  componentDidMount() {
    this.setState({
      page: parseInt(window.location.pathname.slice(11,)),
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
            <Routes>
              <Route 
                path=""
                element={<ListBuy/>}
              />
            </Routes>
          </Box>
          <Box sx={{
            p: "0em 23% 1em 23%"
          }}>
            <Pagination
              count={100}
              page={this.state.page}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/buy/page=/${item.page}`}
                  {...item}
                />
              )}
            />
          </Box>
        </Paper>
      </Box>
    )
  }
}