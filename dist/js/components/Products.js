import { settings, templates } from '../settings.js';

class Products{
  constructor(element,data){
    const thisProduct = this;

    thisProduct.products = data;

    thisProduct.render(element);
    thisProduct.renderData();
  }

  render(element){
    const thisProduct = this;

    const generatedHTML = templates.products();
    thisProduct.dom = {};

    thisProduct.dom.wrapper = element;
    thisProduct.dom.wrapper.innerHTML = generatedHTML;
    thisProduct.dom.productsListContainer = thisProduct.dom.wrapper.querySelector(settings.productDataContainers.pageProducts);
  }
  
  renderData(){
    const thisProduct = this;

    const productsHTML = thisProduct.products.map(product =>`
      <div id="product">
        <div>
          <img id="product-image" class="image" src="${product.image}" alt="Product Image">
        </div>
        <div class="product-description">
          <div class="products-title">
            <h4><span id="title">${product.title}</span></h4>
          </div>
          <div class="main-description">
            <div class="description-line"></div>
            <div class="description">
              <p><span id="info-description">${product.description}</span></p>
            </div>
          </div>
          <div class="info">
            <p class="title-description">Intensity:<span id="intensity-info">${product.intensity}</span></p>
            <p class="title-description">Roasting:<span id="roasting-info">${product.roasting}</span></p>
          </div>
        </div>
      </div>
    `).join('');

    thisProduct.dom.productsListContainer.innerHTML = productsHTML;
  }
}

export default Products;