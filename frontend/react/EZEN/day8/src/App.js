import React, { Component } from 'react';
import Test5 from './components/Test5';
import Todos from './todolist/Todos';

class App extends Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;