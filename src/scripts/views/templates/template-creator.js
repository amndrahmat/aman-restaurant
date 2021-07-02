import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
<h1 class="restaurant__title">${restaurant.name}</h1>
<img class="restaurant__poster" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />
<div class="restaurant__info">
  <h2>Information</h2>
      <h3>Address</h3>
      <p class="fa fa-map-pin" aria-hidden="true"> ${restaurant.address}</p>
      <h3>City</h3>
      <p class="fa fa-building" aria-hidden="true"> ${restaurant.city}</p>
      <h3>Rating</h3>
      <p class="fa fa-star" aria-hidden="true"> ${restaurant.rating}</p>
      <h3>Categories</h3>
      <p class="fa fa-car" aria-hidden="true"> ${restaurant.categories.map((categorie) => `${categorie.name}, `).join('')}</p>
</div>

<div class="restaurant__overview">
    <h2 class="fa fa-adn" aria-hidden="true"> Foods: </h2>
    <p>${restaurant.menus.foods.map((food) => `${food.name}, `).join('')}</p>
    <h2 class="fa fa-glass" aria-hidden="true"> Beverages:</h2>
    <p>${restaurant.menus.drinks.map((drink) => `${drink.name}, `).join('')}</p><br>
    <h2>Description</h2>
    <p>${restaurant.description}</p><br>
    <h2 class="place">Customer Reviews</h2>
    <p>${restaurant.customerReviews.map((customerReview) => `
    ⭐️ ${customerReview.date} by ${customerReview.name}<br>
          ${customerReview.review}<br><br> `).join('')}</p>
    <form>
      <label for="myText" style="font-size: 20px">Input Review</label>
      <input type="text" class="reviewkita" id="myText">
      <button class="btn" onclick="myreview()">Send Review</button>
    </form>
    <p id="demo"></p>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <a class="view-detail" href="${`/#/detail/${restaurant.id}`}"> 
          <img class="restaurant-item__header__poster lazyload loading" id="image-api" alt="${restaurant.name || '-'}"
          data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous"></a>  
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <a class="view-detail" href="${`/#/detail/${restaurant.id}`}">
          <h2 class="restaurant__title">${restaurant.name || '-'}</h2>
        </a>    
        <p class="fa fa-building" aria-hidden="true"> ${restaurant.city || '-'}</p>
        <p>${restaurant.description}</p>
    </div>
  </div> 
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnLikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnLikeRestaurantButtonTemplate,
};
