import React, { useState } from 'react';
import moment from 'moment';
import styles from './Task.module.scss';
import { useTasks } from '../../context/TaskContext';

type Props = {
  id: string;
  userId: number;
  title: string;
  completed: boolean;
};

function Task(props: Props) {
  const { tasks, setTasks } = useTasks();
  const [notes, setNotes] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const addNote = () => {
    const n = [...notes];
    n.push(value);
    setNotes(n);
  };

  const deleteTask = () => {
    setTasks(
      tasks.filter(t => t.id !== props.id)
    );
  };

  const { id, userId, title, completed } = props;
  return (
    <div className={styles.wrapper}>
      <p>
        Task Owner: {userId}
      </p>
      <p>
        {title}
      </p>
      <form onSubmit={e => {
        e.preventDefault();
        addNote();
      }}>
        <input
          value={value}
          onChange={event => setValue(event.target.value)}
          placeholder="Type a note"
        />
        <button type="submit">
          Add Note
        </button>
      </form>

      {(notes.length > 0 && notes.length < 3) && (
        <div className={styles.notes}>
          <p>Your Notes for this task</p>
          <ul>
            {notes.map((note, index) => (
              <li>{note}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default Task;
