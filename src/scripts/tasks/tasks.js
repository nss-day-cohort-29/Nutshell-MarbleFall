import API from "../api"
import taskEditForm from "./taskEditForm"
import taskList from "./taskList";
const tasks = {
  taskBuilder(taskObj, taskId, taskToEdit) {
    const taskArticle = document.querySelector(".output__tasksedit")
    const taskName = document.createElement("h4");
    const taskDueDate = document.createElement("p");
    let taskCheckBox = document.createElement("input");
    taskCheckBox.className = "checkbox1"
    taskCheckBox.type = "checkbox";
    taskCheckBox.checked = taskObj.complete
      taskCheckBox.addEventListener("click", () => {
        taskObj.complete = !taskObj.complete
        API.putExistingTaskcomplete(taskObj.id, taskObj)
          .then(response => response.json)
      })
      const taskOutputSection = document.createElement("article");
      taskOutputSection.setAttribute("id", `task--${taskObj.id}`)
      taskOutputSection.setAttribute("class", "edit")
      taskArticle.appendChild(taskOutputSection);

      taskOutputSection.appendChild(taskName);
      taskOutputSection.appendChild(taskDueDate);
      taskOutputSection.appendChild(taskCheckBox);

      taskDueDate.textContent = taskObj.dueDate;
      taskName.textContent = taskObj.title;

      const taskEditButton = document.createElement("button");
      taskOutputSection.appendChild(taskEditButton);
      taskEditButton.textContent = "Edit";
      taskEditButton.addEventListener("click", () => {
        let articleId = event.target.parentNode.id;
        let taskId = articleId.split("--")[1];
        API.getTask(taskId)
          .then(response => {
            taskEditForm.createAndAppendForm(articleId, response)
          })
      })
      const taskDeleteButton = document.createElement("button");
      taskOutputSection.appendChild(taskDeleteButton);
      taskDeleteButton.textContent = "Delete";
      taskDeleteButton.addEventListener("click", () => {
        document.querySelector(".output__tasksedit").innerHTML = " "
        let taskId = event.target.parentNode.id.split("--")[1]
        API.deleteTask(taskId)
          .then(response => {
            taskList.listTasks();
          })
      })
    }
  }
export default tasks

