import API from "./api"

const allNews = {
  getAndAppendNews() {

    API.getNews()
      .then(function (newsArticles) {
        let displayContainer = document.querySelector(".output__news");
        displayContainer.textContent = "";
        // let DocFrag = document.createDocumentFragment();

        newsArticles.forEach(function (eachArticle) {
          let showArticle = makeDOM(eachArticle, String(eachArticle.id));
          displayContainer.appendChild(showArticle);
        })
      })
  }
}
