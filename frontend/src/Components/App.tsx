import React from 'react';
import './App.css';
import { GetPortfolio } from '../API/getPortfolio';
import { IInstrument } from '../Interfaces/IInstrument';
import { ThemeProvider } from '@mui/system';
import { theme } from '../theme';

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

        </ThemeProvider>
      </div>
    );
  }
  }
export default App;
