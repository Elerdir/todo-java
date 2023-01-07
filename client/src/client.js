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

export const getAllTodos = () =>
    fetch("api/v1/todos")
        .then(checkStatus);

export const addNewTodo = todo =>
    fetch("api/v1/todos", {
            headers: {
                "Content-type": "application/json"
            },
        method: "POST",
        body: JSON.stringify(todo)
        }
    ).then(checkStatus)

// export const deleteStudent = studentId =>
//     fetch(`api/v1/students/${studentId}`, {
//         method: 'DELETE'
//     }).then(checkStatus);
