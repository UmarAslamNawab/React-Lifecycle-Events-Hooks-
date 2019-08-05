import React, { Component } from 'react';
import LifeCycle from './lifecycles/lifecycle-1'
import './App.css';

class App extends Component{
  constructor(){
    super()
    console.log("App constructor")

    this.state={
      value1:true
    }

    this.onClickFunc=this.onClickFunc.bind(this)
  }

onClickFunc(){
  this.setState({
    value1:false
  })
}

  render(){
    console.log("App render")
    return(
      <div className="App">
   {this.state.value1 && <LifeCycle  name=" Lifecycle"/>}   
   <button onClick={this.onClickFunc}>onClickFunc</button>

        </div>
    )
  }
}

export default App