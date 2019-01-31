import API from "./api"

const allNews = {
  getAndAppendNews() {

    API.getAllArticles()
      .then(function (newsArticles) {
        let displayContainer = document.querySelector(".output__news");
        displayContainer.textContent = "";

        array.forEach(element => {

        });
        // newsArticles.forEach(function (eachArticle) {
        //   let showArticle = newsDom(eachArticle, String(eachArticle.id));
        //   displayContainer.appendChild(showArticle);
        // })
      })
  }
}







export default allNews
