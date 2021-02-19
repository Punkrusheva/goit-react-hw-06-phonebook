import React, { Component } from 'react';
import { connect } from "react-redux";
import contactsActions from '../../redux/phoneBook/phoneBook-actions'
import shortid from 'shortid';
import styles from './ContactForm.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";
import AlertError from "../AlertError/AlertError";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    alert: false,
    alertText: '',
  };
 
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

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

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
   
  handleSubmit = e => {
    e.preventDefault();

    const alertFalse = () => {
      this.setState(state => ({ alert: false }))
    };
    const { name } = this.state;
    if (name === '') {
      this.setState(state => ({ alert: true, alertText: 'Contact details empty' }));
      setTimeout(alertFalse, 2500);
    } else {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      console.log(parsedContacts);
      if (parsedContacts.find(contact => contact.name === name)) {
        this.setState(state => ({ alert: true, alertText: 'Contact is already exist' }));
        setTimeout(alertFalse, 2500);
      }
      else {
      
        this.props.onSubmit(this.state);
      };
      this.reset();
    };
  };
    
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { alert, alertText } = this.state;
    
    return (
      <>
        <CSSTransition
            in={true} appear={true}
            classNames='logo'
            timeout={500}
          unmountOnExit>
          <h1 className={styles.logo}>Phonebook</h1>
            </CSSTransition>
          
       
      <form className={styles.box} onSubmit={this.handleSubmit} >
        <label htmlFor={this.nameInputId} className={styles.name}>
          Name
          <input
            type='text'
            name='name'
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter contact name' />
        </label>
        <label htmlFor={this.numberInputId} className={styles.number}>
          Number
          <input
            type='text'
            name='number'
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
            className={styles.input}
            placeholder='Enter contact number' />
          </label>
          
            <button type='submit' className={styles.button}>
              Add contact
            </button>
        </form>

        <CSSTransition in={alert}
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
        </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(contactsActions.addContact(value)),
});

export default connect(null, mapDispatchToProps)(ContactForm);