import React from 'react';
import './TodoListCard.scss';

const TodoListCard = (props) => (
  <div className="todo-list-card">
    <h3>{props.title}</h3>
    <p>{props.numberOfTasks} items</p>
  </div>
)

export default TodoListCard