import { useState, useEffect } from 'react';

interface ITask {
  id: string;
  text: string;
  done: boolean;
}

export const useTasks = () => {
    const [tasks, setTasks] = useState<ITask[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newTaskText, setNewTaskText] = useState('');  
useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
   const addTask = () => {
        if (newTaskText.trim() === '') return;
        const newTask: ITask = {
            id: Date.now().toString(),
            text: newTaskText,
            done: false,
        };
        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }
    const toggleTask = (id: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
    };
    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }
    const totalCount = tasks.length;
    const doneCount = tasks.filter((task) => task.done).length;
    const inProgressCount = totalCount - doneCount;
    return { tasks, newTaskText, setNewTaskText, addTask, toggleTask, deleteTask, totalCount, doneCount, inProgressCount };
}
