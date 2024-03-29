import axios from 'axios';

const baseURL = 'https://backendnxtchallenge.herokuapp.com';

const service = axios.create({
    baseURL,
    withCredentials: true
});

export const getAllTasks = async(token) => {
    return service.get(`${baseURL}/getAllTaskByUser`, { headers: { token } });
}

export const createTask = async(body, token) => {
    return service.post(`${baseURL}/newTask`, body, { headers: { token } });
}

export const deleteTask = async(taskID, token) => {
    return await service.delete(`${baseURL}/deleteTask/${taskID}`, { headers: { token } });
}

export const taskToComplete = async(taskID, token) => {
    return await service.post(`${baseURL}/completedTask/${taskID}`, { headers: { token } });
}

export const taskAborted = async(taskID, token) => {
    return await service.post(`${baseURL}/abortedTask/${taskID}`, { headers: { token } });
}