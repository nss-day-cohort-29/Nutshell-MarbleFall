import eventsCollection from "./eventsCollection";

const eventsForm = {
    getAndAppendEvents() {

    let eventsHeader = document.createElement("h2")
    eventsHeader.textContent = "Upcoming Events"

    let eventsNameField = document.createElement("fieldset")

    let eventsNameLabel = document.createElement("label")
    eventsNameLabel.textContent = "Name"
    eventsNameLabel.setAttribute("for", "events_name")
    let eventsNameInput = document.createElement("input")
    eventsNameInput.setAttribute("id", "events_name")
    eventsNameInput.setAttribute("name", "events_name")

    eventsNameField.appendChild(eventsNameLabel)
    eventsNameField.appendChild(eventsNameInput)

    let eventsDateField = document.createElement("fieldset")

    let eventsDateLabel = document.createElement("label")
    eventsDateLabel.textContent = "Date"
    eventsDateLabel.setAttribute("for", "events_date")
    let eventsDateInput = document.createElement("input")
    eventsDateInput.setAttribute("id", "events_date")
    eventsDateInput.setAttribute("name", "events_date")

    eventsDateField.appendChild(eventsDateLabel)
    eventsDateField.appendChild(eventsDateInput)

    let eventsLocationField = document.createElement("fieldset")

    let eventsLocationLabel = document.createElement("label")
    eventsLocationLabel.textContent = "Location"
    eventsLocationLabel.setAttribute("for", "events_location")
    let eventsLocationInput = document.createElement("input")
    eventsLocationInput.setAttribute("id", "events_location")
    eventsLocationInput.setAttribute("name", "events_location")

    eventsLocationField.appendChild(eventsLocationLabel)
    eventsLocationField.appendChild(eventsLocationInput)

    let submitButton = document.createElement("button")
    submitButton.textContent = "Add Event"
    submitButton.setAttribute("class", "event__save")

    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewEvent)

    let eventsFormFragment = document.createDocumentFragment()
    eventsFormFragment.appendChild(eventsHeader)
    eventsFormFragment.appendChild(eventsNameField)
    eventsFormFragment.appendChild(eventsDateField)
    eventsFormFragment.appendChild(eventsLocationField)
    eventsFormFragment.appendChild(submitButton)

    let eventsArticle = document.querySelector(".output__eventsform")
    eventsArticle.appendChild(eventsFormFragment)
    },

    handleAddNewEvent (event) {
        console.log("hello")
    let inputEventName = document.querySelector("#events_name").value
    let inputEventDate = document.querySelector("#events_date").value
    let inputEventLocation = document.querySelector("#events_location").value

    let newEvent = {
        name: inputEventName,
        date: inputEventDate,
        location: inputEventLocation
    }
    console.log(newEvent)

    eventsCollection.postNewEvent(newEvent)
    .then(response => {
        console.log("new events!")
        console.log(response)
    })
    }
}

export default eventsForm;