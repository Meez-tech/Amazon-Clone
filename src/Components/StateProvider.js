//Setup data layer
//We need this to track the basket on every component

import React, { createContext, useContext, useReducer } from "react";

//This is the DATA Layout
export const StateContext = createContext();

//Build a provider, wrap entire up in provider
//To give access to all parts of SPA

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//THIS IS HOW TO USE IT INSIDE OF A COMPONENT
export const useStateValue = () => useContext(StateContext);
