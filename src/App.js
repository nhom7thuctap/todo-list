import "./App.css";
import "./css/Todo.css";

import React, { Component } from "react";

// Components
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

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
  }


    render() {
      const { todosList } = this.state;
      return (
        <div className="todoapp">
          <Header />
          <TodoList  todosList={todosList}/>
          <Footer />
        </div>
      );
    }
}

export default App;
