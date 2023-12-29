import { templates } from '../settings.js';

class Home{
  constructor(element){
    const thisProduct = this;

    thisProduct.getElements();
    thisProduct.render(element);
  }

  getElements(){
    
  }

  render(element){
    const thisProduct = this;
        const generatedHTML = templates.home();
        thisProduct.dom = {};

        thisProduct.dom.wrapper = element;
        thisProduct.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Home;