import types from "./phoneBook-types";
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
        type: types.ADD,
        payLoad: {
            id: shortid.generate(),
            name,
            number,
    }
    });

const deleteContact = contactId => ({
        type: types.DELETE,
        payLoad: contactId,
});

const changeFilter = value => ({
        type: types.CHANGE_FILTER,
        payLoad: value,
});

export default { addContact, deleteContact, changeFilter };