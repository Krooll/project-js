import { settings, templates } from '../settings.js';

class Contact{
  constructor(element){
    const thisContact = this;

    thisContact.render(element);
  }

  render(element){
    const thisContact = this;
    const generatedHTML = templates.contact();
    thisContact.dom = {};

    thisContact.dom.wrapper = element;
    thisContact.dom.wrapper.innerHTML = generatedHTML;
    thisContact.dom.nameInput = thisContact.dom.wrapper.querySelector(settings.mailForm.name);
    thisContact.dom.emailInput = thisContact.dom.wrapper.querySelector(settings.mailForm.mail);
    thisContact.dom.topicInput = thisContact.dom.wrapper.querySelector(settings.mailForm.topic);
    thisContact.dom.mailInput = thisContact.dom.wrapper.querySelector(settings.mailForm.message);
    thisContact.dom.submitButton = thisContact.dom.wrapper.querySelector(settings.buttons.submitButton);
  }

  applyMessage(){
    const thisContact = this;

    thisContact.dom.submitButton.addEventListener('click', (e) => {
      console.log('messagesend');
      e.preventDefault();
      thisContact.sendMessage();
    });
  }

  sendMessage(){
    const thisContact = this;

    const url = settings.db.url + '/' + settings.db.mails;

    const messageData = {
      name: thisContact.dom.nameInput.value,
      email: thisContact.dom.emailInput.value,
      topic: thisContact.dom.topicInput.value,
      message: thisContact.dom.mailInput.value,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    };
    
    fetch(url, options)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('orderParsedResponse', parsedResponse);
      });
    console.log('messageData', messageData);
  }
}

export default Contact;