import React, { Component } from 'react';

import Layout from './components/Layout'
import TodoListCard from './components/TodoListCard'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <TodoListCard
            title="Shopping List"
            numberOfTasks={4}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
