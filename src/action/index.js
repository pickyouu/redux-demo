export const add = ()=>({type:"add"})
export const asyncadd =()=>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(add())
    }, 500);
  }
}