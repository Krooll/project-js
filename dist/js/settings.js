export const settings = {
  templateOf: {
    products: '.hidden-products',
    contact: '.contact-us',
  },
  containerOf: {
    productList: '.product-list',
    contact: '.contact',
    pages: '.pages',
  },
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
  navLinks: {
    links: '.header-links a'
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(settings.templateOf.products).innerHTML),
  contact: Handlebars.compile(document.querySelector(settings.templateOf.contact).innerHTML),
};