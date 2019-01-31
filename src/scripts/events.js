const eventsDOM = {
    eventsBuilder(eventsItem) {
        let eventsContainer = document.createElement("div")
        eventsContainer.setAttribute("id", `Events--${eventsItem.id}`)
        let eventNames = document.createElement("h3")
        eventNames.textContent = eventsItem.name
        let eventDates = document.createElement("p")
        eventDates.textContent = eventsItem.date
        let eventLocations = document.createElement("p")
        eventLocations.textContent = eventsItem.location

        let outputEventsArticle = document.querySelector(".output__events")
        eventsContainer.appendChild(eventNames)
        eventsContainer.appendChild(eventDates)
        eventsContainer.appendChild(eventLocations)
        outputEventsArticle.appendChild(eventsContainer)

return eventsContainer
    }
}

export default eventsDOM