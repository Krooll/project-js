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

  productDataContainers: {
    product: '#products-list',
    productTitle: '#title',
    productImage: '#product-image',
    productDescription: '#info-description',
    productIntensity: '#info-intensity',
    productRoasting: '#info-roasting',
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