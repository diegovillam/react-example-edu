import React, { FormEventHandler, useState } from 'react';
import { useTasks, Task } from '../../context/TaskContext';
import TaskItem from '../Task/Task';
import styles from './TaskList.module.scss';

function TaskList() {
  const [text, setText] = useState('');
  const { tasks, loading, createTask } = useTasks();

  const onCreateTask = (e: any) => {
    e.preventDefault();
    createTask({
      id: Math.random().toString(),
      userId: 1,
      title: text,
      completed: false,
    });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onCreateTask} className={styles.form}>
        <label>Enter the task name</label>
        <input value={text} onChange={e => setText(e.target.value)}></input>
        <button type="submit">Create Task</button>
      </form>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskItem
              id={task.id}
              title={task.title}
              userId={task.userId}
              completed={task.completed}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;