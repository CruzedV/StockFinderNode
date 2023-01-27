import React from 'react';
import './App.css';
import { GetPortfolio } from '../API/getPortfolio';
import { IInstrument } from '../Interfaces/IInstrument';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { Button, Typography } from '@mui/material';

class App extends React.Component<{} , {data: Array<IInstrument>}>{
  constructor(props:any){
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
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

  handleEvent(){  
    console.log(this.props);  
  }  

  render () {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <div>
            <Typography>something</Typography>
            <Button color="primary">
              gfgfgf
            </Button>
          </div>
        </ThemeProvider>
      </div>
    );
  }
  }
export default App;
