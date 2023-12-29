import { templates } from '../settings.js';

class Product{
  constructor(data, element){
    const thisProduct = this;

    thisProduct.productList = data;
    thisProduct.getElements();
    thisProduct.render(element);
  }

  getElements(){
   
  }

  render(element){
    const thisBooking = this;
    const generatedHTML = templates.products(thisBooking.productList);
    thisBooking.dom = {};

    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    console.log(thisBooking.dom.wrapper.innerHTML);
  }
}

export default Product;