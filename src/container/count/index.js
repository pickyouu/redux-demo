import CountUI from "../../pages/count";
import {connect} from "react-redux"
import { add,asyncadd,syncadd } from "../../action";
//方式1
/* const a=(state)=>{
  return {
    count:state
  }
}

const b=(dispatch)=>{
  return{
    jia:()=>{
      dispatch(add())
    },
    asyncjia:()=>{
      dispatch(asyncadd())
    }
  }
} */


//connect(a,b)(UI)  函数a,b的返回值在UI的props能看到,分别是state，和操作state的方法
//export default connect(a,b)(CountUI)

// 优化
/* export default connect(
  state=>({count:state}),
  dispatch=>({
    jia:()=>{
      dispatch(add())
    },
    asyncjia:()=>{
      dispatch(asyncadd())
    }
}))(CountUI) */

//在优化  简洁版 
export default connect(
  state=>({count:state}),
  {
    jia:add, //直接给action;生成action对象后会自动调用dispatch
    asyncjia:asyncadd
  }
  )(CountUI)