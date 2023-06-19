import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired, // 限制todos必须是数组
    updateTodo:PropTypes.func.isRequired, // 限制updateTodo必须是函数
    deleteTodo:PropTypes.func.isRequired // 限制deleteTodo必须是函数
  }
  render() {
    const {todos, updateTodo, deleteTodo} = this.props
    return (
        <ul className="todo-main">
        {
            todos.map(todo =>{
            // return <Item key={todo.id} {...todo} updateTodo={updateTodo} />  // 传递todos中的每个todo对象
            return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            
    })
    }
      </ul>
    )
  }
}  