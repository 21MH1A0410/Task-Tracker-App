import React from 'react';
import { useTasks } from './hooks/useTasks';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { ProgressBar } from './components/ProgressBar';
import './App.css';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, getProgress } = useTasks();
  const progress = getProgress();

  return (
    <div className="app-container">
      <header className="header">
        <h1>Task Tracker</h1>
        <p>Focus on what matters.</p>
      </header>

      <main>
        <ProgressBar progress={progress} />
        <TaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;
