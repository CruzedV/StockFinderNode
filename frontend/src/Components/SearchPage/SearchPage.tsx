import React from "react"
import { GetInstrument } from "../../API/getInstrument"
import { SearchState } from "../../Types/Navbar/SearchState"

export class SearchPage extends React.Component<{}, SearchState> {
  constructor(props:any){
    super(props)
    this.state = {
      query: "",
      data: [],
    }
  }
  componentDidMount(): void {
    let res = await GetInstrument(`/assets/find/${this.state.query}`)
    this.setState({
      data: res
    }
    )
  }
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}