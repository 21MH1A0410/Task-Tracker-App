import React from 'react';
import { Trash2, Check } from 'lucide-react';
import './TaskItem.css';

export function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-left">
                <div
                    className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                    onClick={() => onToggle(task.id)}
                >
                    {task.completed && <Check size={14} color="white" strokeWidth={3} />}
                </div>
                <span
                    className="task-text"
                    onClick={() => onToggle(task.id)}
                >
                    {task.text}
                </span>
            </div>
            <div className="task-actions">
                <button
                    className="icon-btn delete"
                    onClick={() => onDelete(task.id)}
                    aria-label="Delete task"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
}
