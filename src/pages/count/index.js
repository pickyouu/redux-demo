import React from "react";
import store from "../../store";
import { add,asyncadd } from "../../action";
export default class Count extends React.Component{
  add=()=>{
    store.dispatch(add())
  }
  asyncAdd=()=>{
    store.dispatch(asyncadd())
  }
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render(){
    return(
      <div>
        count:{store.getState()}
        <button onClick={this.add}>+1</button>
        <button onClick={this.asyncAdd}>+1 async</button>
      
      </div>
    )
  }
}