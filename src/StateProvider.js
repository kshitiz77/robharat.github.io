// setup data layer
// We need this to track the cart

import React, {useContext, useReducer, createContext} from 'react'

// This is the data layer
export const StateContext = createContext();

// Build A Provider 
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () =>  useContext(StateContext);