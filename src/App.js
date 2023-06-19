import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default class App extends Component {

  // initial state
  state = { todos:[  
    {id:'001', name: 'eat', done:true }, 
    {id:'002', name: 'clean', done:false},
    {id:'003', name: 'code', done:false} ,
    {id:'004', name: 'shopping', done:true } ,

  ]}

  // addTodo添加todo对象
  addTodo = (todoObj)=>{
    // 结构复制,获取原todo
    const {todos} = this.state
    // add new todo item
    const newTodos = [todoObj,...todos]
    // update state
    this.setState({todos:newTodos})

  }
  // 匹配上id，就更改done，没匹配上保持原有的todo对象
  updateTodo = (id,done)=>{
    const {todos} =this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // deleteTodo object by id
  deleteTodo =(id)=>{
    // get state
    const {todos} = this.state
    // delete todo object by id from array todos
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
  })
  // update state
  this.setState({todos:newTodos})
}

// checkAllTodos
checkAllTodos = (done)=>{
  const {todos} = this.state
  const newTodos = todos.map((todoObj)=>{
    return {...todoObj,done}
  })
  this.setState({todos:newTodos})
}
// clearAllDone
clearAllDone = ()=>{
  const {todos} = this.state
  const newTodos = todos.filter((todoObj)=>{
    return !todoObj.done
  })
  this.setState({todos:newTodos})
}

 // TODOlist传给list
  render() {
    //const {todos} = this.state; 
    return (
      <div className = "todo-container">
         <div className = "todo-wrap">
          {/* 父亲给孩子传递东西 */}
            <Header addTodo ={this.addTodo}/>
            <List todos = {this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/> 
            <Footer todos={this.state.todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone}/>
          </div>
      </div>
    )
  }
}

