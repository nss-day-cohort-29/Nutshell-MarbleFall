import eventsCollection from "./eventsCollection";
import eventsDOM from "./events";

const eventsList = {
  eventify() {
    eventsCollection.getAllEvents("events").then(allEvents => {
      let eventsDocFragment = document.createDocumentFragment();

      allEvents.forEach(eventItem => {
        let eventHtml = eventsDOM.eventsBuilder(eventItem);
        eventsDocFragment.appendChild(eventHtml);
        // eventsDOM.eventsCreateDOM();
      });

      let eventsOutputArticle = document.querySelector(".output__events");

      while (eventsOutputArticle.firstChild) {
        eventsOutputArticle.removeChild(eventsOutputArticle.firstChild);
      }
      eventsOutputArticle.appendChild(eventsDocFragment);

    //   eventsForm.getAndAppendEvents();
    });
  }
};

export default eventsList;
