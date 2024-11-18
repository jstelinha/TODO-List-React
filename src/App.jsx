import React, { useState } from 'react';
import TaskCreator from './components/TaskCreator/TaskCreator';
import TaskItem from './components/TaskItem/TaskItem';
import TaskListHeader from './components/TaskListHeader/TaskListHeader';
import TextInput from './components/TextInput/TextInput';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (!inputText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputText('');
  };

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen w-screen bg-cinza-600 text-cinza-100 antialiased">
      <header className="flex flex-1 justify-center items-center py-20 px-3 bg-neutral-900">
        <img src="/logo.svg" alt="Logo" />
      </header>

      <section className="w-full max-w-3xl m-auto">
        <div className="flex justify-between items-center gap-2 -translate-y-2/4">
          <TextInput value={inputText} onChange={setInputText} />
          <TaskCreator onClick={addTask} />
        </div>

        <div className="flex flex-col gap-6">
          <TaskListHeader tasksCount={tasks.length} completedTasks={tasks.filter(task => task.completed).length} />

          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleCompletion={() => toggleCompletion(task.id)}
                deleteTask={() => deleteTask(task.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
