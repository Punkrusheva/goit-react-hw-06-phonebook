import React, { Component } from 'react';
import { connect } from "react-redux";
import contactsActions from '../../redux/phoneBook/phoneBook-actions'
import shortid from 'shortid';
import styles from './ContactForm.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  //  alert: false,
  };
 
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
   
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);
    this.reset();
  };
    
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
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
        </>
    );
  }
}

/*const mapStateToProps = ({ name, number }) => { 
    const alertFalse = () => {
    this.setState(state => ({ alert: false }))
  };
    //localStorage.getItem('contacts');
    if (name !== '') {
      if (contacts.items.find(item => item.name === name)) {
        this.setState(state => ({ alert: true, alertText: 'Contact is already exist'}));
        setTimeout(alertFalse, 2500);       
      }
      else {
        this.setState(prevState => {
          return {
              name,
              number,
          }
        });
      };
    } else {
      this.setState(state => ({ alert: true, alertText: 'Contact details empty'}));
        setTimeout(alertFalse, 2500); }
  };*/

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(contactsActions.addContact(value)),
});

export default connect(null, mapDispatchToProps)(ContactForm);