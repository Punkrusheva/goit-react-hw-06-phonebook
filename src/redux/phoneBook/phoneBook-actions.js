import actionTypes from "./phoneBook-types";
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
        type: actionTypes.ADD,
        payLoad: {
            id: shortid.generate(),
            name,
            number,
        }
    });

const deleteContact = (contacts, contactId) => {
    return {
        type: actionTypes.DELETE,
        payLoad: (contacts, contactId),
    };
};

const filterContact = (contacts) => {
    return {
        type: actionTypes.FILTER,
        payLoad: (contacts),
    };
};

export default {addContact, deleteContact, filterContact}