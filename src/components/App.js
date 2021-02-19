import React, { Component } from 'react';
import Layout from './Layout/Layout';
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
//import AlertError from "./AlertError/AlertError";
//import { CSSTransition } from "react-transition-group";
import "../stylesheets/animation.css";

export default class App extends Component {
  state = {
    alert: false,
  }
 
  /*componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
  };

  formSubmitHandler = ({ name, number }) => {
    const alertFalse = () => {
      this.setState(state => ({ alert: false }))};
    localStorage.getItem('contacts');
    this.contactId = shortid.generate();
    const contact = {
      id: this.contactId,
      name,
      number,
    };
    if (contact.name !== '') {
      if (this.state.contacts.find(contact => contact.name === name)) {
        this.setState(state => ({ alert: true, alertText: 'Contact is already exist'}));
        setTimeout(alertFalse, 2500);       
      }
      else {
        this.setState(prevState => {
          return {

            contacts: [contact, ...prevState.contacts],
          }
        });
      };
    } else {
      this.setState(state => ({ alert: true, alertText: 'Contact details empty'}));
        setTimeout(alertFalse, 2500); }
  };*/
   
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    //const { alert} = this.state;

    return (
      <Layout >
        <ContactForm
          onSubmit={this.formSubmitHandler}
        />
                
        {/*<CSSTransition in={alert}
          classNames="alert"
          timeout={250}
          unmountOnExit>
          {stage => {
            return (
              <CSSTransition
                in={stage === 'entered'}
                classNames="alert"
                timeout={250}  >
                <AlertError text={alertText} />
              </CSSTransition>)
          }}
        </CSSTransition>
*/}
          <ContactFilter/>

          <ContactList/>
      </Layout>
    );
  };
};