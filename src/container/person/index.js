import React from "react";
import {connect} from "react-redux"
import {addPerson} from "../../redux/action/person"
import {nanoid} from "nanoid"
class Person extends React.Component{
  state={
    persons:[{id:"1",name:"zql",age:"8"}]
  }
  handle=()=>{
    const p={id:nanoid(),name:this.namenode.value,age:this.agenode.value}
    this.props.addPerson(p)
    this.namenode.value=""
    this.agenode.value=""
  }
  render(){
    const {persons,count} = this.props
    return(
      <div>
        上面组件求和为:{count}
        <hr />
        <input ref={(c)=>this.namenode=c} type="text" placeholder="输入名字"/>
        <input ref={c=>this.agenode=c} type="text" placeholder="输入年龄"/>
        <button onClick={this.handle}>添加</button>
        <hr />
        <ul>
          {persons.map(p=>{
            return <li key={p.id}>name:{p.name}--age:{p.age}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(state=>({persons:state.persons,count:state.count}),{
  addPerson
})(Person)

