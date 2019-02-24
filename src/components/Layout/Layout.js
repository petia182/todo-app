import React from 'react';

import "./Layout.scss"

// TODO make Home link work
// TODO make title of page dynamic
const Layout = (props) => (
  <div className="Layout">
    <div className="Layout-header">
      <a href="/#">
        Home
      </a>
      <h1>
        Todo App
      </h1>
      <h2>
        {props.pageTitle}
      </h2>
    </div>
    <div className="Layout-body container">
      {props.children}
    </div>
  </div>
);

export default Layout;