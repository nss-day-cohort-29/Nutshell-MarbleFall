const eventsCollection = {

    getAllEvents() {
        return fetch("http://localhost:8088/Events")
        .then(response => response.json())
    },

    postNewEvent(newEventToSave) {

        return fetch("http://localhost:8088/Events"), {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newEventToSave)
        }
    }
}


export default eventsCollection;