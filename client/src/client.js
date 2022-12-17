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

// export const addNewStudent = student =>
//     fetch("api/v1/students", {
//             headers: {
//                 "Content-type": "application/json"
//             },
//         method: "POST",
//         body: JSON.stringify(student)
//         }
//     ).then(checkStatus)
//
// export const deleteStudent = studentId =>
//     fetch(`api/v1/students/${studentId}`, {
//         method: 'DELETE'
//     }).then(checkStatus);
