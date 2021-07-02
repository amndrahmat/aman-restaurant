import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const HomeRestaurant = {
  async render() {
    return `
      <!------------------------------------------------------------------------- feature categories --------------------------------------------------------------------------->
      <div class="categories">
        <div class="small-container">
          <div class="row">
            <div class="col-6">
              <picture>
                <source media="(max-width: 450px)" srcset="./images/hero-image_1-small.webp">
                <img class="cover lazyload" style="max-width: 100%;" data-src="./images/hero-image_1-large.webp" alt='cover'/>
              </picture>
            </div>
            <div class="col-3">
              <picture>
                <img data-src="./images/hero-image_2-small.webp" alt="food-cover-1" class="lazyload" width="100%" height="auto">
              </picture>
            </div>
            <div class="col-3">
              <picture>
                <img data-src="./images/padang-merdeka_6-1-small.webp"alt="food-cover-2" class="lazyload" width="100%" height="auto"/>
              </picture>
            </div>
            <div class="col-3">
              <picture>
                <img data-src="./images/restaurant-food-salat-2-small.webp"alt="food-cover-3" class="lazyload" width="100%" height="auto"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
      <!------------------------------------------------ CONTENT API ------------------------------------------>
      <div class="content">
        <h2 class="title">Events & News</h2>
        <div id="restaurants" class="restaurants">
        </div>
    </div>
    <!------------------------------------------------ BEST SELLERS ------------------------------------------>
          <h2 class="title">Best Sellers</h2>
          <div class="row">
            <div class="col-4">
              <picture>
                <img data-src="./images/bs1-small.webp" alt="food A Margarita Made Especially for Halloween" class="lazyload"/>
              </picture>
              <h3>A Margarita Made for Halloween</h3>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half"></i>
              </div>
              <p>$86.42</p>
            </div>
            <div class="col-4">
              <picture>
                <img data-src="./images/bs2-small.webp" alt="food chicken katsu" class="lazyload"/>
              </picture>
              <h3>chicken katsu</h3>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <p>$141.15</p>
            </div>
            <div class="col-4">
              <picture>
                <img data-src="./images/bs3-small.webp" alt="food beef steak" class="lazyload"/>
              </picture>
              <h3>beef steak</h3>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <p>$48.52</p>
            </div>
            <div class="col-4">
              <picture>
                <img data-src="./images/bs4-small.webp" alt="food Strawberry Soda" class="lazyload"/>
              </picture>
              <h3>Strawberry Soda</h3>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half"></i>
              </div>
              <p>$77.57</p>
            </div>
            <div class="col-4">
              <picture>
                <img data-src="./images/bs5-small.webp" alt="food Spaghetti Carbonara Saus Creamy" class="lazyload"/>
              </picture>
              <h3>Spaghetti Carbonara Saus Creamy</h3>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half"></i>
              </div>
              <p>$91.83</p>
            </div>
              <div class="col-4">
                <picture>
                  <img data-src="./images/bs6-small.webp" alt="food Orange Pineapple Mint Margarita" class="lazyload"/>
                </picture>
                <h3>Orange Pineapple Mint Margarita</h3>
                <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half"></i>
                </div>
                <p>$86.42</p>
              </div>
              <div class="col-4">
                <picture>
                  <img data-src="./images/bs7-small.webp" alt="food berry smoothie" class="lazyload"/>
                </picture>
                <h3>berry smoothie</h3>
                <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half"></i>
                </div>
                <p>$19.53</p>
              </div>
              <div class="col-4">
                <picture>
                  <img data-src="./images/bs8-small.webp" alt="food Tempe Mendoan Banyumas" class="lazyload"/>
                </picture>
                <h3>Tempe Mendoan Banyumas</h3>
                <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>$12.91</p>
              </div>
              <div class="col-6">
                <button class="btn1">EXPLORE MORE</button>
              </div>
          </div> 
    <!------------------------------------------------------------------------- offer --------------------------------------------------------------------------->
    <section class="offer">
     <div class="small-container">
       <div class="row">
         <div class="col-2">
            <picture>
                <img data-src="./images/logo-large.webp" class="offer-img lazyload" alt="logo"/>
            </picture>
         </div>
         <div class="col-2">
           <p>Exclusively World Restaurant</p>
           <h2 class="banner-bawah">GIVING DELICIOUS FOODS</h2>
         </div>
       </div>
     </div>
   </section>
    <!------------------------------------------------------------------------- testimonials --------------------------------------------------------------------------->
      <section class="testimonial">
          <div class="small-container">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-quote-left"></i>
                <p>
                  On the evening, everything went smoothly and professionally. I highly recommend Aman Restaurant and Catering to anyone organising a small or large event.
                </p>
                <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half"></i>
                </div>
                <picture>
                  <img data-src="./images/user-1-small.webp" alt="User-1" class="lazyload"/>
                </picture>
                <h2>Raisa Andriana</h2>
              </div>
              <div class="col-3">
                <i class="fa fa-quote-left"></i>
                <p>
                  I have loved dealing with you guys although I moved stages around and requested additional cocktails and Vodka you still made it all happen in the most amazing way!
                </p>
                <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <picture>
                  <img data-src="./images/user-2-small.webp" alt="User-2" class="lazyload"/>
                </picture>
                <h2>Nicholas Saputra</h2>
              </div>
              <div class="col-3">
                <i class="fa fa-quote-left"></i>
                <p>
                  The food was incredible and your staff were all lovely and did a great job. Lots of our family and friends commented on how lovely they were and how great the service was.
                </p>
                <div class="rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half"></i>
                </div>
                <picture>
                  <img data-src="./images/user-3-small.webp" alt="User-3" class="lazyload"/>
                </picture>
                <h2>Afgan Syahreza</h2>
              </div>
            </div>
          </div>
      </section>
    <!------------------------------------------------------------------------- brands --------------------------------------------------------------------------->
    <section class="brands">
        <div class="container">
          <div class="row">
            <div class="col-1">
              <h3>About Aman Restaurant</h3>
              <p>
                Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving
                their multiple needs. Customers use our platform to search and discover restaurants, read and write customer 
                generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. 
                On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers 
                to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, 
                Hyperpure, which supplies high quality ingredients and kitchen foods to restaurant partners. We also provide our delivery partners with transparent 
                and flexible earning opportunities.
              </p>
              <br />
            </div>
          </div>
          <div class="row">
            <div class="footer-col-4">
              <h3>COUNTRY</h3>
              <picture><img class="col-5 lazyload" data-src="./images/indonesia-small.webp" alt="flag indonesia" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/China-small.webp" alt="flag China" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/singapore-small.webp" alt="flag singapore" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/myanmar-small.webp" alt="flag myanmar" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/laos-small.webp" alt="flag laos" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/laos-small.webp" alt="flag laos" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/Philippines-small.webp" alt="flag Philippines" /></picture>
              <br /><br /><br /><br /><br /><br /><br />
            </div>
    
            <div class="footer-col-4">
              <h3>PAYMENT METHODS</h3>
              <picture><img class="col-5 lazyload" data-src="./images/mastercard-small.webp" alt="mastercard" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/visa-small.webp" alt="visa" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/bri-small.webp" alt="bri" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/bni-small.webp" alt="bni" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/bca-small.webp" alt="bca" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/mandiri-small.webp" alt="mandiri" /></picture>
            </div>
            <div class="footer-col-4">
              <h3>OUR PARTNERS</h3>
              <picture><img class="col-5 lazyload" data-src="./images/gojek-small.webp" alt="gojek" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/grab-small.webp" alt="grab" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/uber-small.webp" alt="uber" /></picture>
              <picture><img class="col-5 lazyload" data-src="./images/bluebird-small.webp" alt="bluebird" /></picture>
              <picture> <img class="col-5 lazyload" data-src="./images/uberjek-small.webp" alt="uberjek" /></picture>
            </div>
          </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantDbSource.HomeRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomeRestaurant;
