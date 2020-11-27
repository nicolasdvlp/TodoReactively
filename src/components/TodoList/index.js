// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Task from './Task';
import './style.scss';

// == Composant
const TodoList = ({ tasks, onClickDone, onClickStar }) => (
  <div id="todo-list">
    {
      [].concat(tasks)
        .sort((a, b) => (a.star < b.star ? 1 : -1))
        .sort((a, b) => (a.done > b.done ? 1 : -1))
        .map((task) => <Task key={task.id} {...task} onClickStar={onClickStar} onClickDone={onClickDone} starred={task.star} />)
    }
  </div>
);
TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickStar: PropTypes.func.isRequired,
};

// == Export
export default TodoList;
