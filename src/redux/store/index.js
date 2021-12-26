import {createStore,applyMiddleware,combineReducers} from "redux"
import  {count}  from "../reducer/count"
import {person} from "../reducer/person"
import thunk from "redux-thunk"
const allReducers=combineReducers({
  count,
  persons:person
}) 
const store= createStore(allReducers,applyMiddleware(thunk))//applyMiddleware(thunk) 一般store只能接收action对象;这个函数调用之后store就能接收函数，并执行
export default store