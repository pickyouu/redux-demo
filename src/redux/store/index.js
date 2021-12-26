import {createStore,applyMiddleware,combineReducers} from "redux"
import  {count}  from "../reducer/count"
import {person} from "../reducer/person"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
const allReducers=combineReducers({
  count,
  persons:person
}) 
const store= createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
//const store= createStore(allReducers,composeWithDevTools())
//applyMiddleware(thunk) 一般store只能接收action对象;这个函数调用之后store就能接收函数，并执行

export default store