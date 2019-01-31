import API from "./api"
import articleBuilder from "./newsDOM"

const allNews = {
  getAndAppendNews() {

    API.getAllArticles()
      .then(allArticles => {
        let displayContainer = document.querySelector(".output__news");
        displayContainer.textContent = "";



        allArticles.forEach(article => {
          articleBuilder.articleFormat(article)
        });
      })
  }
}







export default allNews
