import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选checkbox的回调 
  handleCheckAll = (event)=>{  
    this.props.checkAllTodos(event.target.checked)
  }

  // 清除所有已完成的回调
  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
  // 计算已完成的个数, reduce 对数组进行条件统计
    const doneCount = todos.reduce((pre,current)=>pre+(current.done?1:0),0)

    // todos的总数
    const total = todos.length
    return (
        <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ?true:false}/>
        </label>
        <span>
          <span> complete {doneCount} tasks </span> / total {total} tasks
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">Delete All Done Task</button>
      </div>
    ) 
  }
}
