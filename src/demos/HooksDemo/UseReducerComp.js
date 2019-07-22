/**
 * @description useReducer用法
 */

import React, {useReducer} from 'react'

const initialState = '';
const reducer = (state, action) => action;

const UseReducerComp = () => {
    const [firstName, changeFirstName] = useReducer(reducer, initialState);
    const [lastName, changeLastName] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                First Name:
                <input value={firstName} onChange={(e) => changeFirstName(e.target.value)} />
            </div>
            <div>
                Last Name:
                <input value={lastName} onChange={(e) => changeLastName(e.target.value)} />
            </div>
        </>
    );
};

export default UseReducerComp







