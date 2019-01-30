import API from "../api"
import taskList from "./taskList"

const taskEditForm = {
  createAndAppendForm (articleId, taskObjToEdit) {

    let taskNameField = document.createElement("p")

    let taskNameLabel = document.createElement("label")
    taskNameLabel.textContent = "Plan"
    let taskNameInput = document.createElement("input")
    taskNameInput.value = taskObjToEdit.title

    taskNameField.appendChild(taskNameLabel)
    taskNameField.appendChild(taskNameInput)

    let taskDueDateField = document.createElement("p")

    let taskDueDateLabel = document.createElement("label")
    taskDueDateLabel.textContent = "Due Date"
    let taskDueDateInput = document.createElement("input")
    taskDueDateInput.value = taskObjToEdit.dueDate

    taskDueDateField.appendChild(taskDueDateLabel)
    taskDueDateField.appendChild(taskDueDateInput)
    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"
    updateButton.addEventListener("click", () => {
    const userId = sessionStorage.getItem("userId");
    const currentUserId = JSON.parse(userId);
      let editedTask = {
        title: taskNameInput.value,
        dueDate: taskDueDateInput.value,
        userId: currentUserId,
        complete: false
      }
      API.putExistingTask(taskObjToEdit.id, editedTask)
      .then(response => {
        taskList.listTasks();
      })

      while (taskItemArticle.firstChild) {
        taskItemArticle.removeChild(taskItemArticle.firstChild);
      }
    })

    // We passed in the id of the article so we know exactly where to append the edit form.
    let taskItemArticle = document.querySelector(`#${articleId}`)

    // Because we want to replace what is currently in the article element with the edit form, we clear out all children HTML elements in our targeted element before appending our edit form to it.
    while (taskItemArticle.firstChild) {
      taskItemArticle.removeChild(taskItemArticle.firstChild);
    }
    taskItemArticle.appendChild(taskNameField)
    taskItemArticle.appendChild(taskDueDateField)
    taskItemArticle.appendChild(updateButton)
  }
}
export default taskEditForm
