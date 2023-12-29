export const settings = {
  templateOf: {
    home: '#template-home',
    products: '#template-products',
    contact: '#template-contact',
  },
  containerOf: {
    home: '#home-list',
    productList: '#product-list',
    contact: '#contact-list',
    pages: '#pages',
    hiddenProducts: '#hidden-products',
  },

  products: {
    description: '.product-description',
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
  }
};

export const templates = {
  home: Handlebars.compile(document.querySelector(settings.templateOf.home).innerHTML),
  products: Handlebars.compile(document.querySelector(settings.templateOf.products).innerHTML),
  contact: Handlebars.compile(document.querySelector(settings.templateOf.contact).innerHTML),
};