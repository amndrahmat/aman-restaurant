import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async HomeRestaurants() {
    const response = await fetch(API_ENDPOINT.HOME_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async EventsRestaurants() {
    const response = await fetch(API_ENDPOINT.EVENTS_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantDbSource;
