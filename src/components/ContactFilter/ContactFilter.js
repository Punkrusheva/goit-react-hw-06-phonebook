import React from 'react';
import { connect } from "react-redux";
import contactsActions from "../../redux/phoneBook/phoneBook-actions";
import styles from './ContactFilter.module.css';
//import { CSSTransition } from "react-transition-group";

const ContactFilter = ({ value, onChange }) => (
          <label
            className={styles.label}>
          <input
                type='text'
                value={value}
                onChange={onChange}
                name='filter'
                className={styles.input}
                placeholder='Enter contact name'
            />
        </label>
);
const mapStateToProps = (state) => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);

/* <CSSTransition
          in={state.contacts.items.length > 0}
          classNames='filter'
          timeout={2500}
   unmountOnExit> </CSSTransition> */