import messageCollection from "./messageCollection"
import messageForm from "./messageForm"
import messageList from "./messageList"

const messageEditForm = {

    createAndAppendForm(messageObjToEdit) {

        let messageNameField = document.createElement("p");

        let messageNameLabel = document.createElement("label");
        messageNameLabel.textContent = "Sender  "
        let messageNameInput = document.createElement("input");
        messageNameInput.value = messageObjToEdit.senderName

        messageNameField.appendChild(messageNameLabel);
        messageNameField.appendChild(messageNameInput);

        let messageInputField = document.createElement("p");

        let messageInputLabel = document.createElement("label");
        messageInputLabel.textContent = "Edit Message  "
        let messageContentInput = document.createElement("textarea");
        messageContentInput.value = messageObjToEdit.message

        messageInputField.appendChild(messageInputLabel)
        messageInputField.appendChild(messageContentInput)

        let horizontalRule  = document.createElement("hr");

        let updateButton = document.createElement("button")
        updateButton.textContent = "Update"

        updateButton.addEventListener("click", () => {
            let editedMessage = {
              senderName: messageNameInput.value,
              message: messageContentInput.value,
              date: messageForm.getTimeStamp()
            }

            messageCollection.putExistingMessage(messageObjToEdit.id, editedMessage)
            .then(response => {
              messageList.addMessageToDom()
            })
        })

        let messageItemArticle = document.querySelector(".form__messages")

        while (messageItemArticle.firstChild) {
            messageItemArticle.removeChild(messageItemArticle.firstChild);
        }

        messageItemArticle.appendChild(messageNameField);
        messageItemArticle.appendChild(messageInputField);
        messageItemArticle.appendChild(updateButton);
        messageItemArticle.appendChild(horizontalRule);
    }
}

export default messageEditForm