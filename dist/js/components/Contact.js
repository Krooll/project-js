import { settings, templates } from '../settings.js';

class Contact{
  constructor(element){
    const thisContact = this;

    thisContact.render(element);
    thisContact.applyMessage();
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
    thisContact.dom.formContainer = thisContact.dom.wrapper.querySelector(settings.mailForm.formContainer);
  }

  applyMessage(){
    const thisContact = this;

    thisContact.dom.formContainer.addEventListener('submit', (e) => {
      e.preventDefault();
      thisContact.sendMessage();
    });
  }

  sendMessage(){
    const thisContact = this;

    const url = settings.db.url + '/' + settings.db.mails;

    const payload = {
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
      body: JSON.stringify(payload),
    };
    
    fetch(url, options)
      .then(function(response){
        console.log('Server response:', response);
        return response.json();
      }).then(function(parsedResponse){
        console.log('orderParsedResponse', parsedResponse);
        alert('Wiadomość została wysłana!');
      })
      .catch(function(error) {
        console.error('Error during fetch:', error);
      });
  }
}

export default Contact;