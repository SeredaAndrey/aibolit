import * as bootstrap from 'bootstrap';
// import PageService from './fetch';
// import heroCard from '../templates/header-element.hbs';

// const heroElement = [
//   {
//     id: 1,
//     title: 'АйГав - цілодобова ветклініка',
//     srcImage: './images/hero/image1.jpg',
//     active: 'active',
//   },
//   {
//     id: 2,
//     title: 'Комфортні обладнані стаціонари',
//     srcImage: './images/hero/image2.jpg',
//     active: '',
//   },
//   {
//     id: 3,
//     title: 'Сучасне європейске обладнання',
//     srcImage: './images/hero/image3.jpg',
//     active: '',
//   },
//   {
//     id: 4,
//     title: 'Власна сучасна лабораторія',
//     srcImage: './images/hero/image4.jpg',
//     active: '',
//   },
//   {
//     id: 5,
//     title: 'Аптека та зоокрамниця за доступними цінами',
//     srcImage: './images/hero/image5.jpg',
//     active: '',
//   },
//   {
//     id: 6,
//     title: 'Грумінг салон та косметичні товари',
//     srcImage: './images/hero/image6.jpg',
//     active: '',
//   },
// ];

var myCarousel = document.querySelector('#carouselElementHero');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2500,
  wrap: true,
  touch: true,
});
console.log(bootstrap.Carousel.getInstance(myCarousel));

// const insertHero = document.querySelector('#hero-insert-container');

// при получении данных в ДЖЕСОНе с сервера с шаблонизатором
// const pageHero = new PageService('heroElement');

// pageHero.fetchArticles().then(insertMarkup);

// function insertMarkup(articles) {
// if (articles.status === 404 || articles.message === 'Page Not Found') {
//   console.log('Page Not Found');
//   return;
// }
// console.log(articles.data);
// insertHero.insertAdjacentHTML('beforeend', heroCard(articles.data));
// }

// при работе автономно с шаблонизатором
// insertHero.insertAdjacentHTML('beforeend', heroCard(heroElement));

// при работе автономно без шаблонизатора

// function createMarkup(data) {
//   console.log(data);
//   let markup = '';
//   for (const element of data) {
//     markup += `
//   <div class='carousel-item ${element.active}'>
//     <div class='hero__container'>
//       <h1 class='hero__title'>${element.title}</h1>
//       <img
//         class='hero__picture'
//         src=${element.srcImage}
//         height='915'
//         alt='aibolit'
//       />
//       <button class='hero__button' type='button'>Записатися</button>
//       <ul class='hero__social-link social-link__list'>
//         <li class='social-link__item'>
//           <a class='social-link__link facebook-ico' href='#'>

//           </a>
//         </li>
//         <li class='social-link__item'>
//           <a class='social-link__link instagram-ico' href='#'>

//           </a>
//         </li>
//         <li class='social-link__item'>
//           <a class='social-link__link youtube-ico' href='#'>

//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>`;
//   }
//   console.log(markup);
//   return markup;
// }

// insertHero.insertAdjacentHTML('beforeend', createMarkup(heroElement));
