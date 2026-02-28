import { createSlice } from '@reduxjs/toolkit';
import { createTask } from '../../../api/tasks';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState : {
        tasks: [],
        loading: false,
        error: null,
        isDelete : false,
        isCreate : false,
    },
    reducers: {
        getTaskRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getTaskSuccess: (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        },
        getTaskFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteTaskRequest: (state) => {
            state.isDelete = true;
            state.error = null;
        },
        deleteTaskSuccess: (state, action) => {
            state.isDelete = false;
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        deleteTaskFailure: (state, action) => {
            state.isDelete = false;
            state.error = action.payload;
        },
        createTaskRequest: (state) => {
            state.isCreate = true;
            state.error = null;
        },
        createTaskSuccess: (state, action) => {
            state.isCreate = false;
            state.tasks.push(action.payload);
        },
        createTaskFailure: (state, action) => {
            state.isCreate = false;
            state.error = action.payload;
        }
            
    },
});

export const { 
    getTaskRequest, 
    getTaskSuccess, 
    getTaskFailure,
    deleteTaskRequest,
    deleteTaskSuccess,
    deleteTaskFailure,
    createTaskRequest,
    createTaskSuccess,
    createTaskFailure
} = tasksSlice.actions;

export default tasksSlice.reducer;