import API from "./api"

const allNews = {
  getAndAppendNews() {

    API.getNews()
      .then(function (newsArticles) {
        let displayContainer = document.querySelector(".output__news");
        displayContainer.textContent = "";

        newsArticles.forEach(function (eachArticle) {
          let showArticle = newsDom(eachArticle, String(eachArticle.id));
          displayContainer.appendChild(showArticle);
        })
      })
  }
}

export default allNews
