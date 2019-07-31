class EventBrite {
  // Constructor when instantiate
  constructor() {
    this.auth_token = 'DOWN5NX5GJVHBFIT2ISS';
    this.orderby = 'date';
  }

  // get events form API
  async queryAPI(eventName, category) {
    const eventsResponse = await fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${
        this.orderby
      }&categories=${category}&token=${this.auth_token}`
    );
    // wait for response and return as JSON
    const events = await eventsResponse.json();
    return { events };
  }

  // Get categories from API
  async getCategoriesAPI() {
    // Query the API
    const categoriesResponse = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`
    );

    // Hold for the response and then return as json
    const categories = await categoriesResponse.json();

    return {
      categories
    };
  }
}
