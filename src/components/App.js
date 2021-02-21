import React, { Component } from 'react';
import Layout from './Layout/Layout';
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import "../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";

export default class App extends Component {

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

  render() {

    return (
      <Layout >

        <ContactForm/>

        <ContactFilter/>
        <ToastContainer autoClose={2500}/>
        <ContactList />
        
      </Layout>
    );
  };
};