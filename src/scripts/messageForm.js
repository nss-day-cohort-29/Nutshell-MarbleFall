import messageCollection from "./messageCollection"
import messageList from "./messageList"

const messageForm = {

    clearInputForm() {
        document.querySelector("#messageName").value = ""
        document.querySelector("#messageContent").value = ""
    },

    createAndAppendForm() {
        // Creating HTML fieldsets and input
        let formHeader = document.createElement("h3");
        formHeader.textContent = " Messageboard"
        formHeader.setAttribute("id", "formHeaderId");

        let messageNameField = document.createElement("fieldset");

        let messageNameLabel = document.createElement("label");
        messageNameLabel.textContent = "Name  "
        messageNameLabel.setAttribute("for", "messageName");
        let messageNameInput = document.createElement("input");
        messageNameInput.setAttribute("id", "messageName");
        messageNameInput.setAttribute("name", "messageName");
        // Appending said fieldsets and input to DOM
        messageNameField.appendChild(messageNameLabel);
        messageNameField.appendChild(messageNameInput);

        let messageInputField = document.createElement("fieldset");

        let messageInputLabel = document.createElement("label");
        messageInputLabel.textContent = "Type Message   "
        messageInputLabel.setAttribute("for", "messageContent");
        let messageInputBox = document.createElement("textarea");
        messageInputBox.setAttribute("id", "messageContent");
        messageInputBox.setAttribute("name", "messageContent");

        messageInputField.appendChild(messageInputLabel);
        messageInputField.appendChild(messageInputBox);
        // Create save button
        let submitButton = document.createElement("button");
        submitButton.textContent = "Send"
        submitButton.setAttribute("class", "messageSend");

        submitButton.addEventListener("click", this.handleAddNewMessage);
        console.log("click")

        let messageFormFragment = document.createDocumentFragment()
        messageFormFragment.appendChild(formHeader);
        messageFormFragment.appendChild(messageNameField);
        messageFormFragment.appendChild(messageInputField);
        messageFormFragment.appendChild(submitButton);

        let formArticle = document.querySelector(".form__messages");
        formArticle.appendChild(messageFormFragment);

    },
    getTimeStamp() {
        let now = new Date();
        return((now.getMonth() + 1) + "/" +
            (now.getDate()) + "/" +
            now.getFullYear() + " " +
            now.getHours() + ":" +
            ((now.getMinutes() < 10)
              ? ("0" + now.getMinutes())
              : (now.getMinutes())) + ":" +
            ((now.getSeconds() < 10)
              ? ("0" + now.getSeconds())
              : (now.getSeconds())));
    },

    handleAddNewMessage() {

        let inputMessageName = document.querySelector("#messageName");
        let inputMessageContent = document.querySelector("#messageContent");
        let inputMessageDate = messageForm.getTimeStamp()

        let newMessage = {
            senderName: inputMessageName.value,
            message: inputMessageContent.value,
            date: inputMessageDate
        }

        messageCollection.postNewMessage(newMessage)
            .then(response => {
                messageList.addMessageToDom()

                messageForm.clearInputForm()
            })
    }
}

export default messageForm