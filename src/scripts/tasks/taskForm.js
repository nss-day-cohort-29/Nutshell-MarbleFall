import API from "../api"
import taskList from "./taskList"
const taskFormTaskInput = document.createElement("input");
const taskFormDueDateInput = document.createElement("input");
const taskForm = {
    taskFormBuilder() {
        const taskArticle = document.querySelector(".output__tasks");
        const taskFormSection = document.createElement("section");
        taskArticle.appendChild(taskFormSection);
        const taskFormHeader = document.createElement("h3");
        taskFormSection.appendChild(taskFormHeader);
        taskFormHeader.textContent = "Plan";
        taskFormSection.appendChild(taskFormTaskInput);
        taskFormTaskInput.placeholder = "Plan";
        taskFormSection.appendChild(taskFormDueDateInput);
        taskFormDueDateInput.placeholder = "Due Date";
        const addTaskButton = document.createElement("button");
        taskFormSection.appendChild(addTaskButton);
        addTaskButton.textContent = "Add Task";
        addTaskButton.addEventListener("click", this.addTaskToJSON);
    },
    addTaskToJSON() {
        console.log("Button Works");
        const taskTitle = taskFormTaskInput.value;
        const taskDueDate = taskFormDueDateInput.value;
        console.log(`${taskTitle} ${taskDueDate}`);

        const currentUserId = sessionStorage.getItem("userId");
        const userId = JSON.parse(currentUserId);
        let newTask = {
            title: taskTitle,
            dueDate: taskDueDate,
            complete: false,
            userId: userId
        }

        console.log(newTask);
        document.querySelector(".output__tasksedit").innerHTML = " "
        API.postNewData("tasks", newTask)

            .then(response => {
                taskList.listTasks();
            })
    }
}

export default taskForm