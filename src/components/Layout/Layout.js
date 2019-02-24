import React from 'react';

import "./Layout.scss"

// TODO make Home link work
// TODO make title of page dynamic
const Layout = () => (
  <div className="Layout">
    <div className="Layout-header">
      <a href="/#">
        Home
      </a>
      <h1>
        Todo App
      </h1>
      <h2>
        Lists
      </h2>
    </div>
    <div className="Layout-body container">
      content goes here
    </div>
  </div>
);

export default Layout;