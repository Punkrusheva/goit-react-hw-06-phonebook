import React, { Component } from 'react';
import Layout from './Layout/Layout';
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import "../stylesheets/animation.css";

export default class App extends Component {
 /* state = {
    alert: false,
    alertText: '',
  }*/

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
  };*/
/*
  formSubmitHandler = ({ name, number }) => {
    console.log(name, number);
    const alertFalse = () => {
      this.setState(state => ({ alert: false }))
    };
    localStorage.getItem('contacts');

    if (name === '' || number === '') {
      this.setState(state => ({ alert: true, alertText: 'Contact details empty' }));
      setTimeout(alertFalse, 2500);
      console.log(this.state.alert);

    } else {
     // console.log(name, number);
    };
      /*
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
    };*/

  render() {
   // const { alert, alertText} = this.state;

    return (
      <Layout >
        
        <ContactForm/>

        <ContactFilter/>

        <ContactList />
        
      </Layout>
    );
  };
};