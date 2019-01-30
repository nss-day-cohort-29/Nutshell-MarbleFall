import messageCollection from "./messageCollection"
import messageForm from "./messageForm"
import message from "./messages"

const messageList = {
    addMessageToDom() {
        messageCollection.getAllMessages()
        .then(allMessages => {

            let messageDocFragment = document.createDocumentFragment()

            allMessages.forEach(chat => {

                let messageHtml = message.messageBuilder(chat);
                messageDocFragment.appendChild(messageHtml);
            })

            let displayArticle = document.querySelector(".output__messages")
            while (displayArticle.firstChild) {
                displayArticle.removeChild(displayArticle.firstChild);
            }
            displayArticle.appendChild(messageDocFragment);

        })
    }
}

export default messageList