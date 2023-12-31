import { templates, settings, classNames } from '../settings.js';

class Home{
  constructor(element,data){
    const thisHome = this;

    thisHome.data = data;
    thisHome.getElements();
    thisHome.render(element);
    thisHome.showHiddenSection();
    thisHome.renderData();
  }

  getElements(){
    const thisHome = this;

    thisHome.button = document.querySelector(settings.buttons.showButton);
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.home();
    thisHome.dom = {};

    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.hiddenContainer = thisHome.dom.wrapper.querySelector(settings.containerOf.hiddenProducts);
    thisHome.dom.productsListContainer = thisHome.dom.wrapper.querySelector(settings.productDataContainers.homeProducts);
  }

  showHiddenSection(){
    const thisHome = this;

    thisHome.button.addEventListener('click', (e) =>{
      e.preventDefault();
      if(thisHome.dom.hiddenContainer.classList.contains(classNames.class.active)){
        thisHome.dom.hiddenContainer.classList.remove(classNames.class.active);
        thisHome.button.classList.remove(classNames.class.rotate);
      }else{
        thisHome.dom.hiddenContainer.classList.add(classNames.class.active);
        thisHome.button.classList.add(classNames.class.rotate);
      }
    });
  }

  renderData(){
    const thisHome = this;

    const productsHTML = thisHome.data.map(product =>`
      
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
          <div class="description-info">
            <p class="description-title">Intensity:<span id="info-intensity">${product.intensity}</span></p>
            <p class="description-title">Roasting:<span id="info-roasting">${product.roasting}</span></p> 
        </div>
      </div>
    `).join('');

    thisHome.dom.productsListContainer.innerHTML = productsHTML;
  }
}

export default Home;