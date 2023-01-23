import React from 'react';
import logo from '../resources/logo.svg';
import './App.css';
import { GetPortfolio } from '../API/getPortfolio';
import { IInstrument } from '../Interfaces/IInstrument';

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
        <header className="App-header">      
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
          <ul>
            {this.state.data.map((i:IInstrument) => 
            <li key={i.figi}>{i.figi}</li>)}
          </ul>
      </div>
    );
  }
  }
export default App;
