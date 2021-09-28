
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.TodoItem = [
      { title: 'di choi'},
      { title: 'di hoc'}, 
      { title: 'di ve'}, 
      { title: 'di abc'} 
    ];
  }
  render() {
    return(
      <div className="App">
        {
          this.TodoItem.map((item) => <TodoItem title={item.title}/>)
        }
      </div>
    )
  }
}
// class App extends Component {
//   constructor() {
//     super();
//     this.TodoItem = [
//       'di choi',
//       'di hoc', 
//       'di ve'
//     ];
//   }
//   render() {
//   return (
//     <div className="App">
//       {
//         this.TodoItem.map((item) => <TodoItem title={item} />)
//       }
//     </div>
//   );
//   }
// }

export default App;
