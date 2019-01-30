const API = {

    getData(resource) {
        return fetch(`http://localhost:8088/${resource}`)
            .then(response => response.json())
    },
    getPayloadData(resource, payload) {
        return fetch(`http://localhost:8088/${resource}/${payload}`)
            .then(response => response.json())
    },
    postNewData(resource, payload) {
        return fetch(`http://localhost:8088/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
    },
    getTask(taskId) {
        return fetch(`http://localhost:8088/tasks/${taskId}`)
            .then(response => response.json())
    },

    putExistingTask(taskId, taskToEdit) {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToEdit)
        })
    },

    putExistingTaskcomplete(taskcomplete, taskToEdit) {
        return fetch(`http://localhost:8088/tasks/${taskcomplete}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskcomplete)
        })
    },
    deleteTask(taskId) {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },

    // In order to delete an item from the JSON Server API, all we need is the id of the item in order to target it, which is the only argument this method has.
    deleteData(resource) {
        return fetch(`http://localhost:8088/messages/${resource}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    getNews() {
        return fetch("http://localhost:8088/news")
            .then(res => res.json())
    },
}



//     getAllUsers() {
//         return fetch("http://localhost:8088/users")
//         .then(response => response.json())
//       },

//     getAllMessages() {
//         return fetch("http://localhost:8088/messages")
//         .then(response => response.json)
//       },

//     getAllNewsArticles() {
//         return fetch("http://localhost:8088/newsArticles")
//         .then(response => response.json())
//       },

//     getAllTasks() {
//         return fetch("http://localhost:8088/tasks")
//         .then(response => response.json())
//       },

//     getAllEvents() {
//         return fetch("http://localhost:8088/events")
//         .then(response => response.json())
//       },

//     getAllFriends() {
//         return fetch("http://localhost:8088/friends")
//         .then(response => response.json())
//       },


//     postNewUser(newUserToAdd) {
//     fetch("http://localhost:8088/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newUserToAdd)
//     })
//     },

//     postNewMessage(newMessageToAdd) {
//         fetch("http://localhost:8088/messages", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newMessageToAdd)
//     })
//     },

//     postNewNewsArticle(newNewsArticleToAdd) {
//     fetch("http://localhost:8088/newsArticles", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newNewsArticleToAdd)
//     })
//     },

//     postNewTask(newTaskToAdd) {
//         fetch("http://localhost:8088/tasks", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newTaskToAdd)
//     })
//     },


// }

export default API