import taskForm from "./tasks/taskForm"
import taskList from "./tasks/taskList"
import login from "./login"
import registrationForm from "./register"
import logout from "./logout"
import newsDOM from "./newsDOM"

if (sessionStorage.userId === undefined) {
  login.createAndAppendLoginInput();
  registrationForm.createAndAppendRegistrationForm();
  console.log(sessionStorage.userId)
}
if (sessionStorage.userId >= 1) {
  logout.createAndAppendLogout();
  console.log(sessionStorage.userId)
  taskForm.taskFormBuilder();
  taskList.listTasks();
  newsDOM.newsFormCreator();
  let currentUsername = sessionStorage.getItem("userName")
  let userheader = document.querySelector(".header2")
  userheader.innerHTML = "Welcome " + currentUsername

}


