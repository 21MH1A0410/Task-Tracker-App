import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './TaskForm.css';

export function TaskForm({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text.trim());
        setText('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="task-input"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
            />
            <button type="submit" className="add-btn" disabled={!text.trim()}>
                <Plus size={20} />
                Add
            </button>
        </form>
    );
}
