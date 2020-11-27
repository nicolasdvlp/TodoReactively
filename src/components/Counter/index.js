// == Import npm
import React from 'react';
import PropTypes from 'prop-types'

// == Import
import './style.scss';

// == Composant
const Counter = (props) => {
  const { todoNumber } = props;
  const conjuguaison = todoNumber <= 1 ? 'tâche' : 'tâches';
  return (
    <div id="todo-counter">
      <p>{todoNumber} {conjuguaison} en cours</p>
    </div>
  );
};

Counter.propTypes = {
  todoNumber: PropTypes.number.isRequired,
}

// == Export
export default Counter;
