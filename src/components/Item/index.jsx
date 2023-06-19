import React, { Component } from 'react'
import './index.css'

// 接过来item
export default class Item extends Component {
  // 变量状态 defalut is false 
  state = {mouse:false}
  handleMouse =(flag) =>{
    return ()=>{
      this.setState({mouse:flag})

    }
  }

  // 取消，勾选某一个todo的回调
  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
      //console.log(id,event.target.checked);
    
    }

  }

  // 删除一个todo的回调
  handleDelete = (id)=>{
    if (window.confirm('Are you sure remove this task？')) {
      // 父亲传给我的deleteTodo
      this.props.deleteTodo (id)
    }
    
  }


  render() { 
    const {id, name,done}= this.props
    return (
        <li style={{backgroundColor:this.state.mouse ? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox"  checked ={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style= {{display:this.state.mouse?'block':'none'}}> Delete </button>
      </li>     
    )
  }
}   