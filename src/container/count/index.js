import {connect} from "react-redux"
import { add,asyncadd} from "../../redux/action/count";

import React from "react";

class CountUI extends React.Component{
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
export default connect(
  state=>({count:state.count}),
  {
    jia:add, //直接给action;生成action对象后会自动调用dispatch
    asyncjia:asyncadd
  }
  )(CountUI)