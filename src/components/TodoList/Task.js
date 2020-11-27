// == Import npm
import React from 'react';
import { Grid, Segment, Icon } from 'semantic-ui-react';

// == Import
import PropTypes from 'prop-types';
import './style.scss';

// == Composant
const Task = ({
  id, label, done, onClickDone, star, onClickStar,
}) => {
  const classDone = done ? 'todo todo--done' : 'todo';
  const checkDone = done ? 'check square outline' : 'square outline';
  const classLabel = done ? 'todo--done todo-text' : 'todo-text';
  const checkStar = star ? 'star ' : 'star outline';
  const classStar = star ? 'yell' : '';
  return (
    <Segment>
      <Grid>
        <Grid.Row className={classDone}>
          <Grid.Column id="leftcol" textAlign="left">
            <span className={classLabel}>{label}</span>
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right" className="maxiw">
              <Icon name={checkStar} className={classStar} onClick={() => onClickStar(id)} />
              <Icon name={checkDone} onClick={() => onClickDone(id)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

// == PropTypes
Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  star: PropTypes.bool.isRequired,
  onClickStar: PropTypes.func.isRequired,
};

// == Export
export default Task;
