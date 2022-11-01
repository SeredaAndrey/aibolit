import PageService from './fetch';
import serviceCard from '../templates/services-element.hbs';

const insertService = document.querySelector('#services-insert-container');
const pageService = new PageService('servicesElement');

pageService.fetchArticles().then(insertMarkup);

function insertMarkup(articles) {
  if (articles.status === 404 || articles.message === 'Page Not Found') {
    console.log('Page Not Found');
    return;
  }
  //   console.log(articles.data);
  insertService.insertAdjacentHTML('beforeend', serviceCard(articles.data));
}
