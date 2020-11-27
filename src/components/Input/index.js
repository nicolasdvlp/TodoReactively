// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

// == Import
import './style.scss';

// == Composant
const Input = ({ label, newTask, changeLabel }) => (
  <Form
    onSubmit={(e) => {
      e.preventDefault();
      newTask();
    }}
  >
    <Form.Input
      fluid
      id="todo-input"
      type="text"
      placeholder="Ajoutez une tâche"
      value={label}
      onChange={(e) => {
        changeLabel(e.target.value);
      }}
    />
  </Form>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  newTask: PropTypes.func.isRequired,
  changeLabel: PropTypes.func.isRequired,
}

// == Export
export default Input;
