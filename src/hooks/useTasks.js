import { useLocalStorage } from './useLocalStorage';

export function useTasks() {
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const addTask = (text, category = 'General') => {
        const newTask = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            category,
            createdAt: new Date().toISOString()
        };
        setTasks((prev) => [newTask, ...prev]);
    };

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const editTask = (id, newText) => {
        setTasks((prev) =>
            prev.map((task) => (task.id === id ? { ...task, text: newText } : task))
        );
    };

    const getProgress = () => {
        if (tasks.length === 0) return 0;
        const completedCount = tasks.filter((t) => t.completed).length;
        return Math.round((completedCount / tasks.length) * 100);
    };

    return { tasks, addTask, toggleTask, deleteTask, editTask, getProgress };
}
