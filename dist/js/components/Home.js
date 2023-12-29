import { templates, settings, classNames } from '../settings.js';

class Home{
  constructor(element,data){
    const thisHome = this;

    thisHome.data = data;
    thisHome.getElements();
    thisHome.render(element);
    thisHome.showHiddenSection();
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
  }

  showHiddenSection(){
    const thisHome = this;

    thisHome.button.addEventListener('click', (e) =>{
      e.preventDefault();
      if(thisHome.dom.hiddenContainer.classList.contains(classNames.class.active)){
        thisHome.dom.hiddenContainer.classList.remove(classNames.class.active)
      }else{
        thisHome.dom.hiddenContainer.classList.add(classNames.class.active);
      }
    });
  }

  renderData(){
    const thisHome = this;

    
  }
}

export default Home;