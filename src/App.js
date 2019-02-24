import React, { Component } from "react";
import { store } from "./redux";
import { Provider } from "react-redux";

import List from "./views/List";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
