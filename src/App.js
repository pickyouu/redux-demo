import React from "react";
import Count from "./container/count"
import Person from "./container/person";
class App extends React.Component{
  render(){
    return(
      <div>
        <Count/>
        <Person/>
      </div>
    )
  }
}

export default App;
