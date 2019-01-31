import messageCollection from "./messageCollection"
import messageList from "./messageList"
import messageEditForm from "./messageEditForm"

const message = {

    messageBuilder(messageObject) {
    let messageArticle = document.createElement("article");

    messageArticle.setAttribute("id", `message--${messageObject.id}`)
    messageArticle.setAttribute("class", "messageArticle");

    let messageName = document.createElement("h3");
    messageName.textContent = messageObject.senderName

    let messageContent = document.createElement("section");
    messageContent.textContent = messageObject.message

    let date = document.createElement("section");
    date.textContent = messageObject.date

    let editMessageButton = document.createElement("button");
    editMessageButton.textContent = "Edit Message"
    editMessageButton.addEventListener("click", () => {
        let articleId = event.target.parentNode.id
        console.log(articleId)
        let messageId = articleId.split("--")[1]
        messageCollection.getMessage(messageId)
        .then(response => {
            console.log(response)
            messageEditForm.createAndAppendForm(response);
        })
    })

    let deleteMessageButton = document.createElement("button");
    deleteMessageButton.textContent = "Delete Button"
    deleteMessageButton.addEventListener("click", () => {
        let messageId = event.target.parentNode.id.split("--")[1]
        messageCollection.deleteMessage(messageId)
        .then(response => {
            messageList.addMessageToDom()
        })
    })

    let horizontalRule = document.createElement("hr");

    messageArticle.appendChild(messageName);
    messageArticle.appendChild(messageContent);
    messageArticle.appendChild(date);
    messageArticle.appendChild(editMessageButton);
    messageArticle.appendChild(deleteMessageButton);
    messageArticle.appendChild(horizontalRule);

    return messageArticle

    }
}

export default message