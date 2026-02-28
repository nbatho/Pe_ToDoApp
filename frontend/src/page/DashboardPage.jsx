import { useEffect, useState } from 'react';
import { getAllTasks,createTask,deleteTask } from '../api/tasks';
import { useDispatch, useSelector } from 'react-redux';
export default function DashboardPage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();
    const fetchTasks = useSelector(state => state.tasks);
    const addTask = () => {
        if (newTask.trim()) {
            dispatch(createTask({ title: newTask, completed: false }));
            setNewTask('');
        }
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = async (id) => {
        console.log('Deleting task with id:', id);
        try {
            await dispatch(deleteTask(id));
            // Refresh danh sách sau khi xóa thành công
            await dispatch(getAllTasks());
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    useEffect(() => {
        if (fetchTasks && fetchTasks.tasks) {
            setTasks(fetchTasks.tasks);
        }
    }, [fetchTasks]);
    useEffect(() => {
        dispatch(getAllTasks());
    }, [dispatch]);
    return (
        <div className="min-h-screen w-full relative flex justify-center items-start py-12 px-4">
            {/* Radial Gradient Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)"
                }}
            />
            
            {/* Main Container */}
            <div className="relative z-10 w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
                        My Todo App
                    </h1>
                    <p className="text-indigo-100 text-lg">
                        Organize your tasks efficiently
                    </p>
                </div>

                {/* Todo Card */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Input Section */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                placeholder="What needs to be done?"
                            />
                            <button
                                onClick={addTask}
                                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-md hover:shadow-lg"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {tasks.length === 0 ? (
                            <div className="p-12 text-center text-gray-400">
                                <svg className="mx-auto h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <p className="text-lg">No tasks found</p>
                            </div>
                        ) : (
                            tasks.map((task) => (
                                <div
                                    key={task._id}
                                    className="p-4 hover:bg-gray-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Checkbox */}
                                        <button
                                            onClick={() => toggleTask(task._id)}
                                            className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                                task.completed
                                                    ? 'bg-indigo-600 border-indigo-600'
                                                    : 'border-gray-300 hover:border-indigo-400'
                                            }`}
                                        >
                                            {task.completed && (
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </button>

                                        {/* Task Text */}
                                        <span
                                            className={`flex-1 text-lg transition-all ${
                                                task.completed
                                                    ? 'line-through text-gray-400'
                                                    : 'text-gray-800'
                                            }`}
                                        >
                                            {task.title}
                                        </span>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDeleteTask(task._id)}
                                            className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-all"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer Stats */}
                    {tasks.length > 0 && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
                            <span>
                                {tasks.filter(task => !task.completed).length} {tasks.filter(task => !task.completed).length === 1 ? 'task' : 'tasks'} remaining
                            </span>
                            <span className="text-gray-400">
                                Total: {tasks.length}
                            </span>
                        </div>
                    )}
                </div>

                {/* Footer Note */}
                <p className="text-center mt-6 text-indigo-100 text-sm">
                    Press Enter to quickly add a task
                </p>
            </div>
        </div>
    );
}