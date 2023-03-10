import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

const baseURL = "http://localhost:8080/";

export const getAllTodos = () =>
    fetch(baseURL + "api/v1/todos", {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then(checkStatus);

export const addNewTodo = async todo =>
    await fetch(baseURL + "api/v1/todos", {
            headers: {"Content-type": "application/json"},
        method: "POST",
        body: JSON.stringify(todo)
        }
    ).then(checkStatus)

export const deleteTodo = todoId =>
    fetch(baseURL +`api/v1/todos/${todoId}`, {
        method: 'DELETE'
    }).then(checkStatus);

export const editTodo = todo =>
    fetch(baseURL + `api/v1/todos/${todo.id}`, {
        method: 'PATCH',
        body: JSON.stringify(todo)
    }).then(checkStatus);

// todo: otestovat, rozchodit
export const getListOfAppUsers = token =>
    fetch(baseURL + "api/v1/users/list-of-app-users", {
        headers: {"Content-Type": "application/json"},
        method: "GET",
        body: JSON.stringify(token)
    }).then(checkStatus);
