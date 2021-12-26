const initState = []
function reducer(preState=initState,action){
  const {type,person} = action
  switch (type) {
    case 'addPerson':
      return [person,...preState]
    default:
      return preState;
  }
}
module.exports={
  person:reducer
}
