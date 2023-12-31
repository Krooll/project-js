export const settings = {
  templateOf: {
    home: '#template-home',
    products: '#template-products',
    contact: '#template-contact',
  },
  containerOf: {
    home: '#home-list',
    products: '#products-lists',
    contact: '#contact-list',
    pages: '#pages',
    hiddenProducts: '#hidden-products',
    productList: '#products-list',
  },

  productDataContainers: {
    homeProducts: '#products-home',
    pageProducts: '#products-page',
  },

  db: {
    url: '//localhost:3131',
    products: 'products',
  },
  nav: {
    links: '.header-links a',
  },
  buttons:{
    showButton: '#show',
  } 
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
  class: {
    active: 'active',
    rotate: 'active-button',
  }
};

export const templates = {
  home: Handlebars.compile(document.querySelector(settings.templateOf.home).innerHTML),
  products: Handlebars.compile(document.querySelector(settings.templateOf.products).innerHTML),
  contact: Handlebars.compile(document.querySelector(settings.templateOf.contact).innerHTML),
};