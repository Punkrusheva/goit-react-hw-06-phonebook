import { createAction } from '@reduxjs/toolkit'
import types from "./phoneBook-types";
import shortid from 'shortid';

const addContact = createAction(types.ADD, ({ name, number }) => ({
        payload: {
                id: shortid.generate(),
                name,
                number,
        }
}
));

const deleteContact = createAction(types.DELETE)

const changeFilter = createAction(types.CHANGE_FILTER)

export default { addContact, deleteContact, changeFilter };
