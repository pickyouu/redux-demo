import React from "react";

export default class Count extends React.Component{
  add=()=>{
    this.props.jia()
  }
  asyncAdd=()=>{
   this.props.asyncjia()
  }
  
  render(){
    return(
      <div>
        count:{this.props.count}
        <button onClick={this.add}>+1</button>
        <button onClick={this.asyncAdd}>+1 async</button>
      
      </div>
    )
  }
}