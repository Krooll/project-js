import Product from './components/Products.js';
import { classNames, settings } from './settings.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(settings.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(settings.navLinks.links);

    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id === idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', (e) => {
        const clickedElement = e.currentTarget;
        e.preventDefault();

        /*get page id from href*/
        const id = clickedElement.getAttribute('href').replace('#', '');
        /*run thisApp.activatePage with that id*/
        thisApp.activatePage(id);

        /*change URL hash*/
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    /* add class active to matching pages, remove from non-matching*/
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id === pageId);
    }
    /* add class active to matching link, remove from non-link*/
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') === '#/' + pageId
      );
    }
  },

  initMenu: function() {
    const thisApp = this;

    thisApp.products = thisApp.data.products;

    thisApp.productsContainer = document.querySelector(settings.containerOf.productList);

    thisApp.productList = new Product(thisApp.productsContainer, thisApp.products);
  },

  initData: function() {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
      });
  },

  init: function() {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
  },
};

app.init();