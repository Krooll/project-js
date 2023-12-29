import { settings, templates } from '../settings.js';

class Products{
  constructor(data){
    const thisProduct = this;

    thisProduct.products = data;
    thisProduct.getElements();
    thisProduct.render();
  }

  getElements(){
    const thisProduct = this; 

    thisProduct.productContainer = document.querySelector(settings.containerOf.productList);
  }

  render(){
    const thisProduct = this;
    const generatedHTML = templates.products();
    thisProduct.productContainer.innerHTML = generatedHTML;
  }
}

export default Products;