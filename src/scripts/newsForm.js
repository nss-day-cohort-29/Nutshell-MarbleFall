import API from "./api"
import allNews from "./newsList"

const newsDOM = {
  newsFormCreator() {
    const newsForm = document.querySelector(".output__newsform")
    const newsFormTitle = document.createElement("h3")
    newsFormTitle.textContent = "News"
    newsForm.appendChild(newsFormTitle)

    // NEWS FIELD
    const newsField = document.createElement("fieldset");
    const titleInput = document.createElement("input");
    const URLInput = document.createElement("input");
    const summaryInput = document.createElement("input");

    titleInput.setAttribute("id", "title_input");
    titleInput.setAttribute("placeholder", "Title");

    URLInput.setAttribute("id", "URL_Input");
    URLInput.setAttribute("placeholder", "URL");

    summaryInput.setAttribute("id", "summary_Input");
    summaryInput.setAttribute("placeholder", "Summary");

    newsForm.appendChild(newsField);
    newsField.appendChild(titleInput)
    newsField.appendChild(URLInput)
    newsField.appendChild(summaryInput)

    const addButton = document.createElement("button")
    addButton.textContent = "Add Article"
    newsField.appendChild(addButton)
    addButton.addEventListener("click", newsDOM.eventHandler);
  },
  eventHandler() {
    let titleInput = document.querySelector("#title_input").value;
    let URLInput = document.querySelector("#URL_Input").value;
    let summaryInput = document.querySelector("#summary_Input").value;

    let newArticle = {
      title: titleInput,
      url: URLInput,
      summary: summaryInput
    };
    API.addArticle(newArticle)
      .then(response => {
        allNews.getAndAppendNews();
      });
  },
};
export default newsDOM

