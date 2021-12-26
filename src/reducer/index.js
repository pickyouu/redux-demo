const initState = 0
function reducer(state=initState,action){
  switch (action.type) {
    case "add":
      return state+1
    default:
      return state;
      
  }
}
module.exports={
  reducer
}