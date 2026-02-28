import axios from 'axios';
import { getTaskRequest, getTaskSuccess, getTaskFailure,
    deleteTaskRequest,
    deleteTaskSuccess,
    deleteTaskFailure,
    createTaskRequest,
    createTaskSuccess,
    createTaskFailure

 } from '../store/modules/task';
export const getAllTasks = () => async (dispatch) => {
    const path = import.meta.env.BE_API || 'http://localhost:5001';

    dispatch(getTaskRequest());
    try {
        const response = await axios.get(`${path}/api/tasks`);
        dispatch(getTaskSuccess(response.data));
    } catch (error) {
        console.error('Error fetching tasks:', error);
        dispatch(getTaskFailure(error.message));
        throw error;
    }
};

export const createTask = (task) => async (dispatch) => {
    const path = import.meta.env.BE_API || 'http://localhost:5001';
    dispatch(createTaskRequest());
    try {
        const response = await axios.post(`${path}/api/tasks`, task);
        dispatch(createTaskSuccess(response.data));
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        dispatch(createTaskFailure(error.message));
        throw error;
    }
};

export const deleteTask = (id) => async (dispatch) => {
    const path = import.meta.env.BE_API || 'http://localhost:5001';
    dispatch(deleteTaskRequest());
    try {
        await axios.delete(`${path}/api/tasks/${id}`);
        dispatch(deleteTaskSuccess(id));
    } catch (error) {
        console.error('Error deleting task:', error);
        dispatch(deleteTaskFailure(error.message));
        throw error;
    }
};