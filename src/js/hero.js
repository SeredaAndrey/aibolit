import * as bootstrap from 'bootstrap';
import PageService from './fetch';
import heroCard from '../templates/header-element.hbs';

var myCarousel = document.querySelector('#carouselElementHero');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2500,
  wrap: true,
  touch: true,
});

const insertHero = document.querySelector('#hero-insert-container');
const pageHero = new PageService('heroElement');

pageHero.fetchArticles().then(insertMarkup);

function insertMarkup(articles) {
  if (articles.status === 404 || articles.message === 'Page Not Found') {
    console.log('Page Not Found');
    return;
  }
  // console.log(articles.data);
  insertHero.insertAdjacentHTML('beforeend', heroCard(articles.data));
}
