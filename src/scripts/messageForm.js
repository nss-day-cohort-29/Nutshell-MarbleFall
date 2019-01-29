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
        messageNameLabel.placeholder = " Name of Sender"
        messageNameLabel.setAttribute("for", "messageName");
        let messageNameInput = document.createElement("input");
        messageNameInput.setAttribute("id", "messageName");
        messageNameInput.setAttribute("name", "messageName");
        // Appending said fieldsets and input to DOM
        messageNameField.appendChild(messageNameLabel);
        messageNameField.appendChild(messageNameInput);

        let messageInputField = document.createElement("fieldset");

        let messageInputLabel = document.createElement("label");
        messageInputLabel.placeholder = "Type Message "
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



    }
}

export default messageForm