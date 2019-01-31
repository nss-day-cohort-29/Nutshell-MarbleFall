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
    getAllArticles() {
        return fetch("http://localhost:8088/news")
            .then(res => res.json())
    },
    addArticle(articletoSave) {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articletoSave)
        })
    },
}
export default API