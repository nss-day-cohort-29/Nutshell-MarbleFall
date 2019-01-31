const articleBuilder = {
  articleFormat(news) {
    let newsCard = document.createElement("div")
    newsCard.setAttribute("id", `news--${news.id}`)
    let cardTitle = document.createElement("h3")
    cardTitle.textContent = news.title
    let cardURL = document.createElement("p")
    cardURL.textContent = news.url
    let cardSummary = document.createElement("p")
    cardSummary.textContent = news.summary
    let removeButton = document.createElement("button")
    removeButton.textContent = "REMOVE"


    let outputNewsArticle = document.querySelector(".output__news")
    newsCard.appendChild(cardTitle)
    newsCard.appendChild(cardURL)
    newsCard.appendChild(cardSummary)
    newsCard.appendChild(removeButton)
    outputNewsArticle.appendChild(newsCard)

    return newsCard
  }
}

export default articleBuilder

// TIMESTAMP
// add to object in the database and create the html tag for it




// ADD DELETE BUTTON
// make HTML for button, make the "click" event and write the API call

// SORT ENTRIES
//by timestamp