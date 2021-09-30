import "./App.css";
import "./css/Todo.css";

import React, { Component } from "react";

// Components
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";


const isNotCheckedAll = (todos = []) => todos.find(todo => !todo.isCompleted)

const filterByStatus = (todos = [], status = '', id = '') => {
  switch (status){
    case 'ACTIVE':
      return todos.filter(todo => !todo.isCompleted)
    case 'COMPLETED':
      return todos.filter(todo => todo.isCompleted)
    case 'REMOVE':
      return todos.filter(todo => !todo.id !== id)
      default:
      return todos
  }
}
class App extends React.PureComponent {
  state = {
    todosList: [
      {
        id: 1,
        text: "todo 1",
        isCompleted: true,
      },
      {
        id: 2,
        text: "todo 2",
        isCompleted: false,
      },
      {
        id: 3,
        text: "todo 3",
        isCompleted: false,
      },
    ],
    todoEditingId: '',
    isCheckedAll: false,
    status: 'ALL'
  };

  componentDidMount() {
    this.setState({
      isCheckedAll: !isNotCheckedAll(this.state.todosList)
    })
  }
  addTodo = (todo = {}) => {
    this.setState((preState) => ({
      todosList: [...preState.todosList, todo],
    }));
  };

  getTodoEditingId = (id = '') => {
    this.setState({ todoEditingId: id})
  }

  onEditTodo = (todo = {}, index = -1) => {
    if (index >= 0){
      const { todosList: list } = this.state
      list.splice(index, 1, todo)
      this.setState({ todosList: list,
      todoEditingId: ''
      })
    }
  }

  markCompleted = (id='') =>{
    const{todosList} = this.state
    const updateList = todosList.map(todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}) : todo)
    this.setState(preState =>({
      todosList: updateList,
      isCheckedAll: !isNotCheckedAll(updateList)
    }))
  }

  checkedAllTodos = () =>{
    const{todosList, isCheckedAll} = this.state
    this.setState(preState => ({
      todosList: todosList.map(todo => ({...todo, isCompleted: !isCheckedAll })),
      isCheckedAll: !preState.isCheckedAll
    }))
  }

  setStatusFilter = (status = '') => {
    this.setState({
      status
    })
  }

  clearCompleted = () =>{
    const { todosList} = this.state
    this.setState({
      todosList: filterByStatus(todosList, 'ACTIVE')
    })
  }

  removeTodo = (id = '') => {
    const { todosList} = this.state
    this.setState({
      todosList: filterByStatus(todosList, 'REMOVE', id)
    })
  }
  render() {
    const { todosList, todoEditingId, isCheckedAll, status} = this.state;
    return (
      <div className="todoapp">
        <Header 
          addTodo={this.addTodo} 
          isCheckedAll={isCheckedAll}
        />
        <TodoList 
        todosList={filterByStatus(todosList, status)} 
        getTodoEditingId={this.getTodoEditingId}
        todoEditingId = {todoEditingId}
        onEditTodo={this.onEditTodo}
        markCompleted={this.markCompleted}
        isCheckedAll={isCheckedAll}
        checkedAllTodos={this.checkedAllTodos}
        removeTodo={this.removeTodo}
        />
        <Footer
          setStatusFilter={this.setStatusFilter}
          status={status}
          clearCompleted={this.clearCompleted}
          numOfTodos={todosList.length}
          numOfTodosLeft={filterByStatus(todosList, 'ACTIVE').length}
         />
      </div>
    );
  }
}

export default App;
