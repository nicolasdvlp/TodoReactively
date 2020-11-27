import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';

import './style.scss';

import Header from '../Header';
import Input from '../Input';
import Counter from '../Counter';
import TodoList from '../TodoList';

function App() {

  const [inputLabel, setInputLabel] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      label: 'Coder une todolist',
      done: true,
      star: false,
    },
    {
      id: 13,
      label: 'en React de préférence',
      done: true,
      star: false,
    },
    {
      id: 4,
      label: ' avec un peu de Semantic UI React ?',
      done: true,
      star: false,
    },
    {
      id: 8,
      label: 'Boire du café ! ☕',
      done: false,
      star: false,
    },
  ]);

  const addTask = () => {
    const lastId = Math.max(...tasks.map((o) => o.id)) + 1;

    setTasks([...tasks, {
      id: lastId,
      label: inputLabel,
      done: false,
      star: false,
    }]);
    setInputLabel('');
  };

  const switchDone = (id) => {
    const newTodos = tasks.map((task) => {
      if (task.id === id) {
        return { 
          ...task, 
          done: !task.done,
        };
      }
      return task;
    });

    setTasks(newTodos);
  }

  const switchStar = (id) => {
    const newTodos = tasks.map((task) => {
      if (task.id === id) {
        return { 
          ...task, 
          star: !task.star,
        };
      }
      return task;
    });

    setTasks(newTodos);
  }

  const undoneTask = tasks.filter((task) => !task.done).length;

  return (
    <Container id="todo">
      <Header />
      <Input newTask={addTask} label={inputLabel} changeLabel={setInputLabel} />
      <Counter todoNumber={undoneTask} />
      <TodoList tasks={tasks} onClickDone={switchDone} onClickStar={switchStar} />
    </Container>
  );
}

export default App;
