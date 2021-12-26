import {createStore,applyMiddleware} from "redux"
import {reducer} from "../reducer/index"
import thunk from "redux-thunk" 
const store= createStore(reducer,applyMiddleware(thunk))//applyMiddleware(thunk) 一般store只能接收action对象;这个函数调用之后store就能接收函数，并执行
export default store