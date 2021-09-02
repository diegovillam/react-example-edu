import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import axios from 'axios';

export type Task = {
  id: string;
  userId: number;
  title: string;
  completed: boolean;
}

type TaskContextValue = {
  loading: boolean;
  tasks: Task[];
  setTasks(value: Task[]): void;
  createTask(value: Task): void;
}

const initialValue = {
  tasks: [],
  loading: true,
  setTasks: () => null,
  createTask: () => null,
};

export const TaskContext = createContext<TaskContextValue>(initialValue);

export const TaskProvider = (props: any) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const createTask = (task: Task) => {
    setLoading(true);
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        id: task.id,
        userId: task.userId,
        title: task.title,
        completed: task.completed,
      })
      .then(() => {
        setTasks([
          task,
          ...tasks,
        ]);
      })
      .finally(() => setLoading(false));
  };

  const value: TaskContextValue = useMemo(() => {
    return {
      tasks,
      setTasks,
      loading,
      createTask,
    };
  }, [tasks, loading]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <TaskContext.Provider value={value} {...props} />
  )
};

export const useTasks = () => {
  const ctx = useContext(TaskContext);
  return ctx;
};