import React, { Component } from 'react'
// 随机生成唯一的序列号
import {v4} from 'uuid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  // 对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp = (event)=>{
    // 结构赋值获取keycode，target
    const {keyCode, target} = event
    // 判断按回车键
    if (keyCode !== 13) return
    // 判断不能输入空
    if (target.value.trim() === ''){
      alert("input can't be empty")
      return
    }
    // 准备一个todo对象
    const todoObj ={id:v4(), name:target.value, done:false}
    this.props.addTodo(todoObj)
    // clear
    target.value = ''
    console.log(target.value);
  }

  render() {
    return (
        <div className = "todo-header">
             <input onKeyUp={this.handleKeyUp} type="text" placeholder='input your tast then click enter to conform'/>
        </div>
    )
  }
}