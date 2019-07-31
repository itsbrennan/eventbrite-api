// Instanciate both class

const eventbrite = new EventBrite();
const ui = new UI();

// listener for submit button

document.getElementById('submitBtn').addEventListener('click', e => {
  e.preventDefault();
  // get values from form
  const eventName = document.getElementById('event-name').value;
  const category = document.getElementById('category').value;

  if (eventName !== '') {
    //query api
    eventbrite
      .queryAPI(eventName, category)
      .then(events => {
        const eventList = events.events.events;
        if (eventList.length > 0) {
          // print events
          ui.displayEvents(eventList);
        } else {
          // print message
          ui.printMessage(
            'No results found',
            'alert alert-danger text-center mt-4'
          );
        }
      })
      .catch(error => console.log(error));
  } else {
    // print message
    ui.printMessage(
      'Add and event or city',
      'alert alert-danger text-center mt-4'
    );
  }
});
