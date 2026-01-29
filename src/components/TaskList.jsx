import React from 'react';
import { TaskItem } from './TaskItem';

export function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div style={{ textAlign: 'center', margin: '2rem 0', color: 'var(--text-muted)' }}>
                <p>No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
