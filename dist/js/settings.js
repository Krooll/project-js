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
    imagepPopular: '#img-popular',
  },

  db: {
    url: '//localhost:3131',
    products: 'products',
    mails: 'mails',
  },
  nav: {
    links: '.header-links a',
  },
  buttons:{
    showButton: '#show',
    submitButton: '#submit-button',
  },
  mailForm: {
    name: '#name',
    mail: '#e-mail',
    topic: '#topic',
    message: '#message',
    formContainer: '#form-container',
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