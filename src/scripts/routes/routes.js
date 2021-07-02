import HomeRestaurant from '../views/pages/home-restaurant';
import EventsRestaurant from '../views/pages/events-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomeRestaurant, // default page
  '/home': HomeRestaurant,
  '/events': EventsRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
